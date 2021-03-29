<template>
  <div id="app">
    <div class="row">
      <div class="col text-center">
        <img
          alt="Vue logo"
          src="https://www.bluwom.com/profiles/cms/images/file/1438113437.png"
        />
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col  text-center mb-4">
        <span>Social Login</span>
      </div>
    </div>
    <div class="hello">
      <div class="row">
        <div class="col text-right">
          <a
            class="btn btn-primary"
            style="color:white; background-color: black; border-color: black;"
            href="http://localhost/login/google"
            >Google</a
          >
        </div>
        <div class="col">
          <a
            class="btn btn-primary"
            style="color:white; background-color: black; border-color: black;"
            href="http://localhost/login/facebook"
            >Facebook</a
          >
        </div>
      </div>
      <!-- <a href="http://localhost/login/google">Google</a>
<a href="http://localhost/login/facebook">Facebook</a> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  props: {
    msg: String,
  },
  methods: {
    googleLogin: function() {
      console.log("DONE");
      axios
        .get("http://localhost/login/google")
        .then((response) => console.log("DONE 2", response));
    },
  },
};
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
