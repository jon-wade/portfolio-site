//main body goes here
$(document).ready(function () {

    $('div#betfriend').click(function() {window.open('https://github.com/jon-wade/betfriend-mean', '_blank');});

    $('div#betfriend').on('mouseover', function() {
        $(this).css('background-color', 'rgba(0,255,255,0.5)');
    });

    $('div#betfriend').on('mouseout', function() {
        $(this).css('background-color', 'rgba(255, 0, 0, 0.5)');
    });

    $('div#incite').click(function() {window.open('https://github.com/jon-wade/guardian-api', '_blank');});

    $('div#incite').on('mouseover', function() {
        $(this).css('background-color', 'rgba(255,0,255,0.5)');
    });

    $('div#incite').on('mouseout', function() {
        $(this).css('background-color', 'rgba(0, 255, 0, 0.5)');
    });

    $('div#vault').click(function() {window.open('https://github.com/jon-wade/pw-vault', '_blank');});

    $('div#vault').on('mouseover', function() {
        $(this).css('background-color', 'rgba(255,255,0,0.5)');
    });

    $('div#vault').on('mouseout', function() {
        $(this).css('background-color', 'rgba(0, 0, 255, 0.5)');
    });

    $('img#info').on('click', function(event) {
        event.preventDefault();
        $('div#betfriend').attr('class', 'case');
        $('div#incite').attr('class', 'case');
        $('div#vault').attr('class', 'case');
        setTimeout(function() {window.location = './info.html';}, 150);
    });

    setTimeout(function() {
        $('div#betfriend').attr('class', 'case appear');
    }, 1000);

    setTimeout(function() {
        $('div#incite').attr('class', 'case appear');
    }, 2000);

    setTimeout(function() {
        $('div#vault').attr('class', 'case appear');
    }, 1500);

});



