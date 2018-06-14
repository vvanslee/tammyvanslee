$( document ).ready(function() {
    
    function testAnim(x) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  ' + x + '  animated');
    };
    $('#exampleModal').on('show.bs.modal', function (e) {
      var anim = "slideInRight";
          testAnim(anim);
    })
    $('#exampleModal').on('hide.bs.modal', function (e) {
      var anim = "slideOutRight";
          testAnim(anim);
    })

});


// GALLERY MODAL

$( document ).ready(function() {

    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");

    $('img').click(function () {
        console.log($(this).attr('src'));
        modal.style.display = "block";
        modalImg.src = $(this).attr('src');
    });

    var span = document.getElementsByClassName("galClose")[0];
    span.onclick = function() { 
        modal.style.display = "none";
         }

});


// TOGGLE GRID & CAROUSEL

$( document ).ready(function() {

    $('#carouselBtn').click(function(){
        console.log("carousel button clicked");
        $('#gridView').hide();
        $('#carouselView').show();
        $('#carouselBtn').css('font-weight','bold');
        $('#gridBtn').css('font-weight','normal');

    });

    $("#gridBtn").click(function(){
        console.log("grid button clicked");
        $("#carouselView").hide();
        $("#gridView").show();
        $('#gridBtn').css('font-weight','bold');
        $('#carouselBtn').css('font-weight','normal');
    });

});