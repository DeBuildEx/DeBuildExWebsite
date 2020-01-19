import React from "react"
import Layout from "src/components/Layout/layout"
import SEO from "src/components/SEO/seo"

const project = ({ pageContext: { title } }) => {
  return (
    <Layout>
      <SEO title={title} />
      <div>this is {title} project</div>
    </Layout>
  )
}

export default project
