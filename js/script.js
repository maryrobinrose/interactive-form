/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/


//Set focus on first text field when page loads
$('#name').focus();


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

//If JavaScript Frameworks Workshop is checked, add 100 to sum
/*$('input[name="js-frameworks"]').change(function () {
  if($(this).prop('checked')) {
    $sum += 100;
    console.log($sum);
  } else if ($(this).prop('checked', false)) {
    $sum -= 100;
  }
});*/

//if .js-libs is checked

//if .express is checked

//if .node is checked

//if .build-tools is checked

//if .npm is checked















/*//When a checkbox is clicked
$('input:checkbox').on('change', function () {
  if ($(this).is(':checked')) {
    //Show the h4 heading
    $total.show();
    //Add the value of each clicked checkbox
    $sum += +this.value;
    //Change string to a number and add it to the h4
    $('.textTotal').html(parseInt($sum));
  } else if ($('input:checkbox')) {
    //Subtract value when checkbox is unclicked
    $sum -= +this.value;
    $('.textTotal').html(parseInt($sum));
  }
});*/
