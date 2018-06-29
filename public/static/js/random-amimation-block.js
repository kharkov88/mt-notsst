$(document).ready(function () {
  jQuery.fn.random = function () {
    var randomIndex = Math.floor(Math.random() * this.length)
    return jQuery(this[randomIndex])
  }
  var $post = $('.effect-chico')
  setInterval(function () {
    $post.removeClass('active-animation')
    $post.random().toggleClass('active-animation')
  }, 4000)
})
