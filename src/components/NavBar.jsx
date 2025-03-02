import ButtonComponent from "./ButtonComponent"
import Logo from "./Logo"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

export default function NavBar () {
    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <Logo/>
                </Link>
                <Link to="/category/iPhone">
                    <ButtonComponent text="iPhone"/>
                </Link>
                <Link to="/category/iPad">
                    <ButtonComponent text="iPad"/>
                </Link>
                <Link to="/category/Accessories">
                    <ButtonComponent text="Accessories"/>
                </Link>
                <Link to="/cartWidget">
                    <CartWidget/>
                </Link>
            </nav>
        </>
    )
}
