import logowname from '../images/Logo_w_Name.png';

const Header = ({text}) => {
    return (
        <>
            <header className='header'>
                <p>{text}</p>
                <img alt='logo-w-name' src={logowname}/>
            </header>
        </>
    )
}

export default Header
