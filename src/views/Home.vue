<template>
  <div
    class="d-flex flex-wrap justify-space-around"
    style="height: 100%; background: gray"
  >
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
    const lastLaunches = await this.$spaceXAPI.getPastLaunches(8);
    if (lastLaunches.docs && lastLaunches.docs.length > 0) {
      this.launchData = lastLaunches.docs;
    }
  },
};
</script>
