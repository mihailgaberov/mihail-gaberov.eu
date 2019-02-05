import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div style={{ color: `teal` }}>
      <Link to="/">Home</Link>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </div>
  </Layout>
)
