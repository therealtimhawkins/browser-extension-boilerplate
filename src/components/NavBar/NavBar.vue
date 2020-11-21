<template>
  <div>
    <nav
      class="navbar"
      :class="data.main"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <div class="title is-4" :class="data.logo">LOGO</div>
        </a>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>
