/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <>
      <View style={styles.headcop}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          Welcome back, Afrzl
        </Text>
      </View>
      <ScrollView style={styles.container}>
        {/* images */}
        <View style={styles.images}>
          <View style={styles.image}>
            <Image
              source={require('../../public/images/mech-1.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          </View>
          <View style={styles.image}>
            <Image
              source={require('../../public/images/mech-2.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 10}}
            />
          </View>
        </View>
        {/* __end-images */}

        <View style={styles.descContainer}>
          {/* description */}
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 7,
            }}>
            So, who am i?
          </Text>
          <Text style={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
            officia, commodi amet fugit recusandae soluta nisi fugiat
            dignissimos, autem, vero cupiditate possimus sunt ut itaque.
          </Text>
          {/* en__description */}

          {/* input */}
          <TextInput placeholder="Enter your name" style={styles.input} />
          {/* __end-input */}

          {/* profile-user */}
          <View style={styles.userImage}>
            <Image
              source={require('../../public/images/user.png')}
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                borderWidth: 1,
              }}
            />
          </View>
          {/* __end-profile-user */}

          {/* actions */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={{
                backgroundColor: '#FF2E63',
                display: 'flex',
                justifyContent: 'center',
                paddingVertical: 10,
                paddingHorizontal: 40,
                marginRight: 20,
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <Text style={styles.textAction}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#3E54AC',
                display: 'flex',
                justifyContent: 'center',
                paddingVertical: 10,
                paddingHorizontal: 40,
                marginRight: 20,
                alignItems: 'center',
                borderRadius: 50,
              }}>
              <Text style={styles.textAction}>Save</Text>
            </TouchableOpacity>
          </View>
          {/* __end-actions */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },

  descContainer: {
    backgroundColor: '#f2f1f7',
    padding: 20,
  },

  headcop: {
    backgroundColor: '#d1cfdd',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    marginBottom: 20,
  },

  images: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  image: {
    width: 170,
    height: 170,
  },

  description: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    lineHeight: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    marginVertical: 40,
  },

  userImage: {
    alignItems: 'center',
  },

  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },

  textAction: {
    color: 'white',
    fontSize: 16,
  },
});

export default Profile;
