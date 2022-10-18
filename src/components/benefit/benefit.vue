<template>
  <div class="benefit">
    <div class="benefit__pic">
      <img :src="require('../../assets/images/' + pic)" alt="" />
    </div>
    <div class="benefit__title">{{ title }}</div>
    <div class="benefit__desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  name: "BenefitComponent",
  props: {
    pic: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    desc: {
      type: String,
    },
  },
};
</script>

<style src="./benefit.scss" lang="scss" scoped></style>
