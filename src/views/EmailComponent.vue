<template>
 <div>
   <div v-if="email === null">Loading...</div>
     <div v-else>
     <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
       <h3> {{ email.subject }} - {{ email.from }}</h3>
       <span class="badge badge-success">Success</span>
       <span class="badge badge-warning">Warning</span>
     </header>
 
     <main>
       <p class="fs-5 col-md-8">{{ email.body }}</p>
     </main>
   </div>
 </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
 
export default {
 setup() {
   const email = ref(null);
   const route = useRoute()
 
   onMounted( async () => {
     const response = await fetch("http://127.0.0.1:8000/api/email/"+route.params.id);
     const content = await response.json();
     email.value = content.data
     console.log(content.data)
   });
 
   return {
     email
   }
 }
}
</script>