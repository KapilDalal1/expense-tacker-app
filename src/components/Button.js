import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return <button style={{ backgroundColor: color }} className='btn' onClick={onClick}>{ text }</button>
}

Button.prototype = {
    color: PropTypes.string,
    text: PropTypes.string
}

Button.defaultProps = {
    color: 'tomato'
}

export default Button