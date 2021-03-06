import React from "react";
import { graphql, Link } from "gatsby";
import styled from 'styled-components'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  color: blue;
`

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Note about the project</h1>
      <p>Hi! JalalEddine here, this is a blog where I test Gatsby with the markdown plugin "allMarkdownRemark", using Graphql and CSS in JS. I was considering using it for my "Firdaws" project but after comparing the pros and cons I preferred using Frontity instead.</p>
      <h2>Number of posts: {data.allMarkdownRemark.totalCount}</h2>
      {data.allMarkdownRemark.edges.map(({node}) =>(
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>
              {node.frontmatter.title} - {node.frontmatter.date}
            </BlogTitle>
          </BlogLink>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql `
  query{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
