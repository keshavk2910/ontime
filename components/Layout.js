import Header from "./header"
import Meta from './Meta';

const Layout = (props) => {
    return (
    <div id="outer-wrap">
    <Meta/>
    <Header/>
    <div id="main-wrap">
    {props.children}
    </div>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </div>
    );
}
export default Layout;