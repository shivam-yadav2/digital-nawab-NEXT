"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation"; // instead of react-router-dom
import axios from "axios";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Eye,
} from "lucide-react";
import Banner from "@/components/Banner"; // adjust path as needed

export default function BlogDetailPage({ params }) {
  const router = useRouter();
  const slug = decodeURIComponent(params.slug);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    const fetchBlog = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await axios.get(
          `https://dashboard.digitalnawab.com/api/blogdetail`,
          { params: { url: slug } }
        );
        if (!cancelled) {
          setData(res?.data?.data || null);
        }
      } catch (err) {
        if (!cancelled) {
          setError("Unable to load this article.");
          setData(null);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    } else {
      setLoading(false);
    }

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Fallback title
  const blogTitle = useMemo(() => {
    if (data?.title) return data.title;
    const fromSlug = (slug || "").replaceAll("-", " ");
    return fromSlug
      ? fromSlug.charAt(0).toUpperCase() + fromSlug.slice(1)
      : "Blog";
  }, [data?.title, slug]);

  // Format date
  const publishedDisplay = useMemo(() => {
    if (!data?.published) return "";
    try {
      const d = new Date(data.published);
      return d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return data.published;
    }
  }, [data?.published]);

  return (
    <>
      <Banner
        title={blogTitle}
        subtitle="We'd love to hear from you!"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog */}
            <div className="lg:col-span-2">
              {/* Back Button */}
              <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-300 font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blogs
              </button>

              {/* Title */}
              <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                {blogTitle}
              </h1>

              {/* Loading/Error */}
              {loading && (
                <p className="text-slate-600 mb-4">Loading article…</p>
              )}
              {!loading && error && (
                <p className="text-red-600 mb-4">{error}</p>
              )}

              {/* Blog Meta */}
              <div className="flex items-center gap-4 text-slate-600 text-sm mb-6">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4 text-blue-500" />
                  <span>{data?.author || "Los Angeles, CA"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  <span>{publishedDisplay || "—"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span>Viewed</span>
                </div>
              </div>

              {/* About Blog */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">
                  About This Blog
                </h2>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-blue-100 shadow-lg">
                  <div className="!text-slate-900 leading-relaxed space-y-4">
                    {data?.description ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                      />
                    ) : (
                      <>
                        <p>
                          We're exploring the latest trends in digital
                          marketing...
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Example sidebar content kept as-is */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-xl p-6 mb-6 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-4">Ready to Read?</h3>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-4">
                  Read Full Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
