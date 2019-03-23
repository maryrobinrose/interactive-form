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

/*”T-Shirt Info” section

For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.

here are two great properties that are helpful for manipulating those option tags.  When you want to choose which option tag shows in the `select` element, you can use the handy setAttribute method to give it the `selected` attribute, and set it to true.  And when you want to hide an option tag, you can give it the `hidden` attribute, set to true.  And then when you want to show that one again, you just use removeAttribute to drop the `hidden` attribute.*/

$('#colors-js-puns').hide();

$('#design').change(function() {
  if ( this.value == 'js puns') {
    $("#cornflowerblue").show();
  }
});




console.log('hi');
