import firestore from '@react-native-firebase/firestore'

const ref = firestore().collection('todos');

export default ref;