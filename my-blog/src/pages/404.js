import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Ops ...</h1>
    <p>Não tem nada aqui =/</p>
  </Layout>
)

export default NotFoundPage
