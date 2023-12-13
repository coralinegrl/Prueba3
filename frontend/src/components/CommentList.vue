<template>
    <ion-list>
      <ion-item v-for="comment in comments" :key="comment.id">
        <ion-label>
          <p>{{ comment.content }}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </template>
  
  <script>
  import { IonList, IonItem, IonLabel } from '@ionic/vue';
  import axios from 'axios';
  
  export default {
    components: {
      IonList,
      IonItem,
      IonLabel
    },
    props: {
      postId: Number
    },
    data() {
      return {
        comments: []
      };
    },
    watch: {
      postId: {
        immediate: true,
        handler(newVal) {
          this.loadComments(newVal);
        }
      }
    },
    methods: {
      loadComments(postId) {
        axios.get(`http://localhost:3000/comments?postId=${postId}`)
          .then(response => {
            this.comments = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  