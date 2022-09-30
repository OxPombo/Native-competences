import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#bbdef0',
    
    },
  
    title: {
      color: '#ffffff',
      backgroundColor: '#00a6a6',
      fontSize: 30,
      textAlign: 'center',
      paddingTop: 12,
   
  },
  
    sub_text: {
      color: '#ffffff',
      fontSize: 16,
      backgroundColor: '#00a6a6',
      fontWeight: '400',
      paddingBottom: 12,
      textAlign: 'center',
    },

    conteinerAdicionar: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 24,
    },
    
    campo: {
      flex: 1,
      height: 56,
      backgroundColor: '#FFFFFF',
      fontSize: 16,
      padding: 16,
      marginRight: 12,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#5B9279',
      color: '#000000',
    },

    botao: {
      backgroundColor: '#f08700',
      width: 56,
      height: 56,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    botaoTexto: {
      backgroundColor: '#f08700',
      fontSize: 28,
    },

  emptyList: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
    },    
});  