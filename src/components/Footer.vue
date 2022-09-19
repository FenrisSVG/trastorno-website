<template>
    <footer class="footer" v-scroll-reveal="{delay: 500}">
        <div class="footer-image">
            <img src="../assets/logo.png" alt="Logo webpage in footer" loading="lazy">
            <p class="footer-image__copyright"><span>© </span> Felix Sandoval. All Rights Reserved</p>
        </div>

        <div class="footer-about">
        <div class="footer-about__nav">
            <p class="footer-about__title">Platform</p>
            <ul class="footer-about__menu" v-if="linkOne !== ''">
            <li class="footer-about__item" v-for="(item,index) in linkOne" :key="index">
                <a href="" class="footer-about__link">{{item.name}}</a></li>
            </ul>
        </div>
        <div class="footer-about__nav">
            <p class="footer-about__title">Company</p>
            <ul class="footer-about__menu">
            <li class="footer-about__item"><a href="" class="footer-about__link">Careers</a></li>
            </ul>
        </div>
        <div class="footer-about__nav">
            <p class="footer-about__title">Resources</p>
            <ul class="footer-about__menu" v-if="linkThree !== ''">
            <li class="footer-about__item" v-for="(item,index) in linkThree" :key="index">
                <a href="" class="footer-about__link">{{item.name}}</a></li>
            </ul>
        </div>
        </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data(){
      return{
          linkOne: [{
              name: 'Creators'
          },
          {
              name: 'Brands & Agency'
          },
          {
              name: 'Pricing'
          },
          {
              name: 'Community'
          }],
          linkThree: [{
              name: 'Help'
          },
          {
              name: 'Support'
          },
          {
              name: 'Terms of Use'
          },
          {
              name: 'Privacy'
          },
          {
              name: 'legacy'
          }]
      }
  }
}
</script>