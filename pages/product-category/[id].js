import Layout from '../../components/Layout';
import ProductCardList from '../../components/ProductsList/ProductCard-List'
import client from './../../components/ApolloClient'
import gql from 'graphql-tag';

const ProductCategory = ({catData}) => {
const products = catData[0].products.nodes;
    return (
        <Layout>
    <div className="top-pad">
    <h1>{ catData[0].name }</h1>
       <ProductCardList posts={products}/> 
       </div>
    <style jsx>{`
    h1 {
      text-align:center;
      margin:25px;
      font-size:55px;
    }
    `}</style>
        </Layout>
    );
}

ProductCategory.getInitialProps = async function(context) {
    const { id } = context.query;
    const PRODUCT_CAT_QUERY = gql `query Product_Cat( $id:String ){
    productCategories(where: {slug: [$id]}) {
    nodes {
      name
      productCategoryId
      products {
        nodes {
          name
          productId
          description
          image {
            sourceUrl
          }
          slug
        }
      }
    }
  }
}`

    const result = await client.query({
      query: PRODUCT_CAT_QUERY, 
      variables: { id:id }
     });

    return { catData:result.data.productCategories.nodes}
  };

export default ProductCategory;