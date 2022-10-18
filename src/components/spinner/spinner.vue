<template>
  <div class="spinner">
    <div class="spinner__title">Ищем билеты</div>
    <div class="spinner__icon">
      <icon name="spinnerIcon" />
    </div>
  </div>
</template>

<script>
import { icon } from "../../assets/icons";

export default {
  name: "SpinnerComponent",
  components: {
    icon,
  },
};
</script>

<style src="./spinner.scss" lang="scss" scoped></style>
