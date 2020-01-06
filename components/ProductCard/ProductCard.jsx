import Link from 'next/link';
import Button from '@material-ui/core/Button';
import PostAddIcon from '@material-ui/icons/PostAdd';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const ProductCard = ({post, dispatch, currentProducts}) => {
    return (
        <React.Fragment>
    <div className='card-container'>
    <Link href={`/product/[id]`} as={`/product/${post.slug}`}>
    <a>
        <h1 key={post.productId} className="product-title">{post.name}</h1>
            {post.image ?
              <div className="maximg"><img
              alt={post.name}
              src={post.image.sourceUrl}
            /></div>
            : null}</a>
            </Link>
            {post.price ? <h3 className="price">{post.price}</h3> :""}
            {post.description ?<div className="content" dangerouslySetInnerHTML={{ __html: post.description }} />:""}
    </div>
    
    <style jsx>{`
    .price, .content, .product-title {
      font-family:"Roboto", Arial, Helvetica !important;
    }
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


export default ProductCard;
