import ContainerHeader from "./ContainerHeader"
import ContainerFooter from "./ContainerFooter"

const Container = () => {
    return (
        <> 
            <ContainerHeader/>
            <div className='container-main'>container-main</div>
            <div className='container-footer'><ContainerFooter/></div>
        </>
    )
}

export default Container
