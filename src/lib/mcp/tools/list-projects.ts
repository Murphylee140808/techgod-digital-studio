import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  {
    title: "Estate & Co.",
    category: "Real Estate",
    summary: "Luxury real estate Squarespace site with property listings, agent profiles, and lead capture.",
  },
  {
    title: "MediCare Plus",
    category: "Healthcare",
    summary: "Clinic website with service pages, appointment booking, and patient resources.",
  },
  {
    title: "LogiFleet & Co.",
    category: "Logistics",
    summary: "Freight & logistics site with quote request forms and service area SEO.",
  },
  {
    title: "Wanderlust Voyages",
    category: "Travel",
    summary: "Boutique travel agency site with curated itineraries and consultation booking.",
  },
  {
    title: "GreenHaven Landscapes",
    category: "Landscaping",
    summary: "Premium landscaping site with service pages, portfolio gallery, and consultation flow.",
  },
];

export default defineTool({
  name: "list_projects",
  title: "List portfolio projects",
  description: "List Techgod's featured Squarespace case studies with category and summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(projects, null, 2) }],
    structuredContent: { projects },
  }),
});