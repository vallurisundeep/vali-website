import type { MetadataRoute } from "next";
import { SERVICES, CASE_STUDIES, JOBS, BLOG_POSTS, INDUSTRIES } from "@/lib/data";

const BASE_URL = "https://valits.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/portfolio",
    "/careers",
    "/blog",
    "/contact",
    "/quote",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = CASE_STUDIES.map((study) => ({
    url: `${BASE_URL}/portfolio/${study.slug}`,
    lastModified: new Date(),
  }));

  const jobRoutes = JOBS.map((job) => ({
    url: `${BASE_URL}/careers/${job.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const industryRoutes = INDUSTRIES.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...caseStudyRoutes,
    ...jobRoutes,
    ...postRoutes,
    ...industryRoutes,
  ];
}
