
import React, {useState} from "react";
import { StyleSheet, Text, View, Dimensions, FlatList, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const listTab = [
  {
    status: 'Todos'
  },
  {
    status: 'Vodka'
  },
  {
    status: 'Cerveja'
  },  
  {
    status: 'Wisky'
  },
]

const data =[
  {
    
    name: 'Vodka Rocks',
    status: 'Vodka',
    image: require("../cards/cardimage/Vodka_rocks.png")
  }, 
  { 
    name: 'Vodka Absolut',
    status: 'Vodka',
    image: require("../cards/cardimage/Vodka_absolut.png")
  },
  {
    name: 'Wisky Jack Deniels',
    status: 'Wisky',
    image: require("../cards/cardimage/Wisky_jackdeniels.png")
  },  
  {
    name: 'Wisky Red Label',
    status: 'Wisky',
    image: require("../cards/cardimage/Wisky_redlabel.png")
  },  
  {
    name: 'Wisky PassPort Scotch',
    status: 'Wisky',
    image: require("../cards/cardimage/wisky_passport.png")
  },
  {
    name: 'Wisky Oldpar',
    status: 'Wisky',
    image: require("../cards/cardimage/wisky_oldpar.png")
  },
  {
    name: 'Wisky Black and White',
    status: 'Wisky',
    image: require("../cards/cardimage/Wisky_blackandwhite.png")
  },
  {
    name: 'Wisky Ballatines',
    status: 'Wisky',
    image: require("../cards/cardimage/wisky_ballantines.png")
  },
  {
    name: 'Voldka Poliakov',
    status: 'Vodka',
    image: require("../cards/cardimage/Vodka_poliakov.png")
  },
  {
    name: 'cerveja Pilsen',
    status: 'Cerveja',
    image: require("../cards/cardimage/Cerveja_pilsen.png")
  },  
  

]

const Bebidas = () => {
  const [status, setStatus] = useState('Todos')
  const [datalist, setDatalist] = useState(data)
  const [loaded] = useFonts({
    NerkoOne: require("../../assets/fonts/NerkoOne-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }


  const setStatusFilter = status => {
    if (status !== 'Todos'){
      setDatalist([...data.filter(e => e.status === status)])
    } else{
      setDatalist(data)
    }
    setStatus(status)
  }



const renderItem = ({item, index}) =>{
  return(

  <View style={styles.containerposition}>
    <View key={index} style={styles.itemContainer}>
      <View style={styles.itemStatus}>
        <Image
        style={styles.itemImage}
        source={item.image}
        />
      </View>
      <View style={styles.itemBody}>
        <Text style={styles.itemName}> {item.name}</Text>
      </View>
    </View>
  </View>
  )
}

  return(
    <SafeAreaView style={styles.container}>
      <View>
          <Text style={styles.titleStyleBebidas}>TAKE A DRINK</Text>
          <Text style={styles.text2}>Escolha sua bebida</Text>
        </View>


      <View style={styles.listTab}>
        {
          listTab.map(e => (
          <TouchableOpacity horizontal={true}
          style={[styles.btnTab, status === e.status && styles.btnTabActive]}
          onPress={() => setStatusFilter(e.status)}
          >
            <Text style={[styles.textTab, status === e.status && styles.textTabActive]}>{e.status}</Text>
          </TouchableOpacity>
          ))
        }
      </View>
        <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        />



    </SafeAreaView>

  )
}

export default Bebidas;

const styles = StyleSheet.create({
  containerposition:{
    flexDirection:"row",
    flex:1,
    width: "45%",
    height: 280,
    flexWrap:"wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    

  },

  container:{
    flex:1,
    paddingHorizontal:10,
    backgroundColor:"white",
  },
  listTab:{
    flexDirection:"row",
    alignSelf:"center",
    marginBottom:20,
    

    
   
  },
  btnTab:{
    width: Dimensions.get('window').width / 4.5,
    flexDirection:"row",
    borderEndWidth: 0.5,
    borderColor:"white",
    padding:10,
    justifyContent:"center",
    borderRadius:10,
  },
  textTab:{
    fontSize:16,
  },
  btnTabActive:{
    backgroundColor: "#219EBC"
  },
  textTabActive:{
    color: "#fff"
  },
  itemContainer:{
    
    paddingHorizontal: 10,
    flex:1,
    marginVertical: "20%",
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    flexWrap:"wrap",  
    flexDirection:'row',

  },

  itemBody:{
    paddingVertical:10,
    justifyContent:"flex-start",
    flexDirection:"row",
    flexWrap:"wrap",

    
  },

  itemName:{
    fontWeight:"bold",
    fontSize:12,
        
  },

  itemStatus:{
    paddingHorizontal: 10,
    justifyContent:"center",
    
  },
  itemImage:{
    top:"2%",
    right:"18%",
    width: 200,
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
    paddingVertical:10,
  },



})