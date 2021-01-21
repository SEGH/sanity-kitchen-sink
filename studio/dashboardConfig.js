export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600a11e15605e20efedeb5e1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-si4b89iv',
                  apiId: 'aef164a8-0a81-4ead-9c91-1ef16b903047'
                },
                {
                  buildHookId: '600a11e15605e210d1deb463',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zzvxzbi9',
                  apiId: '0cff0825-d2bb-48f4-859c-a2425361518f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SEGH/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zzvxzbi9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
