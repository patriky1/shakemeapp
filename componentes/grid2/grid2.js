import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const listTab = [
  {
    status: "Todos",
  },
  {
    status: "Vodka",
  },
  {
    status: "Cerveja",
  },
  {
    status: "Wisky",
  },
  {
    status: "Agua Tônica",
  },
];

const data = [
  {
    name: "cerveja Pilsen",
    status: "Cerveja",
    image: require("../cards/cardimage/Cerveja_pilsen.png"),
  },
  {
    name: "Vodka Rocks",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_rocks.png"),
  },
  {
    name: "Vodka Absolut",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_absolut.png"),
  },
  {
    name: "Wisky Jack Deniels",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_jackdeniels.png"),
  },
  {
    name: "Wisky Red Label",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_redlabel.png"),
  },
  {
    name: "Wisky PassPort Scotch",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_passport.png"),
  },
  {
    name: "Wisky Oldpar",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_oldpar.png"),
  },
  {
    name: "Wisky Black and White",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_blackandwhite.png"),
  },
  {
    name: "Wisky Ballatines",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_ballantines.png"),
  },
  {
    name: "Voldka Poliakov",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_poliakov.png"),
  },
  {
    name: "Voldka Skyy",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_sky.png"),
  
  },
  {
    name: "Voldka Absolut Elyx",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_Absolut_Elyx.png"),
  
  },
  {
    name: "Voldka Beluga",
    status: "Vodka",
    image: require("../cards/cardimage/vodka_beluga.png"),
  },
  {
    name: "Voldka Ketel One",
    status: "Vodka",
    image: require("../cards/cardimage/vodka_ketel_one.png"),
  },
  {
    name: "Voldka Stolychnaya Elit",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_Stolychnaya_Elit.png"),
  },
  {
    name: "Voldka Suntori Haku",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_Suntori_Haku.png"),
  },
  {
    name: "Whisky Makers Mark ",
    status: "Wisky",
    image: require("../cards/cardimage/Whisky_Makers_Mark.png"),
  },
  {
    name: "Whisky Singleton Of Dufftown",
    status: "Wisky",
    image: require("../cards/cardimage/Whisky_Singleton_Of_Dufftown.png"),
  },
  {
    name: "Whisky Jack Daniel's Gentleman Jack",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_Jack_Daniels_Gentleman_Jack.png"),
  },
  {
    name: "Whisky Chivas Regal",
    status: "Wisky",
    image: require("../cards/cardimage/Whisky_Chivas_Regal.png"),
  },
  {
    name: "Whisky Talisker Single Malt",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_talisker.png"),
  },
  {
    name: "Whisky Chita Suntory",
    status: "Wisky",
    image: require("../cards/cardimage/Whisky_Chita_Suntory.png"),
  },
];

const Bebidas = () => {
  const [status, setStatus] = useState("Todos");
  const [datalist, setDatalist] = useState(data);
  const [loaded] = useFonts({
    NerkoOne: require("../../assets/fonts/NerkoOne-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const setStatusFilter = (status) => {
    if (status !== "Todos") {
      setDatalist([...data.filter((e) => e.status === status)]);
    } else {
      setDatalist(data);
    }
    setStatus(status);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleStyleBebidas}>TAKE A DRINK</Text>
        <Text style={styles.text2}>Escolha sua bebida</Text>
      </View>

      <View style={styles.listTab}>
        {listTab.map((e) => (
          <TouchableOpacity
            horizontal={true}
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive,
              ]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
        <View style={styles.list}>
          {datalist.map((item) => (
            <View style={styles.containerposition}>
              <View key={item.name} style={styles.itemContainer}>
                <View style={styles.itemStatus}>
                  <Image style={styles.itemImage} source={item.image} />
                </View>
                <View style={styles.itemBody}>
                  <Text style={styles.itemName}> {item.name}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bebidas;

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    height: "100%",
    justifyContent: "space-between",
  },
  containerposition: {
    minHeight: 280,
    width: "45%",
  },
  itemContainer: {
    paddingHorizontal: 10,
    flex: 1,
    marginVertical: "5%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  listTab: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 15,
  },
  btnTab: {
    width: Dimensions.get("window").width / 5,
    flexDirection: "row",
    borderEndWidth: 0.2,
    borderColor: "white",
    padding: 5,
    justifyContent: "center",
    borderRadius: 10,
  },
  textTab: {
    fontSize: 13,
    textAlign:"center",
    height:30,
    width:80,
  },
  btnTabActive: {
    backgroundColor: "#219EBC",
    width:80,
    height:30,
  },
  textTabActive: {
    color: "#fff",
  },

  itemBody: {
    paddingVertical: 10,
    justifyContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  itemName: {
    fontWeight: "bold",
    fontSize: 12,
  },

  itemStatus: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  itemImage: {
    top: "5%",
    width: 130,
    height: 200,
  },

  titleStyleBebidas: {
    color: "black",
    fontFamily: "NerkoOne",
    fontSize: 35,
  },

  text2: {
    marginHorizontal: "5%",
    fontSize: 16,
    paddingVertical: 10,
  },
});
