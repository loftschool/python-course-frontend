<template>
  <div class="header">
    <div class="header__logo logo" @click="$router.push({ name: 'MainPage' })">
      <div class="logo__plane"><icon name="logoIcon" /></div>
      <div><icon name="logoText" /></div>
    </div>
    <button class="header__button">Мои билеты</button>
  </div>
</template>

<script>
import { icon } from "../../assets/icons";

export default {
  name: "HeaderComponent",
  components: {
    icon,
  },
};
</script>

<style src="./header.scss" lang="scss" scoped></style>
