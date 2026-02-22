
import Button from "./Button";

let Add = ({a , b}) => {

    let addition_click=()=>{
        alert("Addition="+(a+b));
    }

    return (
        <>
            <Button label={"Addition"} fn={addition_click} />
        </>
    )
}

export default Add;