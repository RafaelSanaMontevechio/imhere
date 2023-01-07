import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 16,
  },

  info: {
    marginTop: 60,
  },

  eventName: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 28,
    color: '#FDFCFE',
  },

  eventDate: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,

    color: '#6B6B6B',
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },

  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1f1e25',
    color: '#fdfcfe',
    padding: 16,
    fontSize: 16,
    marginRight: 8,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',

    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 24,
  },

  participants: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 23,
    color: '#FDFCFE',
    marginBottom: 20,
  },

  emptyList: {
    fontWight: '400',
    fontSize: 14,
    lineHeight: 16,
    alignItems: 'center',
    textAlign: 'center',
    color: '#FDFCFE',
    marginTop: 20,
  },
});
