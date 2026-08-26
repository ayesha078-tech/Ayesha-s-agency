import dbConnect from "@/lib/mongodb";
import Project from "@/models/Project";
import Clint from "./clint";

export const dynamic = "force-dynamic";

// Category display mapping so emojis and labels never fail
const CATEGORY_MAP = {
  website: { label: "Websites", emoji: "🌐", desc: "Prebuilt and custom business websites" },
  app: { label: "Apps", emoji: "📱", desc: "Web and mobile apps built for you" },
  game: { label: "Games", emoji: "🎮", desc: "Simple browser games and quizzes" },
};

export default async function CategoryPage({ params }) {
  // Properly await params to catch the category slug from the URL
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category; 

  console.log("Category searched for:", categorySlug);

  let items = [];
  try {
    await dbConnect();
    // Fetch matching projects from your MongoDB 'projects' collection
    const rawProjects = await Project.find({ category: categorySlug }).lean();
    
    console.log("Projects found:", rawProjects.length, rawProjects);

    items = rawProjects.map((p) => ({
      id: p._id.toString(),
      slug: p.slug,
      category: p.category,
      name: p.title,
      tagline: p.tagline,
      price: p.price,
      link: p.link,
      discountPrice: p.discountPrice || null,
      image: p.image || "#C6432E33",
    }));
  } catch (error) {
    console.error("Database fetch error:", error);
  }

  // Fallback info if someone opens a category not in the map
  const categoryInfo = CATEGORY_MAP[categorySlug] || {
    label: categorySlug ? categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1) : "Products",
    emoji: "📁",
    desc: "Browse our collection",
  };

  return (
    <Clint
      categorySlug={categorySlug} 
      categoryInfo={categoryInfo} 
      initialItems={items} 
    />
  );
}