const Content =(props)=>{
    return(<>
    <div className="card mt-2">
        <div className="card-body">
        {props.children}
        </div>
    </div>
    </>)
}

export default Content