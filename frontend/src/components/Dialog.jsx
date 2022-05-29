import { getUserEmail, getUserName } from '../service'

const Dialog = ({ onClose, signOut }) => {
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
          <button onClick={signOut} className="btn btn-outline-secondary mt-2">
            Sign Out
          </button>
        </section>
      </div>
    </div>
  )
}
export default Dialog