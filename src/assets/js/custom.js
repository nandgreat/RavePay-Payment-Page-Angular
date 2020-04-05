
  $.widget.bridge('uibutton', $.ui.button);



  $(function () {
    //Initialize Select2 Elements
    $('.select2').select2()

    //Date picker
    $('#datepicker').datepicker({
      autoclose: true
    })
  })

