<template>
  <ion-list>
    <ion-item v-for="post in posts" :key="post.id">
      <ion-thumbnail slot="start">
        <img :src="post.image" />
      </ion-thumbnail>
      <ion-label>
        <h2>{{ post.title }}</h2>
        <h3>{{ post.author }}</h3>
      </ion-label>
      <ion-button @click="confirmDelete(post.id)">Eliminar</ion-button>
      <comment-list :postId="post.id"></comment-list>
    </ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem, IonLabel, IonButton, IonThumbnail } from '@ionic/vue';
import CommentList from '../components/CommentList.vue';

import axios from 'axios';

export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonButton,
    IonThumbnail,
    CommentList
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      axios.get('http://localhost:3000/posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    confirmDelete(postId) {
      if (confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {
        axios.delete(`http://localhost:3000/posts/${postId}`)
          .then(() => {
            this.posts = this.posts.filter(post => post.id !== postId);
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
};
</script>
