<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mis Publicaciones</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <!-- Componente de lista de publicaciones -->
      <post-list></post-list>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import PostList from './components/PostList.vue';

export default {
  name: 'App',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    PostList
  }
};
</script>

<style>
/* Tus estilos personalizados aquí */
</style>
