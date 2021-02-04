jQuery(document).ready(function ($) {
  "use strict";

  /* Calender jQuery **/

  if ($("table.second").length) {
    $(document).ready(function () {
      var table = $("table.second").DataTable({
        lengthChange: false,
        buttons: ["copy", "excel", "pdf", "print", "colvis"],
      });

      table.buttons().container().appendTo("#example_wrapper .col-md-6:eq(0)");
    });
  }
});
