<template>
  <div class="comic-container">
    <img :src="getComic.img" alt="Cómic">
    <h1>{{ getComic.title }}</h1>
    <p>Fecha publicacion {{ getComic.day }} / {{ getComic.month }} / {{ getComic.year }}</p>
    <div class="rating" @click="selectStarts()">
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>
      <span class="star">&#9733;</span>

    </div>
    <span>
      Calificación
    </span>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Getter } from 'vuex-class';
import ComicTypes from '@/store/types/ComicTypes';
@Options({})

export default class HelloWorld extends Vue {
  @Getter(`ComicModule/${ComicTypes.getters.GETCOMICS}`) getComic: any;
  msg!: string

  selectStarts() {
    const stars = document.querySelectorAll(".star");
    let comicRating = 0; // Este valor debería ser la calificación actual del cómic

    // Pinta las estrellas según la calificación actual
    for (let i = 0; i < comicRating; i++) {
      stars[i].classList.add("selected");
    }

    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        // Actualiza la calificación actual del cómic
        comicRating = index + 1;

        // Pinta las estrellas según la nueva calificación
        for (let i = 0; i < stars.length; i++) {
          if (i <= index) {
            stars[i].classList.add("selected");
          } else {
            stars[i].classList.remove("selected");
          }
        }
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@700&display=swap');

/* Estilo para el contenedor principal */
.comic-container {
  font-family: 'Comic Neue', cursive !important;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilo para la imagen del cómic */
img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

/* Estilo para el título */
h1 {
  font-size: 30px;
  margin: 20px 0;
  color: #000000;
}

/* Estilo para la descripción */
p {
  font-size: 18px;
  color: #666;
}

/* Estilo para el sistema de calificación con estrellas */
.rating {
  font-size: 40px;
  margin-top: 20px;
}

.star {
  color: #ffd90087;
  /* Color de estrella amarilla */
  cursor: pointer;
  transition: color 0.2s;
  text-shadow: 0 0 1px #ffffff, 0 0 1px #ffffff;
}

/* Estilo para estrellas seleccionadas */
.star.selected {
  color: #FFA500;
  /* Color de estrella naranja para estrellas seleccionadas */
}
</style>
