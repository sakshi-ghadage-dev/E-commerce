let Multiplication = ({a , b}) => {
    let multiplication_click=()=>{
        alert("Multiplication="+(a*b));
    }       

    
    return (
        <>
            <button className="border-1 bg-purple-900 hover:bg-blue-900 shadow-md hover:shadow-2xl rounded-md text-2xl m-2" onClick={()=>multiplication_click()}>Multiplication</button>
        </>
    )
}

export default Multiplication;