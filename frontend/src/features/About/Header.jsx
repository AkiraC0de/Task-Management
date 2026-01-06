const Header = ({pageTitle, lastUpdated}) => {
  return (
    <header className="mb-12 border-b border-gray-100 pb-8">
      <button 
        onClick={() => window.history.back()}
        className="text-primary hover:underline mb-6 flex items-center gap-2 font-medium"
      >
        ← Back to GTask
      </button>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        {pageTitle}
      </h1>
      <p className="text-gray-500 italic">Last Updated: {lastUpdated}</p>
    </header>
  )
}
export default Header