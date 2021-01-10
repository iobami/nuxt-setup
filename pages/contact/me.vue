<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        About {{ name }}
      </h1>

      <input type="text" v-model="name" :placeholder="placeholder">

      <h1>{{ halfName }}</h1>

      <hr>
      <br>

      <h1 class="title">{{ count }}</h1>

      <div class="links">
        <button class="button--green" @click="updateCount(1)">
          increase count
        </button>
        <button class="button--grey" @click="updateCount(-1)">
          decrease count
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components';

export default {
  data() {
    return {
      name: 'ayobami',
      placeholder: 'Enter name here',
      count: 0
    };
  },
  // components: {
  //   Logo,
  // },
  computed: {
    halfName() {
      return this.name.slice(Math.ceil(this.name.length / 2));
    }
  },
  methods: {
    updateCount(count) {
      this.count = this.count + count;
    }
  }
}
</script>

<style>
button {
  cursor: pointer;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
