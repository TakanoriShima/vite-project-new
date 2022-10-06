<script setup>
  import Email from '../input/Email.vue';
  import Password from '../input/Password.vue' // 追加
</script>

<template>
  <section class="vh-100">
    <div class="container py-5 vh-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center bg-light">

              <h3 class="mb-5">Login</h3>

              <Email id="email-address" title="EmailAddress" />
              <Password id="password" title="Password" />

              <button class="btn btn-outline-primary btn-lg btn-block" type="submit">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card.shadow-2-strong {
  border-radius: 1rem;
}
</style>