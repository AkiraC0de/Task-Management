import { Link } from "react-router-dom"
import PrimaryButton from "../../components/PrimaryButton"
import { HOME_PAGE_LINK, LOGIN_PAGE_LINK, SIGNUP_PAGE_LINK } from "../../constants/pageLinkConstant"

const Nav = () => {
  return (
    <nav>
      <ul className="flex gap-4 items-center text-sm font-medium">
        <li>
          {/* THIS REQUIRED ITS OWN PAGE IN THE FUTURE */}
          <Link to={HOME_PAGE_LINK}> 
            About
          </Link>
        </li>
        <li>
          <Link to={LOGIN_PAGE_LINK}>
            Login
          </Link>
        </li>
        <li>
          <PrimaryButton
            className="text-xs px-4 py-2"
          >
            <Link to={SIGNUP_PAGE_LINK}>
              Get Started
            </Link>
          </PrimaryButton>
        </li>
      </ul>
    </nav>
  )
}
export default Nav