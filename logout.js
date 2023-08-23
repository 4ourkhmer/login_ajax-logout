$(document).ready(function () {
  $("#logout").click(function (event) {
    event.preventDefault(); // Prevent the default behavior of the button click event
    $.ajax({
      url: "logout.php",
      method: "POST",
      success: function (data) {
        if (!data) {
          // Redirect the user to the home page
          $("body").load("index.php").hide().fadeIn(0);
        } else {
          var options = {
            distance: "40",
            direction: "left",
            times: "3",
          };
          $("#box").effect("shake", options, 800);
          $("#error").html(
            "<span class='text-danger'>Invalid username or Password</span>"
          );
        }
      },
    });
  });
});
