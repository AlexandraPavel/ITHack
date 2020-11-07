<template>
    <div id='wrapper-home-view'>
        <article>
            <img src="../../assets/img/logo.png" alt="logo" class="logo"> 
            <h1>Our aim is to facilitate the communication between tenants, owners & workers</h1>
            <button class="first-button" v-on:click="firstButtonClick">Log in</button>
            <button class="second-button" v-on:click="secondButtonClick">Sign up</button>
        </article>
        <img src="../../assets/img/town.svg" alt="">
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class HomeView extends Vue {
       firstButtonClick() {
           this.$router.push('auth/login');
       }

       secondButtonClick() {
           this.$router.push('auth/signup');
       }
    }
</script>

<style lang='scss' scoped>
    #wrapper-home-view {
        padding: 5vh 10vw;
        display: flex;
        > article {
            display: flex;
            flex-direction: column;
        }
        > img {
            width: 45vw;    
        }
    }

    h1 {
        color: rgb(15, 15, 15);
        width: 48vw;
        font-size: 4.3rem;
        margin-top: 8vh;
    }

    button {
        width: 30vw;
        height: 5vh;
        margin-top: 2.5vh;
    }

    .first-button {
        margin-top: 5vh;
        background-color: #29E298;
    }

    .second-button {
        border: #29E298 2px solid;
    }

    .logo {
        width: 10vw;
        height: 15vh;
    }
</style>