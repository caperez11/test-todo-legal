<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'40%'}">
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h3 ">
                todo<span class="bg-title">.legal</span>
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form
              class="q-gutter-md"
            >
              <q-input
                filled
                v-model="username"
                label="Username"
                lazy-rules
              />

              <q-input
                type="password"
                filled
                v-model="password"
                label="Password"
                lazy-rules

              />

              <div>
                <q-btn label="Login" to="/" type="button" color="primary"/>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// @ is an alias to /src

import {ref} from 'vue'

export default {
  name: "Home",
  setup() {
    return {
      username: ref(''),
      password: ref('')
    }
  },
};
</script>

<style scoped>
.bg-title{
  background-color: black;
  color: rgb(95, 168, 228);
  border-radius: 0.1em;
  padding: 0.1em;
}
</style>
