<template>
    <section id='wrapper-the-header' class="main-section">
        <article id="profile-section">
            <img src="../../assets/img/profile.jpg" alt="">
            <span class="user-name">{{loggedUsername}}</span>
        </article>
        <button id="button-hamburger-menu"> 
            <img src="../../assets/img/hamburger-menu.svg" alt="">
        </button>
    </section>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';


    @Component({})
    export default class TheHeader extends Vue {
       get loggedUsername() {
           return this.$store.state.loggedUsername + "  -  Alex Robert";
       }
    }
</script>

<style lang='scss' scoped>
    @import '@/style/_classess.scss';

    #wrapper-the-header {
        display: flex;
        align-items: center;
        width: 100vw;
        height: 10vh;
    }

    #profile-section {
        border-radius: 5%;
        background-color: #F1F9F7;
        width: 20%;
        height: 70%;
        display: flex;
        //justify-content: center;
        align-items: center;

        > img {
            width: 3vw;
            height: 6vh;
            border-radius: 50%;
        }
    }

    .user-name {
        margin-left: 2vw;
    }

    #button-hamburger-menu {
        margin-left: auto;
    }
</style>