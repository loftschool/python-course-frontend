<template>
  <div class="flight">
    <div class="flight__info">
      <div class="flight__departure">
        <div class="flight__time">{{ divideDepartureTime }}</div>
        <div class="flight__date">{{ divideDepartureDate }}</div>
      </div>
      <div class="flight__graph graph">
        <div class="graph__top top">
          <div class="top__departure-icon">
            <img src="../../../assets/images/planefrom.png" alt="" />
          </div>
          <div class="top__carrier carrier">
            <div class="carrier__logo"><img :src="getLogo" alt="" /></div>
            <div class="carrier__name">{{ getName }}</div>
          </div>
          <div class="top__arrival-icon">
            <img src="../../../assets/images/planeto.png" alt="" />
          </div>
        </div>
        <div class="graph__middle middle">
          <div class="middle__icon-left"></div>
          <div class="middle__icon-right"></div>
        </div>
        <div class="graph__bottom bottom">
          <div class="bottom__text">{{ getAirportFromName }}</div>
          <div class="bottom__time time">
            <div class="time__title">Время в пути:</div>
            <div class="time__time">{{ getHoursForMin }}</div>
          </div>
          <div class="bottom__text">{{ getAirportToName }}</div>
        </div>
      </div>
      <div class="flight__arrival">
        <div class="flight__time">{{ divideArrivalTime }}</div>
        <div class="flight__date">{{ divideArrivalDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DirectFlightComponent",
  components: {},
  props: {
    tickets: {
      type: Object,
    },
    item: {
      type: Object,
    },
  },
  computed: {
    divideDepartureTime() {
      return this.item.direct.departure_datetime
        .split(" ")
        .splice(1, 2)
        .toString();
    },
    divideArrivalTime() {
      return this.item.direct.arrival_datetime
        .split(" ")
        .splice(1, 2)
        .toString();
    },
    divideDepartureDate() {
      return this.item.direct.departure_datetime
        .split(" ")
        .splice(0, 1)
        .toString()
        .split("-")
        .reverse()
        .join(".");
    },
    divideArrivalDate() {
      return this.item.direct.arrival_datetime
        .split(" ")
        .splice(0, 1)
        .toString()
        .split("-")
        .reverse()
        .join(".");
    },
    getHoursForMin() {
      let hours = Math.trunc(this.item.direct.duration / 60);
      let minutes = this.item.direct.duration % 60;
      return hours + "ч " + minutes + "м";
    },
    getLogo() {
      let carrier = this.tickets.carriers.find(
        (carrier) => this.item.direct.carrier_id === carrier.id
      );
      return carrier.logo;
    },
    getName() {
      let carrier = this.tickets.carriers.find(
        (carrier) => this.item.direct.carrier_id === carrier.id
      );
      return carrier.name;
    },
    getAirportFromName() {
      let airportFrom = this.tickets.airports.find(
        (airport) => this.item.direct.airport_from === airport.iata_code
      );
      return airportFrom.name;
    },
    getAirportToName() {
      let airportTo = this.tickets.airports.find(
        (airport) => this.item.direct.airport_to === airport.iata_code
      );
      return airportTo.name;
    },
  },
  methods: {},
};
</script>

<style src="./direct-flight.scss" lang="scss" scoped></style>
