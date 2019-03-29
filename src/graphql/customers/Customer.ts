import { objectType } from "nexus";
import { timestampToISOString } from "../../utils/dates";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.implements("Node");
    t.string("email", {
      description: "The customer's email address.",
      nullable: true
    });
    t.string("createdAt", o => timestampToISOString(o.created));
  }
});
