import { defineStore } from "pinia";

export default () => useStore = defineStore('storeId', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      Numero: 0,
      suma (){
        this.Numero++   
      }
    }
  },
  getter:{
     num: (state) =>{
       if(state.Numero % 2 === 0) return 'par'
       return 'impar'
    }
   
  }
})
