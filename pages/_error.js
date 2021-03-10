import Layout from "../components/Layout";

const Error=({statusCode})=>(
    <Layout title="Error!!">
        {statusCode? `could not load your user data: Status code ${statusCode}`
        :  `Sorry!!couldnt get that page`}
    </Layout>
);
 export default Error;