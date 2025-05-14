import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  StyleSheet,
  Text,
  View,
  SectionList,
} from "react-native";
import pokemonlist from "./data.json";
import sectionLitsData from './grouped-data.json'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonlist.map((pokom) => {
          console.log('Map >>>>',pokom.id)
          return (
            <View style={ styles.card} key={pokom.id}>
              <Text style={styles.cardText}>{pokom.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      {/* <View style={styles.scrollView}>
        <FlatList
          data={pokemonlist}
          renderItem={({ item }) => {
            console.log(">>>>", item.id);
            return (
              <View style={styles.card} key={item.id}>
                <Text style={styles.cardText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id.toString()}
          //     {/* //Returns a string
          //     //used to identify unique items in the list
          //     //by default it returns item.key / item.id else item.index
        />
      </View> */}

      <SectionList
        sections={sectionLitsData}
        renderItem={({ item }) => {
          return (
             <View style={styles.card}>
                <Text style={styles.cardText}>{item}</Text>
              </View>
          )
        }}
        renderSectionHeader={({ section }) => {
          return(
            <Text style={styles.sectionHeaderText}>{section.type}</Text>
          )
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 16,
  },
  cardText: {
    fontSize: 15,
  },
  sectionHeaderText: {
    backgroundColor: 'white',
    fontSize: 24,
    fontWeight:'bold'
  }
});
