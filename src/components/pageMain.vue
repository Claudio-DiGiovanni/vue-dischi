<template>
  <main>
    <div class="container">
      <div class="row row-cols-5" v-if="arrDisc">
        <discCard
        v-for="disc in arrDisc"
        :key="disc.poster"
        :imgUrl="disc.poster"
        :name="disc.title"
        :author="disc.author"
        :year="disc.year"
        />
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import discCard from '@/components/discCard.vue';

export default {
  components: {
    discCard,
  },
  data() {
    return {
      arrDisc: null,
      urlApi: 'https://flynn.boolean.careers/exercises/api/array/music',
    };
  },
  created() {
    axios.get(this.urlApi)
      .then((axiosResponse) => {
        console.log(axiosResponse);
        this.arrDisc = axiosResponse.data.response;
      });
  },
};
</script>

<style lang="scss" scoped>
  main{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #51564b;
  }
</style>
