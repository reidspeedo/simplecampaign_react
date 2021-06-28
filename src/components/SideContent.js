

const SideContent = ({icon, onReveal}) => {


    if (icon === 'contacts') {return (
        <>
        <div className='side-content-header'><p>Contacts</p></div>
        <div className='side-content-labels'>
            <div id="overview" onClick={(e) => onReveal(e.target.id)}>Overview</div>
            <div id="managefields" onClick={(e) => onReveal(e.target.id)}>Manage Fields</div>
            <div id="import" onClick={(e) => onReveal(e.target.id)}>Import</div>
            <div id="export" onClick={(e) => onReveal(e.target.id)}>Export</div>
        </div>
        </>
    )} 
    else if (icon === 'automations') {return (
        <>
        <div className='side-content-header'>Automation</div>
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
 