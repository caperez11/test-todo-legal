<template>
  <q-card
      v-bind:style="$q.screen.lt.sm ? { width: '100%' } : { width: '100%' }"

  >
    <q-layout view="lhh LpR lff" container style="height: 550px" class="shadow-2 rounded-borders">
      <q-card-section class="bg-card-content">
        <div class="text-center q-pt-lg">
          <div class="col text-h4">
            <span class="text-indigo-10">Bienvenido Usuario</span>
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
            >No tienes una cuenta, crear una GRATIS
            </router-link
            >
          </div>
          <div class="row justify-end">
            <q-btn flat type="submit">
              <div class="q-pa-sm text-h6 text-blue-10">CONTINUAR</div>
              <q-icon left size="2em" name="arrow_circle_right" color="blue-10"/>
            </q-btn>
          </div>
        </q-form>
      </q-card-section>
    </q-layout>
    <div class=" q-mb-md text-center text-blue-10">
      Examen by <span class="text-bold">Todo.Legal</span>
    </div>
  </q-card>
</template>
<script>
import {ref} from 'vue';
import Swal from 'sweetalert2';
import {useRouter} from 'vue-router';
import useAuth from '../composables/useAuth';

export default {
  name: 'Login',

  setup() {
    const router = useRouter();
    const {signInUser} = useAuth();

    const userForm = ref({
      username: '1758711124-2',
      password: 'TTes5t20s51**',
    });

    return {
      userForm,

      onSubmit: async () => {
        Swal.fire({
          allowOutsideClick: false,
          title: 'Espere porfavor... ',
        }).then();
        Swal.showLoading();
        const {ok, message} = await signInUser(userForm.value);
        if (!ok) {
          Swal.close();
          Swal.fire('', message).then();
        } else {
          Swal.close();
          router.push({name: 'login-success'}).then();
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

.link {
  text-decoration: none;
  color: black;
}
</style>
