
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
      <View style={styles.rectangle}></View>
      <View style={styles.logoposition}>
        <Image source={require("../../imagens/logo.png")} />
      </View>
      <View style={styles.circle}>
        <TouchableOpacity>
          <Text style={styles.textproduct}> R$</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textingredients}> Escolha os Igredientes.</Text>

      <ScrollView horizontal={true}></ScrollView>
    </SafeAreaView>
  );
}
export default Bebidas;