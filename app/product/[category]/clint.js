"use client";

import { useState } from "react";
import Link from "next/link";

export default function Clint({ categorySlug, categoryTitle, initialItems }) {
  const [items] = useState(initialItems);

  return (
    <main className="min-h-screen bg-[#F2E9D8] px-6 py-12 md:px-16" style={{ background: "#F2E9D8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2" style={{ color: "#231C15" }}>
            {categoryTitle || categorySlug}
          </h1>
          <p className="text-sm md:text-base" style={{ color: "#5B5042" }}>
            Explore our latest projects and templates available in the {categoryTitle || categorySlug} category.
          </p>
        </div>

        {/* Grid or Empty State */}
        {items.length === 0 ? (
          <div className="rounded-2xl p-12 text-center shadow-sm" style={{ background: "#E9DCC1", border: "2px solid #231C15" }}>
            <h3 className="text-lg font-medium mb-1" style={{ color: "#231C15" }}>No items found</h3>
            <p className="text-sm" style={{ color: "#5B5042" }}>Check back later or add items from your dashboard.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
                style={{ background: "#E9DCC1", border: "2px solid #231C15" }}
              >
                {/* Item Thumbnail / Preview Box */}
                <div 
                  className="h-48 w-full flex items-center justify-center overflow-hidden"
                  style={{ backgroundColor: item.image?.startsWith("#") ? item.image : "#f3f4f6", borderBottom: "2px solid #231C15" }}
                >
                  {!item.image?.startsWith("#") && (
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="text-xl font-semibold mb-1" style={{ color: "#231C15" }}>
                    {item.name}
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2 grow" style={{ color: "#5B5042" }}>
                    {item.tagline}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t" style={{ borderColor: "#231C1533" }}>
                    <span className="font-bold text-lg" style={{ color: "#C6432E" }}>
                      ${item.price}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {/* Live Link Button on Card (Shows only if link exists) */}
                      {item.link && (
                        <a 
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-xl text-xs font-bold uppercase transition-colors"
                          style={{ background: "#231C15", color: "#F2E9D8" }}
                        >
                          Live ↗
                        </a>
                      )}
                      
                      <Link 
                        href={`/product/${categorySlug}/${item.slug}`}
                        className="px-3 py-2 rounded-xl text-xs font-bold uppercase transition-colors"
                        style={{ background: "#C6432E", color: "#F2E9D8" }}
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}