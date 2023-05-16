import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <View style={styles.container} >
      <Image
          source={require("/assets/images/logo.png")}
          style={styles.logo}
        />
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
          Bon dans le doute, un outil de signalisation d'incivilit est disponible dans le menu:
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
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
  logo: {
    height: 100,
    width: 150
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
});
