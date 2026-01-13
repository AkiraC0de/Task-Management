import Spinner from "./Spinner";

const Loader = ({ isLoading, children, ...props }) => {
  if(!isLoading) return children

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/50">
      <Spinner />
    </div>
  );
};

export default Loader;
