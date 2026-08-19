import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  { name: "Custom Squarespace Website Design", description: "Bespoke 7.1 sites built with Fluid Engine, tailored to your brand." },
  { name: "Squarespace Redesign", description: "Modernize an existing site with refreshed layout, typography, and conversion flow." },
  { name: "Landing Pages", description: "High-converting, focused pages for launches, ads and lead capture." },
  { name: "E-commerce Setup", description: "Product catalogs, checkout, shipping, and payments configured end-to-end." },
  { name: "Responsive Web Design", description: "Mobile-first, tablet and desktop layouts that look great on every screen." },
  { name: "Squarespace SEO", description: "On-page SEO, keyword research, authority growth, backlink strategy and local SEO." },
  { name: "Domain Transfer & Connection", description: "Move or connect your domain from any hosting platform to Squarespace." },
  { name: "Zapier & Make Automation", description: "Automate Squarespace forms, CRMs, emails and spreadsheets with no-code workflows." },
  { name: "Custom CSS & Code Injection", description: "Advanced styling and interactions beyond Squarespace defaults." },
  { name: "Membership & Course Sites", description: "Gated content, member areas, and Squarespace Courses setup." },
  { name: "Booking & Scheduling", description: "Acuity Scheduling integration for appointments and consultations." },
  { name: "Email Marketing Setup", description: "Squarespace Email Campaigns and Mailchimp connections wired to your forms." },
  { name: "Site Migration", description: "Migrate from WordPress, Wix, Showit, or Shopify to Squarespace." },
  { name: "Performance Optimization", description: "Speed audits and fixes for Core Web Vitals, mobile scores and conversion." },
  { name: "Training & Handover", description: "Loom walkthroughs and docs so you can edit content confidently." },
];

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List the Squarespace services Techgod offers with short descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});