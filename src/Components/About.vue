<template>
    <div class="about">
       <div class="me">
           <div class="TextMe">
                <h5 id="Title">Who's this guy?</h5>
                <p>Ambitious junior Web Developer and Bachelor of Information Technology located in Novi Travnik, Bosnia and Herzegovina.
                  I enjoy spending time acquiring new knowledge, creating new projects, and making new friendships.
                  Proficient in creating responsive websites which convert visitors into customers. When I'm not coding, you'll find me in the gym or in nature. 
                </p>
           </div>
           
            <div class="TextMe">
                <h5 id="Title">What I do?</h5>
                <div class="WhatIDo">
                    <h5>Responsive Web Design</h5>
                    <p>I will create a modern and responsive design with the latest standards.
                       My layouts will work on any device, big or small.</p></div>
                <div class="WhatIDo">
                    <h5>Desktop Application</h5>
                    <p>I will create desktop application for you with full functionality, which will facilitate the business of you or your company</p></div>       
                <div class="WhatIDo">
                    <h5>Web Application </h5>
                    <p>I will build Fast load times, lag free interaction and fully responsive web application with the latest standards.</p></div>


           </div>

             <div id="skils" class="TextMe">
                <h5 id="Title">Skill's</h5> 
                <ul v-for="icon in icons" :key="icon.id"  class="icons">
                    <div class="icon">
                    {{icon.title}}

                    <img :src="getImgUrl(icon.url)" v-bind:alt="pic">
                    </div>
                </ul>
           </div>

       </div>
     
       



    </div>
</template>
<script>
export default {
    data(){
        return{
          icons:this.$store.state.Icons

        }
    },
    methods:{
        getImgUrl(icon){
            return require ('../Assets/'+icon)
        }
    }
    
}
</script>
<style>
.about{
    margin: 0;
    position: relative;
    height: auto;
}
#skils{
        background-color: rgb(41, 40, 40);

}
.leftSide{
    margin:0;
    position: fixed;
}
.me{
    width: 80%;
    height: auto;
    background-color: rgba(26, 26, 26, 0.8);
    display: block;
    float: right;
    margin:2% 2%;
}

.TextMe{
    position:relative;
    display: inline-block;
    width: 98%;
    margin:0% 1%;
}
.TextMe p{
    margin-top: 2%;
    margin-right: 2%;
}
#Title{
    text-align: center;
    background-color: #43A047;
}
.icons{
    display: inline-block;
    text-align: center;
    margin-left: 7%;
    
}
.icon{
    width: 220px;
    height: 160px;
    display: inline-block;
    font-size: 16px;
    vertical-align: top;
    background-color: rgb(41, 40, 40);
    margin-top: 10%;
}
.WhatIDo{
    width: 240px;
    height: 250px;
    display: inline-block;
    background-color:rgb(41, 40, 40);
    text-align: center;
    margin:2% 5%;
    position: relative;
    vertical-align: top;
}
.WhatIDo p{
    padding: 40px 0px;
}
.icon img{
    border: none;
}



@media screen and (min-width: 320px) {
    .TextMe p{
        margin:2%;
    }
    .me{
        margin: 15% 7.5%;
        width: 85%;
        font-size: 4.5vw;
    }
    .icon{
        margin-left:-10%;
        width: 110px;
    }
    
}
@media screen and (min-width: 375px) {
.WhatIDo, .icon{
    margin: 4% 11%;
 }   
}
@media screen and (min-width: 425px) {
.WhatIDo{
    margin: 4% 8%;
    width: 300px;
    font-size: 3.5vw;
    letter-spacing: 0.1vw;
}
.icon{
    margin: 0% 25%;
 }
 .TextMe p{ 
     font-size: 3.5vw;
     letter-spacing: 0.1vw;
 }
}
@media screen and (min-width: 768px) {
    .me{
        margin: 2% 8%;
        width: 60%;
        font-size: 4vw;
    }
    .WhatIDo{
        margin: 2% 16%;
        width: 70%;
        height: 50% ;
    }
    .icon{
        margin:2% 1%;
    }
    .TextMe p{
     font-size: 2.5vw;
    }
}
@media screen and (min-width: 1024px) {
    .me{
        width: 75%;
        margin: 2% 4%;
    }
    .icon{
        margin: 1% 15%;
    }
     .WhatIDo{
        width: 30%;
        display: inline-block;
        margin: 1% 1%;
        height: 320px;
    }
   .TextMe p {
       font-size: 1.5vw;
   }
   .icons{
  margin: 2%;
    
}
}
@media screen and (min-width: 1440px) {
    .me{
        margin: 2% 2.5%;
        font-size:1.4vw;
        width: 78%;
        height: auto;
       
    }
    .WhatIDo{
        width: 30%;
        display: inline-block;
        margin: 1%;
        height: 300px;
    }
    .icons{
        margin: 2% 2.5%;
        
    }
    .icon{
        width: 110px;
    }
    .TextMe ul{
        margin-left: 5.8%;
    }
   .TextMe p {
       font-size: 1.3vw;
   }
    
}
</style>