"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddProjectPage() {
  const router = useRouter();
  
  // Security States
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  // Check if already logged in on this browser
  useEffect(() => {
    const loggedIn = localStorage.getItem("admin_logged_in");
    if (loggedIn === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // 👉 CHANGE THIS TO YOUR SECRET PASSWORD
    const SECRET_PASSWORD = "my-super-secret-password"; 

    if (passwordInput === SECRET_PASSWORD) {
      localStorage.setItem("admin_logged_in", "true");
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password!");
    }
  };

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "website",
    price: "",
    discountPrice: "",
    tagline: "",
    description: "",
    image: "",
    link: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("Project added successfully to MongoDB!");
        router.push(`/product/${form.category}`);
        router.refresh();
      } else {
        alert(`Failed to save: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      alert(`Network error: ${err.message}`);
    }
  };

  // 1. IF NOT LOGGED IN: Show password protection screen matching your theme
  if (!isAuthenticated) {
    return (
      <div style={{ background: "#F2E9D8", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
        <form
          onSubmit={handleLogin}
          className="max-w-sm w-full p-8 rounded-2xl shadow-sm text-center"
          style={{ background: "#E9DCC1", border: "2px solid #231C15" }}
        >
          <h1 className="text-2xl font-serif font-bold mb-4" style={{ color: "#231C15" }}>
            Admin Login
          </h1>
          <p className="text-sm mb-6 opacity-80" style={{ color: "#231C15" }}>
            Enter password to access dashboard
          </p>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            required
            placeholder="Password..."
            className="w-full p-3 rounded-lg outline-none mb-4"
            style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5 cursor-pointer"
            style={{ background: "#C6432E", color: "#F2E9D8", border: "2px solid #231C15" }}
          >
            Unlock →
          </button>
          {error && <p className="text-red-600 mt-3 text-sm font-semibold">{error}</p>}
        </form>
      </div>
    );
  }

  // 2. IF LOGGED IN: Show your original form + Logout button
  return (
    <div style={{ background: "#F2E9D8", minHeight: "100vh", padding: "40px 20px" }}>
      <div className="max-w-xl mx-auto mb-6 flex justify-between items-center">
        <Link href="/product" className="text-sm font-semibold" style={{ color: "#C6432E" }}>
          ← Back to Catalog
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("admin_logged_in");
            setIsAuthenticated(false);
          }}
          className="text-xs font-bold px-3 py-1.5 rounded-lg border border-[#231C15] cursor-pointer hover:opacity-80"
          style={{ background: "#E9DCC1", color: "#231C15" }}
        >
          Logout 🔒
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-8 rounded-2xl shadow-sm"
        style={{ background: "#E9DCC1", border: "2px solid #231C15" }}
      >
        <h1 className="text-2xl font-serif font-bold mb-6" style={{ color: "#231C15" }}>
          Admin: Add New Product
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Product Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
                slug: e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
              })
            }
            required
            placeholder="e.g. Quiz Game"
            className="w-full p-3 rounded-lg outline-none"
            style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full p-3 rounded-lg outline-none"
            style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
          >
            <option value="website">🌐 Website</option>
            <option value="app">📱 App</option>
            <option value="game">🎮 Game</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Price ($)</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              required
              placeholder="50"
              className="w-full p-3 rounded-lg outline-none"
              style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Discount Price (Optional)</label>
            <input
              type="number"
              value={form.discountPrice}
              onChange={(e) => setForm({ ...form, discountPrice: e.target.value })}
              placeholder="40"
              className="w-full p-3 rounded-lg outline-none"
              style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Image URL or Color Hex</label>
          <input
            type="text"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            placeholder="https://... or #C6432E33"
            className="w-full p-3 rounded-lg outline-none"
            style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Live Website / Project Link</label>
          <input
            type="text"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            placeholder="https://your-live-project.com"
            className="w-full p-3 rounded-lg outline-none"
            style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Short Tagline</label>
          <input
            type="text"
            value={form.tagline}
            onChange={(e) => setForm({ ...form, tagline: e.target.value })}
            required
            placeholder="A fun, customizable trivia quiz game"
            className="w-full p-3 rounded-lg outline-none"
            style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-bold mb-1" style={{ color: "#231C15" }}>Full Description</label>
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            required
            rows={4}
            placeholder="Detailed overview of what this product includes..."
            className="w-full p-3 rounded-lg outline-none"
            style={{ border: "2px solid #231C15", background: "#F2E9D8", color: "#231C15" }}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5 cursor-pointer"
          style={{ background: "#C6432E", color: "#F2E9D8", border: "2px solid #231C15" }}
        >
          Save Project to MongoDB →
        </button>
      </form>
    </div>
  );
}