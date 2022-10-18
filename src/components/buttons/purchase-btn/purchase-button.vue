<template>
  <a :href="item.buy_link">
    <button class="btn">
      <slot></slot>
    </button>
  </a>
</template>

<script>
export default {
  name: "PurchaseButtonComponent",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style src="./purchase-button.scss" lang="scss" scoped></style>
