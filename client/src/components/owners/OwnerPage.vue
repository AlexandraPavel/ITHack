<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

<template>
    <div id='wrapper-owner-page'>
        <h1>Owner Page</h1>
         
        
        
            
            <div class="Table">
               
                <v-card>
                    <v-card-title>
                         <!-- <v-app id="inspire"> -->
                        Tenants    
                         
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
                        <!-- <template v-slot:extension> -->
                        <v-btn 
                            class="mx-2"
                            color="purple"
                            dark
                            right
                            fab
                           backgrounf="purble"
                           
                        >
                            <v-icon dark>
                            mdi-plus
                            </v-icon> 
                            </v-btn>
                        <!-- </template> -->
                        <!-- <v-btn @click="prompt">Show prompt</v-btn> -->
                    </v-card-title>
                   
                
                    <v-spacer></v-spacer>
                    <v-data-table
                        :headers="headers"
                        :items="tenant"
                        :items-per-page="10"
                        :search="search"
                        class="elevation-1"
                    >
                        <!-- <template v-slot:item.invoiceStatus="{ item }" > -->
                              <template #item.status="{ value }">
                                    <a :href="value">
                                    {{ value }}
                                    </a>
                                    <!-- <v-btn dark @click="navigateInvoicePage(item)">{{item.status}}</v-btn> -->
                                </template>
                            <!-- <v-btn @click="navigateInvoicePage(item)">{{item.status}}</v-btn> -->
                        <template v-slot:item.actions="{ item }">
                            <v-btn @click="deleteRow(item)">delete</v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </div>
         
    </div>
</template>

 <script lang='ts'> 
    import Vue from 'vue';
    // import VuejsDialog from 'vuejs-dialog';
    import { Component } from 'vue-property-decorator';
    


    @Component({})
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
            { text: 'Phone', value: 'phone'},
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
                // {
                // id: '',
                // name: '',
                // username: '',
                // phone: '',
                // invoiceStatus: '', // achitat sau neachitat (2/4)
                // rowData:[]
                // },
                 {
                id: '1',
                name: 'gabi',
                username: '233ere',
                phone: '07133',
                status: 'achitat', // achitat sau neachitat (2/4)
                rowData:[]
                },
                 {
                id: '2',
                name: 'Andrei',
                username: 'gabi',
                phone: '07133',
                status: 'poate', // achitat sau neachitat (2/4)
                rowData:[]
                },
                
            ];
            
             makeAdmin = function(dialog:any) {
                let button = dialog.node // node is only available if triggered via a directive
                let user = button.dataset.user
        
                // Make user admin from the backend
                /* tellServerToMakeAdmin(user) */
        
                // When completed, close the dialog
                /* dialog.close() */
        
            };
            doNothing = function() {
                // Do nothing or some other stuffs
            };
            // navigateInvoicePage(item:any){
            //     this.$router.push({ name: '' }); // routename pui ruta spre pagina data de birli 
            //  }
            // addTenant() {
                
            //     // let index = this.tenant.findIndex(emp => emp.id === item.id);
            //     var my_object = {
            //         username:this.tenant[index].username,
            //     };
            //     this.tenant[index].rowData.push(my_object)
            //     this.tenant[index].id = '';
            //     this.tenant[index].name = '';
            //     this.tenant[index].username = '';
            //     this.tenant[index].phone = '';
            //     this.tenant[index].statusfacturi = ''; // neachitat
            // }
            deleteRow(item:any) {
                let index = this.tenant.findIndex(emp => emp.id === item.id)
                this.tenant.splice(index, 1);
                
            }
            // this.$dialog
            //     .prompt({
            //         title: "Let's hear from you",
            //         body: "What is the most important thing in life?",
            //     }, {
            //         promptHelp: 'Type in the box below and click "[+:okText]"'
            //     })
            //     .then(dialog => {
            //         // Triggered when proceed button is clicked
            //         // Show an alert with the user's input as the message
            //         this.$dialog.alert(dialog.data || '[empty]')
            //     })
            //     .catch(() => {
            //         // Triggered when dialog is dismissed by user
                
            //         console.log('Prompt dismissed');
            //     });
        

        // }

        // async prompt() {
        //     let res = await this.dialog.prompt({
        //         text: "Please input your name",
        //         title: "Title",
        //         persistent: this.persistent
        //     });
        //     if (res) {
        //         this.dialog.notify.info("Your name is " + res);
        //     }
        //     };
        // get types() {
        //     return {
        //         warning: "Warning",
        //         error: "Error"
        //         // su: 'Info'
        //     };
        // };

        // async created(){
        //     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        //     this.tenant = response.data.map((item:any)=>({
        //         name:item.name,  // modific item.name cu ce imi da codruta
        //         // email:item.email,
        //         username:item.username,
        //         phone:item.phone,
        //         statusfacturi:item.statusfacturi,

        //     }));
        // }
    }
</script>

<style lang='scss' scoped>

    .wrapper-owner-page{
        // display: flex;
        width: 100vw;
        height: 100vh;
        margin-left: 10%;
        margin-top: 10%;
    }
    .containerALL{
        // display:;
        width: 100vw;
        height: 100vh;
    }
    .Table {
        width: 50%;
        height: 75%;
        margin-left: 5%;
        margin-top: 5%;
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
