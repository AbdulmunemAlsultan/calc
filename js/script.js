function math(val) {
    document.getElementById('display').value += val;
    document.getElementById('display').style.transition = "2s";
    document.getElementById('display').style.backgroundColor = "#b3b6b7";
}

function AC() {
    document.getElementById('display').value = ' ';
    document.getElementById('display').style.backgroundColor = "#5d6d7e";
}

function equal() {
    var result = document.getElementById("display").value;
    if (result) {
        document.getElementById("display").value += ` = ${eval(result)}`;
    }
}

$("img").click(function() {
    $('.box:visible').hide(1000);
    $('.box:visible').show(1000);
    $('#next:visible').hide();
    $('.button').css({
        'color': 'white',

    });

    $('.box').css(

        {
            'border': '2px solid white',

        });

    $('.box24').css({
        'grid-column': '4/4',
        'grid-row': '3/3',
        'background': 'darkgray ', // =
    });

    $('.box9').css({
        'grid-column': '4/4',
        'grid-row': '7/7',
        'background': '#2874a6 ' //  /
    });

    $('.box8').css({
        'grid-column': '4/4',
        'grid-row': '8/8',
        'background': ' #2874a6 ' // (
    });


    $('.box6').css({
        'grid-column': '1/4',
        'grid-row': '3/3',
        'background': 'darkgray' // Ac
    });


    $('.box13').css({
        'grid-column': '4/5',
        'grid-row': '4/4',
        'background': '  #2874a6  ' // *
    });

    $('.box17').css({
        'grid-column': '4/4',
        'grid-row': '6/6',
        'background': ' #2874a6 ' //-
    });


    $('.box21').css({
        'grid-column': '4/4',
        'grid-row': '5/5',
        'background': '  #2874a6  ' // +
    });

    $('.box7').css({
        'grid-column': '3/4',
        'grid-row': '9/8',
        'background': '#2874a6 '
    });


    $('.box23').css({
        'grid-column': '1/3',
        'grid-row': '9/8',
        'background': '#2874a6 '
    });

    $('.box20').css({
        'grid-column': '3/3',
        'grid-row': '6/7',
        'background': ' #85c1e9 '
    });

    $('.box22').css({
        'grid-column': '1/4',
        'grid-row': '7/7',
        'background': ' #85c1e9 '
    });


    $('.box18, .box19,.box16, .box11 , .box12, .box14, .box15,.box10 ').css({
        'background': ' #85c1e9 '
    });

    $("#display").css({
        'background': 'none',
        'color': 'black'

    })

});

$('#list-items').click(function() {
    $('li').css({

        'display': 'block',
        'color': 'red',
        'padding': '0px 9px',
    });

});