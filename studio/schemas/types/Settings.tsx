const Settings = {
  name: 'settings',
  title: 'Settings',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name ',
      type: 'string'
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage'
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`
  //     })
  //   }
  // }
};

export default Settings;