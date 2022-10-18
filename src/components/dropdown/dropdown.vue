<template>
  <!-- <slot name="dropdown" /> -->
  <li class="dropdown__item" @click="chooseInput(airport)">
    <div class="dropdown__address">
      <div class="dropdown__name">{{ airport.name }},</div>
      <div class="dropdown__country">{{ airport.country }}</div>
    </div>
    <div class="dropdown__iata">{{ airport.iata_code }}</div>
  </li>
</template>

<script>
export default {
  name: "DropdownComponent",
  props: {
    airport: {
      type: Object,
    },
  },
  methods: {
    chooseInput(airport) {
      this.$emit("chooseInput", airport);
    },
  },
};
</script>

<style src="./dropdown.scss" lang="scss" scoped></style>
