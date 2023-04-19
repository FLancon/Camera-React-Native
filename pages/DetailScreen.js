import { StyleSheet, View, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import ImageViewer from "../components/ImageViewer";
import Button from "../components/Button";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function DetailScreen() {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signalement:</Text>
      <View style={styles.imageContainer}>
        <ImageViewer selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Text style={styles.title}>{selectedImage?.name}</Text>
      </View>
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
    paddingTop: 58,
  },
  title: {
    alignItems: "center",
    paddingTop: 50,
    fontWeight: "bold",
    fontSize: 20,
    color: "white"
  },
});
