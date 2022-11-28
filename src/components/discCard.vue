<template>
  <div class="col">
    <div class="contents">
      <img :src="imgUrl" :alt="name" class="img-fluid">
      <h2 class="name">
        {{ name }}
      </h2>
      <div class="info">
        <span class="author">
          {{ author }}
        </span>
        <span class="year">
          {{ year }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'discCard',
  props: {
    imgUrl: String,
    name: String,
    author: String,
    year: String,
  },
};
</script>

<style lang="scss" scoped>
.contents {
  background-color: #2a3942;
  padding: 1rem;
  height: 22rem;
  margin: 1rem;
  border-radius: 10px;
}

.name {
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 1rem;
}

.info {
  color: gray;
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>
