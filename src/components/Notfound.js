import { Link } from "react-router-dom";

const Notfound = () => {
    return ( 
        <div className='notFound'>
            <h2>404</h2>
            <p>PAGE NOT FOUND</p>
            <Link to='/'>Return to Homepage</Link>
        </div>
     );
}
 
export default Notfound;