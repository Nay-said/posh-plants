import '../styles/PopUp.css'

const PopUp = ({ color, text, link }) => {
  return (
    <div id='Popup-wrap' className={`alert ${color} alert-dismissible show`} role="alert">
        {text}
        {link && <a href={link.href} className='ps-3'>{link.desc}</a>}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
  )
}
export default PopUp