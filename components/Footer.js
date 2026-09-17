export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#231C15" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3
              className="font-serif text-xl tracking-tight"
              style={{ color: "#F2E9D8" }}
            >
              Ayesha's<span style={{ color: "#D9A441", fontStyle: "italic" }}>Agency</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#F2E9D8AA" }}>
              Prebuilt websites for small businesses, ready in days — not
              weeks.
            </p>
          </div>

          <div>
            <h4
              className="text-xs tracking-[0.15em] uppercase mb-4"
              style={{ color: "#D9A441" }}
            >
              Pages
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "Product", href: "/product" },
                { label: "FAQ", href: "/faq" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} style={{ color: "#F2E9D8CC" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-xs tracking-[0.15em] uppercase mb-4"
              style={{ color: "#D9A441" }}
            >
              Get in touch
            </h4>
            <ul className="space-y-2.5 text-sm" style={{ color: "#F2E9D8CC" }}>
              <li>uayking078@gmail.com</li>
             
              <li>Work internationally </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs"
          style={{ borderTop: "1px solid #F2E9D822", color: "#F2E9D888" }}
        >
          <span>© {year} Code by Ayesha. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy" style={{ color: "#F2E9D888" }}>
              Privacy Policy
            </a>
            <a href="/terms" style={{ color: "#F2E9D888" }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}