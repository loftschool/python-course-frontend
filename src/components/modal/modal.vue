<template>
  <div class="modal">
    <div class="modal__element">
      <div class="modal__icon">
        <img src="../../assets/images/plane-icon.png" alt="" />
      </div>
      <div class="modal__title">Результаты могли устареть</div>
      <div class="modal__subtitle">
        Обновите страницу для того, чтобы увидеть реальные результаты поиска
      </div>
      <RegularButtonComponent
        class="modal__button"
        @click="refreshTickets();"
        >Обновить</RegularButtonComponent
      >
    </div>
  </div>
</template>

<script>
import { RegularButtonComponent } from "../buttons/regular-btn";
export default {
  name: "ModalComponent",
  components: {
    RegularButtonComponent,
  },
  methods: {
    refreshTickets() {
      this.$emit("refreshTickets")
    }
  }
};
</script>

<style src="./modal.scss" lang="scss" scoped></style>
