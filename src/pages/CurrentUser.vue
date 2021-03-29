<template>
  <div>
    <div class="row">
      <div class="col " style="color:white;">
        <div
          style="width:50%; background: black; margin-left: 25%; margin-top: 50px; border-radius: 25px;"
        >
          <div class="row">
            <div class="col pt-4 pb-4">
              <img
                alt="Vue logo"
                src="https://52zone.it/wp-content/uploads/2017/12/placeholder.png"
                style="width: 30%; margin-left:35%"
              />
            </div>
          </div>

          <hr
            style="background: white;
    border-color: white; margin-left: 20px; margin-right: 20px;"
          />

          <div class="row">
            <div class="col m-4" v-if="userData">
              <div class="row">
                <div class="col-4">
                  <strong>Name:</strong>
                </div>
                <div class="col-8">
                  <span>{{ userData.name }}</span>
                </div>
              </div>

              <div class="row">
                <div class="col-4">
                  <strong>Email:</strong>
                </div>
                <div class="col-8">
                  <span>{{ userData.email }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CurrentUser",
  data: function() {
    return { userData: null };
  },

  created: function() {
    // `this` points to the vm instance

    axios
      .get("http://localhost/api/currentuser", {
        headers: {
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then((response) => {
        console.log("DONE 2", response);
        this.userData = response.data;
        console.log("USER DATA:", this.userData);
      });
  },
  methods: {},
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
