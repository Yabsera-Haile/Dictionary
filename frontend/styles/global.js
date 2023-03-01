import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
  error: {
    height: 40,
    backgroundColor: 'rgba(255,30,30,0.7)',
    borderRadius: 30,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginBottom:'10%',
    color:"white",
    paddingTop:10,
    textAlign:"center"
  },
   title : {
   fontSize:30,
   fontWeight:"800",
   alignSelf:"center",
   marginBottom : 40  
  },
  cont :{
    fontSize:20,
    fontWeight:"200",
    margin : 10  
  },
});

export const images = {
  ratings: {
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png'),
  }
};