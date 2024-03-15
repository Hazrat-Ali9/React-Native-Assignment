import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Entypo";

// Error Fixed


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.contentWrapper}>
        <View style={styles.hero}>
          <View>
            <Image
              style={styles.image}
              source={{
                uri: "https://miro.medium.com/v2/resize:fit:800/1*C6KqIOLCzoDpottbBxmEZA.png",
              }}
            />
          </View>

          <View>
            <Text style={{ fontWeight: 700, fontSize: 20 }}>The Octocat</Text>
            <Text style={{ color: "#257FFF" }}>@ootocat</Text>
            <Text style={{ marginTop: 8, fontWeight: 300 }}>
              Joined 25 Jan 2011
            </Text>
          </View>
        </View>

        <Text style={{ marginTop: 40, lineHeight: 25, fontSize: 15 }}>
          React Native: JavaScript framework for mobile app development. Single
          codebase for iOS and Android.
        </Text>

        <View style={styles.stats}>
          <View style={{ alignItems: "center" }}>
            <Text>Repost</Text>
            <Text style={{ fontSize: 18, fontWeight: 700, marginTop: 10 }}>
              8
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Followers</Text>
            <Text style={{ fontSize: 18, fontWeight: 700, marginTop: 10 }}>
              2928
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text>Following</Text>
            <Text style={{ fontSize: 18, fontWeight: 700, marginTop: 10 }}>
              9
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginBottom: 10,
            }}
          >
            <Icon name="location-pin" size={25} />
            <Text style={{ fontSize: 15 }}>San Francisco</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginBottom: 10,
            }}
          >
            <Icon name="link" size={25} />
            <Text style={{ fontSize: 15 }}>https://github.blog</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginBottom: 10,
            }}
          >
            <Icon name="twitter" size={25} color={"gray"} />
            <Text style={{ fontSize: 15, color: "gray" }}>Not Available</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              marginBottom: 10,
            }}
          >
            <Icon name="home" size={25} />
            <Text style={{ fontSize: 15 }}>@github</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  contentWrapper: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOpacity: 10,
    elevation: 50,
  },
  hero: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 99999,
    backgroundColor: "#F6F8FF",
  },

  stats: {
    backgroundColor: "#F6F8FF",
    borderRadius: 10,
    padding: 20,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
