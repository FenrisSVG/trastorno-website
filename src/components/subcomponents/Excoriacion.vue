<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno de Excoriacion</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <div class="trastornos-container__text">
            <p><strong>El <span>Trastorno de Excoriacion</span></strong> es el rascado recurrente de la propia
            piel. Los sitios mas frecuentes son la cara, los brazos y las manos, las personas pueden rascarse la piel
            sana, las irregularidades menores de la piel y las lesiones, como granos o callos. La mayoria de los individuos
            lo hacen con sus uñas, alfileres, pinzas u otros objetos. La mayoria de los individuos a menudo pasan una cantidad
            significativa de su tiempo realizando comportamientos de rascado, a veces varias horas del dia y esta Excoriacion
            de la piel puede durar meses o años</p>
            <p>El rascado de la piel puede estar acompañado por una serie de comportamiento que involucran la piel o las costras de igual forma puede
                estar precedido o acompañado de diferentes estados emocionales. Puede estar provocado por sentimientos de 
                ansiedad o aburrimiento, podra estar precedido de una sensacion creciente de tension, y puede dar lugar
                a la satisfaccion, placer o una sensacion de alivio cuando se ha rascado la piel.
            </p>
            <h3><strong>Sintomas clinicos del Trastorno de Excoriacion.</strong></h3>
            <p>Algunos sintomas del Trastorno de Excoriacion son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>Aunque el trastorno de excoriacion se puede presentar en diversas edades, el rascado de la piel se inicia mas
                a menudo en la adolescencia, generalmente coincidiendo con el inicio de la pubertad o poco despues. El trastorno con
                frecuencia comienza con una afeccion dermatologica como el acne. Los sitios de rascado de piel pueden variar con el tiempo.
                El curso natural es cronico y fluctuante.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno de Excoriacion.</strong></h3>
            <p>El trastorno de Excoriacion es mas frecuente en los pacientes diagnosticado con el trastorno Obsesivo-Compulsivo.
            El trastorno de Excoriacion se asocia con la angustia, asi como con dispacacidad social y ocupacional.
            La mayoria de las personas con esta enfermedad pasan al menos 1 hora al dia rascandose, pensando en el rascado y resistiendose
            al impulso de rascarse. Muchas personas refieren que evitan eventos sociales o de osio, asi como salir en publico, tambien que el rascado
            interfiere en su trabajo con una frecuencia por lo menos diaria o semanal.
            </p>
            <h3>Riesgo de suicidio</h3>
            <p>Los sujetos con <strong>Trastorno de Excoriacion.</strong> en los jovenes las tasas de ideacion suicidas
            e intentos suicidas son altas. En los adoslecentes este trastorno el suicidio parece ser alto.
            </p>
            <h3><strong>¿Como se trata el Trastorno de Excoriacion.?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
            </p>
            <h3><strong>Recuerda que no estas solo.</strong></h3>
            <p>Sabemos que la ansiedad puede ser un problema dificil pero <strong>no estas solo</strong>
            Recuerda que buscar ayuda siempre está bien, no hay nada mejor que contar con un especialista que te pueda enseñar qué hacer para superar la depresión. No lo dudes,  
            realmente te sorprenderás con los resultados si buscas ayuda contra la ansiedad hoy</p>
          </div>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../Footer.vue';
export default {
  name: 'Excoriacion',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Dañarse la piel de forma recurrente hasta producirse lesiones cutaneas","Rascarse la piel","Inquietud","Nerviosismo","Cambios en el estado de animo","Ansiedad o aburrimiento"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>