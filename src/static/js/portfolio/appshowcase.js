var AppShowcase = function (elem) {
  console.log(elem)
  var $el = $(elem),
    // device element
    $device = $el.find('.ac-device'),
    // the device image wrapper
    $trigger = $device.children('a:first'),
    // the device screen image
    $screenImg = $device.find('img').css('transition', 'all 0.5s ease'),
    // csstransitions support
    support = Modernizr.csstransitions,
    // transition end event name
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    // HTML Body element
    $body = $('body')

  function init () {
    // show grid
    $trigger.on('click', showGrid)
  }

  function showGrid () {
    $el.addClass('ac-gridview')
    // clicking somewhere else on the page closes the grid view
    $body.off('click').on('click', function () {
      showScreen()
    })
    return false
  }

  return {
    init: init
  }
}
