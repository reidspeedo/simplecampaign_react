

const SideContent = ({icon}) => {
    if (icon === 'contacts') {return (
        <>
        <div className='side-content-header'><p>Contacts</p></div>
        <div className='side-content-labels'>
            <div>Overview</div>
            <div>Manage Fields</div>
            <div>Import</div>
            <div>Export</div>
        </div>
        </>
    )} 
    else if (icon === 'automations') {return (
        <>
        <div className='side-content-header'>Automation</div>
        <div className='side-content-labels'>
            <div>automations</div>
        </div>
        </>
    )
    }
    else { return (
        <>
        <div className='side-content-header'>Settings</div>
        <div className='side-content-labels'>
            <div>settings</div>
        </div>
        </>
    )
    }
}

export default SideContent
 