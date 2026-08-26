export default function About() {
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
        <div
          className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-7"
          style={{ color: "#9E3222", border: "1.5px solid #C6432E55" }}
        >
          About the agency
        </div>

        <h1
          className="text-[2.4rem] md:text-5xl leading-[1.1] tracking-tight font-serif"
          style={{ color: "#231C15" }}
        >
          Hi, I'm Ayesha —
          <br />
          <span style={{ color: "#C6432E", fontStyle: "italic" }}>
            Ayesha's Agency
          </span>{" "}
          is my agency.
        </h1>

        <div className="mt-8 space-y-5 text-lg leading-relaxed" style={{ color: "#5B5042" }}>
          <p>
            I'm a self-taught web developer based in Bahawalpur, Pakistan. I
            build fast, modern websites for small businesses that don't have
            one yet — tutoring centers, local shops, and service businesses
            that need a place online but don't have weeks to wait or a big
            budget to spend.
          </p>
          <p>
            I work with the MERN stack (MongoDB, Express, React, Node.js),
            Next.js, Tailwind CSS, and Shopify — the same tools bigger
            agencies use, just without the bigger price tag or the long
            wait.
          </p>
          <p>
            Instead of building every site from scratch, I use prebuilt
            templates that I customize to fit your business — your name,
            your colors, your content — so you get something that looks
            made for you, live in days instead of weeks.
          </p>
        </div>

        {/* what I offer, shop-sign style list */}
        <div
          className="mt-14 rounded-xl overflow-hidden"
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
              What I offer
            </span>
          </div>
          <ul className="p-6 space-y-4 text-left">
            {[
              "Prebuilt, ready-to-launch websites",
              "Full custom builds for businesses with specific needs",
              "Shopify stores, from setup to launch",
              "Ongoing edits and support after launch",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="mt-2 w-2 h-2 rounded-full "
                  style={{ background: "#C6432E" }}
                />
                <span className="text-base" style={{ color: "#231C15" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* why small businesses, why me */}
        <div className="mt-14">
          <h2
            className="text-2xl font-serif tracking-tight mb-4"
            style={{ color: "#231C15" }}
          >
            Why I do this
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: "#5B5042" }}>
            A lot of small businesses I talk to have been putting off getting
            a website for months — either it felt too expensive, too slow, or
            too complicated. I wanted to fix that. No long contracts, no
            confusing process — just a real website, built fast, by someone
            who actually replies.
          </p>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/contact"
            className="inline-block font-bold px-8 py-4 rounded-md text-sm tracking-wide uppercase"
            style={{
              background: "#C6432E",
              color: "#F2E9D8",
              boxShadow: "4px 4px 0 #9E3222",
            }}
          >
            Let's talk
          </a>
        </div>
      </main>
    </div>
  );
}