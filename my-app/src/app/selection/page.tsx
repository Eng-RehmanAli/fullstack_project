"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormErrors = {
  domain?: string;
  domainDetails?: string;
  businessGoal?: string;
  expectations?: string;
  address?: string;
  email?: string;
  contactNumber?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function BusinessIntakeForm() {
  const [domain, setDomain] = useState("");
  const [domainDetails, setDomainDetails] = useState("");
  const [businessGoal, setBusinessGoal] = useState("");
  const [expectations, setExpectations] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});

  const domains = ["Web App", "LLM", "Marketing", "AI"];

  const validate = () => {
    const e: FormErrors = {};

    if (!domain) e.domain = "Select a domain";
    if (!domainDetails) e.domainDetails = "Add details";
    if (!businessGoal) e.businessGoal = "Required";
    if (!expectations) e.expectations = "Required";
    if (!address) e.address = "Required";

    if (!email || !/\S+@\S+\.\S+/.test(email)) e.email = "Valid email required";
    if (!contactNumber) e.contactNumber = "Required";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Submitted successfully 🚀");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 py-12 text-[#e2e8f0]">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-[#1e293b] rounded-3xl shadow-2xl overflow-hidden border border-[#334155]"
      >

        {/* HEADER */}
        <div className="p-8 bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-black border-b border-[#334155]">

          <h1 className="text-3xl font-bold text-[#38bdf8]">
            Business Intake Form
          </h1>

          <p className="text-[#94a3b8] mt-1">
            Tell us about your idea — we’ll build it with precision.
          </p>

        </div>

        {/* FORM */}
        <form onSubmit={submit} className="p-8 space-y-6">

          {/* DOMAIN */}
          <motion.div variants={container} initial="hidden" animate="show">

            <p className="font-semibold mb-3 text-[#e2e8f0]">
              Select Domain *
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

              {domains.map((d) => (
                <motion.button
                  key={d}
                  variants={fadeUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={() => setDomain(d)}
                  className={`p-3 rounded-xl border transition-all ${
                    domain === d
                      ? "bg-[#38bdf8] text-black border-[#38bdf8]"
                      : "bg-[#0f172a] text-[#e2e8f0] border-[#334155] hover:border-[#38bdf8]"
                  }`}
                >
                  {d}
                </motion.button>
              ))}

            </div>

            {errors.domain && (
              <p className="text-red-400 text-sm mt-2">{errors.domain}</p>
            )}

          </motion.div>

          {/* DOMAIN DETAILS */}
          {domain && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >

              <label className="font-semibold block mb-2">
                Describe your {domain}
              </label>

              <textarea
                className="w-full p-4 rounded-xl bg-[#0f172a] border border-[#334155] focus:border-[#38bdf8] outline-none text-white"
                rows={3}
                value={domainDetails}
                onChange={(e) => setDomainDetails(e.target.value)}
              />

              {errors.domainDetails && (
                <p className="text-red-400 text-sm">
                  {errors.domainDetails}
                </p>
              )}

            </motion.div>
          )}

          {/* BUSINESS GOAL */}
          <div>
            <label className="font-semibold block mb-2">
              Business Goal *
            </label>

            <textarea
              className="w-full p-4 rounded-xl bg-[#0f172a] border border-[#334155] focus:border-[#38bdf8] outline-none text-white"
              rows={2}
              value={businessGoal}
              onChange={(e) => setBusinessGoal(e.target.value)}
            />
          </div>

          {/* EXPECTATIONS */}
          <div>
            <label className="font-semibold block mb-2">
              Expectations *
            </label>

            <textarea
              className="w-full p-4 rounded-xl bg-[#0f172a] border border-[#334155] focus:border-[#38bdf8] outline-none text-white"
              rows={2}
              value={expectations}
              onChange={(e) => setExpectations(e.target.value)}
            />
          </div>

          {/* CONTACT GRID */}
          <div className="grid md:grid-cols-2 gap-4">

            <input
              placeholder="Address"
              className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#38bdf8] outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <input
              placeholder="Email"
              className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#38bdf8] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Phone"
              className="p-4 rounded-xl bg-[#0f172a] border border-[#334155] text-white focus:border-[#38bdf8] outline-none md:col-span-2"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />

          </div>

          {/* SUBMIT */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-4 rounded-xl font-bold bg-[#38bdf8] text-black shadow-lg hover:shadow-[#38bdf8]/30 transition"
          >
            Submit Request
          </motion.button>

        </form>

      </motion.div>
    </div>
  );
}