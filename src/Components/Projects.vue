<template>    
<div>
    <div id="AllProjects">
            <div id="Projects">
                    <p>Portofolio</p>
                    <img src="../Assets/Projects/MyPortofolio.png">
                    <button @click="GoTo('https://github.com/kenanhaskic/MyPortofolio.git')">View source</button>
            </div>
             <div id="Projects">
                    <p>Movies</p>
                    <img src="../Assets/Projects/Movies.png">
                    <button @click="GoTo('https://github.com/kenanhaskic/MoviesProject.git')">View source</button>
            </div>
            <div id="Projects">
                    <p>Dice</p>
                    <img src="../Assets/Projects/dice.png">
                    <button @click="GoTo('https://github.com/kenanhaskic/MoviesProject.git')">View source</button>
            </div>
    </div>

</div>

</template>
<script>
export default {
    data(){
        return{
         
        }
        
    },
    methods:{
     GoTo(url){
         window.open(url, '_blank')
     }
    }
}
</script>
<style>
.leftSide{
    position: fixed;
}
#Projects{
    width: 40%;
    height: 380px;
    background-color: rgb(17, 17, 17);
    float: left;
    margin:1%;
    position: relative;
}

#AllProjects{
    text-align: center;
    margin-top: 1%;
    margin-left: 18%;
}
button{
    background-color:#43A047;
    border-style: none;
    width: 150px;
    margin-top:5%;
    color:whitesmoke;
}
#AllProjects p {
    margin-top:2%;
}
#Projects img{
    margin-top:2%;
    width: 95%;
    height: 220px;
    border: 1px solid gainsboro;
}
@media screen and (min-width: 320px) {
.leftSide{
    display: none;
  }
#dropDown {
    display: block;
    margin: 1% 1%;
  }
#AllProjects{
    width: 80%;
    position: absolute;
}
#Projects{
   margin-top: 12%;
   margin-left:-10%;
   width: 100%;
   height: 320px;
}
button{
    width: 150px;
    height: 30px;
    margin-top:7%;
}
}
@media screen and (min-width: 425px) {
.leftSide{
    display: none;
  }
#dropDown {
    display: block;
    margin: 1% 1%;
  }
button{
    margin-top:5%;
    width: 150px;
    height: 30px;
}
}
@media screen and (min-width: 768px) {
.leftSide{
    display: block;
    position: fixed;
  }
#dropDown {
    display: none;
    margin: 1% 1%;
  }
button{
    margin-top:5%;
    width: 150px;
    height: 30px;
}
#Projects{
   margin-top: 5%;
   margin-left:18%;
   width: 75%;
   height: 350px;
}
}
@media screen and (min-width: 1024px) {
.leftSide{
    display: block;
    position: fixed;
  }
#dropDown {
    display: none;
    margin: 1% 1%;
  }
button{
    margin-top:5%;
    width: 150px;
    height: 30px;
}
#AllProjects{
    margin-left: 19%;
}
#Projects{
   margin-top: 2%;
   width: 45%;
   height: 350px;
   display: inline-block;
   margin-left: 2%;
}
}

</style>