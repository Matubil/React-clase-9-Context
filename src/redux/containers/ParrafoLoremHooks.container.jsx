import { useSelector } from "react-redux";
import Parrafo from "../../components/Parrafo";

const ParrafoLoremHooks = () => {
    const lorem = useSelector(state => state.lorem);
    return (
            <Parrafo texto={"Texto por HOOK " +  lorem} />
    )
}

export default ParrafoLoremHooks;

//ACA ESTAS HACIENDO UN COMPONENTE QUE ENVUELVE A OTRO Y PODES HACER MAS LOGICA