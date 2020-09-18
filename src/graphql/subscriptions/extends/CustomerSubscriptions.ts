import { extendType } from "@nexus/schema";

export const CustomerSubscriptionsField = extendType({
  type: "Subscription",
  definition(t) {
    t.field("customer", {
      type: 'Customer',
      async resolve({ customer }, args, context, info) {
        const customerId =
          typeof customer === "string" ? customer : customer.id;
        return await context.stripe.customers.retrieve(customerId);
      }
    });
  }
});
// export const CustomerSubscriptionsField = extendType({
//   type: "Subscription",
//   definition(t) {
//     t.list.field("subscriptions", {
//       type: "Subscription",
//       async resolve({ id }, args, context, info) {
//         const { data } = await context.stripe.subscriptions.list({
//           customer: id
//         });
//         return data;
//       }
//     });
//   }
// });
