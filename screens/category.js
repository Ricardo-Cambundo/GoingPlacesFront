
import { StackActions, useNavigation, useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { Text, View, Animated, Image, StyleSheet, Pressable, Modal, TouchableWithoutFeedback, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import VerticalList from "../components/verticalList"
import Filter from "./filter"
import Search1 from "./search!"

const Category = () => {
  const [types, setTypes] = useState([])
  const [trans, setTrans] = useState([])
  const [typesf, setTypesF] = useState([])
  const [brandss, setBrandss] = useState([])
  const [review, setReview] = useState('Tudo')
  
  const addType = (t) => {
      setTypes([...types, t])
  }
  const removeType = (t) => {
      setTypes(types.filter((ty) => ty != t))
  }
  const addTran = (t) => {
      setTrans([...trans, t])
  }
  const removeTran = (t) => {
      setTrans(trans.filter((ty) => ty != t))
  }
  const addTypeF = (t) => {
      setTypesF([...typesf, t])
  }
  const removeTypeF = (t) => {
      setTypesF(typesf.filter((ty) => ty != t))
  }
  const addBrand = (t) => {
      setBrandss([...brandss, t])
  }
  const removeBrand = (t) => {
      setBrandss(brandss.filter((ty) => ty != t))
  }
  const [checked, setChecked] = useState('Tudo')
  const [priceRange, setPriceRange] = useState([1000, 15000])
    const navigation = useNavigation()
    const route = useRoute()
    
    const [data, setData] = useState([...route.params.data])
    const scrollY = new Animated.Value(0)
    const diffClampScroll = Animated.diffClamp(scrollY, 0, Platform.OS == 'android'? 100 : 95).interpolate({
      inputRange: [0, 1],
      outputRange: [0, -1]
    })
    const [categories, setCategories] = useState([
        {
          id: 1,
          name: 'Sedan',
          image: 'https://images.dealer.com/ddc/vehicles/2019/Audi/A3/Sedan/perspective/front-left/2019_56.png',
          colors: ['#c7c7c7', '#f5f5f5'],
          data: data.slice(0, 11)
        },
        {
          id: 1.5,
          name: 'SUV',
          image: 'https://images.dealer.com/ddc/vehicles/2019/Kia/Sportage/SUV/perspective/front-left/2018_36.png',
          colors: ['#7c4f42', '#fc9348'],
          data: data.slice(11, 21).concat(data.slice(7, 10))
        },
        {
          id: 2,
          name: 'Van',
          image: 'https://rentlandbird.com/wp-content/uploads/2020/02/UW-DS-lbox-1600x900-trans.png',
          colors: ['#2c2c2c','#6d6d6d'],
          data: data.slice(21, 31).concat(data.slice(0, 5))
        }, 
        {
          id: 3,
          name: 'Carrinha',
          image: 'https://pngimg.com/uploads/pickup_truck/pickup_truck_PNG16299.png',
          colors: ['#c62025','#f36269'],
          data: data.slice(31, 41)
        },
        {
          id: 4,
          name: 'Camião',
          image:'https://th.bing.com/th/id/R.f40e3e92af21b1a2ca337fd43f691a9c?rik=NWSuvkd%2bJh9aZg&pid=ImgRaw&r=0',
          colors: ['#0379d3','#69b8ec'],
          data: data.slice(0, 4).concat(data.slice(7, 20))
        },
        {
          id: 5,
          name:'Conversível',
          image: 'https://img.sm360.ca/ir/w640h333c/images/newcar/ca/2021/jaguar/f-type-decapotable/r-dynamic-/convertible/exteriorColors/2021_jaguar_f-type_convertible_r-dynamic_032_mat-sor.png',
          colors: ['#c78f0b','#f8c132'],
          data: data.slice(30, 40).concat(data.slice(0, 9))
        }
      ])
      const brands = [
        {
          id: 1,
          name: 'BMW',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-bmw-2-202742.png?f=webp&w=256',
          data: data.slice(19, 27)
        },
        {
          id: 2,
          name: 'Toyota',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-toyota-3441138-2874672.png?f=webp&w=256',
          data: data.slice(3, 12)
        },
        {
          id: 2.5,
          name: 'Volkswagen',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-volkswagen-3441227-2874332.png?f=webp&w=256',
          data: data.slice(33, 40)
        },
        {
          id: 3,
          name: 'Mazda',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-mazda-3-827488.png?f=webp&w=256',
          data: data.slice(14, 23)
        }, 
        {
          id: 4, 
          name: 'Hyundai',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-hyundai-3441179-2874284.png?f=webp&w=256',
          data: data.slice(1, 10)
        }, 
        {
          id: 5,
          name: 'Subaru',
          image: 'https://www.decalup.com/wp-content/uploads/2020/05/Subaru_Logo--1536x831.png',
          data: data.slice(20, 30)
        }, 
        {
          id: 6, 
          name: 'Porsche',
          image: 'https://www.pngmart.com/files/5/Porsche-Logo-PNG-Photos.png'
        }, 
        {
          id: 7,
          name: 'Lexus',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-lexus-7-827477.png?f=webp&w=256',
        },
        {
          id: 8,
          name: 'Nissan',
          image: "https://d1y00uvtppodtq.cloudfront.net/wp-content/uploads/2020/07/20071442/Nissan-Logo.png"
        },
        {
          id: 9,
          name: 'Dodge',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-dodge-1863641-1581236.png?f=webp&w=256'
        },
        {
          id: 10,
          name: 'Mini',
          image: 'https://cdn.iconscout.com/icon/free/png-512/free-bmw-1-202737.png?f=webp&w=256'
        }
    
      ]
    const [open, setOpen] = useState(false)
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white'
            },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 95,
            alignItems: 'flex-end',
            boxSizing: 'border-box',
            paddingHorizontal: 10,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            marginBottom: 0,
            backgroundColor: 'white',
            zIndex: 1,
            paddingBottom: 5,
            
            ...Platform.select({
                android: {
                height: 100
                }
            })
            },
        goBack: {
            width: 40, 
            height: 40, 
            borderRadius: 50,
            backgroundColor: 'white',
            elevation: 4,
            shadowColor: 'black',
            shadowRadius: 2,
            shadowOpacity: 0.1,
            shadowOffset: {width: 0, height: 0},
            justifyContent: 'center',
            alignItems: 'center'
            },
            
        subTitle: {
            fontSize: 24,
            fontWeight: '700',
            marginHorizontal: 10,
            marginVertical: 20,
            },
        input: {
            flex: 1,
            width: '95%',
            backgroundColor: '#dbdbdb44',
            height: 40,
            marginLeft: 10,
            borderRadius: 10,
            flexDirection: 'row',
            paddingHorizontal: 7,
            },
        textInput: {
            flex: 1,
            fontSize: route.params.section == 'map' ? 14 : 15,
            borderWidth: 0,
            alignSelf: 'center',
            fontWeight:  route.params.section == 'map' ? '500': '600',
            marginLeft: 5
                            
            },
        options: {
            height: 40,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#008cff',
            borderRadius: 7   
        },
        title: {
            fontSize: 16,
            fontWeight: '700',
            marginHorizontal: 10,
            marginVertical: 20,
            flex: 3
        },
        results: {
            color: '#008cff',
            marginVertical: 24,
            marginHorizontal: 10,
            fontWeight: '700',
            fontSize: 13
        }
        })
        const [search, setSearch] = useState(false)
        
    return (
      
        <View style={styles.container}>
          <Modal visible={search} animationType="slide">
            <Search1 setSearch={()=> {
              setSearch(false)
            }}/>
          </Modal>
            <Modal visible={open} animationType='slide'>
                <Filter types={types} setTypes={setTypes} addType={addType} removeType={removeType} trans={trans} setTrans={setTrans} addTran={addTran} removeTran={removeTran} typesf={typesf} setTypesF={setTypesF} addTypeF={addTypeF} removeTypeF={removeTypeF} brandss={brandss} setBrandss={setBrandss} addBrand={addBrand} removeBrand={removeBrand} checked={checked} setChecked={setChecked} priceRange={priceRange} setPriceRange={setPriceRange} open={open} setOpen={setOpen} brands={brands} categories={categories}/>
            </Modal>
            <Animated.View style={styles.header}>
                <Pressable onPress={()=>{
                  if (route.params.section == 'map'){
                    navigation.dispatch(StackActions.popToTop())
                  }else {
                    navigation.goBack()
                  }
                }}>
                    <View style={styles.goBack}>
                        <Icon name='arrow-back' size={23}/>
                    </View>
                </Pressable>
                <TouchableOpacity onPress={() => {
                  if (route.params.section == 'map'){
                    setSearch(true)
                  }
                }} style={styles.input}>
                  <Icon name={route.params.section == 'brand' ? 'pricetags-outline' : route.params.section == 'map' ?'search' :'car-sport-outline'} size={22} style={{color: '#008cffb4', alignSelf: 'center', }}/><Text ellipsizeMode="tail" numberOfLines={1} style={styles.textInput}>{route.params.title}</Text><View></View>
                </TouchableOpacity>
                <TouchableWithoutFeedback onPress={()=>setOpen(true)}>
                    <View style={styles.options}><Icon color='white' name='options' size={28}/></View>
                </TouchableWithoutFeedback>
            </Animated.View>
            <Animated.ScrollView style={styles.container} onScroll={Animated.event([
                {
                    nativeEvent: {contentOffset: {y: scrollY}}
                }
            ], {useNativeDriver: true})}>

                <View style={{flex: 1, backgroundColor: 'white', marginTop: 90}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={styles.title}>Resultados de "{route.params.title}"</Text>
                        <Text style={styles.results}>{data.length} Resultados</Text>
                    </View>
                </View>
                <VerticalList data={data}/>
            </Animated.ScrollView>
        </View>
    )
}

export default Category