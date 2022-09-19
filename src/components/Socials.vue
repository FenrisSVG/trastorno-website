<template>
  <div
    class="socials"
    v-if="icons !== []"
    v-scroll-reveal.reset="{ delay: 400, easing: 'cubic-bezier(0.5, 0, 0, 1)' }"
  >
    <div class="socials-container" v-for="(icon, index) in icons" :key="index">
      <span
        ><a
          href="http://google.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <i :class="icon"></i></a
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Socials",
  data() {
    return {
      icons: {
        facebook: "socials-container__icon fab fa-facebook",
        instagram: "socials-container__icon fab fa-instagram",
        twitter: "socials-container__icon fab fa-twitter-square",
        linkedin: "socials-container__icon fab fa-linkedin",
        pinterest: "socials-container__icon fab fa-pinterest",
      },
    };
  },
};
</script>
