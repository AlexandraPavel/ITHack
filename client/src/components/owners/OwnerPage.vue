<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<template>
    <div id='wrapper-owner-page'>
        <TheHeader />
        <div class="Table">
            <v-card>
                <v-card-title>
                    <v-img src="../../assets/img/tenantlogo.png"
                    max-height="50"
                    max-width="100"
                    ></v-img>
                        
                    <v-spacer></v-spacer>
                    <input type="month" name="date" id="" v-model="pickedDate">
                        
                    <v-spacer></v-spacer>
                    <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    <v-btn 
                        class="mx-2"
                        color="purple"
                        dark
                        right
                        fab
                        background="purple"
                        @click="dialog = true"   
                    >
                        <v-icon dark>
                        mdi-plus
                        </v-icon> 
                        </v-btn>
                </v-card-title>

                <v-spacer></v-spacer>
                <v-data-table
                    :headers="headers"
                    :items="tenant"
                    :items-per-page="10"
                    :search="search"
                    class="elevation-1"
                >
                <template #item.status="{ value }">
                    <a :href="value">
                    {{ value }}
                    </a>
                                
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn @click="deleteRow(item)">delete</v-btn>
                </template>
                </v-data-table>
            </v-card>
        </div>
            <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">Use Google's location service?</v-card-title>
                <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="dialog = false">Disagree</v-btn>
                <v-btn color="green darken-1" flat @click="dialog = false">Agree</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>  
    </div>
</template>

 <script lang='ts'> 
    import Vue from 'vue';
     import Vuetify from 'vuetify';
    import { Component } from 'vue-property-decorator';
    import TheHeader from '@/components/the/TheHeader.vue';
    @Component({
         components: {
            TheHeader
        }
    })
    export default class OwnerPage extends Vue {
            dialog = false;
            persistent = false;
            search = '';
            headers = [
            {
                text: 'ID',
                value: 'id'
            },
            {
                text: 'Name',
                value: 'name',
                align: 'center'
            },
            { text: 'Username', value: 'username'},
            { text: 'Email', value: 'email'},
            { 
                text: 'Invoice Status',
                value: 'status'
            },
            {
                text: 'Actions',
                value: 'actions',
                sortable: false
            },
            ];
           
            tenant = [
                 {
                id: '1',
                name: 'Gabi Pana',
                username: 'gabi233',
                email: '0713 234 543',
                status: 'achitat',
                },
                 {
                id: '2',
                name: 'Robert Alex',
                username: 'ralex',
                email: 'robertalexandru2712@gmail.com',
                status: 'neachitat',
                },
                {
                id: '3',
                name: 'George Bosla',
                username: 'george13',
                email: 'george12@gmail.com',
                status: 'achitat',
                },
                {
                id: '4',
                name: 'Andrei Ion',
                username: 'andrei',
                email: 'andrei12@gmail.com',
                status: 'achitat',
                },
                 {
                id: '5',
                name: 'Petru pavel',
                username: 'petru',
                email: 'petru2@gmail.com',
                status: 'achitat',
                },
                 {
                id: '6',
                name: 'Ionut Petrescu',
                username: 'ionut',
                email: 'ionut@gmail.com',
                status: 'neachitat',
                },
            ];
            
             deleteRow(item:any) {
                let index = this.tenant.findIndex(emp => emp.id === item.id)
                this.tenant.splice(index, 1);
                
            }
    }
</script>

<style lang='scss' scoped>
    .wrapper-owner-page{
        
        width: 100vw;
        height: 100vh;
        margin-left: 10%;
        margin-top: 10%;
    }
    .containerALL{
        width: 100vw;
        height: 100vh;
    }
    .Table {
        width: 50%;
        height: 75%;
        margin-left: 10%;
        align-content: center;
        margin-top: 3%;
        margin-bottom: 10%;
        margin-bottom: 10%; 
        width: 75%;
        height: 75%;
        margin-bottom: 10%; 
        width: 75%;
        height: 75%;
        -webkit-box-shadow: 0px 3px 7px 5px rgba(0,0,0,0.07);
        -moz-box-shadow: 0px 3px 7px 5px rgba(0,0,0,0.07);
        box-shadow: 0px 3px 7px 5px rgba(0,0,0,0.07);
        border-radius: 15px;
        background-color: white;
    }
</style> 