window.onload=function () {
  var elem = document.getElementById("masked");
  var dateMask = IMask(elem, {
    mask: Date,

    blocks: {
      d: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2,
      },
      m: {
        mask: IMask.MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2,
      },
      Y: {
        mask: IMask.MaskedRange,
        from: 1900,
        to: 9999,
      }
    },

    format: function(date) {
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      if (day < 10) day = "0" + day;
      if (month < 10) month = "0" + month;

      return [day, month, year].join(".");
    }
  })
};
