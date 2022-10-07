<template>
    <div>
      <section class="trastornos">
        <h2 class="trastornos-title">Trastorno Dismotfico.</h2>
        <article class="trastornos-container">
          <header class="trastornos-container__img">
            <img src="../../assets/desktop/ansiedad-generalizada.jpg" alt="">
          </header>
          <div class="trastornos-container__text">
            <p><strong>El <span>Trastornos Dismotfico</span></strong> es la preocupacion por uno o mas defectos 
            o imperfecciones percibidas en el aspecto fisico que son observables. El algun momento del transcurso
            el sujero realiza comportamientos como mirarse en el espejo, asearse en exceso, rascarse la piel, por consiguiente
            la preocupacion causa malestar clinicametne significativo o deterioso social.</p>
            <p>Los individuos con este trastorno estan muy preocupados por su apariencia fisica, por lo que se ven feos, poco atractivos,
            , en respuesta a esta preocupacion se llevan a cabo comportamientos o actos mentales excesivos y repetivos.
            </p>
            <h3><strong>Sintomas clinicos del Trastorno Dismotfico.</strong></h3>
            <p>Algunos sintomas del Trastorno Dismotfico son,</p>
            <div class="sintomas">
              <ol class="sintomas-menu" v-if="sintomas != ''">
                <li v-for="(item,index) in sintomas" :key="index" class="sintomas-menu__item">{{item}}</li>
              </ol>
            </div>
            <h3>Desarollo y curso</h3>
            <p>La edad media de inicio de este trastorno esta entre los 15-17 años. Dos terceras parte de los individuos inicia
                a los 18 años. Los sintomas subclinicos por lo general empiezan a lo 12 o 13 años. En general el trastorno parece ser
                cronico, aunque es frecuente la mejoria cuando se recibe tratamiento. Las caracteristicas clinicas parecen ser muy similares
                tanto en niños como en los adultos.
            </p>
            <h3><strong>Consecuencias que tiene este Trastorno Dismotfico.</strong></h3>
            <p>Sus consecuencias es el desarrollo de ademas del alto riesgo de suicidio es que presentan un funcionamiento
                psicosocial afectado debido a las preocupaciones sobre su apariencia. El deterioro puede variar de moderado a extremo e incapacitante
                Sus sintomas mas graves son el deterioro de la calidad de vida, como por ejemplo ser deteriorados en el trabajo o resultados academicos.
            </p>
            <h3>Riesgo de suicidio</h3>
            <p>Los sujetos con <strong>Trastorno Dismotfico.</strong> en los jovenes las tasas de ideacion suicidas
            e intentos suicidas son altas. Enlos adoslecentes este trastorno el suicidio parece ser alto.
            </p>
            <h3><strong>¿Como se trata el Trastorno Dismotfico.?</strong></h3>
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
  name: 'Dismotfico',
  components:{
    Footer
  },
  data(){
    return{
      sintomas:["Nauseas","Agitacion","Rascarse la piel","Preocupacion por imperfecciones"]
    }
  },
  created(){
    return window.scrollTo(0,0)
  }
}
</script>