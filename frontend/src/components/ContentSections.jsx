const ContentSections = ({header, children}) => {
  return (
    <section>
      <h2 className="text-xl font-bold text-primary mb-3">{header}</h2>
      <p>
        {children}
      </p>
    </section>
  )
}
export default ContentSections