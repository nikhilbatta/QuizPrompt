function Pizza(toppings,size){
  this.toppings = toppings,
  this.size = size,
  this.baseprice = 4;
}
Pizza.prototype.getToppingCount = function() {
  return this.toppings.length;
}
Pizza.prototype.getOnePizzaPrice = function(){
  var pizzaPrice = this.baseprice + this.getToppingCount() + this.size
  return pizzaPrice;
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
Order.prototype.displayOrder = function(){
  var order;
  this.pizzas.forEach(function(pizza){
    $("#totalPrice").text(pizza.toppings)
    console.log(pizza.toppings)
    console.log(pizza.size)
    console.log(pizza.getOnePizzaPrice())
  })
  console.log(order)
  return order;
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
    console.log(toppingArray)
    var amountGrabber = $("#amount").val(); //user inputted value
    //user inputted check
    var sizeGrabber = parseInt($("#size").val());// same thing
    var newPizza = new Pizza(toppingArray,sizeGrabber)
    newOrder.addPizzas(newPizza)
    newOrder.displayOrder();
    console.log(newOrder.displayOrder())
  });
  $("#clearButton").click(function(event){
    newOrder = new Order();
    $("#totalPrice").text(" ")
  });
});
