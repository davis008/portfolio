import Layout from "../components/Layout";
import {withRouter} from 'next/router'

const Post=withRouter((props)=>(
    <Layout title={props.router.query.title}>

    <p style={{width:"80vw"}}>Production ready Web Apps-Creating ReactJs SPA with well managed states -using es-lint,Babel,Web Pack and Jest</p>

    </Layout>)
)
export default Post;