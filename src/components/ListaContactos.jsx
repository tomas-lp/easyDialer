import { View } from "react-native";
import Contacto from "./Contacto";
import { contactos } from "../model/ContactosModel";

export default ListaContactos = () => {
  return(
    <View id='Contactos' style={{alignItems:'center'}}>
      {contactos.map((contacto, index) =>
        <Contacto key={index} nombre={contacto.nombre} color={index} numero={contacto.numero}/>
      )}
    </View>
  )
}