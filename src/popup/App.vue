<template>
  <div>
    <NavBar :data="{ main: '', logo: 'has-text-primary' }" />
    <section class="section">
      <div class="container">
        <div @click="openDashboard" class="button is-info is-fullwidth">
          Open dashboard
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div @click="injectScript" class="button is-link is-fullwidth">
          Inject script
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Router } from "monobrowser";
import NavBar from "@/components/NavBar/NavBar";
const router = new Router(browser, "/popup");

export default {
  name: "App",
  components: {
    NavBar
  },
  methods: {
    openDashboard: async () => {
      await router.sendAll("/background/dashboard");
    },
    injectScript: async () => {
      await router.sendAll("/background/inject");
    }
  }
};
</script>
