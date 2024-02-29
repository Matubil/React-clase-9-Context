import {connect} from "react-redux";
import Parrafo from "../../components/Parrafo"

function mapStateToProps(state) {
    return {
        texto: state.lorem
    }
}

export default connect(mapStateToProps)(Parrafo);

//ESTA FORMA DE HACERLO ES MÁS ACADEMICA 
//EN CAMBIO ACA(COMPARANDO CON PARRAFOLOREMHOOKS: DONDE ESTAS HACIENDO UN COMPONENTE QUE ENVUELVE A OTRO Y PODES HACER MAS LOGICA),
//NO ESTAS CREANDO OTRO COMPONENTE, SINO ESTAS REUTILIZANDO EL COMPONENTE DE ANTES Y A ESE COMPONENTE LE ESTAS PONIENDO LAS PROPS QUE SALE DEL STORE