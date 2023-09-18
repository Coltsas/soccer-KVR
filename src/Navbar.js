import { Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Soccer</h1>
            <div className="links">
                <Link to="/">Leagues</Link>
                <Link to="/areas" >Areas</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;