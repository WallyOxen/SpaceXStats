<template>
  <div>
    <v-card
      v-if="launchData"
      width="20vw"
      color="grey darken-1"
      class="missionCard"
    >
      <div class="missionInfo">
        <v-card-title class="d-flex justify-center font-weight-bold text-h4">
          {{ launchData.name }}
        </v-card-title>
        <div
          class="patch"
          :style="{
            background: `url('${patchURL}') no-repeat center center/cover`,
          }"
        ></div>
        <v-card-text class="launchInfo pt-5">
          <p v-if="launchData.flight_number">
            Flight Number: {{ launchData.flight_number }}
          </p>
          <p v-if="launchData.date_local">
            {{ launchData.upcoming ? "Planned Launch" : "Launched" }}:
            <br />
            {{
              `${new Date(launchData.date_local).toLocaleDateString()} 
                ${new Date(launchData.date_local).toLocaleTimeString()}`
            }}
          </p>
          <p v-if="launchData.launchpad">
            Launchpad: {{ launchData.launchpad.name }}
          </p>
          <p v-if="launchData.cores[0].landpad">
            Landing Pad: {{ launchData.cores[0].landpad.full_name }}
          </p>
          <p v-if="customerString">Customers: {{ customerString }}</p>
          <p v-if="payloadTypes">Payload Type: {{ payloadTypes }}</p>
          <p v-if="launchData.payloads[0].orbit">
            Payload Orbit: {{ launchData.payloads[0].orbit }}
          </p>
          <p v-if="payloadMass > 0">
            Total Payload Mass: <br />
            {{ payloadMass }} lbs / {{ payloadMassKG }} kg
          </p>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "LaunchCard",
  props: {
    launchData: {
      required: true,
    },
  },
  computed: {
    customerString() {
      return this.launchData.payloads
        .map((payload) => payload.customers)
        .join(", ");
    },
    payloadTypes() {
      return this.launchData.payloads.map((payload) => payload.type).join(", ");
    },
    payloadMass() {
      return this.launchData.payloads.reduce((currentMass, payload) => {
        return currentMass + payload.mass_lbs;
      }, 0);
    },
    payloadMassKG() {
      return this.launchData.payloads.reduce((currentMass, payload) => {
        return currentMass + payload.mass_kg;
      }, 0);
    },
    patchURL() {
      return (
        this.launchData.links.patch.large || require("@/assets/falcon9.jpg")
      );
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap");
.missionCard {
  font-family: "DM Sans", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 95%;
  color: white !important;
}

.missionInfo {
  height: 100%;
  display: grid;
  place-items: center;
}

.launchInfo {
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  font-size: 1.1rem;
  width: fit-content;
  color: black;
  text-shadow: none;
  max-width: 80%;
  text-align: center;
}

.patch {
  position: absolute;
  top: 20%;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -2;
}

.missionCard::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: orange;
  transform: skewY(30deg) translateY(90%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease-in 0.2s;
  z-index: -1;
}

.missionCard::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  transform: skewY(-30deg) translateY(90%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease-in 0.2s;
  z-index: -1;
}

.missionInfo::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
  transform: skewY(30deg) translateY(80%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease-in 0.2s;
  z-index: -1;
}

.missionInfo::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: yellow;
  transform: skewY(-30deg) translateY(80%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease-in 0.2s;
  z-index: -1;
}

.missionCard:hover:before {
  animation: shake 0.1s ease 7;
  transform: skewY(50deg) translateY(60%);
  opacity: 0.4;
}

.missionCard:hover:after {
  animation: shake 0.1s ease 7;
  transform: skewY(-50deg) translateY(60%);
  opacity: 0.4;
}

.missionCard:hover .missionInfo:before {
  animation: shake 0.1s ease 7;
  transform: skewY(40deg) translateY(70%);
  opacity: 0.4;
}

.missionCard:hover .missionInfo:after {
  animation: shake 0.1s ease 7;
  transform: skewY(-40deg) translateY(70%);
  opacity: 0.4;
}

.missionCard .launchInfo {
  opacity: 0;
  z-index: 10;
  transition: all 0.6s ease 0.4s;
}

.missionCard:hover .launchInfo {
  opacity: 1;
}

.missionCard .patch {
  opacity: 1;
  z-index: -2;
  transition: all 0.6s ease 0.2s;
}

.missionCard:hover .patch {
  opacity: 0;
}

@keyframes shake {
  0% {
    top: 0px;
  }
  25% {
    top: 10px;
  }
  50% {
    top: 0px;
  }
  75% {
    top: -10px;
  }
  100% {
    top: 0px;
  }
}
</style>
