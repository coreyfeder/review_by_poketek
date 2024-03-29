import "./Nav.css";
import { Link } from "react-router-dom";

export default () => {
    return <nav className="Nav">
        <ul>
            {/* <li><Link to="Landing">Splash</Link></li> */}
            <li><Link to="Home">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="Display">Display</Link></li>
        </ul>
    </nav>
}
