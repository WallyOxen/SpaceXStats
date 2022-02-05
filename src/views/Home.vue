<template>
  <div>
    <launchCard
      v-for="launch in launchData"
      :key="launch.id"
      :launchData="launch"
    />
  </div>
</template>

<script>
import LaunchCard from "@/components/LaunchCard.vue";

export default {
  name: "Home",
  components: {
    LaunchCard,
  },
  data: () => ({
    launchData: null,
    shipData: null,
  }),
  async created() {
    const lastLaunches = await this.$spaceXAPI.getLastLaunch();
    if (lastLaunches.docs && lastLaunches.docs.length > 0) {
      this.launchData = lastLaunches.docs;
    }
    const ships = await this.$spaceXAPI.getShips();
    if (ships.docs && ships.docs.length > 0) {
      this.shipData = ships.docs;
    }
  },
};
</script>
