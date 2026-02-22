let Subtraction = ({a , b}) => {

    let subtraction_click=()=>{
        alert("Subtraction="+(a-b));
    }

    return (
        <>
            <button className="border-1 bg-red-900 hover:bg-blue-900 shadow-md hover:shadow-2xl rounded-md text-2xl m-2" onClick={()=>subtraction_click()}>Subtraction</button>
        </>
    )
}

export default Subtraction;