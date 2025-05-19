import { Link } from "react-router-dom";

const SwitchMessage = ({ state = 'login' }) => {
  return (
    <p className="text-gray-500">
      {state === 'login' ? (
        <>
          {"Don't have an account? "}
          <Link className="text-blue-500 font-semibold" to="/signup">
            Sign up here.
          </Link>
        </>
      ) : (
        <>
          {"Already have an account? "}
          <Link className="text-blue-500 font-semibold" to="/login">
            Log in here.
          </Link>
        </>
      )}
    </p>
  );
};

export default SwitchMessage;
