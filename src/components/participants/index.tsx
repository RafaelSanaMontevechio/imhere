import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface Participant {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Participant) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.participant}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}> - </Text>
      </TouchableOpacity>
    </View>
  );
}
