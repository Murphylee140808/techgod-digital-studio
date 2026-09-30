import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_profile",
  title: "Get Omowumi Akindehinde profile",
  description:
    "Return Omowumi Akindehinde's professional profile: name, role, tagline, bio, and public contact details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const profile = {
      name: "Omowumi Akindehinde",
      role: "Squarespace Web Designer & Developer",
      specialties: [
        "Custom Squarespace 7.1 sites",
        "Fluid Engine layouts",
        "Responsive design",
        "Local SEO",
        "Lead generation",
      ],
      bio: "Squarespace specialist helping service businesses launch premium, high-converting websites with custom design, CMS setup, and SEO.",
      website: "https://omowumi-akindehinde.lovable.app",
      location: "Remote — works with clients worldwide",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
      structuredContent: profile,
    };
  },
});