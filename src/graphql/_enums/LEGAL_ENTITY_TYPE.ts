import { enumType } from "nexus";

export const LEGAL_ENTITY_TYPE = enumType({
  name: "LEGAL_ENTITY_TYPE",
  members: ["individual", "company"]
});
