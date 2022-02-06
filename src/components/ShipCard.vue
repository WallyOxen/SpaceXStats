<template>
  <div>
    <v-card v-if="shipData" width="20vw" color="grey darken-1" class="shipCard">
      <div class="shipInfo">
        <v-card-title
          class="d-flex justify-center font-weight-bold text-h5"
          style="height: 15%"
        >
          {{ shipData.name }}
        </v-card-title>
        <v-card-text class="shipContainer">
          <div class="ship pt-5">
            <p>Home Port: {{ shipData.home_port }}</p>
            <p>Year Built: {{ shipData.year_built }}</p>
            <p>Type: {{ shipData.type }}</p>
            <p>Launches: {{ shipData.launches.length }}</p>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "shipCard",
  props: {
    shipData: {
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap");
.shipCard {
  font-family: "DM Sans", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 95%;
  color: white !important;
}

.shipInfo {
  height: 90%;
}

.shipContainer {
  height: 100%;
  display: grid;
  place-items: center;
}

.ship {
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
  padding: 1rem;
}

.shipCard::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: blue;
  border-radius: 40%;
  transform: skewY(30deg) translateY(90%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease;
  z-index: -1;
}

.shipCard::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: darkblue;
  border-radius: 40%;
  transform: skewY(-30deg) translateY(90%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease;
  z-index: -1;
}

.shipInfo::before {
  position: absolute;
  content: "";
  top: 0;
  left: 60%;
  width: 100%;
  height: 100%;
  background: blue;
  border-radius: 40%;
  transform: skewY(30deg) translateY(90%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease;
  z-index: -1;
}

.shipInfo::after {
  position: absolute;
  content: "";
  top: 0;
  left: -60%;
  width: 100%;
  height: 100%;
  background: darkblue;
  border-radius: 40%;
  transform: skewY(-30deg) translateY(90%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  opacity: 0.3;
  transition: all 0.6s ease;
  z-index: -1;
}

.shipCard:hover:before {
  transform: skewY(30deg) translateY(50%);
  opacity: 0.4;
  animation: 1.5s waves linear infinite;
}

.shipCard:hover:after {
  transform: skewY(-30deg) translateY(50%);
  opacity: 0.4;
  animation: 1.5s 0.1s waves linear infinite;
}

.shipCard:hover .shipInfo:before {
  transform: skewY(30deg) translateY(50%);
  opacity: 0.4;
  animation: 1.5s 0.05s waves linear infinite;
}

.shipCard:hover .shipInfo:after {
  transform: skewY(-30deg) translateY(50%);
  opacity: 0.4;
  animation: 1.5s 0.15s waves linear infinite;
}

.shipCard .ship {
  opacity: 0;
  z-index: 10;
  transition: all 0.6s ease;
}

.shipCard:hover .ship {
  opacity: 1;
}

@keyframes waves {
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
