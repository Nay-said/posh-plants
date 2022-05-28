const SmallBanner = ({ href, heading }) => {
  return (
    <div className="col-12 col-md-6">
      <a href={href}>{heading}</a>
    </div>
  )
}
export default SmallBanner