const Hero = () => {
  return (
    <div className="max-w-160 flex flex-col items-center text-center">
      <p className="bg-primary/60 px-3 text-xs font-semibold py-1.5 w-fit text-white rounded-3xl mb-5 anim-fade-down">
        Online Group Task Management
      </p>
      <h1 className="text-2xl md:text-4xl text-primary-text font-bold anim-fade-down">
        Every <span className="text-primary">contribution matters</span>. Makes your teams’ hard work visible.
      </h1>
      <p className="text-center text-sm md:text-md max-w-110 font-medium anim-fade-up text-primary-text my-4">
        Move beyond basic to-do lists. GTask provides the structure your team needs to stay organized and the transparency required to ensure your hard work never goes unnoticed by your peers or instructors.
      </p>
    </div>
  )
}
export default Hero