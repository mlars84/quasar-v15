<template>
  <q-page class="flex flex-center">
    <q-btn
      @click="$router.push('/poop/')"
      color="primary"
      label="Poop"
    >
    </q-btn>
    <q-btn
      @click="$router.push('/fart/')"
      color="secondary"
      label="Fart"
    >
    </q-btn>
  </q-page>
</template>
<script>
export default {
  name: 'PageIndex'
}
</script>
<style>
</style>
