<script setup>
import Email from '../input/Email.vue'
import Password from '../input/Password.vue' // 追加
</script>

<template>
  <div id="app">
    <section class="vh-100">
      <div class="container py-5 vh-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style="border-radius: 1rem">
              <div class="card-body p-5 text-center bg-light">

                <h3 class="mb-5">Sign Up</h3>

                <Email id="email" title="Email" />
                <Password id="password" title="Password(6文字)" />
                <Password id="password-reinput" title="Password(再入力)" />

                <button class="btn btn-outline-primary btn-lg btn-block" type="submit">SignUp</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>