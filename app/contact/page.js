"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "923106010110"; // your WhatsApp number, country code, no + or spaces
  const email = "uayking078@gmail.com"; // your email

  const fullMessage = `Hi, I'm ${name || "a visitor"} from your website.
Phone: ${phone || "not provided"}
${message || "I'd like to get in touch about a website."}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    fullMessage
  )}`;
  const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
    "Website inquiry"
  )}&body=${encodeURIComponent(fullMessage)}`;

  return (
    <div style={{ background: "#F2E9D8", minHeight: "100vh" }}>
      {/* striped awning bar */}
      <div
        className="w-full h-2.5"
        style={{
          background:
            "repeating-linear-gradient(90deg, #C6432E 0px, #C6432E 28px, #F2E9D8 28px, #F2E9D8 56px)",
        }}
      />

      <main className="max-w-2xl mx-auto px-6 pt-16 pb-24 text-center">
        <div
          className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-7"
          style={{ color: "#9E3222", border: "1.5px solid #C6432E55" }}
        >
          Get in touch
        </div>

        <h1
          className="text-[2.4rem] md:text-5xl leading-[1.1] tracking-tight font-serif"
          style={{ color: "#231C15" }}
        >
          Let's build your
          <br />
          <span style={{ color: "#C6432E", fontStyle: "italic" }}>
            website
          </span>{" "}
          together.
        </h1>

        <p
          className="mt-6 text-lg leading-relaxed max-w-md mx-auto"
          style={{ color: "#5B5042" }}
        >
          Send a quick message and I'll get back to you fast — I'm available
          almost all day.
        </p>

        {/* contact form */}
        <div
          className="mt-12 rounded-xl overflow-hidden text-left mx-auto max-w-md"
          style={{
            background: "#E9DCC1",
            border: "2px solid #231C15",
            boxShadow: "8px 8px 0 #C6432E30",
          }}
        >
          <div
            className="px-6 py-4"
            style={{ borderBottom: "2px solid #231C15" }}
          >
            <span
              className="text-sm tracking-[0.15em] uppercase"
              style={{ color: "#231C15" }}
            >
              Contact form
            </span>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label
                className="text-sm font-medium"
                style={{ color: "#231C15" }}
              >
                Your name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="mt-1 w-full px-4 py-2.5 rounded-md border bg-transparent"
                style={{ borderColor: "#231C1530", color: "#231C15" }}
              />
            </div>

            <div>
              <label
                className="text-sm font-medium"
                style={{ color: "#231C15" }}
              >
                Phone number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number"
                className="mt-1 w-full px-4 py-2.5 rounded-md border bg-transparent"
                style={{ borderColor: "#231C1530", color: "#231C15" }}
              />
            </div>

            <div>
              <label
                className="text-sm font-medium"
                style={{ color: "#231C15" }}
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Tell me a bit about what you need..."
                className="mt-1 w-full px-4 py-2.5 rounded-md border bg-transparent"
                style={{ borderColor: "#231C1530", color: "#231C15" }}
              />
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-bold px-8 py-4 rounded-md text-sm tracking-wide uppercase"
              style={{
                background: "#2F4A3C",
                color: "#F2E9D8",
              }}
            >
              Send on WhatsApp
            </a>

            <a
              href={emailUrl}
              className="block text-center text-sm underline underline-offset-4"
              style={{ color: "#5B5042" }}
            >
              Or email me instead
            </a>
          </div>
        </div>

        {/* direct details */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm"
          style={{ color: "#5B5042" }}
        >
          <span>📧 {email}</span>
          <span>📞 +{whatsappNumber}</span>
        </div>
      </main>
    </div>
  );
}
