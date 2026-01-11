import { ChevronLeft, MailCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { LOGIN_PAGE_LINK } from "../../../constants/pageLinkConstant";
import useAuth from "../../../hooks/useAuth";

const EmailSentNotice = () => {
  const { user } = useAuth(); 

  return (
    <div className="max-w-100 mt-14 px-8 py-14 flex items-center flex-col md:shadow-lg rounded-lg text-center">
      <div className="bg-primary/10 p-4 rounded-full">
        <MailCheck className="text-primary" size={80} />
      </div>
      
      <h1 className="font-bold text-2xl text-primary mt-4">
        Check your email
      </h1>

      <p className="text-primary-text my-4">
        We've sent a password reset link to <br />
        <strong className="text-primary">{user?.email || "your email"}</strong>
      </p>

      <p className="text-secondary-text text-sm mb-8">
        Didn't receive the email? Check your spam folder or try again.
      </p>

      <Link
        to={LOGIN_PAGE_LINK}
        className="flex gap-2 items-center text-primary font-semibold hover:underline transition-all"
      >
        <ChevronLeft size={20} />
        <span>Back to Login</span>
      </Link>
    </div>
  );
};

export default EmailSentNotice;