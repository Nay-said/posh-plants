import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div id="Go-Back" onClick={() => navigate(-1)} className="btn btn-outline-secondary">
      <i className="bi bi-arrow-90deg-left"></i> &nbsp;
      Back
    </div>
  )
}
export default BackButton