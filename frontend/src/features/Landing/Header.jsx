import Logo from "../../components/Logo"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="flex justify-between py-4 px-6">
      <Logo/>
      <Nav/>
    </header>
  )
}
export default Header