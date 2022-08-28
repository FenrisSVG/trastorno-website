<template>
  <div class="home">
    <Slider/>
    <!-- PART 01 - MEANING MIND DISORDER -->
    <main class="main">
      <div class="flex-container" id="meaning" v-scroll-reveal.reset="{delay: 400}">
        <Index title="Trastornos Mentales" class="slider__aside--secondary" />
        <section class="section">
          <Chapter part="Parte 01"/>
          <article class="article">
            <div class="article-header">
              <Title title="Trastornos" subtitle="Mentales" />
              <h3 class="article-header__subtitle">¿Que son los Trastornos <span>Mentales</span> ?</h3>
            </div>
            <div class="article-body" v-if="trastornos.length > 0">
              <p class="article-body__text" v-for="item in trastornos" :key="item.id">
                {{item.text}}
              </p>
            </div>
          </article>
          <div class="section-image atropos my-atropos">
            <div class="atropos-scale">
              <div class="atropos-rotate">
                <div class="atropos-inner">
                  <img src="../assets/desktop/trastorno.jpg" alt="idk what i suppose to put here" class="section-image__img" loading="lazy"
                  data-atropos-offset="5">
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <aside class="aside" v-scroll-reveal.reset="{delay: 400,opacity:.2}">
        <div class="slider__aside slider__aside--three">
          <h2 class="slider__aside-title slider__aside-title--white">Navigation</h2>
        </div>
        <section class="section section--secondary">
          <div class="section-chapter section-chapter--secondary">
            <h2 class="section-chapter__title section-chapter__title--navigation">Navigation</h2>
            <p class="section-chapter__text--secondary">Just in cause you need some help getting around.</p>
          </div>
          <div class="navigation">
            <div class="navigation-primary" v-if="navigation !== []">
              <div class="navigation-container" v-for="item in navigation.slice(0,4)" :key="item.id">
                <a :href="item.href" class="navigation-container__link" rel="nofollow noopener noreferrer">{{item.name}}</a>
                <i class="fas fa-long-arrow-alt-right navigation-container__icon"></i>
              </div>
            </div>
            <div class="navigation-primary" v-if="navigation !== []">
              <div class="navigation-container" v-for="item in navigation.slice(4,8)" :key="item.id">
                <a :href="item.href" class="navigation-container__link" rel="nofollow noopener noreferrer">{{item.name}}</a>
                <i class="fas fa-long-arrow-alt-right navigation-container__icon"></i>
              </div>
            </div>
          </div>
        </section>
      </aside>
    <KindOfTrastornos/>
    <Test/>
    <Aside />
    <Recomendation/>
    <Psicologos/>
    <Socials />
    </main>
  </div>
</template>

<script>
import Slider from './Slider.vue'
import Index from './Index.vue'
import Chapter from './SectionChapter.vue'
import KindOfTrastornos from './KindOfTrastornos.vue'
import Test from './TestInfo.vue'
import Title from './Title.vue'
import Recomendation from './Recomendation.vue'
import Psicologos from './Psicologos.vue'
import Aside from './Aside.vue'
import Socials from './Socials.vue'

