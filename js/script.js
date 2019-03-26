/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
******************************************/


//Set focus on first text field when page loads
$(document).ready(function() {
    $('form:first *:input[type!=hidden]:first').focus();
});

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
//Select activities section
const $activities = $('.activities');
let $sum = 0;

//Array of activities containing their info
let $allActivities = [
  {
    name: $('all'),
    time: '',
    cost: 200
  },
  {
    name: $('js-frameworks'),
    time: 'Tuesday 9am-12pm',
    cost: 100
  },
  {
    name: $('js-libs'),
    time: 'Tuesday 1pm-4pm',
    cost: 100
  },
  {
    name: $('express'),
    time: 'Tuesday 9am-12pm',
    cost: 100
  },
  {
    name: $('node'),
    time: 'Tuesday 1pm-4pm, $100',
    cost: 100
  },
  {
    name: $('build-tools'),
    time: 'Wednesday 9am-12pm',
    cost: 100
  },
  {
    name: $('npm'),
    time: 'Wednesday 1pm-4pm',
    cost: 100
  }
];



//Select checkboxes and add total cost
$(':checkbox').change(function() {
    $(':checkbox:checked').each(function() {
      if ($('input[name="all"]').is(':checked')) {
        $sum += 100;
      }
    });
    $total.show($sum);
});

//Creates a header to hold activities total
const $total = $('<h4>Total: ' + '$' +  $sum + '</h4>');
//Append it to activities section
$activities.append($total);
//Hide total on page load
$total.hide();
