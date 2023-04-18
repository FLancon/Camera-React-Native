import { StyleSheet, View, Text, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.title}>BIENVENUE A Ville Sur Mer</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("/assets/images/Banner.jpeg")}
          style={styles.image}
        />

        <Text style={{ justifyContent: "center", margin: 25 }}>
          Bienvenue dans cette chère bourgade de Ville Sur Mer, Tout le monde
          ici est très gentil et rien de grave n'arrive jamais.
        </Text>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <Text style={{ fontSize: 10, justifyContent: "center", margin: 25 }}>
          Bon dans le doute, voici un outil de signalisation d'incivilté:
        </Text>
      </View>

      <Text onPress={() => navigation.navigate("Details")}>Hello You</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
      },
      imageContainer: {
        flex: 1,
        paddingTop: 28,
      },
      image: {
        width: 400,
        height: 200,
        borderBottomStartRadius: 19,
        borderBottomEndRadius: 19,
      },
      footerContainer: {
        flex: 1 / 3,
        alignItems: "center",
      },
      title: {
        paddingTop: 28,
        fontWeight: "bold",
        fontSize: 20,
      }
});
