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
function Order(){
  this.pizzas = [];
  console.log(this.pizzas)
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
Order.prototype.displayOrder = function(newPizza){
$("#toppings").append("<li>" + newPizza.toppings + "</li>");
$("#size2").append("<li>" + newOrder.orderTotal() + "</li>");
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
    var amountGrabber = parseInt($("#amount").val()); //user inputted value
    //user inputted check
    var sizeGrabber = parseInt($("#size").val());// same thing
    var newPizza = new Pizza(toppingArray,sizeGrabber)
    newOrder.addPizzas(newPizza)
    newOrder.displayOrder(newPizza);
    // console.log(newOrder.displayOrder())
  });
  $("#clearButton").click(function(event){
    newOrder = new Order();
    $("#totalPrice").text(" ")
  });
});
