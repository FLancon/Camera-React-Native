import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';
import * as MailComposer from 'expo-mail-composer';
import { Camera } from 'expo-camera';


const DetailScreen = () => {
  const [location, setLocation] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [hasPermission, setHasPermission] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Permission to access location was denied');
        }

        let currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation);
      } catch (error) {
        Alert.alert(error.message);
      }
    })();
  }, []);
  
  const handleTakePhoto = async () => {
    // let result = await ImagePicker.launchCameraAsync({
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };


  const sendEmail = () => {
    const message = `
      Nom: ${name}
      Prénom: ${surname}
      Adresse email: ${emailAddress}
      Latitude: ${location.coords.latitude}
      Longitude: ${location.coords.longitude}
    `;

    MailComposer.composeAsync({
      recipients: ['PeteGarden@gmail.com'],
      subject: 'Nouvelle soumission de formulaire',
      body: message ,
      attachments: [photo],
    });
  };

  useEffect(() => {
    if (name && surname && emailAddress && photo && location) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [name, surname, emailAddress, photo, location]);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
        <Text style={styles.buttonText}>Prendre une photo</Text>
      </TouchableOpacity>
      {photo && <Image source={{ uri: photo }} style={styles.photo} />}
      {location && (
        <Text style={styles.location}>
          Latitude: {location.coords.latitude}, Longitude:{' '}
          {location.coords.longitude}
        </Text>
      )}
      {photo && location && (
        
        <View style={styles.form}>

          <Text style={styles.label}>Nom:</Text>
          <TextInput
            onChangeText={setName}
            value={name}
            style={styles.input}
          />
          <Text style={styles.label}>Prénom:</Text>
          <TextInput
            onChangeText={setSurname}
            value={surname}
            style={styles.input}
          />
          <Text style={styles.label}>Adresse email:</Text>
          <TextInput
            onChangeText={setEmailAddress}
            value={emailAddress}
            style={styles.input}
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={[styles.button, isButtonDisabled ? styles.disabledButton : null]}
            onPress={sendEmail}
            disabled={isButtonDisabled}
          >
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#008080',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#C0C0C0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  form: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});

export default DetailScreen;
