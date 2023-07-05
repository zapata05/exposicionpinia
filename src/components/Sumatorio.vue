<script setup>
import useStore from '@/stores/index'

//const store = useStore ()
const store = () => useStore();
</script>

<template>
    
    <div class="contenedor">
        <div class="ref">
           <h1>holas {{ store.Numero }}</h1>
           <h2>{{  }}</h2>
        </div>
        <div class="botones">
            <div ><button @click="">-</button></div>
            <div ><button @click="store.sum">+</button></div>
            <div ><button @click="">resetear</button></div>
        </div>
    
    </div>
</template>
<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.ref {
  font-size: 24px;
  margin-bottom: 20px;
}

.botones {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  background-color: #3490dc;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
}

.reset {
  background-color: #e3342f;
}
</style>