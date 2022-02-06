<template>
  <div>
    <v-card v-if="launchData" width="20vw" height="50vh" class="missionCard">
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
        <v-card-text class="launchInfo">
          <p>Flight Number: {{ launchData.flight_number }}</p>
          <p>
            Launched:
            {{
              `${new Date(launchData.date_local).toLocaleDateString()} 
                ${new Date(launchData.date_local).toLocaleTimeString()}`
            }}
          </p>
          <p>Launchpad: {{ launchData.launchpad.name }}</p>
          <p>Landing Pad: {{ launchData.cores[0].landpad.full_name }}</p>
          <p>Customers: {{ customerString }}</p>
          <p>Payload Type: {{ payloadTypes }}</p>
          <p>Payload Orbit: {{ launchData.payloads[0].orbit }}</p>
          <p>
            Total Payload Mass: {{ payloadMass }} lbs / {{ payloadMassKG }} kg
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
  margin-left: 10vw;
  overflow: hidden;
  z-index: 1;
  height: 100%;
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
  animation: shake 1s ease;
  transform: skewY(50deg) translateY(60%);
  opacity: 0.4;
}

.missionCard:hover:after {
  animation: shake 1s ease;
  transform: skewY(-50deg) translateY(60%);
  opacity: 0.4;
}

.missionCard:hover .missionInfo:before {
  animation: shake 1s ease;
  transform: skewY(40deg) translateY(70%);
  opacity: 0.4;
}

.missionCard:hover .missionInfo:after {
  animation: shake 1s ease;
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

@keyframes shake {
  0% {
    top: 10px;
  }
  5% {
    top: 0px;
  }
  10% {
    top: -10px;
  }
  15% {
    top: 0px;
  }
  20% {
    top: 10px;
  }
  25% {
    top: 0px;
  }
  30% {
    top: -10px;
  }
  35% {
    top: 0px;
  }
  40% {
    top: 10px;
  }
  45% {
    top: 0px;
  }
  50% {
    top: -10px;
  }
  55% {
    top: 0px;
  }
  60% {
    top: 10px;
  }
  65% {
    top: 0px;
  }
  70% {
    top: -10px;
  }
  75% {
    top: 0px;
  }
  80% {
    top: 10px;
  }
  85% {
    top: 0px;
  }
  90% {
    top: -10px;
  }
  95% {
    top: 0px;
  }
  100% {
    top: 0px;
  }
}
</style>
