<template>
    <div id='wrapper-sign-up'>
        <form action="">
            <label for="user-type">User type: </label>
            <select id="user-type" name="user-type" v-model="selectValue" required>
                <option value="tenant">Tenant</option>
                <option value="owner">Owner</option>
                <option value="worker">Worker</option>
            </select>

            <label for="fullname">Full Name: </label>
            <input type="text" name="fullname" v-model="fullname" required> 

            <label for="username">Username: </label>
            <input type="text" name="username" v-model="username" required>

            <label for="email">Email: </label>
            <input type="email" name="email" v-model="email" required>

            <label for="Password">Password: </label>
            <input type="password" name="password" v-model="password" required>   

            <button type="button" v-on:click="signUpUser">Sign up</button>
        </form>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import axios from 'axios';

    @Component({})
    export default class SignUp extends Vue {
       fullname = "";
       username = "";
       email = "";
       password = "";
       selectValue = "";

       async signUpUser() {
            const postUrl = this.getServerUrl(this.selectValue);
            if (postUrl == "") {
                alert("Invalid selected user type!")
                return;
            }
            try {
                await axios.post(postUrl, {
                    fullname: this.fullname,
                    username: this.username,
                    email: this.email,
                    password: this.password
                });

                alert("Welcome " + this.username + "!");
            }
            catch(error) {
                alert(error);
            }
       }

       getServerUrl(selectValue: string): string {
           if (selectValue == "tenant") {
               return `http://localhost:5000/auth/tenants/signup`;
           }
           if (selectValue == "owner") {
               return `http://localhost:5000/auth/owners/signup`;
           }
           if (selectValue == "worker") {
               return `http://localhost:5000/auth/workers/signup`;
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

    #wrapper-sign-up {
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