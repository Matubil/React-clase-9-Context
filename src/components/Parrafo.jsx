import { useContext } from "react";
import StyleContext from "../contexts/StyleContext"

//SIN CONTEXT API
/*
const Parrafo = ({texto,style}) =>{
    return(
        <p style={style}>
            {texto}
        </p>
    )
}*/

//CON CONTEXT API
const Parrafo = ({texto}) =>{

    const context = useContext(StyleContext);

    return(
        <p style={context.style}>
            {texto}
        </p>
    )
}

export default Parrafo;