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
  { id:1,
    status: "Todos",
  },
  { id:2,
    status: "Vodka",
  },
  { id:3,
    status: "Cerveja",
  },
  { id:4,
    status: "Wisky",
  },
  { id:5,
    status: "Agua Tônica",
  },
];

const data = [
  { id:'1',
    name: "cerveja Pilsen",
    status: "Cerveja",
    image: require("../cards/cardimage/Cerveja_pilsen.png"),
  },
  { id:'2',
    name: "Vodka Rocks",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_rocks.png"),
  },
  { id:'3',
    name: "Vodka Absolut",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_absolut.png"),
  },
  { id:'4',
    name: "Wisky Jack Deniels",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_jackdeniels.png"),
  },
  { id:'5',
    name: "Wisky Red Label",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_redlabel.png"),
  },
  { id:'6',
    name: "Wisky PassPort Scotch",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_passport.png"),
  },
  { id:'7',
    name: "Wisky Oldpar",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_oldpar.png"),
  },
  { id:'8',
    name: "Wisky Black and White",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_blackandwhite.png"),
  },
  { id:'9',
    name: "Wisky Ballatines",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_ballantines.png"),
  },
  { id:'10',
    name: "Vodka Poliakov",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_poliakov.png"),
  },
  { id:'11',
    name: "Vodka Skyy",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_sky.png"),
  
  },
  { id:'12',
    name: "Vodka Absolut Elyx",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_Absolut_Elyx.png"),
  
  },
  { id:'13',
    name: "Vodka Beluga",
    status: "Vodka",
    image: require("../cards/cardimage/vodka_beluga.png"),
  },
  { id:'14',
    name: "Vodka Ketel One",
    status: "Vodka",
    image: require("../cards/cardimage/vodka_ketel_one.png"),
  },
  { id:'15',
    name: "Vodka Stolychnaya Elit",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_Stolychnaya_Elit.png"),
  },
  { id:'16',
    name: "Vodka Suntori Haku",
    status: "Vodka",
    image: require("../cards/cardimage/Vodka_Suntori_Haku.png"),
  },
  { id:'17', 
    name: "Whisky Makers Mark ",
    status: "Wisky",
    image: require("../cards/cardimage/Whisky_Makers_Mark.png"),
  },
  { id:'18',
    name: "Whisky Singleton Of Dufftown",
    status: "Wisky",
    image: require("../cards/cardimage/Whisky_Singleton_Of_Dufftown.png"),
  },
  { id:'19',
    name: "Whisky Jack Daniel's Gentleman Jack",
    status: "Wisky",
    image: require("../cards/cardimage/Wisky_Jack_Daniels_Gentleman_Jack.png"),
  },
  { id:'20',
    name: "Whisky Chivas Regal",
    status: "Wisky",
    image: require("../cards/cardimage/Whisky_Chivas_Regal.png"),
  },
  { id:'21',
    name: "Whisky Talisker Single Malt",
    status: "Wisky",
    image: require("../cards/cardimage/wisky_talisker.png"),
  },
  { id:'22',
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
      setDatalist([...datalist.filter((e) => e.status === status)]);
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
            key={e.id}
            horizontal={true}
            style={[styles.btnTab, status === e.status && styles.btnTabActive]}
            onPress={() => setStatusFilter(e.status)}
          >
            <Text
              style={[
                styles.textTab,
                status === e.status && styles.textTabActive]}
            >
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView>
  <View style={styles.list}>
    {datalist.map((item, index) => (
      <View style={styles.containerposition} key={item.image}>
        <View style={styles.itemContainer}>
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
    width: Dimensions.get("window").width / 5.5,
    flexDirection: "row",
    borderEndWidth: 2,
    borderColor: "white",
    padding: 5,
    justifyContent: "center",
    borderRadius: 10,
  },
  textTab: {
    fontSize: 13,
    textAlign:"center",
    height:30,
    width:90,
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
    marginTop:"20%", 
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
    top: "8%",
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
