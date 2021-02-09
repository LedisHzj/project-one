<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee" >
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <router-link
            v-for="post in posts"
            :key="post.id"
            active-class="is-active"
            :to="{ name: 'post', params: { id: post.id } }"
          >
            <el-menu-item >
              {{post.id}}. {{post.title}} 
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <div v-for="post in posts" :key="post.id">{{ post }}</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
  
</template>

<script>
import axios from 'axios'
// import Post from '@/components/Post.vue'
export default {
  name: 'ApiCall',
  data(){
    return{
      posts: null,
      endpoint: 'https://jsonplaceholder.typicode.com/posts/',
    }
  },

  created(){
    this.getAllPosts();
  },

  methods: {
    getAllPosts() {
      axios.get(this.endpoint)
        .then(res => {
          this.posts = res.data;
        })
        .catch(err => {
          console.log('------error-----');
          console.log(err);
        })
    }
  }
}
</script>