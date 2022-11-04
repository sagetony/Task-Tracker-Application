import PropsTypes from 'prop-types'
function Button({color, text, onClick}) {
  return (
    <button style = {{backgroundColor: color}} onClick= {onClick} className="btn">{text}</button>
  )
}

Button.defaultProps = {
    color: "steelblue"
}

Button.propsTypes = {
    text: PropsTypes.string,
    color: PropsTypes.string
}
export default Button
