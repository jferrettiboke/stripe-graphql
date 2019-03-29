import { objectType } from "nexus";

export const Customer = objectType({
  name: "Customer",
  definition(t) {
    t.implements("Node");
    t.string("email", {
      description: "The customer's email address.",
      nullable: true
    });
    t.dateTime("createdAt", {
      description: "Time at which the object was created.",
      resolve: o => o.created
    });
  }
});
