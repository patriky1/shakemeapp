
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
    id:1,
    name: 'Vodka Rocks',
    status: 'Vodka',
    image: require("../cards/cardimage/Vodka_rocks.png")
  }, 
  { id:2,
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
  container:{
    flex:1,
    paddingHorizontal:10,
    justifyContent: "center",
    backgroundColor:"white"
  },
  listTab:{
    flexDirection:"row",
    alignSelf:"center",
    marginBottom:20
  },
  btnTab:{
    width: Dimensions.get('window').width / 4.5,
    flexDirection:"row",
    borderEndWidth: 0.5,
    borderColor:"#EBEBEB",
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
    borderRadius:10,
    paddingHorizontal: 10,
    flex: 1,
    borderWidth: 1,
    flexDirection: "column",
    width:"40%",
    marginVertical: "1%",
    
  },

  itemBody:{
    paddingHorizontal: 1,
    paddingVertical:10,
  },

  itemName:{
    fontWeight:"bold",
    fontSize:12,
    textAlign:"center",    
  },

  itemStatus:{
    paddingHorizontal: 10,
    justifyContent:"center",
    right:12,
  },
  itemImage:{
    top:"2%",
    right:"25%",
    width: 200,
    height: 200,
    
  },

  titleStyleBebidas: {
    color: "black",
    fontFamily: "NerkoOne",
    fontSize: 35,
    textAlign: "left",
    left: "3%",
  },
  text2: {
    marginHorizontal: "5%",
    fontSize: 16,
    paddingVertical:10,
  },



})