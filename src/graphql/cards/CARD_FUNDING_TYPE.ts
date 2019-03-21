import { enumType } from "nexus";

export const CARD_FUNDING_TYPE = enumType({
  name: "CARD_FUNDING_TYPE",
  members: ["credit", "debit", "prepaid", "unknown"]
});
