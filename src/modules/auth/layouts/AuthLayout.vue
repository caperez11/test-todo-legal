<template>
  <q-layout>
    <q-page-container class="container">
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '90%' } : { width: '30%' }"
        >
          <TitleAuth />
          <router-view />
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
import TitleAuth from "@/modules/auth/components/TitleAuth.vue";

export default {
  name: "AuthLayout",
  components: {
    TitleAuth,
  },
};
</script>
<style scoped>
.container {
  background-color: rgb(244, 244, 245);
}
</style>
