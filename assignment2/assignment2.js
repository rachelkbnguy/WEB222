/********************************************************************************* 
* WEB222 – Assignment 02 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students. 
* 
* Name: __KHAI BINH NGUY______ Student ID: __126463165_________ Date: _06/07/2017_____
* ********************************************************************************/
/**********************************
 *          ALL DATA              *
 *  write your CustomerDB Object  *
 *      BELOW this Object         *
 **********************************/

var allData = [
    {type:"store", data:{store_id: 297, name: "Scotiabank - Main Branch", address_id: 1023}},
    {type:"store", data:{store_id: 614, name: "Scotiabank - Hamilton", address_id: 1984}},
    {type:"store", data:{store_id: 193, name: "Scotiabank - Mississauga", address_id: 1757}},
    {type:"customer", data:{customer_id: 26, store_id:297, first_name: "Dave", last_name: "Bennett", email: "dbennett@gmail.com", address_id: 4536, add_date: null}},
    {type:"customer", data:{customer_id: 59, store_id:193, first_name: "John", last_name: "Stevens", email: "jstevens22@hotmail.com", address_id: 2473, add_date: null}},
    {type:"customer", data:{customer_id: 29, store_id:614, first_name: "Sarah", last_name: "Pym", email: "spym99@hotmail.com", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 63, store_id:297, first_name: "Steven", last_name: "Edwards", email: "steven2231@hotmail.com", address_id: 1836, add_date: null}},
    {type:"customer", data:{customer_id: 71, store_id:614, first_name: "Martin", last_name: "Scott", email: "mdog33@gmail.com", address_id: 2727, add_date: null}},
    {type:"customer", data:{customer_id: 24, store_id:614, first_name: "Jonathan", last_name: "Pym", email: "jjpym@yahoo.ca", address_id: 1611, add_date: null}},
    {type:"customer", data:{customer_id: 36, store_id:193, first_name: "Kaitlyn", last_name: "Adams", email: "katy38@hotmail.com", address_id: 5464, add_date: null}},
    {type:"customer", data:{customer_id: 73, store_id:297, first_name: "Melissa", last_name: "Bennett", email: "mbennett@gmail.com", address_id: 4536, add_date: null}},         
    {type:"address", data:{address_id: 1023, address: "2895 Yonge St.", city:"Toronto", province:"ON", postal_code:"L4C02G"}},
    {type:"address", data:{address_id: 1984, address: "3611 Main St. West", city:"Hamilton", province:"ON", postal_code:"R5O8H5"}},
    {type:"address", data:{address_id: 1757, address: "1177 Ontario St. Unit 8", city:"Mississauga", province:"ON", postal_code:"L9H6B3"}},
    {type:"address", data:{address_id: 4536, address: "3945 John St.", city: "Ajax", province: "ON", postal_code: "L7M4T9"}},
    {type:"address", data:{address_id: 2473, address: "391 Baker St. Apt 231", city: "Mississauga", province: "ON", postal_code: "M4T8S3"}},
    {type:"address", data:{address_id: 1611, address: "183 City Ct.", city: "Hamilton", province: "ON", postal_code: "J3T9V2"}},
    {type:"address", data:{address_id: 1836, address: "67 Rhymer Ave.", city: "Stouffville", province: "ON", postal_code: "L3C8H4"}},
    {type:"address", data:{address_id: 2727, address: "287 Brant St. Apt 4A", city: "Waterdown", province: "ON", postal_code: "R93G3P"}},
    {type:"address", data:{address_id: 5464, address: "11 New St. Apt 2B", city: "Brampton", province: "ON", postal_code: "L694R7"}},
];




 /*  Write your CustomerDB Object Here.  Do not forget to uncomment the "TEST DATA" section
     when you're ready.  Your code is required to run against these tests before you submit */

