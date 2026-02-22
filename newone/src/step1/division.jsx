let Division = ({a , b}) => {
    let division_click=()=>{
        alert("Division="+(a/b));
    }   

    return (
        <>
            <button className="border-1 bg-yellow-900 hover:bg-blue-900 shadow-md hover:shadow-2xl rounded-md text-2xl m-2" onClick={()=>division_click()}>Division</button>
        </>
    )
}

export default Division;