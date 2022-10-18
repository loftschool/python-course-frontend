<template>
  <div class="offers">
    <div class="offers__title">Лучшие предложения</div>
    <div class="offers__oneway" v-if="oneWayChecked">
      <ul class="offers__list">
        <OneWayComponent
          v-for="(item, index) in tickets.tickets"
          :tickets="tickets"
          :key="index"
          :item="item"
        />
      </ul>
    </div>
    <div class="offers__twoway" v-else>
      <ul class="offers__list">
        <TwoWayComponent
          v-for="(item, index) in tickets.tickets"
          :key="index"
          :item="item"
          :tickets="tickets"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { OneWayComponent } from "../oneway-item";
import { TwoWayComponent } from "../twoway-item";

export default {
  name: "BestOffersComponent",
  components: {
    OneWayComponent,
    TwoWayComponent,
  },
  props: {
    oneWayChecked: {
      type: Boolean,
    },
    tickets: {
      type: Object,
    },
  },
};
</script>

<style src="./best-offers.scss" lang="scss" scoped></style>
