import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress"

Router.onRouteChangeStart=url=>{
   
    NProgress.start();
}
Router.onRouteChangeComplete=()=>NProgress.done();

Router.onRouteChangeError=()=>NProgress.done();

const Layout=({children,title})=>(
    <div className="root">
        <Head>
            <title>Davis Portfolio</title>
           
        </Head>
        <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/hireme">Hire Me</Link>
        <Link href="/blog">Blog</Link>
        </header>
        <h1>{title}</h1>
        {children}
        <footer>
        &copy; {new Date().getFullYear()}
        </footer>

        <style jsx>
        {`
       .root{
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
       }
       header{
           width:100%;
           display:flex;
           justify-content:space-around;
           padding:1em;
           font-size:1.2rem;
           background:lightblue;
       }
       header a{
           color:darkgrey;
           text-decoration:none;
       }
       header a:hover{
           font-weight:bold;
           color:lightgrey
       }
       footer{
           padding: 1em;
       }
        `}
        </style>
        <style global jsx>
            {`
            body{
                margin:0;
                font-size:110%;
                background:#f0f0f0
            }
            `}
        </style>
    </div>
)
export default Layout;