<template>
  <div>
    <h1>{{ name }}</h1>
    <p>
      {{ msg }}
    </p>
  </div>
</template>

<script>
const newLocal = "element-name";
export default {
  name: newLocal,
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
};
</script>
