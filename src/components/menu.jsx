import { Link } from "react-router-dom";
function Menu() {
    return (
        <div>
            <h1>Menu</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/car">Car</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/service-record">Service Record</Link></li>
                <li><Link to="/payment">Payment</Link></li>
                <li><Link to="/reports">Reports</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    )
}

export default Menu