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
