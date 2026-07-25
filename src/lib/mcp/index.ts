import { defineMcp } from "@lovable.dev/mcp-js";
import getContact from "./tools/get-contact";
import getProfile from "./tools/get-profile";
import listProjects from "./tools/list-projects";
import listServices from "./tools/list-services";

export default defineMcp({
  name: "techgod-portfolio-mcp",
  title: "Techgod Portfolio",
  version: "0.1.0",
  instructions:
    "Public tools for Omowumi A. (Techgod)'s Squarespace portfolio. Use `get_profile` for who she is, `list_services` for what she offers, `list_projects` for featured case studies, and `get_contact` for how to hire her.",
  tools: [getProfile, listServices, listProjects, getContact],
});