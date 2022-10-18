<template>
  <div class="input__date">
    <input
      class="input__element"
      v-bind="$attrs"
      :type="inputType"
      @focus="changeType"
      @blur="changeType"
      @input="handleDateInputFrom"
      :value="modelValue"
      :disabled="disabled"
      :min="minDate"
      :max="maxDate"
      :required="returnDateRequired"
    />

    <div class="calendar" id="calendar">
      <icon name="calendarIcon" />
    </div>
  </div>
</template>

<script>
import { icon } from "../../../assets/icons";

export default {
  name: "InputDate",
  components: {
    icon,
  },
  data() {
    return {
      inputType: "text",
    };
  },
  props: {
    modelValue: {
      type: String,
    },
    datePlaceholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    returnDateRequired: {
      type: Boolean,
    }
  },
  methods: {
    handleDateInputFrom(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    changeType() {
      if (this.inputType == "text") {
        this.inputType = "date";
      } else {
        this.inputType = "text";
      }
    },
  },
  computed: {
    minDate() {
      const today = new Date().toISOString().split("T")[0];
      return today;
    },
    maxDate() {
      const addYear = new Date();
      addYear.setFullYear(addYear.getFullYear() + 1);
      const maxValue = new Date(addYear).toISOString().split("T")[0];
      return maxValue;
      //     onfocus="(this.type='date')"
      // onblur="(this.type='text')"
    },
  },
};
</script>

<style src="./input-date.scss" lang="scss" scoped></style>
