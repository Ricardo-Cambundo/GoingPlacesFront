import { useRef, useState } from "react"
import { FlatList, Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const Faq = () => {
    const inputRef = useRef(null)
    const [questions, setQuestions] = useState([
        {
            id: 1, 
            name: 'O que é o GoingPlaces?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 2, 
            name: 'Como usar o GoingPlaces?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 2.5, 
            name: 'De que documentos necessito para alugar um carro?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 3, 
            name: 'Qual é a política de combustíveis?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        // Como são calculadas as taxas de aluguer?
        {
            id: 3.5, 
            name: 'E se eu devolver o carro com atraso?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 4, 
            name: 'Como são calculadas as taxas de aluguer?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 5, 
            name: 'Posso obter um desconto no checkout?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 6, 
            name: 'Que tipos de métodos de pagamento são aceites?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        
        {
            id: 7, 
            name: 'Como usar o GoingPlaces?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            id: 8, 
            name: 'Há descontos para membros do programa de fidelidade ou locatários frequentes?',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
    ])
    const [activeSection, setActiveSections] = useState([])
    const styles = StyleSheet.create({
        optionCont: {
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
            marginVertical: 10,
            paddingHorizontal: 10,
            borderRadius: 10,
            gap: 5,
            
            marginHorizontal: 15,
            
        },
        option: {
            fontWeight: '700',
            flex: 1,
        },
        comment: {
            color: 'grey',
        },
        input: {
            // backgroundColor: '#dbdbdb44',
            backgroundColor: '#dbdbdb44',
            height: 50,
            borderRadius: 10,
            flexDirection: 'row',
            paddingHorizontal: 7,
            alignSelf: 'center',
            marginHorizontal: 15,
            marginTop: 20
        
          },
          textInput: {
            flex: 1,
            fontSize: 15,
            borderWidth: 0,
            paddingLeft: 5,
            alignSelf: 'center',
            // color: '#a8a8a8',
            color: 'black',
            
          },
          cancel: {
            fontWeight: '700',
            color: '#007bee',
            alignSelf: 'center',
            marginTop: 8,
            marginLeft: 10
          },
          tag: {
            marginHorizontal: 5,
            backgroundColor: '#dbdbdb56',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
        },
        tagText: {
            fontWeight: '500',
            color: '#969696',
            fontSize: 12
        },
        tag1: {
            marginHorizontal: 5,
            backgroundColor: '#008cff',
            paddingHorizontal: 15,
            paddingVertical: 10,
            borderRadius: 20,
        },
        tagText1: {
            color: 'white',
            fontWeight: '500',
            fontSize: 12
        },
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginVertical: 20,
            marginHorizontal: 15,
            marginBottom: -5
        },
        
    })
    const [selected, setSelected] = useState(0)
    const [quest, setQuest] = useState('')
    const [tags, setTags] = useState('geral')
    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            
            <View style={{flex: 1, backgroundColor: '#fafafade'}}>
            <Text style={styles.title1}>Perguntas Frequentes</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row', marginTop: 20, height: 50, marginBottom: -10, paddingLeft: 10}}>
                    <TouchableOpacity onPress={() => {
                            //   setStats('Vendas')
                            setTags('geral')
                          }}>
                    <View style={tags.includes('geral') ? styles.tag1 : styles.tag}>
                                  <Text style={tags.includes('geral') ? styles.tagText1 : styles.tagText}>Geral</Text>
                              </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                            //   setStats('Vendas')
                            setTags('perfil')
                          }}>
                    <View style={tags.includes('perfil') ? styles.tag1 : styles.tag}>
                                  <Text style={tags.includes('perfil') ? styles.tagText1 : styles.tagText}>Perfil</Text>
                              </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                            //   setStats('Vendas')
                            setTags('servicos')
                          }}>
                    <View style={tags.includes('servicos') ? styles.tag1 : styles.tag}>
                                  <Text style={tags.includes('servicos') ? styles.tagText1 : styles.tagText}>Serviços</Text>
                              </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                            //   setStats('Vendas')
                            setTags('pagamentos')
                          }}>
                    <View style={tags.includes('pagamentos') ? styles.tag1 : styles.tag}>
                                  <Text style={tags.includes('pagamentos') ? styles.tagText1 : styles.tagText}>Pagamentos</Text>
                              </View>
                    </TouchableOpacity>
                    
                </ScrollView>
                <TouchableWithoutFeedback onPress={() => inputRef.current.focus()}>
                    <View style={styles.input}><Icon name='search' size={20} style={{color: '#008cffb4', alignSelf: 'center', }}/>
                        <TextInput ref={inputRef} placeholder="search" style={styles.textInput} value={quest} onChangeText={(val)=> setQuest(val)} />
                    </View>
                </TouchableWithoutFeedback>
            
                {!quest.length > 0 ? 
                <FlatList style={{marginTop: 20}} data={questions} renderItem={(item) => {
                    return (
                    <TouchableOpacity onPress={() => {
                        if (selected == item.item.id){
                            setSelected(0)
                        }else {
                            setSelected(item.item.id)
                        }
                    }}>
                        <View style={styles.optionCont}>
                            <Text style={styles.option}>{item.item.name}</Text>
                            <Icon color='#007bee' name='chevron-down-circle-outline' size={22}/>
                        </View>
                        <View style={{backgroundColor: 'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 15,
                marginVertical: 0,
                paddingHorizontal: 10,
                borderRadius: 10,
                marginHorizontal: 15,
                marginBottom: 10, display: selected == item.item.id ? 'flex' : 'none'}}>
                            <Text style={styles.comment}>{item.item.comment}</Text>
                        </View>
                </TouchableOpacity>
                    )
                }} />
            :
            <View>
                {
                    questions.filter((q) => q.name.toLowerCase().includes(quest.toLowerCase())).length > 0 ?
                    <FlatList style={{marginTop: 20}} data={questions.filter((q) => q.name.toLowerCase().includes(quest.toLowerCase()))} renderItem={(item) => {
                        return (
                        <TouchableOpacity onPress={() => {
                            if (selected == item.item.id){
                                setSelected(0)
                            }else {
                                setSelected(item.item.id)
                            }
                        }}>
                            <View style={styles.optionCont}>
                                <Text style={styles.option}>{item.item.name}</Text>
                                <Icon color='#007bee' name='chevron-down-circle-outline' size={22}/>
                            </View>
                            <View style={{backgroundColor: 'white',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                    marginVertical: 0,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    marginHorizontal: 15,
                    marginBottom: 10, display: selected == item.item.id ? 'flex' : 'none'}}>
                                <Text style={styles.comment}>{item.item.comment}</Text>
                            </View>
                    </TouchableOpacity>)}}/>
                    :
                    <Text style={{alignSelf: 'center', marginVertical: 15}}>Pergunta não foi encontrada</Text>

                }
            </View>}
            </View>
        </TouchableWithoutFeedback>
    )
}
export default Faq