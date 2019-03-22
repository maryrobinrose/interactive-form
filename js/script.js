const $otherTitle = $('#other-title');

//Set focus on first text field when page loads
$(document).ready(function() {
    $('form:first *:input[type!=hidden]:first').focus();
});

/*”Job Role” section

Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
Note: You'll need to add the "Other" job role input directly into the HTML and hide it initially with JS in order to get this feature to work when JS is disabled, which is a requirement below.*/

//Hides #other-title text field initially
$otherTitle.hide();

//Show #other-title text field when "Other" is clicked
$('#title').change(function() {
  if ($(this).val() === 'other') {
      $otherTitle.show();
    } else {
      $otherTitle.hide();
    }
});


console.log('hi');
