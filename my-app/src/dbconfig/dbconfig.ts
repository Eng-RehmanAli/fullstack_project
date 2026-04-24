import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

async function dbconfig() {
    // ✅ If already connected, reuse the connection
    if (connection.isConnected) {
        console.log("Using existing database connection");
        return;
    }
   // when the ssha and tsl  come in the error then use the tls:true and allowedinvalid:true
    try {
       const db=await mongoose.connect(process.env.url_id as string, {
             tls: true,
             tlsAllowInvalidCertificates: false,
                });
        
        connection.isConnected = db.connections[0].readyState;

        mongoose.connection.on('connected', () => {
            console.log(`Database connected successfully`);
        });

        mongoose.connection.on('error', (error: Error) => {
            console.log(`MongoDB connection error: ${error.message}`);
            process.exit(1);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

    } catch (error) {
        console.log("Something went wrong connecting to MongoDB");
        console.log("Error:", error);
        process.exit(1);
    }
}
export default dbconfig;