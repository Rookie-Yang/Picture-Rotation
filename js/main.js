var allButtons = $('#buttons > span')
for(let i =0;i<allButtons.length;i++){
  $(allButtons[i]).on('click',function(x){
    var index = $(x.currentTarget).index()
    var px = index * -400
    $('#images').css({
      'transform':'translate(' + px +'px)'
    })
    n=index
    activeButton(allButtons.eq(n))
  })
}
var n =0
var timerId=setTimer()
palySlide(n)

function activeButton($button){
  $button.addClass('red')
.siblings('.red').removeClass('red')
}

function palySlide(index){
  allButtons.eq(index).trigger('click')
}

function setTimer(){
  return setInterval(()=>{
    n++
    n%=allButtons.length
    palySlide(n)
    },1000)
}

$('.window').on('mouseenter',function(){
  window.clearInterval(timerId)
})

$('.window').on('mouseleave',function(){
  timerId=setTimer()
})