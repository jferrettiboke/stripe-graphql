import { enumType } from "nexus";
import { currencies } from "../../utils/currencies";

export const CURRENCY = enumType({
  name: "CURRENCY",
  members: Object.keys(currencies).map(currency => currency)
});
