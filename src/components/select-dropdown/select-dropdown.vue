<template>
  <li class="dropdown__item" @click="chooseOption(option)">
    <!-- @click="chooseInput(airport)" -->
    <div class="dropdown__option">
      <div class="dropdown__name">{{ option.name }}</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "SelectDropdownComponent",
  props: {
    option: {
      type: Object,
    },
  },
  methods: {
    chooseOption(option) {
      this.$emit("chooseOption", option);
    },
  },
};
</script>

<style src="./select-dropdown.scss" lang="scss" scoped></style>
