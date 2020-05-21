export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ec6c5fc060eac4ed683bf46',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dmo4e686',
                  apiId: '408b7d18-3da4-4265-b6e3-e61f9ed0395b'
                },
                {
                  buildHookId: '5ec6c5fc57f7e87fecd65115',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-9vud87ks',
                  apiId: '354ed2ad-8feb-4208-854f-a1a5e5fd3ec1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/binzcodes/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-9vud87ks.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
