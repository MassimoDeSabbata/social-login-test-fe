<template>
  <div>
    <div class="row"></div>

    <div class="row">
      <div class="col-2" style="color:white;">
        <div
          style="background: black; margin-left: 10%; margin-top: 50px; border-radius: 25px; padding-left: 20px;"
        >
          <div class="row pt-3">
            <div class="col">
              <h4>Your Profiles:</h4>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="pt-2 pb-3" v-for="profile in profiles" :key="profile.mail">
                <small style="cursor: pointer" v-on:click="updateToken(profile.token)">{{ profile.mail }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col " style="color:white;">
        <div
          style="width:50%; background: black; margin-left: 15%; margin-top: 50px; border-radius: 25px;"
        >
          <div class="row">
            <div class="col pt-4 pb-4">
              <img
                v-if="userData.data.avatar"
                alt="Vue logo"
                v-bind:src="userData.data.avatar"
                style="width: 30%; margin-left:35%; border-radius: 50%;"
              />
              <img
                v-if="!userData.data.avatar"
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
                  <span>{{ userData.data.name }}</span>
                </div>
              </div>

              <div class="row">
                <div class="col-4">
                  <strong>Email:</strong>
                </div>
                <div class="col-8">
                  <span>{{ userData.data.email }}</span>
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
    return { userData: null, profiles: null };
  },

  created: function() {
    // `this` points to the vm instance
    this.profiles = JSON.parse(localStorage.tokens);

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
  methods: {
     updateToken: function (token) {

      localStorage.token = token;
      window.location.reload()
    }
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
