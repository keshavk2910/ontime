import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import Link from 'next/link';

const Product = ({post, dispatch, currentProducts}) => {

  let handleAdd = () => {
    dispatch({type: 'ADD_PRODUCT_TO_CART', payload: post});
  }
  let handleRemove = () => {
    dispatch({type: 'REMOVE_ITEM_FROM_CART', payload: post.id});
  }
  
  const imgUrl = post.images[0].src
  const existingInCart = currentProducts.find(currentProduct => currentProduct.id === post.id)

  return  <Layout>
    <div className="top-pad">
    <div className="single">
      <h1>{post.name}</h1>
      {post.images ?
        <img
              alt={post.name}
              src={imgUrl}
            />
        : null}
        <div className="price" dangerouslySetInnerHTML={{ __html: post.price_html }}/>
      <div dangerouslySetInnerHTML={{ __html: post.description }} />

      {existingInCart ? 
      <><Button variant="contained" color="secondary" onClick={handleRemove} className="primary remove" endIcon={<RemoveCircleIcon/>}>REMOVE FROM QUOTE</Button></>
     : <><Button variant="contained" color="primary" onClick={handleAdd} className="primary" endIcon={<PostAddIcon/>}>ADD TO QUOTE</Button></>}
      <div className="categories">{post.categories.map( cat =>
        <Link key={cat.id} href={`/product-category/[name]`} as={`/product-category/${cat.slug}`}><a>{cat.name}</a></Link>
      )}
      </div>
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
        </Layout>
    
}

Product.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/getSingleProduct?slug=${id}`);
  const data = await res.json();
  return { post:data[0]}
};

const mapStateToProps = ({products}) => ({
  currentProducts: products.currentProducts
});

export default connect(mapStateToProps)(Product);