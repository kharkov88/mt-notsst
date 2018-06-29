$(document).ready(function () {
  $(function () {
    var HTMLcollection = document.querySelectorAll('.ac-wrapper')
    HTMLcollection.forEach(function (item) {
      AppShowcase(item).init()
    })
  })

  $(function ($) {
    $(function () {
      $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
        $('.next-btn, .prev-btn').removeClass('active')
        openAnimatedBlock()
      })
    })
  })

  $('.next-btn, .prev-btn').click(function () {
    $a = $('ul.tabs__caption li.active')
    $b = $('ul.tabs__caption li:not(.active)')
    $x = $(this).hasClass('prev-btn') ? $a.prev() : $a.next()
    if ($x.length > 0) {
      $x.add($a).toggleClass('active')
      $('div.tabs').find('div.tabs__content').removeClass('active').eq($('ul.tabs__caption li.active').index()).addClass('active')
      $('.next-btn, .prev-btn').removeClass('active')
      openAnimatedBlock()
    }
  })

  function openAnimatedBlock () {
    $('div.tabs__content.active').removeClass('ac-gridview')
    setTimeout(function () {
      $('div.tabs__content.active').addClass('ac-gridview')
      showTabNavigation()
    }, 1000)
  };

  function showTabNavigation () {
    $('.next-btn, .prev-btn').removeClass('active')
    $('.next-btn, .prev-btn').addClass('active')
  };

  setTimeout(function () {
    $('.ac-wrapper.active').addClass('ac-gridview')
    showTabNavigation()
  }, 1000)
})
