import { Link } from "react-router-dom";
import { PRIVACY_AND_POLICY_PAGE_LINK, TERMS_AND_CONDITIONS_PAGE_LINK } from "../../constants/pageLinkConstant";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 mt-auto border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800 text-lg tracking-tight">GTask</span>
          </div>

          <nav className="flex gap-6 text-sm font-medium text-gray-500">
            <Link to={PRIVACY_AND_POLICY_PAGE_LINK} className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to={TERMS_AND_CONDITIONS_PAGE_LINK} className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            {/* <Link href="#" className="hover:text-blue-600 transition-colors">Contact</Link> */}
          </nav>

          <p className="text-sm text-gray-400">
            &copy; {currentYear} AkiraCode. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;