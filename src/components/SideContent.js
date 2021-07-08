import { Link } from "react-router-dom";

const SideContent = ({icon, onReveal}) => {

    if (icon === 'contacts') {return (
        <>
        <div className='side-content-header'><p>Contacts</p></div>
        <div className='side-content-labels'>
            <Link style={{ textDecoration: 'none' }} to="/"><div id="Overview" onClick={(e) => onReveal(e.target.id)}>Overview</div></Link>
            <Link style={{ textDecoration: 'none' }} to="/managefields"><div id="Manage Fields" onClick={(e) => onReveal(e.target.id)}>Manage Fields</div></Link>
            <Link style={{ textDecoration: 'none' }} to="/import"><div id="Import" onClick={(e) => onReveal(e.target.id)}>Import</div></Link>
        </div>
        </>
    )} 
    else if (icon === 'automations') {return (
        <>
        <div className='side-content-header'>Automations</div>
        <div className='side-content-labels'>
            <div id="automations" onClick={(e) => onReveal(e.target.id)}>automations</div>
        </div>
        </>
    )
    }
    else { return (
        <>
        <div className='side-content-header'>Settings</div>
        <div className='side-content-labels'>
            <div id="settings" onClick={(e) => onReveal(e.target.id)}>settings</div>
        </div>
        </>
    )
    }
}

export default SideContent
 