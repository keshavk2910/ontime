import Layout from '../../components/Layout';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Link from 'next/link';
import client from './../../components/ApolloClient'
import gql from 'graphql-tag';
import { connect } from "react-redux";

const Product = ({product, dispatch, currentProducts}) => {
  
  let handleAdd = () => {
    dispatch({type: 'ADD_PRODUCT_TO_CART', payload: product});
  }
  let handleRemove = () => {
    dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: product.productId});
  }
  const existingInCart = currentProducts.find(currentProduct => currentProduct.productId === product.productId)

const productCat = product.productCategories.nodes;

  return  <Layout>
    <div className="top-pad">
    <div className="single">
      <h1>{product.name}</h1>
      {product.image ?
        <img
              alt={product.name}
              src={product.image.sourceUrl}
            />
        : null}
      <div className="price">{product.price}</div>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
      {existingInCart ? 
      <><Button variant="contained" color="secondary" onClick={handleRemove} className="primary remove" endIcon={<RemoveCircleIcon/>}>REMOVE FROM QUOTE</Button></>
     : <><Button variant="contained" color="primary" onClick={handleAdd} className="primary" endIcon={<PostAddIcon/>}>ADD TO QUOTE</Button></>}
      <div className="categories">{productCat.map( cat =>
        <Link key={cat.productCategoryId} href={`/product-category/[id]`} as={`/product-category/${cat.slug}`}><a>{cat.name}</a></Link>
      )}
      </div>
     </div>
     <style jsx>{`
     .categories {
       margin-top:20px;
     }
     .categories a {
       color:#f1592a;
       text-decoration:underline;
       margin:0 15px;
     }
     
     
     `}</style>
     </div>
        </Layout>
    
}

Product.getInitialProps = async function(context) {
  const { id } = context.query;

  const PRODUCT_QUERY = gql `query( $id:String!){
    productBy(slug: $id) {
    description
    image {
      sourceUrl
    }
    productId
    name
    ... on SimpleProduct {
      price
    }
    ... on VariableProduct {
      price
    }
    ... on ExternalProduct {
      price
    }
    productCategories {
      nodes {
        name
        productCategoryId
        slug
      }
    }
  }
}`

  const result = await client.query({
    query: PRODUCT_QUERY, 
    variables: { id:id }
   });
    return {
      product:result.data.productBy
    }
};

const mapStateToProps = ({products}) => ({
  currentProducts: products.currentProducts
});

export default connect(mapStateToProps)(Product);