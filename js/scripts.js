function Pizza(amount,toppings,size){
  this.amount = ammount,
  this.toppings = toppings,
  this.size = size
}
// Pizza.prototype.addUpPrice = function(){
//   this.price = //amount of topings value plus amount of pizza
//   // amount of toppings + amountofpizza times baseprice + size
// }
function Customer (){
  this.price = 0;
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
  var amountGrabber = $("#amount").val() //user inputted value
  var toppingGrabber = $("input[type='checkbox']").val();//user inputted check
  var sizeGrabber = $("#size").val()// same thing
  console.log(amountGrabber)
  console.log(toppingGrabber)
  console.log(sizeGrabber)
  var newCustomer = new Customer()
});
});
