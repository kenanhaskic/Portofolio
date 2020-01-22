<template>
    <div class="container">  
  <form id="contact" action="mail-handler.php" method="post">
     <h1>Contact Me</h1>
    <fieldset>
      <input placeholder="Your name" type="text" name="name" tabindex="1" required autofocus>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" name="email" type="email" tabindex="2" required>
    </fieldset>
    <fieldset>
      <textarea name="msg" placeholder="Type your message here...." tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
</div>
</template>
<script>

export default {
    data() {
        return {
        
        };
    },
    methods: {
    }
};
</script>
<style >
.container{
    position: relative;
    width: 35%;
    float: right;
    right: 25%;
}
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,600,400italic);
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

#contact input[type="text"],
#contact input[type="email"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 16px/20px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: rgb(22, 22, 22);
  padding: 25px;
  margin-top: 150px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],

#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 100%;
  border: none;
  background: #4CAF50;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}


#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
@media screen and (min-width: 320px) {
  .container{
    width: 95%;
    }
  #contact{
    position: absolute;
    margin: 0;
    width: 90%;
    left:28%;
    height: 400px;
    top:90px;
  }
  h1{
    font-size: 6vw;
    text-align: center;
  }
  .leftSide{
    display: none;
  }
}
@media screen and (min-width: 375px) {
  .container{
    width: 95%;
    }
  #contact{
    position: absolute;
    margin: 0;
    width: 90%;
    left:28%;
    height: 400px;
    top:90px;
  }
  h1{
    font-size: 6vw;
    text-align: center;
  }
  .leftSide{
    display: none;
  }
}
@media screen and (min-width: 425px) {
  .container{
    width: 95%;
    }
  #contact{
    position: absolute;
    margin: 0;
    width: 85%;
    left:31%;
    height: 400px;
    top:90px;
  }
  h1{
    font-size: 6vw;
    text-align: center;
  }
  .leftSide{
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .container{
    width: 95%;
    }
  #contact{
    position: absolute;
    margin: 0;
    width: 45%;
    left:67%;
    height: 400px;
    top:90px;
  }
  h1{
    font-size: 3vw;
    text-align: center;
  }
  .leftSide{
    display: block;
  }
}
@media screen and (min-width: 1024px) {
  .container{
    width: 95%;
    }
  #contact{
    position: absolute;
    margin: 0;
    width: 40%;
    left:60%;
    height: 400px;
    top:120px;
  }
  h1{
    font-size: 3vw;
    text-align: center;
  }
  .leftSide{
    display: block;
  }
}
@media screen and (min-width: 1440px) {
  .container{
    width: 95%;
    }
  #contact{
    position: absolute;
    margin: 0;
    width: 40%;
    left:60%;
    height: 500px;
    top:150px;
  }
  h1{
    font-size: 2.5vw;
    text-align: center;
  }
  .leftSide{
    display: block;
  }
  fieldset{
    padding: 1%;
  }
}




</style>