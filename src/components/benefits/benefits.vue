<template>
  <ul class="benefits">
    <li class="benefits__item" v-for="item in benefits" :key="item.id">
      <BenefitComponent :pic="item.pic" :title="item.title" :desc="item.desc" />
    </li>
  </ul>
</template>

<script>
import { BenefitComponent } from "../benefit";
import benefits from "./data.json";

export default {
  name: "BenefitsComponent",
  components: {
    BenefitComponent,
  },
  data() {
    return {
      benefits,
    };
  },
};
</script>

<style src="./benefits.scss" lang="scss" scoped></style>
