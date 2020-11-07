<template>
    <div id='wrapper-sign-up'>
        <form action="">
            <label for="user-type">User type: </label>
            <select id="user-type" name="user-type">
                <option value="tenant">Tenant</option>
                <option value="owner">Owner</option>
                <option value="worker">Worker</option>
            </select>

            <label for="fullname">Full Name: </label>
            <input type="text" name="fullname"> 

            <label for="username">Username: </label>
            <input type="text" name="username">

            <label for="email">Email: </label>
            <input type="email" name="email">

            <label for="Password">Password: </label>
            <input type="password" name="password">   

            <button type="submit">Sign up</button>
        </form>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class SignUp extends Vue {
       
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