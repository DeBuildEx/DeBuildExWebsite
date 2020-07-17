import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "src/components/Layout/layout"
import SEO from "src/components/SEO/seo"

const Projects = ({ data: { allProjectsJson } }) => {
  return (
    <Layout>
      <SEO title="projects" />

      <div>
        {allProjectsJson.nodes.map(({ title, link }) => (
          <Link to={"projects/" + link}>{title}</Link>
        ))}
        <Link to="/">home</Link>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query MyProjectsQuery {
    allProjectsJson {
      nodes {
        imageSource
        title
        status
        link
        status
      }
    }
  }
`

export default Projects
