import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read the latest insights on AI, cloud computing, cybersecurity, DevOps, mobile development, and IT hardware from SimpleIn Solutions' expert team.",
};

export default function BlogPage() {
  return <BlogClient />;
}
