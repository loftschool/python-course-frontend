<template>
  <div class="input">
    <input
      type="text"
      v-bind="$attrs"
      id="inputFrom"
      class="input__element"
      :value="airportname"
      @input="handleInput"
      autocomplete="off"
      v-click-outside="closeDropdown"
    />
    <ul class="dropdown" v-show="clickedOnInput">
      <DropdownComponent
        v-for="airport in filterInput"
        :key="airport.iata_code"
        :airport="airport"
        @chooseInput="chooseInput(airport)"
      >
      </DropdownComponent>
    </ul>
    <input class="input__iata" :value="iata" readonly />
  </div>
</template>

<script>
import { DropdownComponent } from "../../dropdown";
import vClickOutside from "click-outside-vue3";

export default {
  name: "InputRoute",
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    DropdownComponent,
  },
  data() {
    return {
      clickedOnInput: false,
    };
  },
  props: {
    airports: {
      type: Object,
    },
    airportname: {
      type: String,
    },
    routePlaceholder: {
      type: String,
    },
    iata: {
      type: String,
    },
  },
  computed: {
    filterInput() {
      return this.airports.filter((airport) => {
        return airport.name
          .toLowerCase()
          .startsWith(this.airportname.toLowerCase());
      });
    },
  },
  methods: {
    handleInput(e) {
      this.clickedOnInput = true;
      this.$emit("update:airportname", e.target.value);
      this.$emit("update:iata", "");
    },
    chooseInput(airport) {
      this.$emit("update:airportname", airport.name);
      this.$emit("update:iata", airport.iata_code);
      this.clickedOnInput = false;
    },
    closeDropdown() {
      this.clickedOnInput = false;
    },
  },
};
</script>

<style src="./input-route.scss" lang="scss" scoped></style>
