import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import {Component} from 'react'
import Pagination from "react-js-pagination";
import ProductCardList from '../../components/ProductsList/ProductCard-List'
import {withRouter} from 'next/router'


class ProductCategory extends Component {
      constructor(props) {
        super(props);
        this.state = {
          page:1,
        };
      }
      
      componentDidMount() {
          if(this.props.router.query.page !== undefined){
              this.setState({page:this.props.router.query.page})
          }
        }

      handlePageClick = pageNumber => {
        const catName = this.props.router.query.name;
        if(this.props.router.query.page == pageNumber){
        } else {
          this.setState({ page: pageNumber}, () => {
            this.props.router.push(`/product-category/[name]?page=${pageNumber}`,`/product-category/${catName}?page=${pageNumber}`);
           });
        }
      };

      render(){
    return (
        <Layout>
          <div className="top-pad">
        {this.props.items !== 0 ?
          <div>
        <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={Number(this.props.items)}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /> 

      <ProductCardList posts={this.props.post} dispatch={this.props.dispatch}/> 

      <Pagination
          activePage={this.state.page}
          itemsCountPerPage={12}
          totalItemsCount={Number(this.props.items)}
          pageRangeDisplayed={5}
          onChange={this.handlePageClick}
        /></div> 
        :<div>NO CATEGORY FOUND WITH THIS ID</div>}
        </div>
        </Layout>
    );
      }
}

ProductCategory.getInitialProps = async function(context) {
    const { page, name } = context.query;

    const catID = await fetch(`http://localhost:3000/getCatId?slug=${name}`);
    const data1 = await catID.json();
    const id = data1[0].id;
    let res;
    let items;
    let data;
    if(id > 0 && page){
    res = await fetch(`http://localhost:3000/getProducts?category=${id}&per_page=12&status=publish&page=${page}`)
    items = await res.headers.get('Total-Products');  
    data = await res.json();
    } else if(id > 0) {
    res = await fetch(`http://localhost:3000/getProducts?category=${id}&per_page=12&status=publish`) 
    items = await res.headers.get('Total-Products');  
    data = await res.json();
    } else {
      items = 0
    }
    return { post:data, items}
  };

const mapStateToProps = ({products}) => ({
    currentProducts: products.currentProducts
});

export default (withRouter(connect(mapStateToProps)(ProductCategory)));