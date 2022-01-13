<template >
  <q-card
    v-bind:style="$q.screen.lt.sm ? { width: '100%' } : { width: '100%' }"
    class="bg-card"
  >
    <q-card-section>
      <div class="text-center q-pt-lg">
        <div class="col text-h4">
          <span class="text-indigo-10">Crear Cuenta Gratis</span>
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
          Ingresa los siguientes datos para registrarte como un nuevo usuario
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
        <q-input
          type="password"
          filled
          v-model="userForm.confirmPassword"
          label="Confirmar Contraseña"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Confirmar su contraseña',
          ]"
        />
        <div class="row justify-end">
          <q-btn flat type="submit">
            <div class="q-pa-sm text-h6 text-blue-10">REGISTRARME</div>
            <q-icon left size="2em" name="arrow_circle_right" color="blue-10" />
          </q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
  <div class="q-mt-md q-mb-md text-center text-blue-10">
    Smart Contracts by <span class="text-bold">Todo.legal</span>
  </div>
</template>


<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

import useAuth from "../composables/useAuth";

export default {
  name: "Register",
  setup() {
    const router = useRouter();
    const { createUser } = useAuth();

    const userForm = ref({
      name: "Chris",
      last_name: "Perez",
      phone_number: "8091010101",
      email: "xxx.xxx@todolegal.com",
      username: "7777777-",
      password: "Prueba123*",
      confirmPassword: "Prueba123*",
    });

    return {
      userForm,
      onSubmit: async () => {
        const { ok, message } = await createUser(userForm.value);
        console.log(ok, message);
        if (!ok) {
          Swal.fire("", message);
        } else {
          Swal.fire(`Registro Exitoso \n ${userForm.value.name}`);
          router.push({ name: "login" });
        }
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