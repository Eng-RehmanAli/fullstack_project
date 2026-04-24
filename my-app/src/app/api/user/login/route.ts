import { connect } from "mongoose";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import user from "@/models/model.user.js";
import jwt from "jsonwebtoken";

// Establish connection to MongoDB using environment variable
connect(process.env.url_id!);

export async function POST(request: NextRequest) {
  try {
    // Parse incoming request body (JSON sent from frontend)
    const databody = await request.json();
    const { email, password } = databody;

    // Validate email input
    if (!email) {
      return NextResponse.json({ message: "Enter email" }, { status: 400 });
    }

    // Check if user exists in database by email
    const usermail = await user.findOne({ email });

    // If no user found, stop login process
    if (!usermail) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    // Validate password input
    if (!password) {
      return NextResponse.json({ message: "Enter password" }, { status: 400 });
    }

    // Compare entered password with hashed password stored in DB
    const isMatch = await bcrypt.compare(password, usermail.password);

    // If password does not match, reject login
    if (!isMatch) {
      return NextResponse.json({ message: "Wrong password" }, { status: 400 });
    }

    // Create payload for JWT (what data you want to store inside token)
    const tokenpayload = {
      id: usermail._id,
      username: usermail.username,
      email: usermail.email,
    };

    // Generate JWT token with secret key and expiration time
    const jwttoken = jwt.sign(
      tokenpayload,
      process.env.Secret_token!,
      { expiresIn: "15m" }
    );

    // Create response object
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // Store JWT in HTTP-only cookie (secure, not accessible via JS)
    response.cookies.set("jwttoken", jwttoken, { httpOnly: true });

    // Send response back to client
    return response;

  } catch (error: any) {
    // Catch any unexpected server errors and return 500
    return NextResponse.json(
      { message: error.message || "Login failed" },
      { status: 500 }
    );
  }
}