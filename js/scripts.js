//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.address1 = [];
}
function Address(street, city, state){
  this.street= street;
  this.city = city;
  this.state = state;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " " + this.address1[0];
}
// user interface logic
$(document).ready(function() {
  $("#add-address").click(function() {
      $("#new-address1").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedaddress= $("input#new-address1").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedaddress);
    //var lisa = new Contact("Lisa", "Simpson");
    //var home = new Address("742 Evergreen Terrace", "Springfield", "Oregon");
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
    newContact.address1.push(newAddress);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#address1").text("");
    newContact.address1.forEach(function(address){
      $("ul#address1").append("<li>"+address.street + "," + address.city + " " +address.state +"</li>");
      });
    });
    // $(".address").text(newContact.address1);
});
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
  });
});
