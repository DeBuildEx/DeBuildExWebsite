import React from "react"
import Layout from "src/components/Layout/layout"
import SEO from "src/components/SEO/seo"

const person = ({ pageContext: { name } }) => {
  //   console.log(props)
  return (
    <Layout>
      <SEO title={name} />
      <div>this is {name}</div>
    </Layout>
  )
}

export default person
