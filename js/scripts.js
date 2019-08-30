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
  this.orderTotal = function(){
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
function displayOrder(alldata){
  // this.data = alldata
return $("#formOne").append("<h1>" + alldata + "</h1>")
}
var newOrder = new Order();
$(document).ready(function(){
  $("#formOne").submit(function(event){
  event.preventDefault();
  var toppingArray = [];
  $(".toppings[name='topping']:checked").each(function(){
    toppingArray.push($(this).val())
    ;}
  );
  console.log(toppingArray)
  // $('.toppings').each(function(topping) {
  //   console.log(topping)
  //   if ($(topping).is(':checked')){
  //     console.log(topping)
  //   }
  //  });
   console.log(toppingArray)
  var amountGrabber = $("#amount").val(); //user inputted value
  //user inputted check
  var sizeGrabber = parseInt($("#size").val());// same thing
  var newPizza = new Pizza(toppingArray,sizeGrabber)
  newOrder.addPizzas(newPizza)
  console.log(newOrder)
  displayOrder(order.pizza.toppings)
});
$("#clearButton").click(function(event){
  newOrder = new Order();
});
});
