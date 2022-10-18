<template>
  <div class="validation">
    <div class="validation__title">Ошибка заполнения формы</div>
    <ul class="validation__errors error">
      <li v-for="(item, index) in errors" :key="index" class="error__item">
        {{ item }}
      </li>
    </ul>
  </div>
  <div class="nores">
    <div class="nores__pic">
      <div class="nores__bubble">
        <icon name="bubblePic2" />
      </div>

      <div class="nores__icon">
        <img src="../../assets/images/sadscreen.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { icon } from "../../assets/icons";

export default {
  name: "ValidationError",
  components: { icon },
  props: {
    errors: {
      type: Object,
    },
  },
};
</script>

<style src="./validation-error.scss" lang="scss" scoped></style>
