import { extendType, idArg } from "nexus";

export const ProductQueries = extendType({
  type: "Query",
  definition(t) {
    t.list.field("products", {
      type: "Product",
      async resolve(root, args, context, info) {
        const { data } = await context.stripe.products.list();
        return data;
      }
    });

    t.field("product", {
      type: "Product",
      nullable: true,
      args: {
        id: idArg({ required: true })
      },
      async resolve(root, { id }, context, info) {
        return await context.stripe.products.retrieve(id);
      }
    });
  }
});
