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
Order.prototype.displayOrder = function(newNew){
  console.log(newNew)
  // this.pizzas.forEach(function(pizza){
  //   console.log(pizza)
    $("#toppings").append("<li>" + newNew + "</li>");
  //   console.log(pizza.toppings)
  //   console.log(pizza.size)
  //   })

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
    console.log(newOrder.displayOrder())
  });
  $("#clearButton").click(function(event){
    newOrder = new Order();
    $("#totalPrice").text(" ")
  });
});
