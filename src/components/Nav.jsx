import ButtonComponent from "./ButtonComponent"
import Logo from "./Logo"
import CartWidget from "./CartWidget"

export default function Nav () {
    return (
        <>
            <nav className="navbar">
                <Logo/>
                <ButtonComponent text="iPhone"/>
                <ButtonComponent text="iPad"/>
                <ButtonComponent text="Mac"/>
                <ButtonComponent text="Watch"/>
                <ButtonComponent text="Accessories"/>
                <CartWidget/>
            </nav>
        </>
    )
}
