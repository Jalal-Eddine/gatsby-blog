// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the third page</h1>
    <Link to="/page-2">Go back to page 2</Link>
  </Layout>
)

export default ThirdPage
