<template>
  <div class="container">
    <div>
      <h1 class="title">
        hello-world
      </h1>

      <br>

      <p v-for="(person) of people" :key="person">
        {{ person }}
      </p>

      <br>
      <hr>

      <div class="links">
        <button class="button--green" @click="$store.dispatch('people/updatePeople', 'any name')">
          increase people
        </button>
        <button class="button--grey" @click="$store.dispatch('people/pop')">
          decrease people
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    people() {
      return this.$store.getters['people/getPeople']
    }
  },
}
</script>

<style>
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
