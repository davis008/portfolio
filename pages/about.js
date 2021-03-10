import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import {Component} from 'react';
import Error from "./_error";


class About extends Component{
   
    static async getInitialProps(){
       const res= await fetch("https://api.github.com/users/davis008")
       const data=await res.json();
       const statusCode=res.status>200 ? res.status:false;   
       return {user: data,statusCode}
    };
    render(){
        const {user,statusCode} =this.props;
        if(statusCode)return <Error statusCode={statusCode}/>
        return(
        <Layout title="about"> 
        <p>Name: {user.name}</p>
        <p>Proffession: {user.bio}</p>
        
        
        <img src={user.avatar_url} alt="portfolio image" height="200px"/>
        </Layout>
    )
    }
}
  
export default About;