"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How fast can I get my website?",
    a: "Prebuilt websites can usually go live within a few days once you've confirmed your domain and content. Fully custom builds take longer depending on what you need — I'll always give you a clear timeline before we start.",
  },
  {
    q: "Do I need my own domain and hosting?",
    a: "Not necessarily. If you already have a domain, I can connect it directly. If not, I can help you pick and set one up as part of the process — I'll ask about this when we talk on WhatsApp.",
  },
  {
    q: "Can I edit the website myself after it's live?",
    a: "Yes, depending on the plan. Some sites come with a simple way to update text, prices, or images yourself. If you'd rather not touch anything, I can also handle ongoing edits for you.",
  },
  {
    q: "How does payment work?",
    a: "Nothing is charged on the website itself. Once we've confirmed the details on WhatsApp, international clients get a secure Payoneer or Wise payment link, and local clients in Pakistan can pay via bank transfer, Easypaisa, or JazzCash.",
  },
  {
    q: "What if I want something customized, not just a template?",
    a: "That's what the Customize option is for. Tell me what you'd like different — colors, layout, extra pages, features — and I'll scope it out with you directly.",
  },
  {
    q: "Do you offer support after the site is live?",
    a: "Yes. If something breaks, needs updating, or you want to add something new later, just message me on WhatsApp.",
  },
  {
    q: "Is the website really mine once it's built?",
    a: "Yes. Once it's paid for and delivered, the website is yours — your domain, your content, your code. If you ever wanted to move to another developer, you could take it with you.",
  },
  {
    q: "Do I need to pay the full amount upfront?",
    a: "Usually a portion upfront to get started, with the rest due once the site is ready to go live. I'll confirm the exact split with you on WhatsApp before we begin.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ background: "#E9DCC1", border: "2px solid #231C15" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left px-6 py-4"
      >
        <span className="font-semibold text-base" style={{ color: "#231C15" }}>
          {q}
        </span>
        <span
          className="ml-4 flex-shrink-0 text-xl transition-transform duration-200"
          style={{
            color: "#C6432E",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          className="px-6 pb-5 text-base leading-relaxed"
          style={{ color: "#5B5042", borderTop: "1px solid #231C1520" }}
        >
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

function AskQuestionForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phoneNumber = "923106010110";

  const waMessage = `Hi, I'm ${name || "a visitor"} from your website.
${message || "I'd like to ask something / book a meeting."}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div
      className="max-w-md mx-auto text-left space-y-4 mt-6 rounded-xl overflow-hidden"
      style={{
        background: "#E9DCC1",
        border: "2px solid #231C15",
        boxShadow: "8px 8px 0 #C6432E30",
      }}
    >
      <div className="px-6 pt-6">
        <h3 className="text-xl font-semibold" style={{ color: "#231C15" }}>
          Still have a question?
        </h3>
        <p className="mt-1 text-sm" style={{ color: "#5B5042" }}>
          Ask me anything, or request a quick meeting.
        </p>
      </div>

      <div className="px-6 space-y-4">
        <div>
          <label className="text-sm font-medium" style={{ color: "#231C15" }}>
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
          <label className="text-sm font-medium" style={{ color: "#231C15" }}>
            Your question
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            placeholder="I'd like to know..."
            className="mt-1 w-full px-4 py-2.5 rounded-md border bg-transparent"
            style={{ borderColor: "#231C1530", color: "#231C15" }}
          />
        </div>
      </div>

      <div className="px-6 pb-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center font-bold px-8 py-4 rounded-md text-sm tracking-wide uppercase"
          style={{ background: "#2F4A3C", color: "#F2E9D8" }}
        >
          Send on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function Faq() {
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
          Questions & answers
        </div>

        <h1
          className="text-[2.4rem] md:text-5xl leading-[1.1] tracking-tight font-serif"
          style={{ color: "#231C15" }}
        >
          Frequently asked
          <br />
          <span style={{ color: "#C6432E", fontStyle: "italic" }}>
            questions
          </span>
        </h1>

        <p
          className="mt-6 text-lg leading-relaxed max-w-md mx-auto"
          style={{ color: "#5B5042" }}
        >
          Everything you might be wondering before getting started.
        </p>

        <div className="mt-12 space-y-4 text-left">
          {FAQS.map((item) => (
            <FaqItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>

        <AskQuestionForm />
      </main>
    </div>
  );
}