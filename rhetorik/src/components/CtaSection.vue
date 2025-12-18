<script setup lang="ts">
// No props needed for now, but could be added for customization
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="border-1 border-primary-600 p-12 md:p-16">
        <h2 class="text-3xl md:text-4xl font-semibold text-primary-600 mb-6">
          Bereit für Ihr Rhetoriktraining?
        </h2>
        <p class="text-xl text-gray-700 mb-8">
          Kontaktieren Sie mich für ein unverbindliches Beratungsgespräch. 
          Gemeinsam finden wir das passende Training für Ihre Ziele.
        </p>
        <RouterLink to="/kontakt"
          class="block md:inline-block w-full md:w-auto text-center bg-primary-600 text-white px-8 py-4 font-semibold hover:bg-primary-500 transition-colors">
          JETZT KONTAKT AUFNEHMEN
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
