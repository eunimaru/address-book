//business logic
function Contact(first, last, address) {
  this.firstName = first;
  this.lastName = last;
  this.address1 = address;
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " " + this.address1;
}
// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedaddress= $("input#new-address").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedaddress);

     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.firstName);
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".address").text(newContact.address1);
});

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#newaddress").val("");
  });
});
