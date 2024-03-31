import { useRef, useState } from "react"
import { Dimensions, StyleSheet, Text, View, Pressable, TouchableWithoutFeedback, TouchableOpacity, TextInput, Image, Alert } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import Icon from 'react-native-vector-icons/Ionicons'
const AddCar2 = ({handleScroll, obj, setObj, freq, setFreq, freqShare, setFreqShare, notice, setNotice, shortest, setShortest, longest, setLongest}) => {
    const styles = StyleSheet.create({
        title1: {
            fontSize: 17,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        title1: {
            fontSize: 15,
            fontWeight: '700',
            marginBottom: 10,
            marginVertical: 20
        },
        inputContainer: {
            backgroundColor: '#f3f3f3',
            marginVertical: 10,
            padding: 10,
            
            borderRadius: 10,
            flexDirection: 'row',
            
        },
        input: {
            fontSize: 15,
            fontWeight: '500'
        },
        icon: {
            transform: [{translateY: 6}],
            marginRight: 7,
            color: '#2182ED',
    
        },
        label: {
            color: 'grey',
            fontSize: 14,
            marginBottom: 2
        },
        report: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 14,
            // borderTopWidth: 0.2,
            // borderColor: '#c7c7c7',
            gap: 10
        },
        reportText: {
            fontSize: 15.5,
            fontWeight: '500',

        },
        radioCircle: {
            width: 21, 
            height: 21,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#007bee',
            alignItems: 'center',
            justifyContent: 'center'
        },
        radioCircle1: {
            backgroundColor: '#007bee',
            width: 10,
            height: 10,
            borderRadius: 50

        },
        button: {
            backgroundColor: '#007bee',
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 15
        },
        button1: {
            borderColor: '#007bee',
            borderWidth: 1,
            paddingVertical: 13,
            paddingHorizontal: 20,
            borderRadius: 50,
            marginBottom: 10,
            marginTop: 15

        },
        save: {
            color: 'white',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        },
        save1: {
            color: '#007bee',
            textAlign: 'center',
            fontSize: 16,
            fontWeight: '600'
        }
    })
    
    const objs = [
        'Cobrir o pagamento do seu carro.',
        'Gerar renda extra.',
        'Expandir um negócio existente.',
        'Criar uma fonte primária de renda.',
        'Ainda não tenho certeza.'
    ]
    const frequency = [
        'Nunca.',
        'Raramente: uma vez por semana ou menos.',
        'Às vezes: algumas vezes por semana.',
        'Muitas vezes: na maioria dos dias por semana.',
        'Sempre: todos os dias.'

    ]
    const frequencys = [
        'Não tenho certeza ainda, apenas curioso.',
        'Raramente: algumas vezes por mês.',
        'Às vezes: cerca de metade do mês.',
        'Muitas vezes: na maioria dos dias',
        'Sempre: sempre que possível.'
    ]
    const notices = [
        '2h',
        '4h',
        '8h',
        '12h (recomendado)',
        '1 dia',
        '2 dias',
        '3 dias',
        '4 dias',
        '1 semana',
        '2 semanas',
        '1 mês (menos recomendado)'
    ]
    const shortests = [
        '1 dia (recomendado)',
        '2 dias',
        '3 dias',
        '1 semana',
        '2 semanas',
        '1 mês'
    ]
    const longests = [
        '1 dia',
        '2 dias',
        '3 dias',
        '1 semana',
        '2 semanas',
        '1 mês (recomendado)',
        '1 mês e 1/2',
        '2 mêses'
    ]
    return (
        <View style={{flex: 1, backgroundColor: 'white', width: Dimensions.get('window').width, paddingHorizontal: 15, paddingTop: 90}}>
            <Text style={styles.title1}>Qual é o seu principal objetivo financeiro para compartilhar um carro no GoingPlaces?</Text>
            <SelectDropdown 
            searchInputStyle={{
                backgroundColor: '#f3f3f3'
            }}
            dropdownStyle={{
                backgroundColor: '#f3f3f3',
            }}
            buttonStyle={{
                backgroundColor: '#f3f3f3',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingHorizontal: 0
            }}
            buttonTextStyle={{
                color: 'grey',
                fontSize: 14,
                marginBottom: 2,
            }}
            
            searchPlaceHolder="Pesquise uma marca..."
            searchPlaceHolderColor="#b8b8b8"
            renderCustomizedRowChild={(item) => {
                return (
                    <View style={{paddingHorizontal: 10, flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                        <Icon name='caret-forward-outline' color='#007bee' size={22}/>
                        <Text style={{fontWeight: 500}}>{item}</Text>
                    </View>
                )
            }}
            rowStyle={{
                borderColor: '#f3f3f3'
            }}
            renderCustomizedButtonChild={(selected) => {
                return (
                    <View style={styles.inputContainer}>
                        <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Escolha um objectivo</Text>
                                                <Text style={{fontWeight: 500}}>{selected}</Text>
                                                </View>
                    </View>
                )
            }}
            defaultButtonText="Qual é a marca do veículo?"
            data={objs}
            onSelect={(val) => {
                setObj(val)
            }}
            />



            <Text style={styles.title1}>Com que frequência você ou sua família usam este carro?</Text>
            <SelectDropdown 
            searchInputStyle={{
                backgroundColor: '#f3f3f3'
            }}
            dropdownStyle={{
                backgroundColor: '#f3f3f3',
            }}
            buttonStyle={{
                backgroundColor: '#f3f3f3',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingHorizontal: 0
            }}
            buttonTextStyle={{
                color: 'grey',
                fontSize: 14,
                marginBottom: 2,
            }}
            
            searchPlaceHolder="Pesquise uma marca..."
            searchPlaceHolderColor="#b8b8b8"
            renderCustomizedRowChild={(item) => {
                return (
                    <View style={{paddingHorizontal: 10, flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                        <Icon name='caret-forward-outline' color='#007bee' size={22}/>
                        <Text style={{fontWeight: 500}}>{item}</Text>
                    </View>
                )
            }}
            rowStyle={{
                borderColor: '#f3f3f3'
            }}
            renderCustomizedButtonChild={(selected) => {
                return (
                    <View style={styles.inputContainer}>
                        <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Escolha uma opção</Text>
                                                <Text style={{fontWeight: 500}}>{selected}</Text>
                                                </View>
                    </View>
                )
            }}
            defaultButtonText="Qual é a marca do veículo?"
        
            data={frequency}
            onSelect={(val) => {
                setFreq(val)
            }}
            />
            


            <Text style={styles.title1}>Com que frequência você deseja compartilhar seu carro?</Text>
            <SelectDropdown 
            searchInputStyle={{
                backgroundColor: '#f3f3f3'
            }}
            dropdownStyle={{
                backgroundColor: '#f3f3f3',
            }}
            buttonStyle={{
                backgroundColor: '#f3f3f3',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingHorizontal: 0
            }}
            buttonTextStyle={{
                color: 'grey',
                fontSize: 14,
                marginBottom: 2,
            }}
            
            searchPlaceHolder="Pesquise uma marca..."
            searchPlaceHolderColor="#b8b8b8"
            renderCustomizedRowChild={(item) => {
                return (
                    <View style={{paddingHorizontal: 10, flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                        <Icon name='caret-forward-outline' color='#007bee' size={22}/>
                        <Text style={{fontWeight: 500}}>{item}</Text>
                    </View>
                )
            }}
            rowStyle={{
                borderColor: '#f3f3f3'
            }}
            renderCustomizedButtonChild={(selected) => {
                return (
                    <View style={styles.inputContainer}>
                        <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Escolha uma opção</Text>
                                                <Text style={{fontWeight: 500}}>{selected}</Text>
                                                </View>
                    </View>
                )
            }}
            defaultButtonText="Qual é a marca do veículo?"
        
            data={frequencys}
            onSelect={(val) => {
                setFreqShare(val)
            }}
            />

            <Text style={styles.title1}>Quanto tempo de aviso prévio você precisa antes de uma viagem começar?</Text>
            <SelectDropdown 
            searchInputStyle={{
                backgroundColor: '#f3f3f3'
            }}
            dropdownStyle={{
                backgroundColor: '#f3f3f3',
            }}
            buttonStyle={{
                backgroundColor: '#f3f3f3',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingHorizontal: 0
            }}
            buttonTextStyle={{
                color: 'grey',
                fontSize: 14,
                marginBottom: 2,
            }}
            
            searchPlaceHolder="Pesquise uma marca..."
            searchPlaceHolderColor="#b8b8b8"
            renderCustomizedRowChild={(item) => {
                return (
                    <View style={{paddingHorizontal: 10, flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                        <Icon name='caret-forward-outline' color='#007bee' size={22}/>
                        <Text style={{fontWeight: 500}}>{item}</Text>
                    </View>
                )
            }}
            rowStyle={{
                borderColor: '#f3f3f3'
            }}
            renderCustomizedButtonChild={(selected) => {
                return (
                    <View style={styles.inputContainer}>
                        <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Escolha uma opção</Text>
                                                <Text style={{fontWeight: 500}}>{selected}</Text>
                                                </View>
                    </View>
                )
            }}
            defaultButtonText="Qual é a marca do veículo?"
        
            data={notices}
            onSelect={(val) => {
                setNotice(val)
            }}
            />
            <Text style={styles.title1}>Qual é o tempo de viagem mais curto que você aceitaria alguém ficar com o seu carro?</Text>
            <SelectDropdown 
            searchInputStyle={{
                backgroundColor: '#f3f3f3'
            }}
            dropdownStyle={{
                backgroundColor: '#f3f3f3',
            }}
            buttonStyle={{
                backgroundColor: '#f3f3f3',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingHorizontal: 0
            }}
            buttonTextStyle={{
                color: 'grey',
                fontSize: 14,
                marginBottom: 2,
            }}
            
            searchPlaceHolder="Pesquise uma marca..."
            searchPlaceHolderColor="#b8b8b8"
            renderCustomizedRowChild={(item) => {
                return (
                    <View style={{paddingHorizontal: 10, flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                        <Icon name='caret-forward-outline' color='#007bee' size={22}/>
                        <Text style={{fontWeight: 500}}>{item}</Text>
                    </View>
                )
            }}
            rowStyle={{
                borderColor: '#f3f3f3'
            }}
            renderCustomizedButtonChild={(selected) => {
                return (
                    <View style={styles.inputContainer}>
                        <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Escolha uma opção</Text>
                                                <Text style={{fontWeight: 500}}>{selected}</Text>
                                                </View>
                    </View>
                )
            }}
            defaultButtonText="Qual é a marca do veículo?"
        
            data={shortests}
            onSelect={(val) => {
                setShortest(val)
            }}
            />


            <Text style={styles.title1}>Qual é o tempo de viagem mais longo que você aceitaria alguém ficar com o seu carro?</Text>
            <SelectDropdown 
            searchInputStyle={{
                backgroundColor: '#f3f3f3'
            }}
            dropdownStyle={{
                backgroundColor: '#f3f3f3',
            }}
            buttonStyle={{
                backgroundColor: '#f3f3f3',
                width: '100%',
                borderRadius: 10,
                height: 60,
                paddingHorizontal: 0
            }}
            buttonTextStyle={{
                color: 'grey',
                fontSize: 14,
                marginBottom: 2,
            }}
            
            searchPlaceHolder="Pesquise uma marca..."
            searchPlaceHolderColor="#b8b8b8"
            renderCustomizedRowChild={(item) => {
                return (
                    <View style={{paddingHorizontal: 10, flexDirection: 'row', gap: 15, alignItems: 'center'}}>
                        <Icon name='caret-forward-outline' color='#007bee' size={22}/>
                        <Text style={{fontWeight: 500}}>{item}</Text>
                    </View>
                )
            }}
            rowStyle={{
                borderColor: '#f3f3f3'
            }}
            renderCustomizedButtonChild={(selected) => {
                return (
                    <View style={styles.inputContainer}>
                        <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Escolha uma opção</Text>
                                                <Text style={{fontWeight: 500}}>{selected}</Text>
                                                </View>
                    </View>
                )
            }}
            defaultButtonText="Qual é a marca do veículo?"
        
            data={longests}
            onSelect={(val) => {
                setLongest(val)
            }}
            />
            {/* <Pressable  onPress={() => {
                                        noticeRef.current.focus()
                                    }}>
                                        <View style={styles.inputContainer}>
                                            <Icon style={styles.icon} name='document-text-outline' size={18}/><View style={{
                                                flexDirection: 'column',
                                                height: 40,
                                                borderLeftWidth: 1,
                                                borderLeftColor: '#e3e3e3',
                                                paddingLeft: 7,
                                                flex: 1
                                            }}>
                                                <Text style={styles.label}>Qual é o ano de lançamento?</Text>
                                                <TextInput 
                                                maxLength={4} keyboardType="number-pad" ref={noticeRef} style={styles.input} value={notice} onChangeText={(value)=>setNotice(value)}/>
                                            </View>
                                        </View>
                                    </Pressable> */}
                                    
                                    <TouchableOpacity onPress={() => {
handleScroll(3)
                                    if (obj == '' || freq == '' || freqShare == '' || notice == '' || shortest == '' || longest == ''){
                                        Alert.alert(
                                            'Campos em falta',
                                            'Por favor preencha todos os campos para continuar.',
                                            [{
                                                text: 'OK',
                                                onPress: ()=>{}
                                            }]
                                        )
                                    }else {
                                        handleScroll(3)
                                    }
                                    
                }}>
                    <View style={styles.button}>
                        <Text style={styles.save}>Continuar</Text>
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default AddCar2