import { queryField, idArg } from "nexus";

export const productsQueryField = queryField("products", {
  type: "Product",
  list: true,
  async resolve(root, args, context, info) {
    const { data } = await context.stripe.products.list();
    return data;
  }
});
