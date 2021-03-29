<template>
  <div class="hello">
<a href="http://localhost/login/google">Google</a>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    googleLogin: function () {
      console.log("DONE");
      axios
      .get('http://localhost/login/google')
      .then(response => (console.log("DONE 2", response)))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
