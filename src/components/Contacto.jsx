import { View, Text, Image, Linking, TouchableWithoutFeedback } from "react-native";

export default Contacto = (props) => {
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

  llamar = (num) => {
    // Linking.openURL(`whatsapp://send?phone=\${${props.numero}}`);
    Linking.openURL(`tel:${num}`);
  }

  return (
    <View style={
      {
        width:'90%',
        padding:0,
        backgroundColor: color,
        borderRadius:16,
        elevation:8,
        flexDirection:'row',
        alignItems:"center",
        marginBottom:10
      }}>
      <TouchableWithoutFeedback style={{width:'100%'}} onPress={()=>{llamar(props.numero)}}>
        <View style={{flexDirection:'row', alignItems:"center", width:'100%'}}>
          <Image
          source={require('../../assets/user1.png')}
          style={{width:100, height:100, backgroundColor:'#fff', borderTopLeftRadius:16, borderBottomLeftRadius:16}}
          ></Image>

          <Text 
            style={
            {
              fontSize:20,
              fontWeight: 400,
              marginLeft:16
            }}>
              {props.nombre}
          </Text>   
        </View>
      </TouchableWithoutFeedback>   
    </View>
)}