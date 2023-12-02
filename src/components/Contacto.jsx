import { View, Text, Image, Linking, Pressable } from "react-native";

const Contacto = (props) => {
  let color = props.color;

  while (color >=5){
    color -=5;
  }
  switch(color){
    case 0:
      color = '#ffa06b';
      break;
    case 1:
      color = '#6bffaf';
      break;
    case 2:
      color = '#8c9fff';
      break;
    case 3:
      color = '#cc8aff';
      break;
    case 4:
      color = '#ff84a1';
      break;
  }

  const llamar = (num) => {
    Linking.openURL(`whatsapp://send?phone=\${${num}}`);
    // Linking.openURL(`tel:${num}`);
  }

  return (
    <View style={
      {
        width:'100%',
        padding:0,
        backgroundColor: color,
        borderRadius:16,
        elevation:8,
        flexDirection:'column',
        alignItems:"center",
        marginBottom:10
      }}>
      <Pressable style={{width:'100%'}} onPress={()=>{llamar(props.numero)}}>
        <View style={{flexDirection:'column', alignItems:"center", width:'100%'}}>
          <Image
          // source={require('../../assets/graciela.jpeg')}
          source={props.imagen}
          style={{width:100, height:100, backgroundColor:'#fff'}}
          ></Image>

          <Text 
            style={
            {
              fontSize:30,
              fontWeight: 400,
              marginLeft:16
            }}>
              {props.nombre}
          </Text>   
        </View>
      </Pressable>   
    </View>
)}

export default Contacto;