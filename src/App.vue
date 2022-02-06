<template>
  <v-app id="inspire">
    <v-navigation-drawer app class="pt-4" color="grey darken-3" mini-variant>
      <router-link v-for="link in links" :key="link.nav" :to="link.nav">
        <v-tooltip>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar
              v-on="on"
              v-bind="attrs"
              :color="
                $router.currentRoute.path === link.nav ? link.color : 'grey'
              "
              :size="$router.currentRoute.path === link.nav ? 36 : 25"
              class="d-block mx-auto mb-5"
            >
              <v-icon dark>{{ link.icon }}</v-icon>
            </v-avatar>
          </template>
          <span>{{ link.name }}</span>
        </v-tooltip>
      </router-link>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "SpaceXStats",
  data: () => ({
    links: [
      {
        name: "Latest Launches",
        icon: "mdi-autorenew",
        color: "orange",
        nav: "/",
      },
      {
        name: "Upcoming Launches",
        icon: "mdi-clock-outline",
        color: "green",
        nav: "/upcoming",
      },
      {
        name: "Ships",
        icon: "mdi-ship-wheel",
        color: "blue",
        nav: "/ships",
      },
    ],
  }),
};
</script>
