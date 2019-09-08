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
Order.prototype.displayOrder = function(){
// $("#toppings").append("<li>" + newPizza.toppings + "</li>");
// $("#size2").append("<li>" + newOrder.orderTotal() + "</li>");
//clear the display
$("#pizzaOne").text("")
var orderString = "";
orderString += "<Table>"
this.pizzas.forEach(function(pizza){
  orderString += displayPizza(pizza)
})
orderString += getOrderSummaryString(this) ;

$("#pizzaOne").append(orderString)
}

function getOrderSummaryString(order)
{
  var summaryString = "<tr>"
  summaryString += "<td> Order Total: " + order.orderTotal() + "</td>"
  summaryString += "<td> Number of Pizzas: " + order.pizzas.length + "</td>"
  summaryString += "</tr>"
  return summaryString ;
}

function displayPizza(pizza){
  var pizzaString = "";
  pizzaString = pizzaString +  "<tr>"
  pizzaString = pizzaString +  "<td>Size: " + pizza.size + "</td>"
  pizzaString = pizzaString +   "<td>Toppings: " +  pizza.toppings + "</td>"
  pizzaString = pizzaString +  "<td>Price:$ " +  pizza.getOnePizzaPrice() + "</td>"
  pizzaString = pizzaString + "</tr>"
  return pizzaString;
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
    newOrder.displayOrder();

    // console.log(newOrder.displayOrder())
  });
  $("#clearButton").click(function(event){
    newOrder = new Order();
    $("#pizzaOne").text("")
  });
});
