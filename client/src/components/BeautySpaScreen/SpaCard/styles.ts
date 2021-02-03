import { NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';

export const styles = StyleSheet.create({

  containerAll: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
    shadowColor: "#000",
    opacity: 0.9,
    height: "auto",
    position: "relative",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    overflow: "hidden",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 25,
    margin:5,
    padding: 20,

  },
  headersContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    maxHeight: 50,
    marginBottom: 20
  },
  textTitle: {
    fontSize: 20,
  },
  button: {
    backgroundColor: 'rgba(110,150,150, 0.8)',
    justifyContent: 'center',
    borderRadius: 20,
    height: 40,
    width: 90,
    elevation: 5,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%'
  },
  photoConatiner: {
    maxHeight: "100%",
    maxWidth: "100%"
  },

  photo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  titleListContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(110,190,190, 0.5)',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  textTitleList: {
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden'
  },
  itemList: {
    padding: '2%',
  },

  textList: {

  },

  alignC: {
    textAlign: 'center'
  },

  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
    marginTop: 0
  },
  reviewsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 100,
    marginTop: 10,
  }

});

