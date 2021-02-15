---
---
((function () {
  var url = "{{site.api_url}}";
  // var url = "http://localhost:8080/api/sendemail";

  var sending = false;
  console.log(url);

  function sendEmail(subjectVal, emailVal, messageVal) {
    sending = true;
    var data = {
      subject: subjectVal,
      email: emailVal,
      text: messageVal,
    };
    return fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status && res.status !== 200) throw response.statusCode;
        return res.json();
      })
      .then((response) => {
        sending = false;
        $("#contact-btn").empty();
        $("#contact-btn").text("Contact Us");
        $(".alert-success").show();
      })
      .catch((error) => {
        sending = false;
        $(".alert-danger").show();
        $(".alert-danger").text("En error occurred. Please try again");
        // console.error("Error:", error);
        $("#contact-btn").empty();
        $("#contact-btn").text("Contact Us");
      });
  }

  $("#contact-btn").click(function (event) {
    $(".alert-danger").hide();
    $(event.target).empty();
    $(event.target).append("<i class='fa fa-spinner fa-spin'></i>");
    event.preventDefault();
    // console.log('clicked', $('#subject').val(), $('#email').val(), $('#message').val());
    if (
      $("#subject").val() === "" ||
      $("#email").val() === "" ||
      $("#message").val() === ""
    ) {
      $("#contact-btn").empty();
      $("#contact-btn").text("Send Email");
      $(".alert-danger").show();
      return;
    }
    if (!sending)
      sendEmail($("#subject").val(), $("#email").val(), $("#message").val());
  });

  $(".close").click(function (event) {
    if ($(event.target).has(".alert-danger")) $(".alert-danger").hide();
    if ($(event.target).has(".alert-success")) $(".alert-success").hide();
  });
})());
