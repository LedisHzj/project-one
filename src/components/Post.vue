<template>
  <div class="post-container">
    <div v-for="post in posts" :key="post.id">
      {{ post.title}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Post",
  props: ["id"],
  data() {
    return {
      post: null,
      endpoint: "https://jsonplaceholder.typicode.com/posts/",
    };
  },
  methods: {
    getPost(id) {
      axios(this.endpoint + id)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getPost(this.id);
  },
  watch: {
    $route() {
      this.getPost(this.id);
    },
  },
};
</script>
