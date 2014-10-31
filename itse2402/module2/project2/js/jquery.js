function changeBackground() {
    $(document).ready(function () {
        // Select British Pound
        $("#currency1").click(function () {
            britishBackground();
        });

        // Select Euro
        $("#currency2").click(function () {
            euroBackground();
        });

        // Select Peso
        $("#currency3").click(function () {
            mexicoBackground();
        });
    });
}

function britishBackground() {
    $(document).ready(function () {
        $('form').css("color", "white");
        $('form').css("border", "solid 2px #fffffe");
        $('form').css("background-color", "#11145b");
        $('#dateToday').css("color", "black");
        $('#dateTomorrow').css("color", "black");
        $('#username').css("color", "black");
        $('#amount').css("color", "black");
        $('#flag').css("background", "url('assets/gb_header.png') no-repeat");
        $('.starter-template').css("background", "url('assets/gb_bg.png') repeat-y");
        $('h1').css("color", "#F60305");
        $('.dropcap').css("color", "#F60305");
        $('legend').css("color", "#F60305");
    });
}

function euroBackground() {
    $(document).ready(function () {
        $('form').css("color", "black");
        $('form').css("color", "black");
        $('form').css("border", "solid 2px #FE8402");
        $('form').css("background-color", "#FDD513");
        $('#flag').css("background", "url('assets/euro_header.png') no-repeat");
        $('.starter-template').css("background", "url('assets/euro_bg.png') repeat-y");
        $('h1').css("color", "#FE8402");
        $('.dropcap').css("color", "#FE8402");
        $('legend').css("color", "#FE8402");
    });
}

function mexicoBackground() {
    $(document).ready(function () {
        $('form').css("color", "#7E3D0B");
        $('form').css("background-color", "#329B00");
        $('form').css("border", "solid 2px #ffffff");
        $('#flag').css("background", "url('assets/mexico_header.png') no-repeat");
        $('.starter-template').css("background", "url('assets/mexico_bg.png') repeat-y");
        $('h1').css("color", "#ffffee");
        $('h1').css("border-bottom-color", "#ffffee");
        $('.dropcap').css("color", "#ffffee");
        $('legend').css("color", "#ffffee");
    });
}