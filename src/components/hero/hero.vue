<template>
  <div class="hero">
    <div class="hero__text">
      <div class="hero__subtitle">Легкий поиск. Удобное бронирование.</div>
      <div class="hero__title">Авиабилеты для ваших путешествий</div>
    </div>
    <div class="hero__pic">
      <div class="hero__bubble"><icon name="bubblePic" /></div>
      <div class="hero__frontpic">
        <img src="../../assets/images/plane-suitcases.png" alt="" />
      </div>
    </div>
    <div class="circles">
      <div class="circle1"></div>
      <div class="circle4"></div>
      <div class="circle5"></div>
    </div>
  </div>
</template>

<script>
import { icon } from "../../assets/icons";

export default {
  name: "HeroComponent",
  components: {
    icon,
  },
};
</script>

<style src="./hero.scss" lang="scss" scoped></style>
