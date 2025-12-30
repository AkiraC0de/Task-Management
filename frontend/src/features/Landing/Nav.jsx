import { Link } from "react-router-dom"
import PrimaryButton from "../../components/PrimaryButton"

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4 items-center text-sm font-medium">
        <li>
          <Link to="/">
            About
          </Link>
        </li>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
        <li>
          <PrimaryButton
            className="text-xs px-4 py-2"
          >
            <Link to="/signup">
              Get Started
            </Link>
          </PrimaryButton>
        </li>
      </ul>
    </nav>
  )
}
export default Nav