<template>
    <div id='wrapper-log-in'>
        <form action="">
            <label for="user-type">User type: </label>
            <select id="user-type" name="user-type" v-model="selectValue" required>
                <option value="tenant">Tenant</option>
                <option value="owner">Owner</option>
                <option value="worker">Worker</option>
            </select>

            <label for="email">Email: </label>
            <input type="email" name="email" v-model="email" required>

            <label for="Password">Password: </label>
            <input type="password" name="password" v-model="password" required>   

            <button type="button" v-on:click="loginUser">Log In</button>
            </form>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import axios from 'axios';

    @Component({})
    export default class LogIn extends Vue {
        email = "";
        password = "";
        selectValue = "";

        async loginUser() {
            const postUrl = this.getServerUrl(this.selectValue);
            if (postUrl == "") {
                alert("Invalid selected user type!")
                return;
            }
            try {
                const response: any = await axios.post(postUrl, {
                    email: this.email,
                    password: this.password
                });

                alert("Welcome " + response.data.username + "!");
            }
            catch(error) {
                alert(error.message);
            }
        }

        getServerUrl(selectValue: string): string {
            if (selectValue == "tenant") {
                return `http://localhost:5000/auth/tenants/login`;
            }
            if (selectValue == "owner") {
                return `http://localhost:5000/auth/owners/login`;
            }
            if (selectValue == "worker") {
                return `http://localhost:5000/auth/workers/login`;
            }
            return "";
        }
    }
</script>

<style lang='scss' scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 20%;
    }

    #wrapper-log-in {
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        height: 5vh;
        border: 1px solid gray;
        margin: 1vh 0;
        padding: 0 1rem;
    }

    button {
        height: 5vh;
        background-color: #29E298;
        color: white;
        font-size: 1.3rem;
    }

    select {
        height: 5vh;
        border: 1px solid gray;
        margin: 1vh 0;  
        padding: 0 1rem;
    }
</style>