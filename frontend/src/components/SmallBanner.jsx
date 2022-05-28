const SmallBanner = ({ path, heading }) => {
  return (
    <div className="col-12 col-md-6">
      <a href={`/Shop/${path}`}>
        {heading} 
        <i className="bi bi-chevron-right ps-3"></i>
      </a>
    </div>
  )
}
export default SmallBanner