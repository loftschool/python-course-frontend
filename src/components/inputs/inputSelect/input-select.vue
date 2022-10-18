<template>
  <div class="select">
    <div class="select__passengers">{{ passengersCounter }} {{ getNoun }}</div>
    <input
      id="inputSelect"
      class="input__element"
      autocomplete="off"
      @click="showSelectDropdown"
      :value="name"
      placeholder="Эконом"
      v-click-outside="closeSelectDropdown"
      readonly
    />
    <ul class="select__dropdown" v-show="clickedOnSelect">
      <SelectDropdownComponent
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        @chooseOption="chooseOption(option)"
      >
      </SelectDropdownComponent>
    </ul>
  </div>
</template>

<script>
import { SelectDropdownComponent } from "../../select-dropdown";
import vClickOutside from "click-outside-vue3";

export default {
  name: "InputSelect",
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    SelectDropdownComponent,
  },
  data() {
    return {
      options: [
        { name: "Эконом", letter: "Y" },
        { name: "Комфорт", letter: "W" },
        { name: "Бизнес", letter: "C" },
        { name: "Первый класс", letter: "F" },
      ],
      clickedOnSelect: false,
    };
  },
  props: {
    name: {
      type: String,
    },
    letter: {
      type: String,
    },
    passengersCounter: {
      type: Number,
    },
  },
  computed: {
    getNoun() {
      let one = "пассажир";
      let two = "пассажира";
      let many = "пассажиров";
      if (this.passengersCounter === 1) {
        return one;
      }
      if (this.passengersCounter >= 2 && this.passengersCounter <= 4) {
        return two;
      }
      if (this.passengersCounter >= 5) {
        return many;
      }
      return one;
    },
  },
  methods: {
    chooseOption(option) {
      this.$emit("update:name", option.name);
      this.$emit("update:letter", option.letter);
      this.clickedOnSelect = false;
    },
    showSelectDropdown() {
      this.clickedOnSelect = !this.clickedOnSelect;
    },
    closeSelectDropdown() {
      this.clickedOnSelect = false;
    },
  },
};
</script>

<style src="./input-select.scss" lang="scss" scoped></style>
