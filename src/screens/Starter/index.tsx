import { FlatList, Text, TextInput, TouchableOpacity, View, Alert  } from 'react-native';
import { useState } from 'react';

import 'react-native-get-random-values'
import { v4 as uuid } from 'uuid'

import { styles } from './estilo'
import { Conhecimento } from '../../components/Conhecimento'


interface typeCompetence {
  code: string
  description: string
  level?: string /* Interrogação indica que ele é opicional, não reclama caso ele não esteja lá*/ 
}

export function Starter() {
 
  const [description, setDescription] = useState<string>('')

  const [competences, setCompetences] = useState<typeCompetence[]>([])

  function addCompetence (){

    const newCompetence: typeCompetence = {
      code: String( uuid()), /* Gera um id, mas precisa converter pra string, caso contrário é o mesmo que nada */
      description: description.trim()

    }

  
    if(description.trim() === '' || typeof (competences.find(
       competenceStored  => competenceStored.description === newCompetence.description )
    ) === 'object'){ 
        return Alert.alert('Error', 'Não recebemos esses caracteres.')
    }

    /*
    if(description.trim() === '' ||  competences.includes(description.trim())){
      setDescription('')
      return Alert.alert('Error', 'A aplicação não é grande o suficiente para dois valores iguais.')
    }

    */
  
    setCompetences([...competences, newCompetence])
    setDescription('')
  
    console.log(newCompetence)
  }
  

  function excCompetences(competence: typeCompetence){ /* Envia somente as verdadeiras, na comparação, para o novo vetor */

    
    Alert.alert('Excluir','Confirma exclusão?', [
      {
        text: 'Sim',
        onPress: () => setCompetences(
          competences.filter( competenceStored => competenceStored.description !== competence.description )) 
        /* Nesse caso ao invés de deixarmos verdadeiro, tormaos diferentes para ao invés de aparecer somente o elemento comparado, este é excluído */
      }, 
      {
        text: 'Não',
      }
    ])
  }


  return (
    
    <View style={styles.container}>

      <Text style={styles.title}> Competências </Text>
      <Text style={styles.sub_text}> Seus conhecimentos </Text>

      <View style={styles.conteinerAdicionar}>
    
        <TextInput 
        style={styles.campo}
        placeholder = "Informe a competência"
        placeholderTextColor = '#696969'
        onChangeText = {setDescription}
        value = {description}
        />
      
        <TouchableOpacity 
        style={styles.botao}
        onPress =  { addCompetence }>
          <Text style={styles.botaoTexto}> + </Text>
          
        </TouchableOpacity>
        
      </View>
        
      <FlatList /* Usado pra listas grandes ao invés do ScrollView */
        data = {competences}
        keyExtractor = { item => item.code } /* Pega o objeto inteiro */
        renderItem = { ({ item }) => ( 
          <Conhecimento 
          key = {item.code}
          name = { item.description }
          exclude={() => excCompetences(item)} />
        )}
        ListEmptyComponent = { () => (
          <Text style={styles.emptyList}> Sem conteúdo na lista </Text>
        )}
      />

      
    
    </View>
  );
}  

