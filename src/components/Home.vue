<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-2 bg-info p-2">
                <ul>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/" @click="logout">Logout</router-link></li>
                </ul>
            </div>
            <div class="col-10">
                <h1>Homepage</h1>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    }
}
</script>