<template>
    <section class="danger-trastorno" v-if="danger !== []" id="peligrosos">
        <h2 class="danger-trastorno__title">Trastornos mas peligrosos que te pueden diagnosticar</h2>
        <div class="danger" v-for="item in danger" :key="item.id">
            <div class="danger-img">
              <img :src="item.src" :alt="item.alt" loading="lazy" class="danger-image">
            </div>
            <div class="danger-text">
              <p class="danger-text__trastorno">{{item.name}}</p>
            </div>
        </div>
    </section>
</template>


<script>


export default {
  name: 'Peligrosos',
  data(){
    return{
      danger:[{
        id: 1,
        src: require('../assets/desktop/trastorno.jpg'),
        name: 'Trastorno Obsesivo Compulsivo',
        alt: 'trastonro mas peligrosos trastorno obsesivo compulsivo image'
      },
      {
        id: 2,
        src: require('../assets/desktop/trastorno2.jpg'),
        name: 'Trastorno Depresivos.',
        alt: 'trastonro mas peligrosos trastorno depresivos image'
      },
      {
        id: 3,
        src: require('../assets/desktop/trastorno3.jpg'),
        name: 'Trastornos de Ansiedad.',
        alt: 'trastonro mas peligrosos trastorno ansiedad image'
      },
      {
        id: 4,
        src: require('../assets/desktop/trastorno4.jpg'),
        name: 'Trastorno Azperger',
        alt: 'trastonro mas peligrosos trastorno azperger image'
      },
      {
        id: 5,
        src: require('../assets/desktop/trastorno5.jpg'),
        name: 'Trastorno Alzheimer',
        alt: 'trastonro mas peligrosos trastorno ezquizofrenia image'
      }]
    }
  }
}
</script>


