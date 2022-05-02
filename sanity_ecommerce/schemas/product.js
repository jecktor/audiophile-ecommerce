export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'new',
      title: 'Is this product new?',
      type: 'boolean',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'string',
    },
    {
      name: 'includes',
      title: 'Items included with the product',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quantity', title: 'Quantity', type: 'number' },
            { name: 'item', title: 'Item', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'related',
      title: 'Products related',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'product' },
        },
      ],
    },
  ],
};
