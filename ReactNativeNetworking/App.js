import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";

/*
Pull to refresh:
onrefresh and refreshing propss
Note : They automatically render a loading spinner
*/

export default function App() {
  const [postlist, setPostlist] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [isrefreshing, setIsrefreshing] = useState(false);

  useEffect(() => {
    fetchData();
    setIsloading(false);
  }, []);

  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostlist(data);
  };

  if (isloading) {
    return (
      <SafeAreaView style={styles.loader}>
        <ActivityIndicator size={"large"} color="red" />
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  const handleRefresh = () => {
    setIsrefreshing(true);
    fetchData(20);
    setIsrefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listcontainer}>
        <FlatList
          data={postlist}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
              </View>
            );
          }}
          refreshing={isrefreshing}
          onRefresh={handleRefresh}
          ItemSeparatorComponent={() => {
            return <View style={{ height: 5 }} />;
          }}
          ListEmptyComponent={() => {
            return <Text>Empty List</Text>;
          }}
          ListFooterComponent={() => {
            return <Text> End Of List</Text>;
          }}
          ListHeaderComponent={() => {
            return <Text>List of post</Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listcontainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 8,
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
    paddingBottom: 5,
  },
  body: {
    fontSize: 20,
    color: "gray",
  },
  loader: {
    flext: 1,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
