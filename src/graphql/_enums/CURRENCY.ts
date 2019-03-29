import { enumType } from "nexus";

export const CURRENCY = enumType({
  name: "CURRENCY",
  members: ["eur", "gbp", "usd"]
});
