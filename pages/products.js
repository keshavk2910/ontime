import Layout from '../components/Layout';
import client from './../components/ApolloClient'
import gql from 'graphql-tag';
import ProductCardList from '../components/ProductsList/ProductCard-List'
import {connect} from "react-redux";

const PRODUCTS_QUERY = gql `query{
  products(first: 10) {
    nodes {
      description
      image {
        sourceUrl
      }
      name
      productId
      slug
      ... on SimpleProduct {
        price
      }
      ... on VariableProduct {
        price
      }
      ... on ExternalProduct {
        price
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
}`

const Products = (props) => {
    return <Layout>
    <div className="top-pad">
    <ProductCardList posts={props.products} dispatch={props.dispatch}/> 
    </div>
    </Layout>
}
Products.getInitialProps = async () => {
    const result = await client.query( {query: PRODUCTS_QUERY} );
    return {
        products:result.data.products.nodes
    }
}
export default connect(null)(Products);