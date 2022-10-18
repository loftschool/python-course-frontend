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
      <SearchBarComponent :airports="airports" />
      <BenefitsComponent />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { HeaderComponent } from "../../components/header";
import { HeroComponent } from "../../components/hero";
import { SearchBarComponent } from "../../components/search-bar";
import { BenefitsComponent } from "../../components/benefits";
import { icon } from "../../assets/icons";

export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    HeroComponent,
    SearchBarComponent,
    BenefitsComponent,
    icon,
  },
  computed: {
    ...mapState({
      airports: (state) => state.airports,
      tickets: (state) => state.tickets,
    }),
  },
  methods: {
    ...mapActions({
      fetchAirports: "fetchAirports",
    }),
  },

  async mounted() {
    try {
      await this.fetchAirports();
    } catch (error) {
      alert("Something went wrong");
    }
  },
};
</script>
<style src="./main-page.scss" lang="scss" scoped></style>
