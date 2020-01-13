import Link from 'next/link';
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';

const ProductCard = ({post, dispatch, currentProducts}) => {
  let handleAdd = () => {
    dispatch({type: 'ADD_PRODUCT_TO_CART', payload: post});
  }
  let url = post.images[0].src

  
    return (
        <React.Fragment>
    <div className='card-container'>
    <Link href={`/product/[id]`} as={`/product/${post.slug}`}>
    <a>
        <h1 key={post.id}>{post.name}</h1>
            {post.images ?
              <div className="maximg"><img
              alt={post.name}
              src={url}
            /></div>
            : null}</a>
            </Link>
            {post.price_html ? <div className="price" dangerouslySetInnerHTML={{ __html: post.price_html }}/> :""}
            {post.description ?<div className="content" dangerouslySetInnerHTML={{ __html: post.description }} />:""}
            <><Button variant="contained" color="primary" onClick={handleAdd} className="primary" endIcon={<PostAddIcon/>}>ADD TO QUOTE</Button></>
    </div>
    
    <style jsx>{`
    a {
      text-decoration:none;
      color:#000
    }
    .card-container {
        
        background-color: #fff;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 25px;
        -moz-osx-font-smoothing: grayscale;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: transform 0.25s ease-out;
      }
      
      .card-container:hover {
        transform: scale(1.02);
      }
      img {
        max-width: 100%;
        margin-bottom: 25px;
    }
    @media (max-width: 768px) {
      .card-container{
        display: block;
        margin-bottom: 30px;
      }
    }
    .card-list a {
      color: #000!important;
    }
    .card-list a:hover {
      color: #000;
      text-decoration: none;
    }
    .card-list .content{
      color:#000;
    }
      `}</style>
    </React.Fragment>
    );
    }

    const mapStateToProps = ({products}) => ({
      currentProducts: products.currentProducts
    });

export default connect(mapStateToProps)(ProductCard);
