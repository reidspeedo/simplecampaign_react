const Icons = ({styl, img, onShow}) => {

    return (
        <div onClick={onShow} className={styl}><img alt='icons' src={img}/></div>
    )
}
export default Icons