export default {
  name: 'Home',
  components:{
    Slider,Index,Chapter,KindOfTrastornos,Test,Recomendation,
    Psicologos,Aside,Socials,Title
  },
  data(){
    return {
      navigation: [
        {
          id: 1,
          name: 'Meaning of Mind Disorder',
          href: '#meaning'
        },
        {
          id: 2,
          name: 'Kind Of Mind Disorder',
          href: '#kind'
        },
        {
          id: 3,
          name: 'Autoevaluation Text',
          href: '#test'
        },
        {
          id: 4,
          name: 'Tratamiento',
          href: '#tratamiento'
        },
        {
          id: 5,
          name: 'Tips',
          href: '#tips'
        },
        {
          id: 6,
          name: 'Link 6'
        },
        {
          id: 7,
          name: 'Link 7'
        },
        {
          id: 8,
          name: 'Link 8'
        },
      ],
      trastornos: [{
        id: 1,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      },
      {
        id: 2,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      },
      {
        id: 3,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      },{
        id: 4,
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident magni quam, natus cumque unde quisquam.'
      }]
    }
  },
  methods:{
    atropos(){
      /* eslint-disable */
	    !function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Atropos = e() }(this, (function () { "use strict"; function t() { return (t = Object.assign || function (t) { for (var e = 1; e < arguments.length; e++) { var o = arguments[e]; for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]) } return t }).apply(this, arguments) } var e = function (t, e) { return t.querySelector(e) }, o = function (t) { void 0 === t && (t = {}); var e = {}; return Object.keys(t).forEach((function (o) { void 0 !== t[o] && (e[o] = t[o]) })), e }; return function (a) { void 0 === a && (a = {}); var n, r, i, s, c, u, p, l, d, f, v, h = a, m = h.el, y = h.eventsEl, g = { __atropos__: !0, params: t({ alwaysActive: !1, activeOffset: 50, shadowOffset: 50, shadowScale: 1, duration: 300, rotate: !0, rotateTouch: !0, rotateXMax: 15, rotateYMax: 15, rotateXInvert: !1, rotateYInvert: !1, stretchX: 0, stretchY: 0, stretchZ: 0, commonOrigin: !0, shadow: !0, highlight: !0, onEnter: null, onLeave: null, onRotate: null }, o(a || {})), destroyed: !1, isActive: !1 }, M = g.params, x = []; !function t() { v = requestAnimationFrame((function () { x.forEach((function (t) { if ("function" == typeof t) t(); else { var e = t.element, o = t.prop, a = t.value; e.style[o] = a } })), x.splice(0, x.length), t() })) }(); var w, O = function (t, e) { x.push({ element: t, prop: "transitionDuration", value: e }) }, b = function (t, e) { x.push({ element: t, prop: "transitionTimingFunction", value: e }) }, T = function (t, e) { x.push({ element: t, prop: "transform", value: e }) }, X = function (t, e) { x.push({ element: t, prop: "opacity", value: e }) }, Y = function (t, e, o, a) { return t.addEventListener(e, o, a) }, _ = function (t, e, o, a) { return t.removeEventListener(e, o, a) }, L = function (t) { var e = t.rotateXPercentage, o = void 0 === e ? 0 : e, a = t.rotateYPercentage, n = void 0 === a ? 0 : a, r = t.duration, i = t.opacityOnly, s = t.easeOut; (function (t, e) { return t.querySelectorAll(e) })(m, "[data-atropos-offset], [data-atropos-opacity]").forEach((function (t) { O(t, r), b(t, s ? "ease-out" : ""); var e = function (t) { if (t.dataset.atroposOpacity && "string" == typeof t.dataset.atroposOpacity) return t.dataset.atroposOpacity.split(";").map((function (t) { return parseFloat(t) })) }(t); if (0 === o && 0 === n) i || T(t, "translate3d(0, 0, 0)"), e && X(t, e[0]); else { var a = parseFloat(t.dataset.atroposOffset) / 100; if (Number.isNaN(a) || i || T(t, "translate3d(" + -n * -a + "%, " + o * -a + "%, 0)"), e) { var c = e[0], u = e[1], p = Math.max(Math.abs(o), Math.abs(n)); X(t, c + (u - c) * p / 100) } } })) }, A = function (t, e) { var o = m !== y; if (s || (s = m.getBoundingClientRect()), o && !c && (c = y.getBoundingClientRect()), void 0 === t && void 0 === e) { var a = o ? c : s; t = a.left + a.width / 2, e = a.top + a.height / 2 } var r, i = 0, u = 0, l = s, d = l.top, f = l.left, v = l.width, h = l.height; if (o) { var g = c, w = g.top, Y = g.left, _ = g.width, A = g.height, E = v / 2 + (f - Y), R = h / 2 + (d - w), I = t - Y, P = e - w; u = M.rotateYMax * (I - E) / (_ - v / 2) * -1, i = M.rotateXMax * (P - R) / (A - h / 2), r = t - f + "px " + (e - d) + "px" } else { var j = v / 2, D = h / 2, F = t - f, C = e - d; u = M.rotateYMax * (F - j) / (v / 2) * -1, i = M.rotateXMax * (C - D) / (h / 2) } i = Math.min(Math.max(-i, -M.rotateXMax), M.rotateXMax), M.rotateXInvert && (i = -i), u = Math.min(Math.max(-u, -M.rotateYMax), M.rotateYMax), M.rotateYInvert && (u = -u); var S, k, q = i / M.rotateXMax * 100, N = u / M.rotateYMax * 100, B = (o ? N / 100 * M.stretchX : 0) * (M.rotateYInvert ? -1 : 1), Z = (o ? q / 100 * M.stretchY : 0) * (M.rotateXInvert ? -1 : 1), z = o ? Math.max(Math.abs(q), Math.abs(N)) / 100 * M.stretchZ : 0; T(n, "translate3d(" + B + "%, " + -Z + "%, " + -z + "px) rotateX(" + i + "deg) rotateY(" + u + "deg)"), r && M.commonOrigin && (S = n, k = r, x.push({ element: S, prop: "transformOrigin", value: k })), p && (O(p, M.duration + "ms"), b(p, "ease-out"), T(p, "translate3d(" + .25 * -N + "%, " + .25 * q + "%, 0)"), X(p, Math.max(Math.abs(q), Math.abs(N)) / 100)), L({ rotateXPercentage: q, rotateYPercentage: N, duration: M.duration + "ms", easeOut: !0 }), "function" == typeof M.onRotate && M.onRotate(i, u) }, E = function () { x.push((function () { return m.classList.add("atropos-active") })), O(n, M.duration + "ms"), b(n, "ease-out"), T(r, "translate3d(0,0, " + M.activeOffset + "px)"), O(r, M.duration + "ms"), b(r, "ease-out"), u && (O(u, M.duration + "ms"), b(u, "ease-out")), g.isActive = !0 }, R = function (t) { if (l = void 0, !("pointerdown" === t.type && "mouse" === t.pointerType || "pointerenter" === t.type && "mouse" !== t.pointerType)) { if ("pointerdown" === t.type && t.preventDefault(), d = t.clientX, f = t.clientY, M.alwaysActive) return s = void 0, void (c = void 0); E(), "function" == typeof M.onEnter && M.onEnter() } }, I = function (t) { !1 === l && t.cancelable && t.preventDefault() }, P = function (t) { if (M.rotate && g.isActive) { if ("mouse" !== t.pointerType) { if (!M.rotateTouch) return; t.preventDefault() } var e = t.clientX, o = t.clientY, a = e - d, n = o - f; if ("string" == typeof M.rotateTouch && (0 !== a || 0 !== n) && void 0 === l) { if (a * a + n * n >= 25) { var r = 180 * Math.atan2(Math.abs(n), Math.abs(a)) / Math.PI; l = "scroll-y" === M.rotateTouch ? r > 45 : 90 - r > 45 } !1 === l && (m.classList.add("atropos-rotate-touch"), t.cancelable && t.preventDefault()) } "mouse" !== t.pointerType && l || A(e, o) } }, j = function (t) { if (s = void 0, c = void 0, g.isActive && !(t && "pointerup" === t.type && "mouse" === t.pointerType || t && "pointerleave" === t.type && "mouse" !== t.pointerType)) { if ("string" == typeof M.rotateTouch && l && m.classList.remove("atropos-rotate-touch"), M.alwaysActive) return A(), "function" == typeof M.onRotate && M.onRotate(0, 0), void ("function" == typeof M.onLeave && M.onLeave()); x.push((function () { return m.classList.remove("atropos-active") })), O(r, M.duration + "ms"), b(r, ""), T(r, "translate3d(0,0, 0px)"), u && (O(u, M.duration + "ms"), b(u, "")), p && (O(p, M.duration + "ms"), b(p, ""), T(p, "translate3d(0, 0, 0)"), X(p, 0)), O(n, M.duration + "ms"), b(n, ""), T(n, "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)"), L({ duration: M.duration + "ms" }), g.isActive = !1, "function" == typeof M.onRotate && M.onRotate(0, 0), "function" == typeof M.onLeave && M.onLeave() } }, D = function (t) { var e = t.target; !y.contains(e) && e !== y && g.isActive && j() }; return g.destroy = function () { g.destroyed = !0, cancelAnimationFrame(v), _(document, "click", D), _(y, "pointerdown", R), _(y, "pointerenter", R), _(y, "pointermove", P), _(y, "touchmove", I), _(y, "pointerleave", j), _(y, "pointerup", j), _(y, "lostpointercapture", j), delete m.__atropos__ }, "string" == typeof m && (m = e(document, m)), m && (m.__atropos__ || (void 0 !== y ? "string" == typeof y && (y = e(document, y)) : y = m, Object.assign(g, { el: m }), n = e(m, ".atropos-rotate"), r = e(m, ".atropos-scale"), i = e(m, ".atropos-inner"), m.__atropos__ = g)), m && y && (M.shadow && ((u = e(m, ".atropos-shadow")) || ((u = document.createElement("span")).classList.add("atropos-shadow"), w = !0), T(u, "translate3d(0,0,-" + M.shadowOffset + "px) scale(" + M.shadowScale + ")"), w && n.appendChild(u)), M.highlight && function () { var t; (p = e(m, ".atropos-highlight")) || ((p = document.createElement("span")).classList.add("atropos-highlight"), t = !0), T(p, "translate3d(0,0,0)"), t && i.appendChild(p) }(), M.rotateTouch && ("string" == typeof M.rotateTouch ? m.classList.add("atropos-rotate-touch-" + M.rotateTouch) : m.classList.add("atropos-rotate-touch")), e(m, "[data-atropos-opacity]") && L({ opacityOnly: !0 }), Y(document, "click", D), Y(y, "pointerdown", R), Y(y, "pointerenter", R), Y(y, "pointermove", P), Y(y, "touchmove", I), Y(y, "pointerleave", j), Y(y, "pointerup", j), Y(y, "lostpointercapture", j), M.alwaysActive && (E(), A())), g } }));
	    /* eslint-enable */
      window.Atropos({
        el: '.my-atropos',
        activeOffset: 120,
        shadowScale: 5
      });
    }
  },
  mounted(){
    return this.atropos()
  }
}
</script>


