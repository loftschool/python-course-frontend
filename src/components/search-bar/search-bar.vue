<template>
  <form @submit="onSubmit" class="search">
    <div class="search__bar">
      <div class="search__top">
        <div class="search__to">Направление</div>
        <div class="search__options">
          <label for="input" class="search__checkbox checkbox">
            <div class="checkbox__title">В одну сторону</div>
            <input
              type="checkbox"
              :checked="oneWayChecked"
              class="checkbox__elem"
              id="input"
              @click="
                checkOneWay();
                disableBackInput();
              "
            />
            <div class="checkbox__visible"></div>
          </label>
          <div class="search__passengers passengers">
            <div class="passengers__title">Пассажиры</div>
            <div class="passengers__counter counter">
              <div class="counter__icon" @click="removePassenger">
                <icon name="minusIcon" />
              </div>
              <div class="counter__number">{{ adults_count }}</div>
              <div class="counter__icon" @click="addPassenger">
                <icon name="plusIcon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search__bottom">
        <InputRoute
          :airports="airports"
          v-model:airportname="airport_from"
          v-model:iata="iata_from"
          placeholder="Откуда"
          :class="{ input__error: iataFromError }"
        />
        <InputRoute
          :airports="airports"
          v-model:airportname="airport_to"
          v-model:iata="iata_to"
          placeholder="Куда"
          :class="{ input__error: iataToError }"
        />
        <InputDate
          v-model="direct_date"
          placeholder="Когда"
          :class="{ input__error: directDateError }"
        />
        <InputDate
          :disabled="isDisabled"
          :returnDateRequired="return_date_required"
          v-model="return_date"
          placeholder="Обратно"
          :class="{ input__error: returnDateError }"
        />
        <InputSelect
          v-model:letter="flight_class"
          v-model:name="flight_class_name"
          :passengersCounter="adults_count"
          :class="{ input__error: flightClassError || adultsCountError }"
        />
        <input class="search__button" type="submit" value="Поиск" />
      </div>
    </div>
  </form>
</template>

<script>
import { icon } from "../../assets/icons";
import { InputRoute } from "../inputs/inputRoute";
import { InputDate } from "../inputs/inputDate";
import { InputSelect } from "../inputs/inputSelect";

import { mapActions, mapState } from "vuex";

export default {
  name: "SearchBarComponent",
  components: {
    icon,
    InputRoute,
    InputDate,
    InputSelect,
  },
  data() {
    return {
      airport_from: this.airportFrom ?? "",
      airport_to: this.airportTo ?? "",
      iata_from: this.iataFrom ?? "",
      iata_to: this.iataTo ?? "",
      direct_date: this.directDate ?? "",
      return_date: this.returnDate ?? "",
      flight_class_name: this.flightClassName ?? "Эконом",
      flight_class: this.flightClass ?? "",
      adults_count: this.adultsCount ?? 1,
      checked: this.oneWayChecked ?? false,
      return_date_required: true,
    };
  },
  props: {
    airports: {
      type: Object,
    },
    iataFromError: {
      type: Boolean,
    },
    iataToError: {
      type: Boolean,
    },
    directDateError: {
      type: Boolean,
    },
    returnDateError: {
      type: Boolean,
    },
    flightClassError: {
      type: Boolean,
    },
    adultsCountError: {
      type: Boolean,
    },
    iataFrom: {
      type: String,
    },
    iataTo: {
      type: String,
    },
    oneWayChecked: {
      type: Boolean,
    },
    airportFrom: {
      type: String,
    },
    airportTo: {
      type: String,
    },
    flightClassName: {
      type: String,
    },
    flightClass: {
      type: String,
    },
    directDate: {
      type: String,
    },
    returnDate: {
      type: String,
    },
    adultsCount: {
      type: Number,
    },
  },
  computed: {
    ...mapState({ tickets: (state) => state.tickets }),
    isDisabled() {
      let inputDisabled = false;
      if (this.checked == true) {
        inputDisabled = true;
      }
      return inputDisabled;
    },
  },
  methods: {
    ...mapActions({
      sendTicketsInfo: "sendTicketsInfo",
    }),
    addPassenger() {
      this.adults_count++;
    },
    removePassenger() {
      if (this.adults_count > 1) this.adults_count--;
    },
    checkOneWay() {
      this.checked = !this.checked;
      this.return_date = "";
    },
    disableBackInput() {
      this.inputDisabled = !this.inputDisabled;
    },
    async onSubmit(e) {
      e.preventDefault();
      try {
        this.$emit("findTickets");
        await this.sendTicketsInfo({
          oneWayTicket: this.checked,
          iata_from: this.iata_from,
          iata_to: this.iata_to,
          adults_count: this.adults_count,
          direct_date: this.direct_date,
          return_date: this.return_date,
          flight_class: this.flight_class,
          airport_from: this.airport_from,
          airport_to: this.airport_to,
          flight_class_name: this.flight_class_name,
        });
      } catch {
        console.log("error");
      }
      this.$router.push({ name: "SearchResults" });
    },
  },
};
</script>

<style src="./search-bar.scss" lang="scss" scoped></style>
