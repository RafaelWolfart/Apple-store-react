import ButtonComponent from "./ButtonComponent"
import Logo from "./Logo"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

export default function Nav () {
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
                <Link to="/category/Mac">
                    <ButtonComponent text="Mac"/>
                </Link>
                <Link to="/category/Watch">
                    <ButtonComponent text="Watch"/>
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
