
const Button = ({text, color}) => {
    return (
        <button style={{backgroundColor: color}} className='btn'>{text}</button>
            
    )
}

Button.defaultProps = {
    color: '#7976FF',
    text: 'Click',
}

export default Button
