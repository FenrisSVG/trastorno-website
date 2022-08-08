import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    trastornos: [
      {
        id: 1,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno ansiedad generalizada',
        link: 'ansiedad-generalizada',
        router: 'Ansiedad'
      },
      {
        id: 2,
        image: require('../assets/desktop/separacion.jpg'),
        name: 'trastorno ansiedad por separacion',
        link: 'ansiedad-por-separacion',
        router: 'Separacion'
      },
      {
        id:3,
        image: require("../assets/desktop/fobia.jpg"),
        name: 'fobia especifica',
        link: 'fobia-especifica',
        router: 'Fobia'
      },
      {
        id: 4,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de ansiedad social',
        link: 'ansiedad-social',
        router: "Social"
      },
      {
        id: 5,
        image: require("../assets/desktop/panico.jpg"),
        name: 'trastorno de panico',
        link: 'panico',
        router: 'Panico'
      },
      {
        id: 6,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno mutismo selectivo',
        link: 'mutismo-selectivo',
        router: 'Mutismo'
      },
      {
        id: 7,
        image: require('../assets/desktop/agorafobico.jpg'),
        name: 'trastorno argofobico',
        link: 'argofobico',
        router: 'Argofobico'
      },
      {
        id: 8,
        image: require("../assets/desktop/obsesivo.jpg"),
        name: 'trastorno obsesivo-compulsivo',
        link: 'obsesivo-compulsivo',
        router: 'Obsesivo'
      },
      {
        id: 9,
        image: require("../assets/desktop/dismotfico.jpg"),
        name: 'Transtorno dismotfico corporal',
        link: 'dismotfico-corporal',
        router: "Dismotfico"
      },
      {
        id: 10,
        image: require("../assets/desktop/acumulacion.jpg"),
        name: 'trastorno de acumulacion',
        link: 'acumulacion',
        router: 'Acumulacion'
      },
      {
        id: 11,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de excoriacion',
        link: 'excoriacion',
        router: 'Excoriacion'
      },
      {
        id: 12,
        image: require("../assets/desktop/depresion.jpg"),
        name: 'trastorno de depresion mayor',
        link: 'depresion',
        router: 'Depresion'
      },
      {
        id: 13,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno depresivo persistente',
        link: 'persistente',
        router: 'Persistente'
      },
      {
        id: 14,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno depresivo inducido por medicamentos',
        link: 'medicamentos',
        router: 'Medicamentos'
      },
      {
        id: 15,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno depresivo debido a afeccion medica',
        link: 'afeccion-medica',
        router: 'Afeccion'
      },
      {
        id: 16,
        image: require("../assets/desktop/traumas.jpg"),
        name: 'trastorno relacionado con traumas y factores de estres',
        link: 'traumas',
        router: 'traumas'
      },
      {
        id: 17,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de apego reactivo',
        link: 'apego',
        router: 'Apego'
      },
      {
        id: 18,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de estres postraumatico',
        link: 'estres',
        router: 'Estres'
      },
      {
        id: 19,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de estres agudo',
        link: 'agudo',
        router: 'Agudo'
      },
      {
        id: 20,
        image: require("../assets/desktop/ansiedad-generalizada.jpg"),
        name: 'trastorno de adaptacion',
        link: 'adaptacion',
        router: 'Adaptacion'
      },
      {
        id: 21,
        image: require("../assets/desktop/paranoia.jpg"),
        name: 'trastorno de personalidad paranoide',
        link: 'paranoide',
        router: 'Paranoide'
      },
      {
        id: 22,
        image: require("../assets/desktop/antisocial.jpg"),
        name: 'trastorno de personalidad antisocial',
        link: 'antisocial',
        router: 'Antisocial'
      },
      {
        id: 23,
        image: require("../assets/desktop/antisocial.jpg"),
        name: 'trastorno de personalidad esquizotipica',
        link: 'esquizotipica',
        router: 'Esquizotipica'
      },
      {
        id: 24,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de personalidad limite',
        link: 'limite',
        router: 'Limite'
      },
      {
        id: 25,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de personalidad histrionica',
        link: 'histrionica',
        router: 'Histrionica' 
      },
      {
        id: 26,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de personalidad dependiente',
        link: 'dependiente',
        router: 'Dependiente'
      },
      {
        id: 27,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de bipolaridad tipo I',
        link: 'bipolar-1',
        router: 'BipolarI'
      },
      {
        id: 28,
        image: require("../assets/desktop/limite.jpg"),
        name: 'trastorno de bipolaridad tipo II',
        link: 'bipolar-2',
        router: 'BipolarII'
      }
    ],
    filter:{
      query: ''
    },
    getTrastorno: '',
    isFilter: false
  },
  mutations: {
    SET_QUERY(state,query){
      state.filter.query = query
    }
  },
  getters:{
    filteredTrastornos(state){
      if(state.filter.query.length >= 1){
        state.isFilter = true
        return state.trastornos.filter(item=> item.name.toLowerCase().includes(state.filter.query))
      }
      state.isFilter = false
      return state.trastornos
    }
  },
  actions: {
  },
  modules: {
  }
})
