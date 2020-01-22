import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)


export default new Vuex.Store({
 state:{
   author:'Kenan Haskic', 
   Icons:[
       {title:'HTML5' ,url:'html.png'},
       {title:'CSS3',url:'css.png'},
       {title:'JAVASCRIPT',url:'javascript.png'},
       {title:'VUE',url:'vue.png'},
       {title:'NODE',url:'nodejs.png'},
       {title:'GITHUB',url:'github.png'},
       {title:'SASS',url:'sass.png'},
       {title:'BOOTSTRAP',url:'boostrap.png'},
       {title:'WORDPRESS',url:'wordpress.png'},
       {title:'FIREBASE',url:'firebase.png'}],
   Socials:[
     {url:'facebook.png'},
     {url:'instagram.png'},
     {url:'github.png'},
     {url:'linkedin.png'},
     {url:'phone.png'},
     {url:'twitter.png'}
   ]    
 },
 getters:{ 
   getPhotos:state=>{
     return state.photos
   }
 },
 mutations:{
   saveData(state,data){
     state.photos=data
   }
   
 },
 actions:{ 
      getData(context){
        Vue.axios.get(`http://jsonplaceholder.typicode.com/photos`)
    .then(response => {
      context.commit('saveData',response)
      console.log(response.data)
    
    })
  }
    
 }

})