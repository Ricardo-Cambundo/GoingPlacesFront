import { Platform, StyleSheet, Text, View, StatusBar, Pressable, Image, Animated, Easing, ScrollView, TouchableOpacity } from 'react-native';
import HomeSliderTab from '../navigators/homeSliderTab';
import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
const HEADER_HEIGHT = Platform.OS == 'ios' ? 115 : 70 + StatusBar.currentHeight
import axios from 'axios';
// import { image_search } from 'duckduckgo-images-api';
import Recommmendations from '../components/recommendations';
import Promotions from '../components/promotions';
import PopularSlide from '../components/popularSlide';
import NewestSlide from '../components/NewestSlide';
import LuxurySlide from '../components/LuxurySlide';
import { Dimensions } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api, { baseURL } from '../navigators/axios';
const Home = ({navigation, route}) => {
  const [activeTab, setActiveTab] = useState('popular')
  const [data, setData] = useState([
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "30 mpg (cidade), 40 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 6,
      "imagem": "https://http2.mlstatic.com/volkswagen-jetta-20-tsi-highline-4p-2016-branco-top-teto-D_NQ_NP_942557-MLB28312487636_102018-F.jpg",
      "marca": "Volkswagen",
      "modelo": "Jetta",
      "motor": "4 cilindros 1.4L",
      "numero_de_portas": 4,
      "potencia": 147,
      "preco_por_dia": 55,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Sistema de Som Premium",
        "Faróis de LED",
        "Sensor de Estacionamento"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "184 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "SE"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 35 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 8,
      "imagem": "https://s1.1zoom.me/big0/661/Mercedes-Benz_AMG_C-Class_C205_Silver_color_Coupe_554990_1280x640.jpg",
      "marca": "Mercedes-Benz",
      "modelo": "C-Class",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 255,
      "preco_por_dia": 90,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Assistência de Condução",
        "Sistema de Som Burmester"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "273 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "C300"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "24 mpg (cidade), 32 mpg (estrada)",
      "cor_exterior": "Cinza",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 10,
      "imagem": "https://www.powerimports.com.br/restrito/img/veiculos_seminovos/187/1622605841-162260584160b7001128aac.jpg",
      "marca": "Kia",
      "modelo": "Sportage",
      "motor": "4 cilindros 2.4L",
      "numero_de_portas": 4,
      "potencia": 181,
      "preco_por_dia": 48,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Tela Sensível ao Toque",
        "Câmera de Visão Traseira",
        "Controle de Estabilidade"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "175 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "LX"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 28 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 12,
      "imagem": "https://img.clasf.com.br/2021/07/17/Hyundai-Santa-F-3-3-V6-Prata-20172018-Goinia-1474186-20210717144835.7552750015.jpg",
      "marca": "Hyundai",
      "modelo": "Santa Fe",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 191,
      "preco_por_dia": 54,
      "quilometragem": "14,000 milhas",
      "recursos": [
        "Tela Touchscreen de 8 polegadas",
        "Câmera de Ré",
        "Alerta de Colisão Frontal"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "181 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SE"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "20 mpg (cidade), 28 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 13,
      "imagem": "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Lexus-RX-350-F-White-Car-PNG-Image.png",
      "marca": "Lexus",
      "modelo": "RX",
      "motor": "V6 3.5L",
      "numero_de_portas": 4,
      "potencia": 295,
      "preco_por_dia": 70,
      "quilometragem": "10,000 milhas",
      "recursos": [
        "Bancos de Couro",
        "Sistema de Navegação",
        "Teto Solar Panorâmico"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "267 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "350"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 16,
      "imagem": "https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2019NIC040006_02_1280_RAY.jpg",
      "marca": "Nissan",
      "modelo": "Altima",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 55,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Teto Solar",
        "Câmera 360°"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "180 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SV"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "31 mpg (cidade), 41 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 18,
      "imagem": "https://i.ytimg.com/vi/rqAxZ6YTJ-Y/maxresdefault.jpg",
      "marca": "Hyundai",
      "modelo": "Elantra",
      "motor": "2.0L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 147,
      "preco_por_dia": 52,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Assentos de Couro",
        "Sistema de Áudio Premium"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "132 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "120 mph",
      "versao": "Limited"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 31 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 20,
      "imagem": "https://s3.amazonaws.com/dercocenter.cl/uploads/sites/6/2017/10/mazda-cx-5-galeria-ficha-exterior-10-1.jpg",
      "marca": "Mazda",
      "modelo": "CX-5",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 187,
      "preco_por_dia": 58,
      "quilometragem": "13,000 milhas",
      "recursos": [
        "Tela de Toque Infotainment",
        "Câmera 360°",
        "Assentos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "186 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Touring"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "24 mpg (cidade), 34 mpg (estrada)",
      "cor_exterior": "Preto",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 22,
      "imagem": "https://4.bp.blogspot.com/-qYY1-tuYVAo/ULwGrW-F7hI/AAAAAAAAs9E/qxZa_9agDJE/s1600/Audi-A4-Attraction+(11).JPG",
      "marca": "Audi",
      "modelo": "A4",
      "motor": "2.0L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 201,
      "preco_por_dia": 80,
      "quilometragem": "10,000 milhas",
      "recursos": [
        "Tela MMI Touch",
        "Teto Solar",
        "Sistema de Som Bang & Olufsen"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "236 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "Premium Plus"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "20 mpg (cidade), 27 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 24,
      "imagem": "http://www.pngpix.com/wp-content/uploads/2016/06/PNGPIX-COM-Lexus-RX-350-F-White-Car-PNG-Image.png",
      "marca": "Lexus",
      "modelo": "RX",
      "motor": "3.5L V6",
      "numero_de_portas": 4,
      "potencia": 295,
      "preco_por_dia": 75,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Sistema de Áudio Mark Levinson",
        "Assentos de Couro",
        "Teto Solar Panorâmico"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "267 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "350"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 26,
      "imagem": "https://www.coches.com/fotos_historicas/nissan/Altima-SR-2015/nissan_altima-sr-2015_r6.jpg",
      "marca": "Nissan",
      "modelo": "Altima",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 60,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Câmera de Ré",
        "Conexão USB"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "180 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SV"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Verde",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 28,
      "imagem": "https://bengold.tv/wp-content/uploads/2019/07/Subaru-Outback-2020-verde.jpg",
      "marca": "Subaru",
      "modelo": "Outback",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 182,
      "preco_por_dia": 65,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Tração nas Quatro Rodas",
        "Tela Sensível ao Toque",
        "Assentos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "176 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 7,
      "consumo_de_combustivel": "24 mpg (cidade), 29 mpg (estrada)",
      "cor_exterior": "Cinza",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 31,
      "imagem": "https://img2.icarros.com/dbimg/imgadicionalanuncio/5/201016786_1.jpg",
      "marca": "Kia",
      "modelo": "Sorento",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 191,
      "preco_por_dia": 50,
      "quilometragem": "10,000 milhas",
      "recursos": [
        "Terceira Fila de Bancos",
        "Câmera Traseira",
        "Controle de Clima Dual Zone"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "182 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "LX"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "23 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Preto",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 33,
      "imagem": "https://ag-spots-2014.o.auroraobjects.eu/2014/10/08/other/2880-1800-crop-mercedes-benz-c-63-amg-coupe-black-series-c604508102014184950_1.jpg",
      "marca": "Mercedes-Benz",
      "modelo": "C-Class",
      "motor": "2.0L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 255,
      "preco_por_dia": 85,
      "quilometragem": "5,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Sistema de Navegação",
        "Assentos de Couro"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "273 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "C300"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "23 mpg (cidade), 34 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 35,
      "imagem": "https://i.ytimg.com/vi/W4zIhv_XPfg/maxresdefault.jpg",
      "marca": "Ford",
      "modelo": "Fusion",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 55,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Câmera de Ré",
        "Sistema de Som Premium",
        "Controle de Cruzeiro"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "129 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SE"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "24 mpg (cidade), 32 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 37,
      "imagem": "https://i.pinimg.com/originals/ab/b7/6d/abb76d4ffedf37e0bbc8231ba834caaa.jpg",
      "marca": "Volkswagen",
      "modelo": "Golf",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 228,
      "preco_por_dia": 60,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Sistema de Navegação",
        "Bancos Esportivos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "258 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "155 mph",
      "versao": "GTI"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 38,
      "imagem": "http://4.bp.blogspot.com/-SnZrMgYYIOA/UiTXmFBbNmI/AAAAAAAAyMU/PdhOzW9CzEY/s1600/Altima+(2).jpg",
      "marca": "Nissan",
      "modelo": "Altima",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 48,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Teto Solar",
        "Câmera de Ré",
        "Controle de Cruzeiro"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "180 lb-ft",
      "transmissao": "CVT",
      "velocidade_maxima": "130 mph",
      "versao": "SV"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "28 mpg (cidade), 38 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 41,
      "imagem": "https://worldautosales.com/wp-content/uploads/2018/07/2012-Hyundai-Sonata-Blue-01-1024x683.jpg",
      "marca": "Hyundai",
      "modelo": "Sonata",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 191,
      "preco_por_dia": 52,
      "quilometragem": "10,000 milhas",
      "recursos": [
        "Teto Solar",
        "Câmera de Ré",
        "Bancos de Couro"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "181 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Verde",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 43,
      "imagem": "https://bengold.tv/wp-content/uploads/2019/07/Subaru-Outback-2020-verde.jpg",
      "marca": "Subaru",
      "modelo": "Outback",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 182,
      "preco_por_dia": 53,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Sistema de Navegação",
        "Bancos de Couro"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "176 lb-ft",
      "transmissao": "CVT",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 44,
      "imagem": "https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2019NIC040006_02_1280_RAY.jpg",
      "marca": "Nissan",
      "modelo": "Altima",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 55,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Câmera de Ré",
        "Controle de Clima Dual"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "180 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SV"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Preto",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 46,
      "imagem": "https://external-preview.redd.it/DnhfMl4K-5hOdfBfoMBxyWs7Gl5MDBLeEcK2nnJr0BQ.jpg?width=960&crop=smart&auto=webp&s=23c6a37b467dbdf6c9d323226d536a6c328c02f6",
      "marca": "Hyundai",
      "modelo": "Tucson",
      "motor": "2.4L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 181,
      "preco_por_dia": 53,
      "quilometragem": "14,000 milhas",
      "recursos": [
        "Teto Solar",
        "Sistema de Som Premium",
        "Assistência de Frenagem"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "175 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "29 mpg (cidade), 35 mpg (estrada)",
      "cor_exterior": "Vermelho",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 48,
      "imagem": "https://ic1.maxabout.us/autos/cars_india/K/2019/8/kia-seltos-intense-red.jpg",
      "marca": "Kia",
      "modelo": "Seltos",
      "motor": "1.6L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 175,
      "preco_por_dia": 48,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Teto Solar",
        "Sistema de Som Harman Kardon",
        "Assistência de Faixa"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "195 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SX"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 37 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 49,
      "imagem": "https://www.dailyautostx.com/wp-content/uploads/2019/01/3-3.jpg",
      "marca": "Nissan",
      "modelo": "Altima",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 55,
      "quilometragem": "15,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Câmera de Ré",
        "Bancos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "180 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SV"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 51,
      "imagem": "https://img.besthqwallpapers.com/Uploads/21-10-2019/109208/subaru-outback-2020-exterior-blue-station-wagon-new-blue-outback.jpg",
      "marca": "Subaru",
      "modelo": "Outback",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 182,
      "preco_por_dia": 65,
      "quilometragem": "18,000 milhas",
      "recursos": [
        "Sistema de Áudio Harman Kardon",
        "Teto Panorâmico",
        "Tração nas Quatro Rodas"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "176 lb-ft",
      "transmissao": "CVT",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 28 mpg (estrada)",
      "cor_exterior": "Vermelho",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 53,
      "imagem": "https://www.karrscars.com/wp-content/uploads/2019/03/DSC_6788.jpg",
      "marca": "Hyundai",
      "modelo": "Santa Fe",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 191,
      "preco_por_dia": 70,
      "quilometragem": "14,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Bancos de Couro",
        "Sistema de Entretenimento Traseiro"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "181 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "22 mpg (cidade), 31 mpg (estrada)",
      "cor_exterior": "Verde",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 55,
      "imagem": "https://img2.carmax.com/img/vehicles/18333173/1/385.jpg",
      "marca": "Jeep",
      "modelo": "Cherokee",
      "motor": "4 cilindros 2.4L",
      "numero_de_portas": 4,
      "potencia": 180,
      "preco_por_dia": 65,
      "quilometragem": "16,000 milhas",
      "recursos": [
        "Sistema de Tração nas Quatro Rodas",
        "Tela de Entretenimento",
        "Bancos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "171 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Latitude"
    },
    {
      "ano": 2022,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 31 mpg (estrada)",
      "cor_exterior": "Azul Profundo",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 57,
      "imagem": "https://i.ebayimg.com/00/s/NzcwWDExNzg=/z/6kcAAOSwJBdfqH8p/$_57.JPG?set_id=8800005007",
      "marca": "Mazda",
      "modelo": "CX-5",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 187,
      "preco_por_dia": 70,
      "quilometragem": "14,000 milhas",
      "recursos": [
        "Tela Touchscreen de 10.25 polegadas",
        "Câmera de Ré",
        "Bancos de Couro"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "186 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "Grand Touring"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "29 mpg (cidade), 39 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 7,
      "imagem": "https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2019NIC040006_02_1280_RAY.jpg",
      "marca": "Nissan",
      "modelo": "Altima",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 188,
      "preco_por_dia": 52,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Câmera 360°",
        "Assentos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "180 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "SV"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "27 mpg (cidade), 35 mpg (estrada)",
      "cor_exterior": "Preto",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 9,
      "imagem": "https://www.webmotors.com.br/wp-content/uploads/2020/12/15165449/Audi-A4-Performance-Black-2021-fechado-na-frente-scaled.jpg",
      "marca": "Audi",
      "modelo": "A4",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 201,
      "preco_por_dia": 80,
      "quilometragem": "7,000 milhas",
      "recursos": [
        "Faróis de LED",
        "Assentos de Couro",
        "Sistema de Navegação MMI"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "236 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "135 mph",
      "versao": "Premium"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 11,
      "imagem": "https://web21st.imgix.net/assets/images/new-vehicles/subaru/subaru-outback-2018-se-premium-dark-blue-pearl.png",
      "marca": "Subaru",
      "modelo": "Outback",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 182,
      "preco_por_dia": 60,
      "quilometragem": "6,000 milhas",
      "recursos": [
        "Sistema de Tração nas Quatro Rodas",
        "Teto Solar",
        "Assistência de Condução"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "176 lb-ft",
      "transmissao": "CVT",
      "velocidade_maxima": "130 mph",
      "versao": "Premium"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 32 mpg (estrada)",
      "cor_exterior": "Vermelho",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 14,
      "imagem": "https://s1.1zoom.me/b4453/477/Mazda_2017_CX-5_Red_Metallic_552776_1366x768.jpg",
      "marca": "Mazda",
      "modelo": "CX-5",
      "motor": "4 cilindros 2.5L",
      "numero_de_portas": 4,
      "potencia": 187,
      "preco_por_dia": 56,
      "quilometragem": "7,000 milhas",
      "recursos": [
        "Câmera de Ré",
        "Assentos Aquecidos",
        "Sistema de Áudio Bose"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "186 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Touring"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "30 mpg (cidade), 40 mpg (estrada)",
      "cor_exterior": "Cinza",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 17,
      "imagem": "http://img.revendapro.com.br/90dfaf168b7738c1d7cb5e4266451e4c_thumb.png",
      "marca": "Volkswagen",
      "modelo": "Jetta",
      "motor": "1.4L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 147,
      "preco_por_dia": 48,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Apple CarPlay",
        "Assistente de Estacionamento",
        "Faróis de LED"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "184 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "SE"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "29 mpg (cidade), 38 mpg (estrada)",
      "cor_exterior": "Vermelho",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 19,
      "imagem": "https://s1.1zoom.me/b5050/426/KIA_2016_Optima_Sportswagon_GT_Line_Wine_color_537195_1920x1200.jpg",
      "marca": "Kia",
      "modelo": "Optima",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 180,
      "preco_por_dia": 55,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Teto Solar",
        "Câmera de Ré"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "178 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "EX"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "22 mpg (cidade), 30 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 21,
      "imagem": "http://pt.hdwall365.com/wallpapers/1606/Mercedes-Benz-C-Class-W205-silver-car_m.jpg",
      "marca": "Mercedes-Benz",
      "modelo": "C-Class",
      "motor": "2.0L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 255,
      "preco_por_dia": 85,
      "quilometragem": "7,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Assentos de Couro",
        "Sistema de Áudio Premium"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "273 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "C 300"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Verde",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 23,
      "imagem": "https://subarucore.s3.eu-west-2.amazonaws.com/wp-content/uploads/2021/05/14130502/21MY-Outback_Limited_Autumn-Green-Flipped.png",
      "marca": "Subaru",
      "modelo": "Outback",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 182,
      "preco_por_dia": 60,
      "quilometragem": "11,000 milhas",
      "recursos": [
        "Tela de Toque de 11,6 polegadas",
        "Tração nas Quatro Rodas",
        "Teto Solar"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "176 lb-ft",
      "transmissao": "CVT",
      "velocidade_maxima": "125 mph",
      "versao": "Limited"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "30 mpg (cidade), 40 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 27,
      "imagem": "http://img.revendapro.com.br/e931a87670b152838a61913fc3b2c794_thumb.jpeg",
      "marca": "Volkswagen",
      "modelo": "Jetta",
      "motor": "1.4L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 147,
      "preco_por_dia": 55,
      "quilometragem": "9,000 milhas",
      "recursos": [
        "Teto Solar",
        "Apple CarPlay",
        "Sistema de Som Premium"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "184 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "SE"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "24 mpg (cidade), 34 mpg (estrada)",
      "cor_exterior": "Cinza",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 29,
      "imagem": "https://img1.icarros.com/dbimg/imgadicionalanuncio/5/184409663_1.jpg",
      "marca": "Audi",
      "modelo": "A4",
      "motor": "2.0L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 201,
      "preco_por_dia": 75,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Sistema de Som Bang & Olufsen",
        "Câmera 360 Graus"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "236 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "Premium"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 33 mpg (estrada)",
      "cor_exterior": "Branco",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 30,
      "imagem": "https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2018HYS020037_02_1280_PDW.jpg",
      "marca": "Hyundai",
      "modelo": "Tucson",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 187,
      "preco_por_dia": 55,
      "quilometragem": "7,000 milhas",
      "recursos": [
        "Tela Touchscreen",
        "Sensor de Ponto Cego",
        "Assentos Aquecidos"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "178 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "SEL"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "20 mpg (cidade), 28 mpg (estrada)",
      "cor_exterior": "Vermelho",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 32,
      "imagem": "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2018-Lexus-RX350L-suv-red-1200x800-(1).jpg",
      "marca": "Lexus",
      "modelo": "RX",
      "motor": "3.5L V6",
      "numero_de_portas": 4,
      "potencia": 295,
      "preco_por_dia": 80,
      "quilometragem": "6,000 milhas",
      "recursos": [
        "Bancos de Couro",
        "Sistema de Entretenimento Traseiro",
        "Teto Solar Elétrico"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "268 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "135 mph",
      "versao": "350"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "26 mpg (cidade), 35 mpg (estrada)",
      "cor_exterior": "Azul",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 34,
      "imagem": "https://s3.amazonaws.com/dercocenter.cl/uploads/sites/6/2017/10/mazda-cx-5-galeria-ficha-exterior-10-1.jpg",
      "marca": "Mazda",
      "modelo": "CX-5",
      "motor": "2.5L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 187,
      "preco_por_dia": 60,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Câmera Traseira",
        "Tela Touchscreen",
        "Sistema de Som Bose"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "186 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "125 mph",
      "versao": "Touring"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 4,
      "consumo_de_combustivel": "16 mpg (cidade), 24 mpg (estrada)",
      "cor_exterior": "Vermelho",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 36,
      "imagem": "http://3.bp.blogspot.com/-CFTFf3Qp6iI/UFTxsefPKsI/AAAAAAAAYNo/cQmYQU-NdA0/s1600/chevrolet-camaro-Camaro_vermelho+(4).jpg",
      "marca": "Chevrolet",
      "modelo": "Camaro",
      "motor": "V8 6.2L",
      "numero_de_portas": 2,
      "potencia": 455,
      "preco_por_dia": 85,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Teto Solar",
        "Sistema de Som Premium",
        "Bancos Esportivos"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "455 lb-ft",
      "transmissao": "Manual 6 marchas",
      "velocidade_maxima": "175 mph",
      "versao": "SS"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 34 mpg (estrada)",
      "cor_exterior": "Preto",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 39,
      "imagem": "https://www.webmotors.com.br/wp-content/uploads/2020/12/15165254/Audi-A4-Performance-Black-2021-scaled.jpg",
      "marca": "Audi",
      "modelo": "A4",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 201,
      "preco_por_dia": 70,
      "quilometragem": "7,000 milhas",
      "recursos": [
        "Teto Solar",
        "Sistema de Som Bang & Olufsen",
        "Bancos de Couro"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "236 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "Premium"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "23 mpg (cidade), 32 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 40,
      "imagem": "https://s1.1zoom.me/big0/661/Mercedes-Benz_AMG_C-Class_C205_Silver_color_Coupe_554990_1280x640.jpg",
      "marca": "Mercedes-Benz",
      "modelo": "C-Class",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 255,
      "preco_por_dia": 80,
      "quilometragem": "6,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Sistema de Navegação",
        "Bancos de Couro"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "273 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "145 mph",
      "versao": "C300"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "22 mpg (cidade), 32 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 42,
      "imagem": "https://cdn.carsp.com.br/upload/imgcache/3bc4928ab16380866c214c47e44becd6.jpg",
      "marca": "Lexus",
      "modelo": "ES",
      "motor": "V6 3.5L",
      "numero_de_portas": 4,
      "potencia": 302,
      "preco_por_dia": 75,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Teto Solar",
        "Sistema de Som Mark Levinson",
        "Bancos de Couro"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "267 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "350"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "25 mpg (cidade), 36 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 45,
      "imagem": "https://i1.wp.com/www.autocustom.com.br/wp-content/uploads/2014/04/passat-ts-1977-prata-turbo-aro-17-3.jpg?ssl=1",
      "marca": "Volkswagen",
      "modelo": "Passat",
      "motor": "1.8L 4-cilindros",
      "numero_de_portas": 4,
      "potencia": 170,
      "preco_por_dia": 58,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Apple CarPlay",
        "Assistente de Estacionamento"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "184 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "SEL"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "22 mpg (cidade), 30 mpg (estrada)",
      "cor_exterior": "Cinza",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 47,
      "imagem": "https://s1.1zoom.me/b5647/408/Audi_A6_50_TDI_quattro_S_line_Worldwide_Grey_574127_2560x1440.jpg",
      "marca": "Audi",
      "modelo": "A6",
      "motor": "3.0L V6",
      "numero_de_portas": 4,
      "potencia": 335,
      "preco_por_dia": 75,
      "quilometragem": "6,000 milhas",
      "recursos": [
        "Sistema de Navegação",
        "Teto Solar Panorâmico",
        "Sistema de Som Bang & Olufsen"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "369 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "Premium Plus"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "24 mpg (cidade), 36 mpg (estrada)",
      "cor_exterior": "Prata",
      "cor_interior": "Cinza",
      "disponivel": true,
      "id": 50,
      "imagem": "http://img.revendapro.com.br/f75e3805d05d2e39ff7193d5315628f3_big.jpg",
      "marca": "Volkswagen",
      "modelo": "Passat",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 174,
      "preco_por_dia": 60,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Teto Solar",
        "Apple CarPlay",
        "Controle de Cruzeiro Adaptativo"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "206 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "130 mph",
      "versao": "SE"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "23 mpg (cidade), 35 mpg (estrada)",
      "cor_exterior": "Cinza",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 52,
      "imagem": "https://img1.icarros.com/dbimg/imgadicionalanuncio/5/184409663_1.jpg",
      "marca": "Audi",
      "modelo": "A4",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 201,
      "preco_por_dia": 75,
      "quilometragem": "10,000 milhas",
      "recursos": [
        "Sistema de Som Bang & Olufsen",
        "Bancos de Couro",
        "Assistente de Estacionamento"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "236 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "140 mph",
      "versao": "Premium Plus"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "29 mpg (cidade), 34 mpg (estrada)",
      "cor_exterior": "Laranja",
      "cor_interior": "Preto",
      "disponivel": true,
      "id": 54,
      "imagem": "https://inventory-dmg.assets-cdk.com/ChromeColorMatch/us/WHITE_cc_2021KIS080008_01_1280_M3R.jpg",
      "marca": "Kia",
      "modelo": "Seltos",
      "motor": "4 cilindros 2.0L",
      "numero_de_portas": 4,
      "potencia": 147,
      "preco_por_dia": 55,
      "quilometragem": "12,000 milhas",
      "recursos": [
        "Tela Touchscreen de 10 polegadas",
        "Câmera de Ré",
        "Controle de Cruzeiro Adaptativo"
      ],
      "tipo_de_combustivel": "Gasolina",
      "torque": "132 lb-ft",
      "transmissao": "CVT",
      "velocidade_maxima": "120 mph",
      "versao": "EX"
    },
    {
      "ano": 2023,
      "capacidade_de_passageiros": 5,
      "consumo_de_combustivel": "20 mpg (cidade), 27 mpg (estrada)",
      "cor_exterior": "Branco Pérola",
      "cor_interior": "Bege",
      "disponivel": true,
      "id": 56,
      "imagem": "http://www.car-revs-daily.com/wp-content/uploads/2015/11/2016-Lexus-RX350-Eminent-White-Pearl-28-1600x956.jpg",
      "marca": "Lexus",
      "modelo": "RX",
      "motor": "V6 3.5L",
      "numero_de_portas": 4,
      "potencia": 295,
      "preco_por_dia": 80,
      "quilometragem": "8,000 milhas",
      "recursos": [
        "Teto Solar Panorâmico",
        "Bancos de Couro",
        "Sistema de Som Mark Levinson"
      ],
      "tipo_de_combustivel": "Gasolina Premium",
      "torque": "267 lb-ft",
      "transmissao": "Automática",
      "velocidade_maxima": "135 mph",
      "versao": "L"
    }
  ])
    
    
    const scrollY = new Animated.Value(0)
    const diffClampScroll = Animated.diffClamp(scrollY, 0, Platform.OS == 'android'? 100 : 95).interpolate({
      inputRange: [0, 1],
      outputRange: [0, -1]
    })
   
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        zIndex: 2
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
        transform: [{translateY: diffClampScroll}],
        ...Platform.select({
          android: {
            height: 100
          }
        })
    
    
        // borderBottomColor: '#80808041',
        // borderBottomWidth: 1
      },
      homeTitle: {
        flexDirection: 'row',
        marginLeft: -15,
        transform: [{translateX: -15}],
      },
      title: {
        width: 150,
        height: 40
      },
      subTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginHorizontal: 10,
        marginVertical: 20,
      },
      tab: {
        fontWeight: '700',
        width: '200%',
        fontSize: 13,
        color: '#2e2e2e',
        paddingVertical: 13,
        paddingHorizontal: 10

      },
      tab2: {
          fontSize: 13,
          color: '#b9b9b9',
          fontWeight: '600',
          paddingVertical: 13,
          paddingHorizontal: 10
      },
      tabContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
      }
    
    });
    const scrollRef = useRef(null)
    const handleTabPress = (index) => {
      scrollRef.current.scrollTo({x: index * Dimensions.get('window').width, animated: true})
    }
    const [profilepic, setProfile] = useState()
    const [timestamp, setTimestamp] = useState(Date.now())
    useFocusEffect(useCallback(() => {
      
      AsyncStorage.getItem('profilepic')
      .then(res => {
        setProfile(JSON.parse(res))
      })
      setTimestamp(Date.now())
    }, []))
    useEffect(() => {
      AsyncStorage.getItem('profilepic')
      .then(res => {
        console.log(res)
        setProfile(JSON.parse(res))
      })
    }, [])

    return (
        <View style={styles.container}>
            
            <Animated.View style={styles.header}>
                <Pressable onPress={()=> {
                  navigation.openDrawer()
                }}>
                    <View>
                    {profilepic == null ? <Image source={require('../assets/propImages/blankprofile.jpg')}   style={{width: 40, height: 40, borderRadius: 50}}/>:    <>
                {profilepic != null &&

                <Image key={3}  style={{width: 40, height: 40, borderRadius: 50}}source={{uri: `${baseURL}${profilepic}?${timestamp}`}}/>
                }</>}
                    
                    </View>
                </Pressable>
                <View style={styles.homeTitle}>
                  <Image source={require('../assets/propImages/goingplacestitle.png')} style={{transform: [{translateY: -1}, {translateX: 0}], height: 32, width: 210}}/>
                  {/* <Image style={{width: 32, height: 32, transform: [{translateY: 2}, {translateX: -5}]}} source={require('../assets/propImages/cmbdblack.png')}/><Image style={styles.title} source={require('../assets/goingplaces.png')}/> */}
                  </View>
                <View></View>
            </Animated.View>
            <Animated.ScrollView style={{ flex: 1}} nestedScrollEnabled bounces={false} onScroll={Animated.event([
                {
                  nativeEvent: {contentOffset: {y: scrollY}}
                }
              ], {useNativeDriver: true})}
              >
                
                <View style={{ marginTop: 90, flex: 1}}>
            
                    {/* <HomeSliderTab /> */}
                    <View style={{height: 410}}>
                      <View style={styles.tabContainer}>
                        <TouchableOpacity onPress={()=>{
                          handleTabPress(0)
                          setActiveTab('popular')}}>
                          <Text style={activeTab == 'popular'? styles.tab : styles.tab2}>Popular</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={()=>{
                          handleTabPress(1)
                          setActiveTab('recente')}}>
                          <Text style={activeTab == 'recente'? styles.tab : styles.tab2}>Recente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{}} onPress={()=>{
                          handleTabPress(2)
                          setActiveTab('luxo')}}>
                          <Text style={activeTab == 'luxo'? styles.tab : styles.tab2}>Luxo</Text>
                        </TouchableOpacity>
                      </View>
                      {/* {
                        activeTab == 'popular'
                        ? <PopularSlide />
                        : activeTab == 'recente'
                        ? <NewestSlide />
                        : <LuxurySlide />
                      } */}
                      <ScrollView ref={scrollRef} scrollEnabled={false} onScroll={(e)=> {

                      }} nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false} pagingEnabled={true}>
                        <View style={{width: Dimensions.get('window').width}}>
                          <PopularSlide />
                        </View>
                        <View style={{width: Dimensions.get('window').width}}>
                          <NewestSlide />
                        </View>
                        <View style={{width: Dimensions.get('window').width}}>
                          <LuxurySlide />
                        </View>
                        
                      </ScrollView>
                      {/* <View style={activeTab != 'popular' ? {display: 'none'} : {height: 410}}><PopularSlide /></View>
                      <View style={activeTab != 'recente' ? {display: 'none'} : {height: 410}}><NewestSlide /></View>
                      <View style={activeTab != 'luxo' ? {display: 'none'} : {height: 410}}><LuxurySlide /></View> */}
                    </View>
            
                  <Text style={styles.subTitle}>Promoções Activas</Text>
                  <Promotions />
                  <Text style={styles.subTitle}>Recomendações</Text>
                  <Recommmendations />
                </View>
            
              </Animated.ScrollView>
        </View>
    )
}
export default Home