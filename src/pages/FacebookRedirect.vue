<template>
<div class="spinner-border" style="margin-left: 50%; margin-top: 50px;" role="status">
  <span class="sr-only">Loading...</span>
</div>

</template>


<script>

import axios from 'axios';

export default {
  name: 'FacebookRedirect',
  props: {
    msg: String
  },
   created: function () {
    // `this` points to the vm instance
    let urlParams = new URLSearchParams(window.location.search);
      let code = urlParams.has('code') ? urlParams.get('code') : null;

      axios
      .get('http://localhost/login/facebook/callback', {
  params: {
    code: code,
  }})
      .then(response => {(console.log("DONE 2", response));
      /* localStorage.token = response.data.AccessToken; */
      this.saveToken(response.data);
      window.location.href = "http://localhost:8080/current-user"
        })
  },
  methods: {

    saveToken: function (userData) {
       let tokens = localStorage.tokens;
      if(!tokens){
        tokens = new Array();
      } else {
        tokens = JSON.parse(tokens)
      }
      console.log("tokens", tokens)
      let tokenIndex = this.findToken(tokens, userData.email);
      if(tokenIndex !== null){
        tokens[tokenIndex] = {mail: userData.email, name: userData.name, token: userData.AccessToken};
      } else {
        tokens.push({mail: userData.email, name: userData.name, token: userData.AccessToken});
      }
      localStorage.tokens = JSON.stringify(tokens);
      localStorage.token = userData.AccessToken;
    },

    findToken: function (tokens, email) {
      if(!tokens || tokens.length === 0) {
        return null;
      }
      for(let index = 0; index < tokens.length; index++){
        if(tokens[index].mail === email){
          return index;
        }
      }
      return null;
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
