<template>
  <q-card
      v-bind:style="$q.screen.lt.sm ? { width: '100%' } : { width: '100%' }"
      class="bg-card"
  >
    <q-card-section
    >
      <div class="text-center">
        <div class="col text-p text-center">
          <q-icon name="check" class="icon-size" color="green"></q-icon>
        </div>
      </div>
      <div class="text-center q-pt-sm">
        <div class="col text-h4">
          <span class="text-indigo-10">Validación Exitosa!</span>
        </div>
        <q-separator
            color="indigo-10"
            size="3px"
            inset="item-center"
            class="q-mt-sm q-mb-lg"
        />
      </div>
      <q-card-section class="bg-card-datos q-mt-sm q-mb-sm">
        <div class=" q-pt-lg">
          <div class="col text-h6">
            <span class="text-indigo-10">Datos Verificados:</span>
          </div>
          <q-separator
              color="indigo-10"
              size="3px"
              inset="item-center"
              class="q-mt-lg"
          />

          <div class="q-mt-sm q-mb-lg">
            <div class="col text-h6">
              <span class="text-indigo-10">Nombres y Apellidos:</span>
              <div class="col text-h6">
                <span>{{ user.name }} {{ user.lastname }}</span>
              </div>
            </div>
            <div class="col text-h6 q-mt-md">
              <span class="text-indigo-10">Cédula de Identidad:</span>
              <div class="col text-h6">
                <span>{{ user.username }}</span>
              </div>
            </div>

          </div>
        </div>
      </q-card-section>
      <div class="row justify-end">
        <q-btn flat type="buttom" @click="onClick">
          <div class="q-pa-sm text-h6 text-blue-10">FINALIZAR</div>
          <q-icon left size="2em" name="arrow_circle_right" color="blue-10"/>
        </q-btn>
      </div>

    </q-card-section>
  </q-card>
  <div class="q-mt-md q-mb-md text-center text-blue-10">
    Gestor de Procesos by <span class="text-bold">Todo.legal</span>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';
import useAuth from '@/modules/auth/composables/useAuth';

export default {
  name: 'LoginSuccess',
  setup() {
    const {user} = useAuth();
    const router = useRouter();


    return {
      user,
      onClick: () => router.push({name: 'login'}).then()
    };

  }
};
</script>

<style scoped>

.bg-card {
  background-color: rgb(244, 244, 245);
  border: 5px solid #F4F4F5FF;
  border-radius: 0 40px 0 40px;
}

.icon-size {
  font-size: 6rem;
}

.bg-card-datos {
  background-color: white;
  border: 5px solid #FFFFFF;
  border-radius: 0 40px 0 40px;
}

</style>
