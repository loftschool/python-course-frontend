<template>
  <li class="twoway">
    <div class="flights">
      <DirectFlightComponent :item="item" :tickets="tickets" />
      <ReturnFlightComponent :item="item" :tickets="tickets" />
    </div>
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
import { ReturnFlightComponent } from "../flights/return-flight";
import { PurchaseButtonComponent } from "../buttons/purchase-btn";

export default {
  name: "TwoWayComponent",
  components: {
    DirectFlightComponent,
    ReturnFlightComponent,
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

<style src="./twoway.scss" lang="scss" scoped></style>
