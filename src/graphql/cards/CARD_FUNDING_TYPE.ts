import { enumType } from "@nexus/schema";

export const CARD_FUNDING_TYPE = enumType({
  name: "CARD_FUNDING_TYPE",
  members: ["credit", "debit", "prepaid", "unknown"],
});
