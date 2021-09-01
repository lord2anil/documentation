<template>
  <div class="features">
    <div class="feature">
      <h2>About</h2>
      <p>
        <a href="/intro.html">Introduction</a><br />
        <a href="/overview.html">Documentation Overview</a><br />
        <a href="/glossary.html">Glossary</a><br />
      </p>
    </div>
    <div class="feature">
      <h2>VuePress</h2>
      <p>
        <a href="/install.html">Install</a><br />
        <a href="/getting-started.html">Hello World in 6 Minutes</a><br />
      </p>
    </div>
    <div class="feature">
      <h2>GitHub Actions</h2>
      <p>
        <a href="/tutorial/">Overview</a><br />
      </p>
    </div>
  </div>
  <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
  </div>
</template>

<script>
export default {
  name: 'Features'
};
</script>
