<template>
  <div class="nores">
    <div class="nores__title">
      Прямых рейсов по вашему запросу не найдено – обновите данные поиска
    </div>
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
  name: "NoResultsComponent",
  components: {
    icon,
  },
};
</script>

<style src="./no-results.scss" lang="scss" scoped></style>
