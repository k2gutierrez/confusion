let myCarouselElement = document.querySelector('#mycarousel');
let carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 1000,
    pause: true
});
$("#carouselButton").on('click', function (e) {
    e.preventDefault();
    if ($('#carouselButton').children('span').hasClass('fa-pause')){
        $("#mycarousel").carousel("pause");
        $('#carouselButton').children('span').removeClass('fa-pause');
        $('#carouselButton').children('span').addClass('fa-play');
    }
    else if ($('#carouselButton').children('span').hasClass('fa-play')){
        $("#mycarousel").carousel("cycle");
        $('#carouselButton').children('span').removeClass('fa-play');
        $('#carouselButton').children('span').addClass('fa-pause');
    }            
});
$("#login").on('click', function (e) {
    e.preventDefault();
    $('#loginModal').modal('show')
});
$("#reserveButton").on('click', function (e) {
    e.preventDefault();
    $('#reserveModal').modal('show')
});