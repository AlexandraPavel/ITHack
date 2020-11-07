<template>
    <div id='wrapper-tenant-bill'>
        <h2><slot name="name" /></h2>
        <h3><slot name="price" /></h3>
        <button>Pay it</button>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';


    @Component({})
    export default class TenantBill extends Vue {
    }
</script>

<style lang='scss' scoped>
    #wrapper-tenant-bill {
        width: 24vw;
        height: 30vh;
        box-shadow: 2px 2px 3px 3px rgba(212, 212, 212, 0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin-top: 2vh;
        letter-spacing: 0.4rem;
        font-weight: 100;
        text-transform: uppercase;
    }

    h3 {
        margin-top: 4vh;
        font-size: 5rem;
        font-weight: 100;
    }

    button {
        background-color: #29E298;
        width: 10vw;
        height: 5vh;
        margin-top: auto;
        margin-bottom: 2vh;
        font-size: 1.5rem;
        color: white;
        font-weight: 800;
    }
</style>