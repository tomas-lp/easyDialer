import { View, Text, Image} from 'react-native'
import StatusBar from './components/StatusBar'
import ListaContactos from './components/ListaContactos'

const Main = () => (
  <View>
    <StatusBar />
    {/* <Text style={
      {
        textAlign: 'center', 
        fontSize:48, 
        marginTop:32,
        marginBottom:32
      }
      }>Llamar</Text> */}
    
    <ListaContactos />
  </View>
)

export default Main;