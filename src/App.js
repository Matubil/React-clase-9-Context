import logo from './logo.svg';
import './App.css';
import Parrafo from './components/Parrafo';
import lightStyles from './styles/lightStyles';
import StyleContext from './contexts/StyleContext';
import { useState } from "react";
import CambiarEstilo from './components/CambiarEstilo';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ParrafoLoremHooks from './redux/containers/ParrafoLoremHooks.container';
import ParrafoLoremConnect from './redux/containers/ParrafoLoremConnect.container';
import BotonCambiarLorem from './redux/containers/BotonCambiarLorem.container';

function App() {

  const lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus."
  const lorem2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus."
  const lorem3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus."

  const [globalStyle, setGlobalStyle] = useState(lightStyles);

  return (
    <Provider store={store}>
      <StyleContext.Provider value={{
        style: globalStyle,
        cambiarEstilo: (estiloNuevo) => { setGlobalStyle(estiloNuevo) }
      }}>
        {/*Observo que se me repite mucho pasar la misma pro (styles) a todos */}
        {/*
      <Parrafo texto={lorem1} style={darkStyles}/>
      <Parrafo texto={lorem2} style={darkStyles}/>
      <Parrafo texto={lorem3} style={darkStyles}/>
      */}
        <CambiarEstilo />
        <BotonCambiarLorem />
        <ParrafoLoremHooks />
        <ParrafoLoremConnect/>
        <Parrafo texto={lorem1} />


      </StyleContext.Provider>
    </Provider>
  );
}
//SIN REDUX

{/*
  return (
    <Provider store={store}>
    <StyleContext.Provider value={{
      style: globalStyle,
      cambiarEstilo:(estiloNuevo) => {setGlobalStyle(estiloNuevo )}
      }}>
      <CambiarEstilo/>
      <Parrafo texto={lorem1}/>
      <Parrafo texto={lorem2}/>
      <Parrafo texto={lorem3}/>


    </StyleContext.Provider>
    </Provider>
  );
}*/}
export default App;
