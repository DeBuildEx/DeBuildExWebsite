import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "src/components/Layout/layout"
import SEO from "src/components/SEO/seo"

const Persons = ({ data: { allPersonsJson } }) => {
  return (
    <Layout>
      <SEO title="persons" />
      <div>
        {allPersonsJson.nodes.map(({ name, link }) => (
          <Link to={"persons/" + link}>{name}</Link>
        ))}
        <Link to="/">home</Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PersonsQuery {
    allPersonsJson {
      nodes {
        link
        name
      }
    }
  }
`

export default Persons
