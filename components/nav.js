import { slide as Menu } from 'react-burger-menu'
import ActiveLink from './ActiveLink/ActiveLink';
import Button from '@material-ui/core/Button';

const NAV = () => {
  const items = [
    {id:1, link:'/', label:'Home'},
    {id:2, link:'/work', label:'Work'},
    {id:3, link:'/about', label:'About'},
    {id:4, link:'/contact', label:'Contact'},
  ]
    return (
    <div className="main-nav">
    <ul className="menu-ul desktop-show">
      {
        items.map(item => 
        <ActiveLink key={item.id} activeClassName="nav-active" href={item.link}>
        <a><li>
        <span>{item.label}</span>
        </li></a>
        </ActiveLink>)
      }
      </ul>

    <div className="mobile-show">
    <Menu right pageWrapId={ "main-wrap" } outerContainerId={ "outer-wrap" } width={ '50%' } >
    {
      items.map(item => 
      <ActiveLink key={item.id} activeClassName="nav-active" href={item.link}>
      <a className="menu-item">
      <span>{item.label}</span>
      </a>
      </ActiveLink>)
    }
      </Menu>
    </div>
    <style jsx global>{`
      .bm-burger-button {
        position: fixed;
        width: 35px;
        height: 25px;
        right: 36px;
        top: 36px;
      }
      .bm-burger-bars {
        background: #000;
        height:13%!important;
    }
    .bm-menu {
      background: #fff;
      padding: 2.5em 10px 0;
      font-size: 1.15em;
    }
    .bm-menu a {
      width: 100%;
      display: block;
      font-size: 18px;
      font-weight: 700;
      text-transform: uppercase;
      text-decoration:none;
      font-family:"Neue Einstellung Bold" !important;
      color: #000;
    }
    .bm-menu a:hover,
    .bm-menu a:focus {
      color: #f1592a;
    }
    .bm-item-list a {
      padding: 0.8em;
    }
    .bm-item:focus {
      outline: none;
    }
    .bm-cross {
      background: #f1592a;
    width: 5px!important;
    height: 22px!important;
    }
    .mobile-show {
      display:none;
    }
    @media (max-width: 960px) {
      a.nav-active span{
        background: -webkit-linear-gradient(354deg, rgba(13,114,185,1) 35%, rgba(251,138,4,1) 56%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-bottom:2px solid #000;
      }
      .mobile-show {
        display:block;
      }
      .desktop-show {
        display:none;
      }
    }
    .bm-cross-button button {
      padding: 15px!important;
      left: -4px!important;
      top: -1px!important;
    }
    #main-wrap {
      min-height:100vh;
    }
    .bm-burger-button {
      position:absolute!important;
    }
    span.formtext {
      color:#fff!important;
    }
    `}
</style>
<style jsx>{`
    div.main-nav {
        float:right;
    }
    ul.desktop-show {
      list-style:none;
      height: 90px;
      line-height: 73px;
    }
    ul.desktop-show li {
      display:inline-block;
      padding: 10px 20px;
      font-size: 18px;
      font-weight: 500;
      font-family:"Roboto" !important;
      color: #000;
      transition: all 0.2s;
    }
    ul.desktop-show a:hover li {
      color: #f7941e;
    }
    ul.desktop-show a.nav-active li span{
      color:#000; 
      border-bottom:2px solid #000;
    }
`}</style>
    </div>
    );
}
export default NAV;