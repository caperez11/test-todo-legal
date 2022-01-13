<template >
  <q-card
    v-bind:style="$q.screen.lt.sm ? { width: '100%' } : { width: '100%' }"
    class="bg-card"
  >
    <q-card-section>
      <div class="text-center q-pt-lg">
        <div class="col text-h4">
          <span class="text-indigo-10">Bienvenido</span>
        </div>
        <q-separator
          color="indigo-10"
          size="3px"
          inset="item-center"
          class="q-mt-lg"
        />
      </div>
      <div class="text-center q-pt-lg">
        <div class="col text-p text-center">
          Por favor ingresa a tu cuenta ingresando tu número de cédula y
          contraseña. Si no tienes una cuenta, en Todo legal, puedes crear una
          Gratis.
        </div>
      </div>
      <q-form class="q-gutter-md q-mt-lg" @submit.prevent="onSubmit">
        <q-input
          filled
          v-model="userForm.username"
          label="Cédula de identidad"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Ingresar su cédula',
          ]"
        >
          <template v-slot:append>
            <q-icon name="info" color="blue">
              <q-tooltip
                class="text-body2 bg-white"
                max-width="15rem"
                transition-show="scale"
                transition-hide="scale"
                :offset="[10, 10]"
              >
                <span class="text-black text-center"
                  >Tu cédula debe encontrarse vigente para ingresar al
                  sistema</span
                >
              </q-tooltip>
            </q-icon>
          </template>
        </q-input>
        <q-input
          type="password"
          filled
          v-model="userForm.password"
          label="Contraseña"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Ingresar su contraseña',
          ]"
        />
        <div class="text-center">
          <router-link class="link" :to="{ name: 'register' }"
            >No tienes una cuenta, crear una GRATIS</router-link
          >
        </div>
        <div class="row justify-end">
          <q-btn flat type="submit">
            <div class="q-pa-sm text-h6 text-blue-10">CONTINUAR</div>
            <q-icon left size="2em" name="arrow_circle_right" color="blue-10" />
          </q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
  <div class="q-mt-md q-mb-md text-center text-blue-10">
    Examen by <span class="text-bold">Todo.legal</span>
  </div>
</template>
<script>
import { ref } from "vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";

export default {
  name: "Login",

  setup() {
    const router = useRouter();
    const { signInUser } = useAuth();

    const userForm = ref({
      username: "1758711124-2",
      password: "TTes5t20s51**",
    });

    return {
      userForm,

      onSubmit: async () => {
        const { ok, message } = await signInUser(userForm.value);
        if (!ok) Swal.fire("", message);
        // else router.push({ name: "no-entry" });
      },
    };
  },
};
</script>
<style scoped>
.bg-card {
  background-color: rgb(244, 244, 245);
  border-top-right-radius: 70px;
  border-bottom-left-radius: 70px;
}
.color-primary {
  color: #003158;
}

.link {
  text-decoration: none;
  color: black;
}
</style>