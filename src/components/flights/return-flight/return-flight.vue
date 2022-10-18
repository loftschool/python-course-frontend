<template>
  <div class="flight">
    <div class="flight__info">
      <div class="flight__departure">
        <div class="flight__time">{{ divideReturnDepartureTime }}</div>
        <div class="flight__date">{{ divideReturnDepartureDate }}</div>
      </div>
      <div class="flight__graph graph">
        <div class="graph__top top">
          <div class="top__departure-icon">
            <img src="../../../assets/images/planefrom.png" alt="" />
          </div>
          <div class="top__carrier">
            <div class="carrier__logo">
              <img :src="getReturnLogo" alt="" />
            </div>
            <div class="carrier__name">{{ getReturnName }}</div>
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
          <div class="bottom__text">{{ getReturnAirportFromName }}</div>
          <div class="bottom__time time">
            <div class="time__title">Время в пути:</div>
            <div class="time__time">{{ getReturnHoursForMin }}</div>
          </div>
          <div class="bottom__text">{{ getReturnAirportToName }}</div>
        </div>
      </div>
      <div class="flight__arrival">
        <div class="flight__time">{{ divideReturnArrivalTime }}</div>
        <div class="flight__date">{{ divideReturnArrivalDate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReturnFlightComponent",
  props: {
    tickets: {
      type: Object,
    },
    item: {
      type: Object,
    },
  },
  computed: {
    divideReturnDepartureTime() {
      return this.item.return.departure_datetime
        .split(" ")
        .splice(1, 2)
        .toString();
    },
    divideReturnArrivalTime() {
      return this.item.return.arrival_datetime
        .split(" ")
        .splice(1, 2)
        .toString();
    },
    divideReturnDepartureDate() {
      return this.item.return.departure_datetime
        .split(" ")
        .splice(0, 1)
        .toString()
        .split("-")
        .reverse()
        .join(".");
    },
    divideReturnArrivalDate() {
      return this.item.return.arrival_datetime
        .split(" ")
        .splice(0, 1)
        .toString()
        .split("-")
        .reverse()
        .join(".");
    },
    getReturnHoursForMin() {
      let hours = Math.trunc(this.item.return.duration / 60);
      let minutes = this.item.return.duration % 60;
      return hours + "ч " + minutes + "м";
    },
    getReturnLogo() {
      let carrier = this.tickets.carriers.find(
        (carrier) => this.item.return.carrier_id === carrier.id
      );
      return carrier.logo;
    },
    getReturnName() {
      let carrier = this.tickets.carriers.find(
        (carrier) => this.item.return.carrier_id === carrier.id
      );
      return carrier.name;
    },
    getReturnAirportFromName() {
      let airportFrom = this.tickets.airports.find(
        (airport) => this.item.return.airport_from === airport.iata_code
      );
      return airportFrom.name;
    },
    getReturnAirportToName() {
      let airportTo = this.tickets.airports.find(
        (airport) => this.item.return.airport_to === airport.iata_code
      );
      return airportTo.name;
    },
  },
};
</script>

<style src="./return-flight.scss" lang="scss" scoped></style>
