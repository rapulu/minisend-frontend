<template>
 <div class="container">
   <EmailComponents :emails="emails" :filters="filters" @set-filters="load"/>
 </div>
</template>
 
<script>
import EmailComponents from '@/components/EmailsComponent.vue'
import { onMounted, reactive, ref } from 'vue'
 
export default {
 components: {EmailComponents},
 setup() {
   const emails = ref([]);
   const filters = reactive({
     s: '',
     page: 1
   })
 
   const load = async (f) => {
 
     filters.s = f.s
     filters.page = f.page
     const arr = [];
 
     if(filters.s) {
       arr.push(`?s=${filters.s}`)
     }
 
     if(filters.page) {
       arr.push(`?s=${filters.page}`)
     }
 
     const response = await fetch(`http://127.0.0.1:8000/api/search${arr.join('&')}`);
 
     const content = await response.json();
 
     console.log(content.data)
     emails.value = content.data;
   }
 
   onMounted(() => load(filters));
 
   return {
     emails,
     filters,
     load
   }
 }
}
</script>
