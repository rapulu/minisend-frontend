<template>
 <div>
   <div class="row" v-if="stats != null">
     <div class="col">
       <div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Total email</h5>
           <p class="card-text">{{ stats.total_email }}</p>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Total email sent</h5>
           <p class="card-text">{{ stats.total_email_sent }}</p>
         </div>
       </div>
     </div>
     <div class="col">
       <div class="card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Total failed email</h5>
           <p class="card-text">{{ stats.total_email_failed}}</p>
         </div>
       </div>
     </div>
   </div>
   <br/>
   <div class="input-group mb-3">
     <input type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
            @keyup="search($event.target.value)"
           >
   </div>
   <p>Search by sender, recipient, subject</p>
  
   <table class="table">
     <thead>
       <tr>
         <th scope="col">Recipient</th>
         <th scope="col">Sender</th>
         <th scope="col">Subject</th>
         <th scope="col">Status</th>
         <th scope="col">Action</th>
       </tr>
     </thead>
     <tbody class="table-group-divider">
       <tr v-for="email in emails" :key="email.id">
         <td >{{ email.sender }}</td>
         <td>{{ email.recipient }}</td>
         <td>{{ email.subject }}</td>
         <td>{{ email.status ?'Sent':'Failed'}}</td>
         <td>
           <router-link :to="`/email/${email.id}`">
             View
           </router-link>
         </td>
       </tr>
     </tbody>
   </table>
   <div class="d-flex justify-content-center mt-4">
     <button class="btn btn-primary" @click="loadMore">Load more</button>
   </div>
 </div>
</template>
<script>
export default {
 props: ['emails','filters', 'stats'],
 emit: ['set-filters'],
 setup(props, context) {
   const search = (s) => {
     context.emit('set-filters', {
       s,
       page: 1
     })
   }
 
   const loadMore = () => {
     context.emit('set-filters', {
       page: props.filters.page + 1
     })
   }
   return {
     search,
     loadMore
   }
 
 }
}
</script>
