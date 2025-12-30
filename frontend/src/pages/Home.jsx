import Hero from "../features/Landing/Hero"
import LinkButtons from "../features/Landing/LinkButtons"

const Home = () => {
  return (
    <div className="flex-1 flex flex-col items-center mt-10 p-6">
      <Hero/>
      <LinkButtons/>
    </div>
  )
}

export default Home