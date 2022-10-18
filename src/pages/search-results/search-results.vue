<template>
  <div class="wrapper">
    <div class="container">
      <div class="main__decorations">
        <div class="plane">
          <div class="plane__trace">
            <icon name="planeTrace" />
          </div>
          <div class="plane__icon">
            <img src="../../assets/images/plane-icon.png" alt="" />
          </div>
        </div>
        <div class="circle2"></div>
        <div class="circle3"></div>
      </div>
      <HeaderComponent />
      <HeroComponent />
      <SearchBarComponent
        :airports="airports"
        :iataFromError="iataFromError"
        :iataToError="iataToError"
        :directDateError="directDateError"
        :returnDateError="returnDateError"
        :flightClassError="flightClassError"
        :adultsCountError="adultsCountError"
        :oneWayChecked="oneWayChecked"
        :iataFrom="iata_from"
        :iataTo="iata_to"
        :adultsCount="adults_count"
        :directDate="direct_date"
        :returnDate="return_date"
        :flightClass="flight_class"
        :airportTo="airport_to"
        :airportFrom="airport_from"
        :flightClassName="flight_class_name"
        @findTickets="findTickets"
      />
      <div class="loader" v-if="loading">
        <SpinnerComponent />
      </div>
      <ValidationError
        v-else-if="tickets.error"
        :errors="tickets.fields_errors"
      />
      <div class="offers__component" v-else-if="tickets.tickets">
        <BestOffersComponent
          :oneWayChecked="oneWayChecked"
          :tickets="tickets"
        />
      </div>
      <div class="noresults" v-else-if="!areTicketsAvailable">
        <NoResultsComponent />
      </div>
      <div class="timeout" v-show="showModal">
        <ModalComponent @refreshTickets="refreshTickets" />
      </div>
    </div>
  </div>
</template>
<script>
import { HeaderComponent } from "../../components/header";
import { HeroComponent } from "../../components/hero";
import { SearchBarComponent } from "../../components/search-bar";
import { icon } from "../../assets/icons";
import { SpinnerComponent } from "../../components/spinner";
import { ModalComponent } from "../../components/modal";
import { NoResultsComponent } from "../../components/no-results";
import { BestOffersComponent } from "../../components/best-offers";

import { ValidationError } from "../../components/validation-error";

import { mapState, mapActions } from "vuex";

export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    HeroComponent,
    SearchBarComponent,
    icon,
    SpinnerComponent,
    ModalComponent,
    NoResultsComponent,
    BestOffersComponent,
    ValidationError,
  },
  data() {
    return {
      showModal: false,
      loading: false,
      iataFromError: false,
      iataToError: false,
      directDateError: false,
      returnDateError: false,
      flightClassError: false,
      adultsCountError: false,
    };
  },
  computed: {
    ...mapState({
      airports: (state) => state.airports,
      oneWayChecked: (state) => state.oneWayChecked,
      tickets: (state) => state.tickets,
      iata_from: (state) => state.iata_from,
      iata_to: (state) => state.iata_to,
      adults_count: (state) => state.adults_count,
      direct_date: (state) => state.direct_date,
      return_date: (state) => state.return_date,
      flight_class: (state) => state.flight_class,
      airport_from: (state) => state.airport_from,
      airport_to: (state) => state.airport_to,
      flight_class_name: (state) => state.flight_class_name,
    }),
    areTicketsAvailable() {
      return this.tickets.tickets;
    },
  },
  methods: {
    ...mapActions({
      fetchAirports: "fetchAirports",
      sendTicketsInfo: "sendTicketsInfo",
    }),
    toggleModal() {
      this.showModal = true;
    },
    async refreshTickets() {
      this.findTickets();
      try {
        await this.sendTicketsInfo({
          oneWayTicket: this.oneWayChecked,
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
      this.showModal = false;
      this.$router.push({ name: "SearchResults" });
    },
    async findTickets() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    markInput() {
      if (this.tickets?.fields_errors?.iata_from) {
        this.iataFromError = true;
      } else {
        this.iataFromError = false;
      }
      if (this.tickets?.fields_errors?.iata_to) {
        this.iataToError = true;
      } else {
        this.iataToError = false;
      }
      if (this.tickets?.fields_errors?.direct_date) {
        this.directDateError = true;
      } else {
        this.directDateError = false;
      }
      if (this.tickets?.fields_errors?.return_date) {
        this.returnDateError = true;
      } else {
        this.returnDateError = false;
      }
      if (this.tickets?.fields_errors?.flight_class) {
        this.flightClassError = true;
      } else {
        this.flightClassError = false;
      }
      if (this.tickets?.fields_errors?.adults_count) {
        this.adultsCountError = true;
      } else {
        this.adultsCountError = false;
      }
    },
  },
  async mounted() {
    this.findTickets();
    await this.fetchAirports();
  },
  async updated() {
    this.markInput();

    setTimeout(() => {
      this.toggleModal();
    }, 600000);
  },
};
</script>
<style src="./search-results.scss" lang="scss" scoped></style>
