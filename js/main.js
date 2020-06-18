$(() => {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 600) {
      $('.back-to-top').show();
    } else {
      $('.back-to-top').hide();
    }
  })

  $('.back-to-top').click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  })
})
