import mainLogo from '../images/Logo_small.png';
import contSym from '../images/Contacts.png';
import autoSym from '../images/Automation.png';
import settSym from '../images/Settings.png';
import Icons from './Icons';
import SideContent from './SideContent';
import { useState } from 'react';


const Sidebar = ({onReveal}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [iconstate, setIconstate] = useState('')

    const showHidden = (icon) => {
        if (icon !== iconstate)
        {
            setIsOpen(false)
        }
        else {
            setIsOpen(!isOpen)
        }
        // console.log(iconstate)
        setIconstate(icon)
    }
    
    return (
        <>
          <div className='sidebar-fixed'>
              <Icons styl='side-bar-logo' img={mainLogo}/>
              <Icons onShow={() => showHidden('contacts')} styl='side-bar-icons' img={contSym}/>
              <Icons onShow={() => showHidden('automations')} styl='side-bar-icons' img={autoSym}/>
              <Icons onShow={() => showHidden('settings')} styl='side-bar-icons' img={settSym}/>
          </div>

        <div className={isOpen ? 'sidebar-hidden': 'sidebar-show'}>
            <SideContent onReveal={onReveal} icon={iconstate}/>
        </div>
        </>
    )
}

export default Sidebar
