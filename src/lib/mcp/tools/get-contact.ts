import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "How to hire Techgod: preferred contact channels and what info to include when reaching out.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const contact = {
      website: "https://techgod-digital-studio.lovable.app",
      preferred: "Contact form on the portfolio site",
      include: [
        "Your business name & industry",
        "Project scope (new build, redesign, migration, SEO, etc.)",
        "Timeline and budget range",
        "Links to any existing site or brand assets",
      ],
    };
    return {
      content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
      structuredContent: contact,
    };
  },
});