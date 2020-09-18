import { interfaceType, objectType } from "@nexus/schema";

const SubscriptionItem = objectType({
  name: "SubscriptionItem",
  definition(t) {
    t.string("key");
    t.string("value");
  },
});

export const SubscriptionItemInterface = interfaceType({
  name: "SubscriptionItemInterface",
  definition(t) {
    t.list.field("items", {
      type: SubscriptionItem,
      resolve: (o) => {
        return Object.entries(o.items.data).map(([key, value]) => {
          return {
            key,
            value,
          };
        });
      },
    });
    t.resolveType(() => null);
  },
});
