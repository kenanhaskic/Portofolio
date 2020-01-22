  <template>
    <div class="HomePage">

  <div class="information">

  <h1 id="tex">Hello,</h1>

  <p id="text">My name is Kenan and I'm Web Developer based in Bosnia & Herzegovina. 
    I'm experienced in responsive web design and writing clean, elegant and efficient code.</p>

            <img id="MojaSlika" src="src\Assets\me.jpg" />

     <div class="socials"> 
       <h4 id="visit">Visit me on:</h4>
       <a href="https://www.facebook.com/kenan.haskic">
       <img src="../Assets/socials/facebook.png" alt="facebook"></a>

       <a href="https://www.instagram.com/kenan.haskic/?hl=hr">
       <img src="../Assets/socials/instagram.png" ></a>

       <a href="https://twitter.com/kenan_haskic">
       <img src="../Assets/socials/twitter.png" ></a>

       <a href="https://www.linkedin.com/in/kenan-haskic-b67897114">
       <img src="../Assets/socials/linkedin.png" ></a>

       <img src="../Assets/socials/viber.png"  @click="showNumber=!showNumber">
       <p id="phoneNumber" v-if="showNumber">+38761364846</p>

       <a href="https://join.skype.com/invite/hbXcBnGQjkLc">
       <img src="../Assets/socials/skype.png" ></a>

     </div>

  </div>

 </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showNumber:false,        
        }
    },
    methods:{
    
    },
    created(){
    },
    computed:{
      
    }
  };
  </script>
  <style >
  .information{
    background-color: rgba(15, 15, 15, 0.96);
    height: 600px;
    position: relative;
    margin-top:3%;
    text-align: center;
    padding: 2%;
    float: right;
    right: 100px;
  }
  #phoneNumber{
    position: absolute;
  }
  .socials{
    margin-top:20%;
  }
   .socials img{
    width:50px ;
  }
  .socials a{
    margin: 0% 2%;
  }
  .socials img:hover{
   width: 60px;
   margin: 0;
  }
  .leftSide{
    position: fixed;
  }
#text{
  width: 80%;
margin-top: 5%;
margin-left: 10%;
}
  @media screen and (min-width: 320px) {
  .information  {
    height: 100%;
    position: absolute;
    top:5%;
    left:8%;
    letter-spacing: 0.1vh;
    width: 85%;
  }
  #tex{
    font-size: 5vw;
    padding: 10px;
  }
  #text{
    font-size: 4.4vw;
  }
  .leftSide{
    display: none;
  }
  .socials{
    margin-top:1%;
  }
  .socials a{
    margin:0% 1%;
    display: inline-block;
  }
  .socials img{
    width:35px;
  }
  #MojaSlika{
    display: block;
    margin: 10% 0% 0% 15%;
  }

}
 @media screen and (min-width: 375px) {
  .information  {
    height: 110%;
  }
  .leftSide{
    display: none;
  }
   #MojaSlika{
    display: block;
    margin: 10% 0% 0% 20%;
    width: 180px;
  }
  .socials{
    margin-top:5%;
  }
  
}

@media screen and (min-width: 425px) {
   .leftSide{
    display: none;
  }
     #MojaSlika{
    display: block;
    margin: 5% 0% 0% 23%;
    width: 180px;
  }
  .socials{
    margin-top:2%;
  }
}


  @media screen and (min-width: 768px) {
  .information  {
    height: 90%;
    top:1%;
    left:27%;
    width: 70%;
  }
  #tex{
    font-size: 3vw;
    padding: 10px;
  }
  #text{
    font-size: 2vw;
  }
  .leftSide{
    display: block;
    position: fixed;
  }
  #MojaSlika{
    display: none;
  }
   .socials{
    margin-top:20%;
  }
  }
    @media screen and (min-width: 1024px) {
  .information  {
    height: 90%;
    top:1%;
    left:23%;
    letter-spacing: 0.1vh;
    width: 70%;
  }
  .leftSide{
    display: block;
    position: fixed;
  }
    #tex{
    font-size: 2.4vw;
    padding: 8px;
  }
  #text{
    font-size: 1.8vw;
  }
  #MojaSlika{
    display: none;
    margin: 12% 0% 0% 15%;
  }
  .socials{
    margin-top: 10%;
    margin-bottom: 0%;
  }
  #visit{
    font-size: 2vw;
  }
  }
  @media screen and (min-width: 1440px) {
  .information{
    height: 750px;
    left: 22%;
    width: 75%;
  
  }
  #tex{
    font-size: 1.8vw;
    padding: 10px;
  }
  #text{
    font-size: 1.8vw;
  }
  #MojaSlika{
    display: none;
    margin: 12% 0% 0% 15%;
  }
  .socials{
    margin-top: 20%;
  }
}


  </style>







