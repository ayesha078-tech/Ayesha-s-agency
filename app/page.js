export default function Home() {
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

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24 text-center">
        <div
          className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-7"
          style={{ color: "#9E3222", border: "1.5px solid #C6432E55" }}
        >
          Est. for small businesses
        </div>

        <h1
          className="text-[2.6rem] md:text-6xl leading-[1.05] tracking-tight font-serif"
          style={{ color: "#231C15" }}
        >
          Buy, launch &amp; deploy
          <br />
          your website
          <span style={{ color: "#C6432E", fontStyle: "italic" }}>
            {" "}
            from anywhere.
          </span>
        </h1>

        <p
          className="mt-6 text-lg leading-relaxed max-w-xl mx-auto"
          style={{ color: "#5B5042" }}
        >
          A prebuilt website, ready to open its doors in days — so you can
          focus on your business instead of waiting weeks for one.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <button
            className="font-bold px-8 py-4 rounded-md text-sm tracking-wide uppercase"
            style={{
              background: "#C6432E",
              color: "#F2E9D8",
              boxShadow: "4px 4px 0 #9E3222",
            }}
          >
            Open for business
          </button>
          <a
            href="/works"
            className="group inline-flex items-center gap-2 font-medium underline underline-offset-4 px-2 py-1 rounded-md transition-colors duration-200"
            style={{ color: "#231C15" }}
          >
            <span className="transition-colors duration-200 group-hover:text-white">
              See how it works
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* shop-window mockup */}
        <div className="relative mt-20 mx-auto max-w-2xl">
          <svg
            className="absolute -top-9 left-1/2 -translate-x-1/2"
            width="90"
            height="36"
            aria-hidden="true"
          >
            <line x1="10" y1="0" x2="24" y2="34" stroke="#231C15" strokeWidth="1.5" />
            <line x1="80" y1="0" x2="66" y2="34" stroke="#231C15" strokeWidth="1.5" />
          </svg>

          <div
            className="relative inline-block -mt-1  z-10 px-7 py-2.5 rounded-sm"
            style={{ background: "#2F4A3C", boxShadow: "0 6px 14px -6px rgba(0,0,0,0.35)" }}
          >
            <span className="text-sm tracking-[0.15em] uppercase" style={{ color: "#D9A441" }}>
              Now Open
            </span>
          </div>

          <div
            className="rounded-xl overflow-hidden text-left"
            style={{
              background: "#E9DCC1",
              border: "2px solid #231C15",
              boxShadow: "8px 8px 0 #C6432E30",
            }}
          >
            <div
              className="flex items-center gap-2 px-4 py-3"
              style={{ borderBottom: "2px solid #231C15" }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C6432E" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#D9A441" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#2F4A3C" }} />
              <span className="ml-3 text-xs" style={{ color: "#5B5042" }}>
                yourbusiness.com
              </span>
            </div>

            <div className="p-7 space-y-4">
              <div className="h-3 w-2/5 rounded-sm" style={{ background: "#5B504233" }} />
              <div className="h-3 w-full rounded-sm" style={{ background: "#5B504233" }} />
              <div className="h-3 w-4/5 rounded-sm" style={{ background: "#5B504233" }} />
              <div className="flex gap-3 pt-2">
                <div className="h-16 w-1/3 rounded-md" style={{ background: "#C6432E25" }} />
                <div className="h-16 w-1/3 rounded-md" style={{ background: "#2F4A3C20" }} />
                <div className="h-16 w-1/3 rounded-md" style={{ background: "#D9A44125" }} />
              </div>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm" style={{ color: "#5B5042" }}>
          No design skills needed. No waiting weeks to go online.
        </p>
      </main>
    </div>
  );
}