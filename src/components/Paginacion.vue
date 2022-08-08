<template>
    <div class="paginacion" v-if="paginacion !== ''">
          <div class="paginacion-container" v-for="(item,index) in paginacion" :key="index">
            <router-link class="paginacion-container__link" :to="{name : item.name, params: {page: item.link}}">{{index+1}}</router-link>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Paginacion',
  data(){
      return{
          paginacion: [{
            name: 'Trastornos',
            link: '1'
          },
          {
            name: 'Trastornos2',
            link: '2'
          },
          {
            name: 'Trastornos3',
            link: '3'
          },
          {
            name: 'Trastornos4',
            link: '4'
          },
          {
            name: 'Trastornos5',
            link: '5'
          }]
      }
  }
}
</script>