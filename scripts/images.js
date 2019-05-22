$(document).ready(function () {
    var btnChoice = $('#choice');
    var control = $('#control');
    var display = $('#display');
    var img = display.find("img");

    btnChoice.click(function () {
        choseSrc();
    });
    $('#submitSrc').click(function () {
        var inputSrc = $('#srcImg');
        img.attr('src', inputSrc[0].value);
        updateInfo(img);
        $(this).parent().hide();
    });
    $('#checkbox').change(function () {
        var checkbox = $(this);
        if(!checkbox.is(':checked')){
            img[0].width = img[0].naturalHeight;
            img[0].height = img[0].naturalWidth;
        }else{
            img[0].height = img[0].naturalHeight;
            img[0].width = img[0].naturalWidth;
        }
        updateInfo(img)
    });
    function updateInfo(img) {
        var info = $('#info');
        var original = img[0].width * img[0].height;
        var screen=img[0].width * img[0].height;

        $('#original').text('');
        $('#screen').text('');


        $('#original').append(original);
        $('#screen').append(screen);
    }

    function choseSrc(){
        $('#formSrc').show();
    }

});
