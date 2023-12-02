import { View, Image, StyleSheet } from "react-native";
import Constants from 'expo-constants'

const StatusBar = () => (
  <View style={styles.container}>
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: Constants.statusBarHeight,
    // shadowColor: '#000',
    // shadowRadius: 5,
    // shadowOpacity: 0.2,
    // shadowOffset: {
    //   width: 0,
    //   height: 0
    // }
  }
})

export default StatusBar;