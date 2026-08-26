export default function Privacy() {
  return (
    <div style={{ background: "#F2E9D8", minHeight: "100vh" }}>
      {/* Decorative top bar */}
      <div
        className="w-full h-2.5"
        style={{
          background:
            "repeating-linear-gradient(90deg, #C6432E 0px, #C6432E 28px, #F2E9D8 28px, #F2E9D8 56px)",
        }}
      />

      <main className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <div className="text-center mb-10">
          <div
            className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-3"
            style={{ color: "#9E3222", border: "1.5px solid #C6432E55" }}
          >
            Trust & Security
          </div>
          <h1
            className="text-3xl md:text-4xl font-serif tracking-tight"
            style={{ color: "#231C15" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm mt-2" style={{ color: "#5B5042" }}>
            Last updated: August 18, 2026
          </p>
        </div>

        <div
          className="p-8 rounded-xl space-y-6 text-base leading-relaxed"
          style={{
            background: "#E9DCC1",
            border: "2px solid #231C15",
            color: "#231C15",
          }}
        >
          <section>
            <h2 className="text-xl font-serif font-semibold mb-2" style={{ color: "#231C15" }}>
              1. Information We Collect
            </h2>
            <p style={{ color: "#5B5042" }}>
              When you contact us via our forms or WhatsApp, we collect basic details such as your name, email address, phone number, and project requirements to help us respond to your inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-2" style={{ color: "#231C15" }}>
              2. How We Use Your Information
            </h2>
            <p style={{ color: "#5B5042" }}>
              We use your information solely to communicate with you about your projects, provide customer service updates, and deliver the web development services you request. We never sell or share your data with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-2" style={{ color: "#231C15" }}>
              3. Contact Us
            </h2>
            <p style={{ color: "#5B5042" }}>
              If you have any questions regarding this privacy policy, feel free to reach out directly through our contact page or WhatsApp.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}