export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse the products",
      desc: "See the prebuilt website options and pricing on the Product page. Each one shows what's included.",
    },
    {
      number: "02",
      title: "Pick how you want it",
      desc: "Choose Buy Now, Customize, or a full custom build — depending on how much you want changed from the template.",
    },
    {
      number: "03",
      title: "Tell me the details",
      desc: "For deployment, I'll ask for your domain name (or help you pick one), whether you need hosting, and a bit about your business — name, content, contact info. For customize, just describe what you want different.",
    },
    {
      number: "04",
      title: "Confirm on WhatsApp",
      desc: "Everything you filled in gets sent to me directly on WhatsApp. I'll confirm the details, answer any questions, and we lock in the final scope together.",
    },
    {
      number: "05",
      title: "Pay to get started",
      desc: "I'll send you a secure Payoneer or Wise payment link once everything is confirmed — you pay by card on their page, no account needed on your end. Local clients in Pakistan can also pay via bank transfer, Easypaisa, or JazzCash.",
    },
    {
      number: "06",
      title: "Your site goes live",
      desc: "I build and deploy it, send you the live link, and you're open for business online.",
    },
  ];

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

      <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center">
          <div
            className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-7"
            style={{ color: "#9E3222", border: "1.5px solid #C6432E55" }}
          >
            How it works
          </div>

          <h1
            className="text-[2.4rem] md:text-5xl leading-[1.1] tracking-tight font-serif"
            style={{ color: "#231C15" }}
          >
            From browsing to
            <br />
            <span style={{ color: "#C6432E", fontStyle: "italic" }}>
              live online
            </span>{" "}
            — no confusion.
          </h1>

          <p
            className="mt-6 text-lg leading-relaxed max-w-lg mx-auto"
            style={{ color: "#5B5042" }}
          >
            Here's exactly what happens after you click "Buy Now" — no
            surprises, no hidden steps.
          </p>
        </div>

        {/* steps */}
        <div className="mt-16 space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex gap-5 rounded-xl p-6"
              style={{
                background: "#E9DCC1",
                border: "2px solid #231C15",
              }}
            >
              <div
                className="flex-shrink-0 font-serif text-2xl"
                style={{ color: "#C6432E" }}
              >
                {step.number}
              </div>
              <div>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "#231C15" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-1.5 text-base leading-relaxed"
                  style={{ color: "#5B5042" }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* payment note callout */}
        <div
          className="mt-14 rounded-xl p-6 text-center"
          style={{
            background: "#2F4A3C",
          }}
        >
          <p
            className="text-sm tracking-wide"
            style={{ color: "#D9A441" }}
          >
            💬 Payment is never collected on the website. Everything is
            confirmed over WhatsApp first — international clients pay
            securely via a Payoneer or Wise link, local clients can use
            bank transfer, Easypaisa, or JazzCash.
          </p>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/product"
            className="inline-block font-bold px-8 py-4 rounded-md text-sm tracking-wide uppercase"
            style={{
              background: "#C6432E",
              color: "#F2E9D8",
              boxShadow: "4px 4px 0 #9E3222",
            }}
          >
            See the products
          </a>
        </div>
      </main>
    </div>
  );
}