var CustomerDB = {
    customers:[],
    addresses:[],
    stores:[],
    insertData: function(dataObj) {
  for (var i =0; i<dataObj.length;i++){
   switch(dataObj[i].type){
    case "customer":
      this.addCustomer(Object.create(dataObj[i].data));
      break;
    case "store":
      this.addStore(Object.create(dataObj[i].data));
      break;
    case "address":
      this.addAddress(Object.create(dataObj[i].data));
      break;
    }
   }
  },

/***************************************
*            CUSTOMER METHODS          *
***************************************/

addCustomer: function(customerObj){
  customerObj.add_date = new Date();
  this.customers.push(customerObj);
},
outputCustomerById: function(customer_id){
  for(var i=0;i<this.customers.length;i++){
    if(this.customers[i].customer_id == customer_id){
    console.log("Customer "+this.customers[i].customer_id+": "+this.customers[i].first_name+" "+this.customers[i].last_name+" ( "+this.customers[i].email+")\n"
    +"Home Address: "+this.getAddressById(this.customers[i].address_id)
    +"Joined: " +this.customers[i].add_date+"\n\n");
   }
  }
},
outputAllCustomers: function( ){
     console.log("All Customers\n\n");
  for(var i=0;i<this.customers.length;i++){
  this.outputCustomerById(this.customers[i].customer_id);
  }
},
outputCustomersByStore: function(store_id){
  for(var i=0;i<this.stores.length;i++){
    if(this.stores[i].store_id==store_id){
  console.log("Customers in store: "+this.stores[i].name+"\n\n");
    }
  }
  for(var i=0;i<this.stores.length;i++){
  this.outputCustomerById(this.customers[i].customer_id);
  }
},

removeCustomerById: function(customer_id){
  var remove_address_id = -1;
  for (var i=0; i<this.customers.length; i++){
    if(this.customers[i].customer_id == customer_id){
      remove_address_id= this.customers[i].address_id;
      this.customers.splice(i,1);
    }
  } 
  this.removeAddressById(remove_address_id);
},
/***************************************
*            ADDRESS METHODS          *
***************************************/
addAddress: function(addressObj){
  this.addresses.push(addressObj);
},
getAddressById: function(address_id){
  var address;
  for(var i=0;i<this.addresses.length;i++){
    if(this.addresses[i].address_id == address_id){
     address= this.addresses[i].address+" "+this.addresses[i].city+", "+this.addresses[i].province+". "+this.addresses[i].postal_code+"\n";
    }
  }
  return address;
},
outputAllAddresses: function(){
   console.log("All Addresses\n\n");
  for(var i=0;i<this.addresses.length;i++){
    console.log("Address "+this.addresses[i].address_id+": "+this.addresses[i].address+" "+this.addresses[i].city+", "+this.addresses[i].province+". "+this.addresses[i].postal_code+"\n")
  }
},
removeAddressById: function(address_id){
  var countCst=0;
  var countStr=0;
  for(var i=0;i<this.customers.length;i++){
    if(this.customers[i].address_id==address_id){
      countCst++;
    }
  }
  for(var i=0;i<this.stores.length;i++){
    if(this.stores[i].address_id==address_id){
      countStr++;
    }
  }
    if(countCst==0 && countStr==0){
     for(var i=0;i<this.addresses.length;i++){
    if(this.addresses[i].address_id == address_id) {
      this.addresses.splice(i,1);
    }
   }
  }
},
/***************************************
*            STORE METHODS          *
***************************************/
addStore: function(storeObj){
  this.stores.push(storeObj);
},
getStoreById: function(store_id){
  var bank;
  for(var i=0;i<this.stores.length;i++){
    if(this.stores[i].store_id==store_id){
     bank = this.stores[i].name;
    }
  }
  return bank;
},
outputAllStores: function(){
  console.log("All Stores\n\n");
   for(var i=0;i<this.stores.length;i++){
     console.log("Store "+this.stores[i].store_id+": "+this.stores[i].name+"\n"
     +"Location: "+ this.getAddressById(this.addresses[i].address_id)+"\n");
   }
}
};
/**********************************
 *          TEST DATA             *
 *  write your CustomerDB Object  *
 *      ABOVE this code           *
 *                                *
 *  Uncomment this block of code  *
 *  when you're ready to test     *
 *  your CustomerDB Object        *
 *                                *
 *  You MUST Hand in your code    *
 *  with the test data            *
 *  uncommented, as this will     *
 *  help check your code for      *
 *  correctness                   *
 **********************************/



// Insert all Data into the Database

CustomerDB.insertData(allData);

// output all customers

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");


// output all addresses

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 

// output all stores

console.log("CustomerDB.outputAllStores();\n\n--------------------------\n\n");
CustomerDB.outputAllStores();
console.log("--------------------------\n\n"); 

// output all customers in the "Main Branch"

console.log("CustomerDB.outputCustomersByStore(297);\n\n--------------------------\n\n");
CustomerDB.outputCustomersByStore(297);
console.log("--------------------------\n\n"); 

// remove Customer Dave Bennett (customer_id 26) and Martin Scott (customer_id 71)

console.log("CustomerDB.removeCustomerById(26);\nCustomerDB.removeCustomerById(71);\n\n");
CustomerDB.removeCustomerById(26);
CustomerDB.removeCustomerById(71);
console.log("--------------------------\n\n"); 

// output all customers again
// NOTE: Dave Bennett and Martin Scott should be missing

console.log("CustomerDB.outputAllCustomers();\n\n--------------------------\n\n");
CustomerDB.outputAllCustomers();
console.log("--------------------------\n\n");

// output all addresses again
// NOTE: only addrss 287 Brant St. Apt 4A Waterdown, ON. R93G3P should be missing

console.log("CustomerDB.outputAllAddresses();\n\n--------------------------\n\n");
CustomerDB.outputAllAddresses();
console.log("--------------------------\n\n"); 



/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/1:159
*/
/*
Exception: ReferenceError: invalid assignment left-hand side
@Scratchpad/1:159
*/