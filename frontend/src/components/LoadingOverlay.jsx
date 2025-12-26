import Spinner from "./Spinner"

const LoadingOverlay = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-200 bg-black/25">
      <Spinner/>
    </div>
  )
}
export default LoadingOverlay