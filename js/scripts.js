function Pizza(amount,toppings,size,totalprice){
  this.amount = amount,
  this.toppings = toppings,
  this.size = size,
  this.baseprice = 5;
  this.totalprice = totalprice;
}
Pizza.prototype.addUpPrice = function(){
  this.totalprice = (this.baseprice * this.amount) + this.toppings + this.size
  console.log(this.price) //amount of topings value plus amount of pizza
  // amount of toppings + amountofpizza times baseprice + size
}
function Customer (){
  this.price = 0;
}

$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
  var toppingGrabber = 0;
  $('.toppings:checked').each(function() {
       toppingGrabber+=1
   });
  var amountGrabber = parseInt($("#amount").val()); //user inputted value
  //user inputted check
  var sizeGrabber = parseInt($("#size").val());// same thing
  console.log(amountGrabber)
  console.log(toppingGrabber)
  console.log(sizeGrabber)
  var newCustomer = new Customer()
  var newPizza = new Pizza(amountGrabber,toppingGrabber,sizeGrabber,newCustomer)
  newPizza.addUpPrice();
  console.log(newPizza)
});
});
