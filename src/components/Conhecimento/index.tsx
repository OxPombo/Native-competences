import { View, Text, TouchableOpacity} from 'react-native'

import { estilos } from './estilos'


    export function Conhecimento({ name, exclude }){
        return(
            
        
            <View style={estilos.conteiner}> 
            
                <Text style={estilos.description}> { name } </Text>
                
                <TouchableOpacity 
                style={estilos.button}
                onPress = { exclude }
                >
                    <Text style={estilos.buttonText}>  -  </Text>

                </TouchableOpacity>
            
            </View>


            
        )
    }