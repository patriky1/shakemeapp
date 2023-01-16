import {
    StyleSheet,
    Image,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
import { useFonts } from "expo-font";
import { styles } from "../../App";

const Bebidas = ({ navigation }) => {
  const [loaded] = useFonts({
    EBGaramond: require("../../assets/fonts/EBGaramond-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container1}>
    <ScrollView vertical={true}>
    



    </ScrollView>
    </SafeAreaView>
  );
}
export default Bebidas;
