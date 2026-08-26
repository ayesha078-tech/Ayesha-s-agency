import Link from "next/link";

const CATEGORIES = [
  { slug: "website", label: "Websites", desc: "Prebuilt and custom business websites", emoji: "🌐" },
  { slug: "app", label: "Apps", desc: "Web and mobile apps built for you", emoji: "📱" },
  { slug: "game", label: "Games", desc: "Simple browser games and quizzes", emoji: "🎮" },
];

export default function ProductHubPage() {
  return (
    <div style={{ background: "#F2E9D8", minHeight: "100vh" }}>
      <div
        className="w-full h-2.5"
        style={{
          background: "repeating-linear-gradient(90deg, #C6432E 0px, #C6432E 28px, #F2E9D8 28px, #F2E9D8 56px)",
        }}
      />

      <main className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div
          className="inline-block text-xs tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4"
          style={{ color: "#9E3222", border: "1.5px solid #C6432E55" }}
        >
          Catalog Hub
        </div>

        <h1 className="text-4xl md:text-5xl font-serif tracking-tight mb-4" style={{ color: "#231C15" }}>
          What would you like to explore?
        </h1>
        
        <p className="text-base mb-14 max-w-lg mx-auto" style={{ color: "#5B5042" }}>
          Choose a category below to browse specific items.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/product/${cat.slug}`}
              className="p-8 rounded-2xl block transition-transform hover:-translate-y-1.5 cursor-pointer text-center"
              style={{
                background: "#E9DCC1",
                border: "2px solid #231C15",
                boxShadow: "4px 4px 0 #231C15",
              }}
            >
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h2 className="text-xl font-serif font-bold mb-2" style={{ color: "#231C15" }}>
                {cat.label}
              </h2>
              <p className="text-sm mb-6 leading-snug" style={{ color: "#5B5042" }}>
                {cat.desc}
              </p>
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg"
                style={{ background: "#C6432E", color: "#F2E9D8" }}
              >
                View {cat.label} →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}