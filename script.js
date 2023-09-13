$(document).ready(function () {
  $("#login").click(function () {
    var username = $("#username").val();
    var password = $("#password").val();
    if ($.trim(username).length > 0 && $.trim(password).length > 0) {
      $.ajax({
        url: "login.php",
        method: "POST",
        data: {
          username: username,
          password: password,
        },
        cache: false,
        beforeSend: function () {
          $("#login").val("connecting...");
        },
        success: function (data) {
          if (data) {
            window.history.pushState("", "", "home.php");
            $("body").load("home.php").hide().fadeIn(1500);
          } else {
            var options = {
              distance: "40",
              direction: "left",
              times: "3",
            };
            $("#box").effect("shake", options, 800);
            $("#login").val("Login");
            $("#error").html(
              "&#60;span class='text-danger'&#62;Invalid username or Password&#60;/span&#62;"
            );
          }
        },
      });
    } else {
    }
  });
});
