export default function Terms() {
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
            Agreement
          </div>
          <h1
            className="text-3xl md:text-4xl font-serif tracking-tight"
            style={{ color: "#231C15" }}
          >
            Terms of Service
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
              1. Scope of Services
            </h2>
            <p style={{ color: "#5B5042" }}>
              By hiring us or purchasing web solutions, you agree to these working terms. All projects are built according to the agreed-upon proposal specifications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-2" style={{ color: "#231C15" }}>
              2. Payments & Deposits
            </h2>
            <p style={{ color: "#5B5042" }}>
              A standard 50% upfront deposit is required before coding or major customization begins. The remaining 50% balance must be settled before final source code ownership or live deployment credentials are handed over.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-semibold mb-2" style={{ color: "#231C15" }}>
              3. Revisions
            </h2>
            <p style={{ color: "#5B5042" }}>
              Standard project packages include up to 2 rounds of minor revisions during development. Major structural changes outside the initial scope may incur additional costs.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}