import '../styles/PopUp.css'

const PopUp = ({ color, text, links }) => {
  return (
    <div id='Popup-wrap' className={`alert ${color} alert-dismissible show`} role="alert">
        {text}
        {links}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  )
}
export default PopUp