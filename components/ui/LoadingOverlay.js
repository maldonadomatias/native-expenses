import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import {Colors} from '../../constants/styles'

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <Progress.CircleSnail color={Colors.primary500} size={30} indeterminate={true} />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
