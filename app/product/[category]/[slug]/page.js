import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;

  let product = null;
  try {
    await dbConnect();
    const doc = await Project.findOne({ slug, category }).lean();
    if (doc) {
      product = {
        name: doc.title,
        slug: doc.slug,
        category: doc.category,
        price: doc.price,
        discountPrice: doc.discountPrice || null,
        tagline: doc.tagline,
        description: doc.description,
        image: doc.image || "#C6432E33",
        link: doc.link || "", // Live link from MongoDB
        reviews: doc.reviews || [],
      };
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }

  if (!product) {
    notFound();
  }

  return (
    <div style={{ background: "#F2E9D8", minHeight: "100vh" }}>
      <div
        className="w-full h-2.5"
        style={{
          background:
            "repeating-linear-gradient(90deg, #C6432E 0px, #C6432E 28px, #F2E9D8 28px, #F2E9D8 56px)",
        }}
      />

      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* image */}
          <div>
            <div
              className="w-full h-72 rounded-xl flex items-center justify-center overflow-hidden"
              style={{ background: product.image.startsWith("#") ? product.image : "#f3f4f6", border: "2px solid #231C15" }}
            >
              {!product.image.startsWith("#") && (
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              )}
            </div>
          </div>

          {/* details */}
          <div>
            <h1
              className="text-3xl font-serif tracking-tight"
              style={{ color: "#231C15" }}
            >
              {product.name}
            </h1>
            <p className="mt-2 text-base" style={{ color: "#5B5042" }}>
              {product.tagline}
            </p>

            <div className="mt-5 flex items-center gap-3">
              {product.discountPrice ? (
                <>
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "#C6432E" }}
                  >
                    ${product.discountPrice}
                  </span>
                  <span
                    className="text-lg line-through"
                    style={{ color: "#5B504299" }}
                  >
                    ${product.price}
                  </span>
                </>
              ) : (
                <span
                  className="text-2xl font-bold"
                  style={{ color: "#231C15" }}
                >
                  ${product.price}
                </span>
              )}
            </div>

            <p
              className="mt-6 text-base leading-relaxed"
              style={{ color: "#5B5042" }}
            >
              {product.description}
            </p>

            {/* buy and preview options */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/923106010110?text=${encodeURIComponent(
                  `Hi! I'm interested in "${product.name}" — I'd like to buy it as is.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-6 py-3.5 rounded-md text-sm tracking-wide uppercase text-center cursor-pointer"
                style={{
                  background: "#C6432E",
                  color: "#F2E9D8",
                  boxShadow: "3px 3px 0 #9E3222",
                }}
              >
                Buy Now
              </a>
              <a
                href={`https://wa.me/923106010110?text=${encodeURIComponent(
                  `Hi! I'd like to customize "${product.name}" before buying.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold px-6 py-3.5 rounded-md text-sm tracking-wide uppercase text-center cursor-pointer"
                style={{ background: "#2F4A3C", color: "#F2E9D8" }}
              >
                Customize
              </a>

              {/* LIVE WEBSITE PREVIEW BUTTON (Shows only if link is provided) */}
              {product.link && (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold px-6 py-3.5 rounded-md text-sm tracking-wide uppercase text-center cursor-pointer"
                  style={{ background: "#231C15", color: "#F2E9D8" }}
                >
                  Live Preview ↗
                </a>
              )}
            </div>
          </div>
        </div>

       
        
      </main>
    </div>
  );
}
