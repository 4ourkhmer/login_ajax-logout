$(document).ready(function () {
  $("#logout").click(function (event) {
    event.preventDefault(); // Prevent the default behavior of the button click event
    $.ajax({
      url: "logout.php",
      method: "POST",
      success: function (data) {
        if (!data) {
          window.history.pushState("", "", "index.php");
          $("body").load("index.php").hide().fadeIn(1500);
        } else {
          var options = {
            distance: "40",
            direction: "left",
            times: "3",
          };
          $("#box").effect("shake", options, 800);
          $("#error").html(
            "&#60;span class='text-danger'&#62;Invalid username or Password&#60;/span&#62;"
          );
        }
      },
    });
  });
});
