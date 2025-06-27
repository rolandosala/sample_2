<template>
    <div class="container p-4 d-flex justify-content-center align-items-center">
        <div class="card col-md-4">
            <div class="card-header">
                <h1>Login</h1>
            </div>
            <div class="card-body">
                <input type="text" placeholder="username" class="form-control mt-2" v-model="username" />
                <input type="password" @keyup.enter="login" placeholder="password" class="form-control mt-2" v-model="password">
                <button @click="login"  class="btn btn-outline-info mt-2 form-control">Sign In</button>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        login() {
            if (this.username == 'user' && this.password == '1234') {
                localStorage.setItem('token', 'fake-token');
                this.$router.push('/home');
            } else {
                alert('Invalid Login')
            }

        }
    }
}
</script>