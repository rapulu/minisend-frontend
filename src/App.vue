<template>
  <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/email-view" active-class="active" class="nav-link">View single</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/recipient-emails" active-class="active" class="nav-link">Emails of recipient</router-link>
        </li>
      </ul>
    </header>
  </div>

  <div class="album py-5 bg-light">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>