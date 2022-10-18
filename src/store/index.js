import { createStore } from "vuex";

const store = createStore({
  state: {
    airports: [],
    tickets: [],
    oneWayChecked: false,
    iata_from: "",
    iata_to: "",
    adults_count: 1,
    direct_date: "",
    return_date: "",
    flight_class: "",
    airport_from: "",
    airport_to: "",
    flight_class_name: "",
  },
  mutations: {
    SET_AIRPORTS: (state, payload) => {
      state.airports = payload;
    },
    SET_TICKETS: (state, payload) => {
      state.tickets = payload;
    },

    SET_TICKETS_INFO: (state, payload) => {
      state.oneWayChecked = payload.oneWayTicket;
      state.iata_from = payload.iata_from;
      state.iata_to = payload.iata_to;
      state.adults_count = payload.adults_count;
      state.direct_date = payload.direct_date;
      state.return_date = payload.return_date;
      state.flight_class = payload.flight_class;
      state.airport_from = payload.airport_from;
      state.airport_to = payload.airport_to;
      state.flight_class_name = payload.flight_class_name;
    },
  },
  actions: {
    async fetchAirports({ commit }) {
      try {
        const { airports } = await fetch(
          `${process.env.VUE_APP_BASE_URL}/airports`
        ).then((res) => res.json());
        commit("SET_AIRPORTS", airports);
      } catch (error) {
        console.log(error);
      }
    },
    async sendTicketsInfo({ commit }, payload) {
      try {
        const ticketsData = await fetch(
          `${process.env.VUE_APP_BASE_URL}/search?iata_from=${payload.iata_from}&iata_to=${payload.iata_to}&adults_count=${payload.adults_count}&direct_date=${payload.direct_date}&return_date=${payload.return_date}&flight_class=${payload.flight_class}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          }
        ).then((res) => res.json());
        commit("SET_TICKETS", ticketsData);
        commit("SET_TICKETS_INFO", payload);
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {},
});

export default store;
