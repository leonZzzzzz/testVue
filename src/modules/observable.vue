<template>
  <div class="hello">
    <button @click="setCount(count+1)">+1</button>
    <button @click="setCount(count-1)">-1</button>
    <div>store中count：{{count}}</div>
  </div>
</template>

<script>
import {store,mutations} from '@/store/store'
export default {
  data () {
    return {
      // count:0
    }
  },
  computed:{
    count(){
      return store.count
    },
    name(){
      return store.name
    }
  },
  created(){
    console.log(this.count)
    // this.count=store.count
  },
  methods:{
   setCount:mutations.setCount
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
