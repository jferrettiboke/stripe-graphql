import { queryField } from "@nexus/schema";
import ProductInterface from "../ProductInterface";

export const productsQueryField = queryField("products", {
  type: ProductInterface,
  list: true,
  async resolve(root, args, context, info) {
    const { data } = await context.stripe.products.list();
    return data;
  },
});
