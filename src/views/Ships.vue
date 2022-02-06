<template>
  <div
    class="d-flex flex-wrap justify-space-around"
    style="height: 100%; background: gray"
  >
    <shipCard v-for="ship in shipData" :key="ship.id" :shipData="ship" />
  </div>
</template>

<script>
import ShipCard from "@/components/ShipCard.vue";

export default {
  name: "Ships",
  components: {
    ShipCard,
  },
  data: () => ({
    shipData: null,
  }),
  async created() {
    const ships = await this.$spaceXAPI.getShips(8);
    if (ships.docs && ships.docs.length > 0) {
      this.shipData = ships.docs;
    }
  },
};
</script>
