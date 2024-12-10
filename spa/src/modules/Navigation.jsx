import { Link } from 'react-router-dom';

function Navigation(){
    return (
        <>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/order">Order</Link>
            <Link to="/movie">Movies</Link>
            <Link to="/topics">Topics</Link>
          </nav>
        </>
    );
}
export default Navigation;