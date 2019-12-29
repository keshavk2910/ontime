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
    </div>
    );
}
export default Layout;