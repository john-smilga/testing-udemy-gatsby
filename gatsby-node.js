const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const { data } = await graphql(`
  query {
    tours: allContentfulTour {
      edges {
        node {
          slug
        }
      }
    }
    posts: allContentfulPost {
      edges {
        node {
          slug
        }
      }
    }
  }
  `)
  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
/* je dois récupérer mes posts
je dois mentionner le nombre de posts par page
je dois calculer le nombre de pages a créer
Je dois créer un Array avec la quantité de pages obtenues et les créer avec une fonction en boucle forEach(_,index)
create page avec :
1.- path: Une condition ternaire pour l'index, contenant le type de page, l'index de page +1 - `nom_de_type_page/${index+1}`
2.- component: chemin vers le template concerné
3.- context: contien les valeurs a passer pour la création des pages, nombre de posts par page, décalage skip index * posts par pages, nombre de pages, page courrante
*/
const posts = data.posts.edges
const postsPerPages = 5
const numPages = Math.ceil(posts.length / postsPerPages)
Array.from({length:numPages}).forEach((_,index)=>{
  createPage({
    path: index === 0?`/latestsBlogs`:`/latestsBlogs/${index + 1}`,
    component: path.resolve("./src/templates/blog-list-template.js"),
    context: {
      limit:postsPerPages,
      skip:index * postsPerPages,
      numPages,
      currentPage: index + 1
    },
  })
})

}
