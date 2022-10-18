<template>
  <li class="oneway">
    <DirectFlightComponent :item="item" :tickets="tickets" />
    <div class="flight__purchase">
      <div class="flight__price">{{ formatPrice }} руб</div>
      <div class="flight__button">
        <PurchaseButtonComponent :item="item">
          <span>Купить</span>
        </PurchaseButtonComponent>
      </div>
    </div>
  </li>
</template>

<script>
import { DirectFlightComponent } from "../flights/direct-flight";
import { PurchaseButtonComponent } from "../buttons/purchase-btn";

export default {
  name: "OneWayComponent",
  components: {
    DirectFlightComponent,
    PurchaseButtonComponent,
  },
  props: {
    tickets: {
      type: Object,
    },
    item: {
      type: Object,
    },
  },
  computed: {
    formatPrice() {
      return this.item.price.toLocaleString();
    },
  },
};
</script>

<style src="./oneway.scss" lang="scss" scoped></style>
