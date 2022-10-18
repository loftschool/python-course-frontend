<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "RegularButtonComponent",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style src="./regular-button.scss" lang="scss" scoped></style>
