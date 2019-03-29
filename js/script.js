/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/

//Global variables
const $name = $('#name');

//Set focus on first text field when page loads
$('#name').focus();

//*** Create error message ***//
/*<div>
		<label for="contact_message">Message:</label>
		<textarea id="contact_message" name="message"></textarea>
		<span class="error">This field is required</span>
	</div>*/

//*** Job Role ***//
//Selects "Other" job title from list
const $otherTitle = $('#other-title');
//Hides otherTitle text field when page loads
$otherTitle.hide();

//Show otherTitle text field when "Other" is selected, hide when unselected
$('#title').change(function() {
  if ($(this).val() === 'other') {
      $otherTitle.show();
    } else {
      $otherTitle.hide();
    }
});

//*** T-Shirt Info ***//
//Hides color options on page load
$('#colors-js-puns').hide();

//Shows color options that match design selection
$('#design').change(function() {
  if (this.value == 'js puns') {
    $('#colors-js-puns').show();

    $('#color option[value="cornflowerblue"]').attr('selected', true).attr('hidden', false);
    $('#color option[value="darkslategrey"]').attr('selected', true).attr('hidden', false);
    $('#color option[value="gold"]').attr('selected', true).attr('hidden', false);

    $('#color option[value="tomato"]').attr('selected', false).attr('hidden', true);
    $('#color option[value="steelblue"]').attr('selected', false).attr('hidden', true);
    $('#color option[value="dimgrey"]').attr('selected', false).attr('hidden', true);

  } else if (this.value == 'heart js') {
    $('#colors-js-puns').show();

    $('#color option[value="cornflowerblue"]').attr('selected', false).attr('hidden', true);
    $('#color option[value="darkslategrey"]').attr('selected', false).attr('hidden', true);
    $('#color option[value="gold"]').attr('selected', false).attr('hidden', true);

    $('#color option[value="tomato"]').attr('selected', true).attr('hidden', false);
    $('#color option[value="steelblue"]').attr('selected', true).attr('hidden', false);
    $('#color option[value="dimgrey"]').attr('selected', true).attr('hidden', false);

  } else {
    $('#colors-js-puns').hide();
  }
});

//*** Register for Activities ***//
//Starting sum
let $sum = 0;
//Selects activities section by class
let $activities = $(".activities");
//Creates a header to hold activities total
const $total = document.createElement("div");
$($activities).append($total);

//If Main Conference is checked, add 200 to sum
$('input[name="all"]').change(function (event) {
  if($(event.target).is(':checked')) {
    $sum += 200;
  } else {
    $sum -= 200;
  }
  $total.innerHTML = 'Total: $' + $sum;
});

//Create variables for conflicting checkboxes
const jsFrameworks = $("input[name ='js-frameworks']");
const jsLibrary = $("input[name ='js-libs']");
const express = $("input[name ='express']");
const node = $("input[name ='node']");

//If JavaScript Frameworks Workshop is checked
$('input[name="js-frameworks"]').change(function (event) {
  if($(event.target).is(':checked')) {
    $sum += 100;
    express.prop('disabled', true).parent().css("color", "darkgray");
  } else {
    $sum -= 100;
    express.prop('disabled', false).parent().css("color", "black");
  }
  $total.innerHTML = 'Total: $' + $sum;
});

//If JavaScript Libraries Workshop is checked
$('input[name="js-libs"]').change(function (event) {
  if($(event.target).is(':checked')) {
    $sum += 100;
    node.prop('disabled', true).parent().css("color", "darkgray");
  } else {
    $sum -= 100;
    node.prop('disabled', false).parent().css("color", "black");
  }
  $total.innerHTML = 'Total: $' + $sum;
});

//If Express Workshop is checked
$('input[name="express"]').change(function (event) {
  if($(event.target).is(':checked')) {
    $sum += 100;
    jsFrameworks.prop('disabled', true).parent().css("color", "darkgray");
  } else {
    $sum -= 100;
    jsFrameworks.prop('disabled', false).parent().css("color", "black");
  }
  $total.innerHTML = 'Total: $' + $sum;
});

//If Node.js Workshop is checked
$('input[name="node"]').change(function (event) {
  if($(event.target).is(':checked')) {
    $sum += 100;
    jsLibrary .prop('disabled', true).parent().css("color", "darkgray");
  } else {
    $sum -= 100;
    jsLibrary .prop('disabled', false).parent().css("color", "black");
  }
  $total.innerHTML = 'Total: $' + $sum;
});

//If Build tools Workshop is checked
$('input[name="build-tools"]').change(function (event) {
  if($(event.target).is(':checked')) {
    $sum += 100;
  } else {
    $sum -= 100;
  }
  $total.innerHTML = 'Total: $' + $sum;
});

//If npm Workshop is checked
$('input[name="npm"]').change(function (event) {
  if($(event.target).is(':checked')) {
    $sum += 100;
  } else {
    $sum -= 100;
  }
  $total.innerHTML = 'Total: $' + $sum;
});

//*** Payment Info ***//
//Create variables
const $payment = $('#payment');
const $creditCard = $('#credit-card');
const $ccNumber = $('#cc-num');
const $zipCode = $('#zip');
const $ccv = $('#ccv');
const $expMonth = $('#exp-month');
const $expYear = $('#exp-year');
const $payPal = $("fieldset div p")[0];
const $bitCoin = $("fieldset div p")[1];

//Hide PayPal and Bitcoin on page load
$($payPal).hide();
$($bitCoin).hide();

//Default select Credit Card option
$($payment).val('credit card');
//Disable Select Method payment
$('#payment option[value="select_method"]').attr('disabled',"disabled");

//Show correct option when selected
$($payment).change(function() {
  if (this.value == 'credit card') {
    $($creditCard).show();
    $($payPal).hide();
    $($bitCoin).hide();
  } else if (this.value == 'paypal') {
    $($creditCard).hide();
    $($payPal).show();
    $($bitCoin).hide();
  } else if (this.value == 'bitcoin'){
    $($creditCard).hide();
    $($payPal).hide();
    $($bitCoin).show();
  }
});


//Name field isn't blank
$('#name').on('input', function() {
	let input = $(this);
	let isName = input.val();
	if(isName) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

//Email is valid
$('#mail').on('input', function() {
	let input = $(this);
	let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let isEmail = regEmail.test(input.val());
	if(isEmail) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

//At least one checkbox is selected
const activityCheck = document.createElement("div");
$("input:checkbox").on("click", activityValidation);
  function activityValidation() {
    let checks = $("input:checked").length;
      if (checks === 0) {
        $($activities).prepend(activityCheck);
        activityCheck.innerText = 'Please select at least one activity.';
      } else {
          activityCheck.innerText = '';
      }
    }

//Credit card info is valid
//Cred card between 13 and 16 digits
$('#cc-num').on('input', function() {
	let input = $(this);
	let regCard = /^[0-9]{13,16}$/;
	let isCard = regCard.test(input.val());
	if(isCard) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

//Zip code is 5 digits
$('#zip').on('input', function() {
	let input = $(this);
	let regZip = /^[0-9]{5}$/;
	let isZip = regZip.test(input.val());
	if(isZip) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

//CVV is 3 digits
$('#cvv').on('input', function() {
	let input = $(this);
	let regCVV = /^[0-9]{3}$/;
	let isCVV = regCVV.test(input.val());
	if(isCVV) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});

//Submit button is disabled on page load
const $submitButton = $(':button');
$($submitButton).prop('disabled', true);

//Submit button becomes available when form is fully valid
//if all forms are filled out
  $(":button").prop('disabled', false);

console.log('hi');
