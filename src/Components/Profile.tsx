/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TextInput, StyleSheet, Button} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* images */}
      <View style={styles.images}>
        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1640682567682-472e5e9eb889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80',
            }}
            style={{width: '100%', height: '100%'}}
          />
        </View>
        <View style={styles.image}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1640682567682-472e5e9eb889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80',
            }}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      {/* __end-images */}

      <View style={styles.descContainer}>
        {/* description */}
        <Text style={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          officia, commodi amet fugit recusandae soluta nisi fugiat dignissimos,
          autem, vero cupiditate possimus sunt ut itaque.
        </Text>
        {/* en__description */}

        {/* input */}
        <TextInput placeholder="Enter your name" style={styles.input} />
        {/* __end-input */}

        {/* profile-user */}
        <View style={styles.userImage}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1640682567682-472e5e9eb889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1953&q=80',
            }}
            style={{
              width: 150,
              height: 150,
              borderRadius: 100,
            }}
          />
        </View>
        {/* __end-profile-user */}

        {/* actions */}
        <View style={styles.actions}>
          <View style={{width: '40%'}}>
            <Button title="Keluar" color="#C84361" />
          </View>
          <View style={{width: '40%'}}>
            <Button title="Simpan" color="#57C5B6" />
          </View>
        </View>
        {/* __end-actions */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
  },

  descContainer: {
    backgroundColor: 'salmon',
  },

  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  image: {
    width: 150,
    height: 150,
  },

  description: {
    textAlign: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },

  userImage: {
    alignItems: 'center',
  },

  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Profile;
