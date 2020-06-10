const productSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    type: {
      type: "string",
    },
    price: {
      type: "number",
    },
    upc: {
      type: "string",
    },
    shipping: {
      type: "integer",
    },
    description: {
      type: "string",
    },
    manufacturer: {
      type: "string",
    },
    model: {
      type: "string",
    },
    url: {
      type: "string",
    },
    image: {
      type: "string",
    },
    createdAt: {
      type: "string",
    },
    updatedAt: {
      type: "string",
    },
    categories: {
      type: "array",
      items: [
        {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
          required: ["id", "name", "createdAt", "updatedAt"],
        },
        {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
          required: ["id", "name", "createdAt", "updatedAt"],
        },
        {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
          required: ["id", "name", "createdAt", "updatedAt"],
        },
        {
          type: "object",
          properties: {
            id: {
              type: "string",
            },
            name: {
              type: "string",
            },
            createdAt: {
              type: "string",
            },
            updatedAt: {
              type: "string",
            },
          },
          required: ["id", "name", "createdAt", "updatedAt"],
        },
      ],
    },
  },
  required: [
    "id",
    "name",
    "type",
    "price",
    "upc",
    "shipping",
    "description",
    "manufacturer",
    "model",
    "url",
    "image",
    "createdAt",
    "updatedAt",
    "categories"
  ],
};

module.exports = productSchema;
