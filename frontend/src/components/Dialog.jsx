import { useNavigate } from 'react-router-dom'
import { getUserEmail, getUserName, isAdmin } from '../service'

const Dialog = ({ onClose, signOut }) => {
  let navigate = useNavigate()

  const goToPanel = () => {
    navigate('/Admin')
    onClose()
  }

  return (
    <div id="Dialog">
      <div id="Dialog-content">
        <div id="close-button" onClick={onClose}>
          <i className="bi bi-x"></i>
        </div>
  
        <section>
          <span className="d-block pb-2">Welcome, </span>
          <p>{getUserName()}</p>
          <p className="pb-3">{getUserEmail()}</p>
          <hr />
          {
            isAdmin() && 
              <button onClick={() => goToPanel()} className="btn btn-outline-primary btn-sm">
                Admin Panel
              </button>
          }
          <button onClick={signOut} className="btn btn-outline-secondary btn-sm mt-2">
            Sign Out
          </button>
        </section>
      </div>
    </div>
  )
}
export default Dialog