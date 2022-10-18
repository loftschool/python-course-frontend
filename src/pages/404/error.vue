<template>
  <div class="error-wrapper">
    <div class="container">
      <HeaderComponent />
      <div class="error">
        <div class="error__text">
          <div class="error__title">
            Мы улетели не туда - страница не найдена.
          </div>
          <div class="error__subtitle">Вернитесь на страницу поиска.</div>
          <RegularButtonComponent
            @click="$router.push({ name: 'MainPage' })"
            class="error__btn"
          >
            <span>Поиск авиабилетов</span>
          </RegularButtonComponent>
        </div>
        <div class="error__pic">
          <img src="../../assets/images/404.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HeaderComponent } from "../../components/header";
import { RegularButtonComponent } from "../../components/buttons/regular-btn";

export default {
  name: "ErrorPage",
  components: {
    HeaderComponent,
    RegularButtonComponent,
  },
};
</script>

<style src="./error.scss" lang="scss" scoped></style>
