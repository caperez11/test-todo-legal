<template>
  <q-card
      v-bind:style="$q.screen.lt.sm ? { width: '100%' } : { width: '100%' }"
  >
    <q-layout view="lhh LpR lff" container style="height: 570px" class="shadow-2 rounded-borders">
      <q-card-section class="bg-card-content">
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
              <q-icon left size="2em" name="arrow_circle_right" color="blue-10"/>
            </q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-layout>
    <div class="q-mt-md q-mb-md text-center text-blue-10">
      Smart Contracts by <span class="text-bold">Todo.legal</span>
    </div>
  </q-card>
</template>


<script>
import {ref} from 'vue';
import {useRouter} from 'vue-router';
import Swal from 'sweetalert2';

import useAuth from '../composables/useAuth';

export default {
  name: 'Register',
  setup() {
    const router = useRouter();
    const {singUpUser} = useAuth();

    const userForm = ref({
      name: 'Chris',
      last_name: 'Perez',
      phone_number: '8091010101',
      email: 'xxx.xxx@todolegal.com',
      username: '7777777-',
      password: 'Prueba123*',
      confirmPassword: 'Prueba123*',
    });

    return {
      userForm,
      onSubmit: async () => {
        Swal.fire({
          allowOutsideClick: false,
          title: 'Espere porfavor... ',
        }).then();
        Swal.showLoading();
        const {ok, message} = await singUpUser(userForm.value);
        if (!ok) {
          Swal.close();
          Swal.fire('', message).then();
        } else {
          Swal.close();
          Swal.fire(`Registro Exitoso \n ${userForm.value.name}`).then();
          router.push({name: 'login'}).then();
        }
      },
    };
  },
};
</script>
<style scoped>
.bg-card-content {
  background-color: #F4F4F5FF;
  border: 5px solid #F4F4F5FF;
  border-radius: 0 80px 0 80px;
}
</style>
