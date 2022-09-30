import { StyleSheet } from 'react-native'

export const estilos = StyleSheet.create({

    conteiner: {
        width: '100%',
        flexDirection: 'row',
        marginBottom: 12,
    },
    
    description: {
      flex: 1,
      height: 56,
      backgroundColor: '#FFFFF0',
      fontSize: 16,
      padding: 16,
      marginRight: 12,
      borderRadius: 5,
      borderWidth: 2,
      color: '#000000',
    },

    button: {
      backgroundColor: '#000000',
      width: 56,
      height: 56,
      borderRadius: 5,
      borderWidth: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },

    buttonText: {
      backgroundColor: '#efca08',
      fontSize: 40,
      textAlign: 'center',
    },
    
})