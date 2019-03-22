const $otherTitle = $('#other-title');

//Set focus on first text field when page loads
$(document).ready(function() {
    $('form:first *:input[type!=hidden]:first').focus();
});

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


console.log('hi');
