import { ScrollView, View } from "react-native";
import Contacto from "./Contacto";
import { contactos } from "../model/ContactosModel";

const ListaContactos = () => {
  return(
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}>
      <View id="contactos" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:'100%'}}>
        <View id='Contactos-col1' style={{display:'flex', width:'49%', alignItems:'center', marginTop:8}}>
          {contactos.map((contacto, index) =>
            index % 2 == 0 &&
              <Contacto key={index} nombre={contacto.nombre} color={index} numero={contacto.numero} imagen={contacto.imagen}/>
          )}
        </View>

        <View id='Contactos-col2' style={{display:'flex',width:'49%', alignItems:'center', marginTop:8}}>
        {contactos.map((contacto, index) =>
          index % 2 != 0 &&
            <Contacto key={index} nombre={contacto.nombre} color={index} numero={contacto.numero} imagen={contacto.imagen}/>
        )}
        </View>
      </View>
    </ScrollView>
  )
}

export default ListaContactos;