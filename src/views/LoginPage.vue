<script setup>
import { ref } from 'vue'
import router from '@/router/index'
import { useAuth } from '@/router/islogin'


const settingUsername = 'admin'
const settingPassword = 'asdfgh'
const { isLogin } = useAuth()

const formData = ref({
  username: '',
  password: ''
})

const submittedCards = ref([])

const submitForm = () => {
  validateName(true)
  validatePassword(true)
  if (!errors.value.username && !errors.value.password
     && formData.value.username === settingUsername
     && formData.value.password === settingPassword
  ) {
    // submittedCards.value.push({ ...formData.value })
    // clearForm()
    alert("Login success!!")
    isLogin.value = true
    console.log("LoginPage",isLogin.value)
    router.push({name:'About'})
    // router.push('/about')
  }
}

// const clearForm = () => {
//   formData.value = {
//     username: '',
//     password: ''
//   }
// }

const errors = ref({
  username: null,
  password: null
})


const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 6

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else {
    errors.value.password = null
  }
}
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">🗄️ Login here!</h1>
        <p class="text-center">
          Lets login here!.
        </p>
        <form @submit.prevent="submitForm">

          <div class="row mb-3">
            <div class="col-md-12 col-sm-12">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
          </div>


          <div class="row mb-3">
            <div class="col-md-12 col-sm-12">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>