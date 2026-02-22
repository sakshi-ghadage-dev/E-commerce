
let Button=({label,fn})=>{

  return(
    <>
    <button className="border-1 bg-green-900 hover:bg-blue-900 shadow-md hover:shadow-2xl rounded-md text-2xl m-2" 
    onClick={()=>fn()}>{label}</button>
    </>
  )
}

export default Button;