import Link from 'next/link';

const Logo = () => {
    return <div className="main-logo">
    <Link href='/'><a><img src="/logo-xs.png"/></a></Link>
    <style jsx>{`
    .main-logo {
      margin:20px 10px;
    }
    img{
        max-width: 100%;
        max-height: 100%;
        display: block; /* remove extra space below image */
    }
    @media (max-width: 968px) {
        .main-logo {
        padding: 10px;
        margin:15px 10px;
        }
    }
    `}</style>
    </div>
}
export default Logo;