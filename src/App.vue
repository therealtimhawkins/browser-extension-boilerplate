<template>
  <div id="app">
    <NavBar :data="{ main: 'is-primary', logo: 'has-text-white-bis' }" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar";
export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>
