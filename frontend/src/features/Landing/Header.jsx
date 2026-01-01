import { Link } from "react-router-dom"
import Logo from "../../components/Logo"
import Nav from "./Nav"
import { HOME_PAGE_LINK } from "../../constants/pageLinkConstant"

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-6">
      <Link to={HOME_PAGE_LINK}>
        <Logo/>
      </Link>
      <Nav/>
    </header>
  )
}
export default Header