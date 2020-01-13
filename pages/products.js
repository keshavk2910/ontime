import Layout from '../components/Layout';
import ProductCardList from '../components/ProductsList/ProductCard-List'
import {connect} from "react-redux";
import fetch from 'isomorphic-unfetch';
import Pagination from "react-js-pagination";
import {withRouter} from 'next/router'

const Products = (props) => {
  let handlePageClick = pageNumber => {
    console.log('running')
    if(props.router.query.page == pageNumber){
    } else {
        props.router.push(`/products?page=${pageNumber}`,`/products?page=${pageNumber}`);
  }
  };
    return <Layout>
    <div className="top-pad">
    <Pagination
          activePage={props.page}
          itemsCountPerPage={12}
          totalItemsCount={Number(props.items)}
          pageRangeDisplayed={5}
          onChange={handlePageClick}
        />
    <ProductCardList posts={props.products} dispatch={props.dispatch}/> 
    
    </div>
    </Layout>
}
Products.getInitialProps = async function(context) {
    const { page } = context.query;
    let res;
      if(page){
        res = await fetch(`http://localhost:3000/getProducts?per_page=12&status=publish&page=${page}`)
      } else {
        res = await fetch(`http://localhost:3000/getProducts?per_page=12&status=publish`)
      }
    const items = await res.headers.get('Total-Products');
    const data = await res.json();
    return {
        products:data,
        items,
        page
    }
}
export default (withRouter(connect(null)(Products)));