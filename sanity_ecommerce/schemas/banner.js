export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Banner title',
      type: 'string',
    },
    {
      name: 'url',
      title: 'Button Url',
      type: 'string',
    },
    {
      name: 'promotion',
      title: 'Promotion title',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Banner text',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'Banner color',
      type: 'string',
    },
    {
      name: 'textColor',
      title: 'Text color',
      type: 'string',
    },
    {
      name: 'button',
      title: 'Button color',
      type: 'string',
      options: {
        list: [
          { title: 'Main color', value: 'main' },
          { title: 'Black', value: 'black' },
          { title: 'Transparent', value: 'transparent' },
        ],
      },
    },
    {
      name: 'isHeroBanner',
      title: 'Display this banner in the homepage hero?',
      type: 'boolean',
    },
    {
      name: 'isImageBackground',
      title: 'Use image as banner background?',
      type: 'boolean',
    },
    {
      name: 'isSmall',
      title: 'Is banner small?',
      type: 'boolean',
    },
    {
      name: 'image',
      title: 'Banner image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
