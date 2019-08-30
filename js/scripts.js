function Pizza(toppings,size){
  this.toppings = toppings,
  this.size = size,
  this.baseprice = 2;
}
Pizza.prototype.getToppingCount = function() {
  return this.toppings.length;
}
// Pizza.prototype.addOrders = function(){
//   this.items = []
// }
Pizza.prototype.getOnePizzaPrice = function(){
var pizzaPrice = this.baseprice + this.getToppingCount() + this.size
  return pizzaPrice; //amount of topings value plus amount of pizza
  // amount of toppings + amountofpizza times baseprice + size
}
function Order(amount){
  this.pizzas = [];
  this.OrderTotal = function(){
    var totalprice = 0;
    this.pizzas.forEach(function(pizza){
      totalprice += pizza.getOnePizzaPrice();
    })
    return totalprice;
  }
}

Order.prototype.addPizzas = function(pizza){
  this.pizzas.push(pizza)
}
function displayOrder(){

}
var newOrder = new Order();
$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
  var toppingArray = [];
  $('.toppings').each(function(topping) {
    console.log(topping)
    if ($(topping).is(':checked')){
      console.log(topping)
    }
   });
   console.log(toppingArray)
  var amountGrabber = $("#amount").val(); //user inputted value
  //user inputted check
  var sizeGrabber = $("#size").val();// same thing
  var newPizza = new Pizza(toppingArray,sizeGrabber)
  newOrder.addPizzas(newPizza)
  console.log(newOrder)
});
});
