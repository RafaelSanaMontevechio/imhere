import { useState } from 'react';

import {
  Text,
  View,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Participant } from '../../components/participants';

import { styles } from './styles';

export function Home() {
  const [newParticipant, setNewParticipant] = useState('');
  const [participants, setParticipants] = useState<string[]>([]);

  function handleAddParticipant() {
    const participantAlreadyExists = participants.find(
      (participant) => participant === newParticipant,
    );

    if (participantAlreadyExists) {
      return Alert.alert('Participante', 'Este participante já existe');
    }

    setParticipants((state) => [...state, newParticipant]);
    setNewParticipant('');
  }

  function onRemoveParticipant(name: string) {
    const filteredParticipants = participants.filter(
      (participant) => participant !== name,
    );

    setParticipants(filteredParticipants);

    Alert.alert('Participant removido!');
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => onRemoveParticipant(name),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sexta, 5 de Janeiro de 2023</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          value={newParticipant}
          onChangeText={setNewParticipant}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.participants}>Participantes</Text>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>No Participants</Text>
        )}
      />
    </View>
  );
}
