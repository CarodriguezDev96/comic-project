<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Action } from 'vuex-class';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import comicService from '@/services/comic-service';
import ResponseData from  '@/interfaces/ResponseData';
import comic from '../assets/comic.json';
import ComicTypes from '@/store/types/ComicTypes';
@Options({
  components: {
    HelloWorld,
  },
  methods: {
    getComics(){
      this.actionComic(comic);
      comicService.getAll()
      .then((response: ResponseData) => {
          console.log(response)
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  }, 
  mounted(){
    this.getComics()
  }
})
export default class HomeView extends Vue {
  @Action (`ComicModule/${ComicTypes.actions.ACTCOMICS}`) actionComic : any;
}
</script>
