<template>
 <div class="container">
   <EmailComponents 
          :emails="emails" 
          :stats="stats" 
          :filters="filters" 
          @set-filters="load"
        />
 </div>
</template>
 
<script>
import EmailComponents from '@/components/EmailsComponent.vue'
import { onMounted, reactive, ref } from 'vue'
 
export default {
 components: {EmailComponents},
 setup() {
   const emails = ref([]);
   const stats = ref(null);
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
       arr.push(`?page=${filters.page}`)
     }
      const response = await fetch(`http://127.0.0.1:8000/api/search${arr.join('&')}`);
      const stat_resp = await fetch(`http://127.0.0.1:8000/api/stats`);

      const content = await response.json();
      const stat_result = await stat_resp.json();
      
      stats.value = stat_result.data;
      emails.value = filters.page === 1 ? content.data : [...emails.value, ...content.data];
   }
 
   onMounted(() => load(filters));
 
   return {
     emails,
     filters,
     load,
     stats
   }
 }
}
</script>
