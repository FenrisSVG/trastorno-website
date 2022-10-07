<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Obsesivo-Compulsivo.</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="" loading="lazy">
          </header>
          <footer class="trastornos-container__text">
            <p><strong>El Trastornos Obsesivo-Compulsivo.</strong> es la presencia de obsesion, que significa tener pensamientos desorganizados,
            impulsos o imagenes persistentes que se experimentan en algun momento del trastorno, que en la mayoria
            de las veces causa ansiedad.</p>
            <p>El individuo intenta ignorar o suprimir estas obsesiones con otro pensamiento o accion. Las compulsiones son conductas o actos
                mentales de caracter repetitivo que el individuo se siente impulsado a realizar en respuesta a una obsesion.
            </p>
            <h3><strong>Sintomas clinicos del Trastorno Obsesivo-Compulsivo.</strong></h3>
            <p>Algunos sintomas del Trastorno Obsesivo-Compulsivo son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>En promedio suele aparecer entre los 19 años. Los varones tienen una edad mas temprana de aparicion
                que las mujeres. Si este trastorno no se trata suele ser cronico, a menudo con sintomas oscilantes. Algunas personas 
                tienen un curso episodico y una minoria sufre un deterioro.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno Obsesivo-Compulsivo.</strong></h3>
            <p>Sus consecuencias es el desarrollo de <strong>Traumas
            </strong> tambien una menor calidad de vida, alto nivel de deterioro en la vida social, laboral. Este deterioro 
            puede ser debido al tiempo que se den las obsesiones.
            </p>
            <h3>Riesgo de suicidio</h3>
            <p>Los sujetos con <strong>Trastorno Obsesivo-Compulsivo.</strong> tienen pensamientos suicidas producidos por
            aproximadamente por la mitad de los individuos con TOC en algun momento de su vida. Si tienes presencia del trastorno de depresion mayor,
            el riesgo de suicidio aumenta
            </p>
            <h3><strong>¿Como se trata el Trastorno Obsesivo-Compulsivo.?</strong></h3>
            <p>La manera de tratar este problema es con medicamentos psicofarmaceuticos, pero lo mejor
              es que <strong>consulte con un experto de verdad no con unos pendejos como nosotros.</strong>
            </p>
            <h3><strong>Recuerda que no estas solo.</strong></h3>
            <p>Sabemos que la ansiedad puede ser un problema dificil pero <strong>no estas solo</strong>
            Recuerda que buscar ayuda siempre está bien, no hay nada mejor que contar con un especialista que te pueda enseñar qué hacer para superar la depresión. No lo dudes,  
            realmente te sorprenderás con los resultados si buscas ayuda contra la ansiedad hoy</p>
          </footer>
        </article>
      </section>
        <Footer/>
    </div>
</template>

<script>
    
import Footer from '../Footer.vue';


export default {
  name: 'Obsesivo',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nerviosismo","Agitacion","Taquicardia"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>