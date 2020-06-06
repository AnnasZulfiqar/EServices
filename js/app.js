
$(document).ready(function () {
  if ($(window).width() < 877) {
    $(".slider h1").addClass("response");
    $('.contact-ref a').addClass("response-a");
  } else {
    $(".slider h1").removeClass("response");
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $("nav").removeClass("position-fixed").addClass("fixed-top");
    }
    if (scroll <= 10) {
      $("nav").removeClass("fixed-top").addClass("position-fixed");
    }
    if (scroll >= 200) {
      $("nav").addClass("change");
      // $(".nav-item").addClass("color");
    }
    if (scroll <= 200) {
      $("nav").removeClass("change");
      // $(".nav-item").addClass("color");
    }
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });

  $(".scroll-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 100);
    return false;
  });
  $(this).scrollTop(0);
});
$('.contact-ref a').removeClass("response-a");
$("input:not(.contact-no),textarea").focusin(function () {
  $(this).removeClass("error").parent().find("label").removeClass("error-label");
});
$("input:not(.contact-no),textarea").focusout(function () {
  if ($(this).val() == "") {
    // $(this).addClass("error");
    $(this).addClass("error").parent().find("label").addClass("error-label");
    $(".error-label h3").text("Fill that field")
  } else {
    $(this).removeClass("error").parent().find("label").removeClass("error-label");
  }
});
function validation() {
  if ($("input:not(.contact-no),textarea").val() == "") {
    $("input:not(.contact-no),textarea").addClass("error").parent().find("label").addClass("error-label");
    $(".error-label h3").text("Fill that field")
    return false;
  } else {
    $("input:not(.contact-no),textarea").removeClass("error").parent().find("label").removeClass("error-label");
    return true;
  }
}
$(document).on("submit", "form", function () {
  console.log(validation());
  if (validation()) {
    $.ajax({
      url: baseURL + "mail",
      type: "POST",
      data: $(this).serializeArray(),
      dataType: "json",
      success: function (r) {
        if (r.success) {
          $('input,textarea').val('');
          displayMessage('Mail has been sent');
        }
      }
    });
  }
  return false;
});
function displayMessage(message) {
  $(".result").html("<div class='success'>" + message + "</div>");
  setInterval(function () {
    $(".success").fadeOut();
  }, 1000);
}
// $(window).resize(function () {
  // }
// });
// $(document).on("click", "#submit", function () {
//     $.ajax({
//       url: baseURL + 'test',
//       method : 'post',
//       data : {"id":"001"},
//       dataType : 'json',
//       success:function(r){
//         if(r.success){
//           console.log('working');
//         }
//       }
//     });
// })
// });
			// $(document).on("submit","form",function(){

