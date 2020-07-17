/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const personsFile = require("./src/data/persons.json")
const projectsFile = require("./src/data/projects.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const personsTemplate = path.resolve("./src/templates/person.js")
  const projectTemplate = path.resolve("./src/templates/project.js")

  personsFile.forEach(person => {
    const path = `persons/${person.link}`
    createPage({
      path,
      component: personsTemplate,
      context: person,
    })
  })
  projectsFile.forEach(project => {
    const path = `projects/${project.link}`
    createPage({
      path,
      component: projectTemplate,
      context: project,
    })
  })
}
