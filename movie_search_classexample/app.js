$(document).ready(function () {
  $("#userSubmit").on("click", function (e) {
    e.preventDefault();
    var userInput = $("#userInput").val();
    $.ajax({
      type: "GET",
      url: `http://www.omdbapi.com/?t=${userInput}&apikey=d3336c70`,
      dataType: "json",
    }).then(function (res) {
      console.log(res);
      $("#title").text(res.Title);
      $("#actors").text(res.Actors);
      $("#rated").text(res.Rated);
      // $("#year").text(res.Year);
      var year = parseInt(res.Year);
      if (year < 2000) {
        $("#year").text(`${year} - This is a classic`);
      } else {
        $("#year").text(`${year} - This is a modern movie`);
      }
      $("#movieList").append(`<li class="btn">${res.Title}</li>`);
    });
  });

  $(document).on("click", ".btn", function () {
    var text = $(this).text();
    console.log(this);
    $.ajax({
      type: "GET",
      url: `http://www.omdbapi.com/?t=${text}&apikey=d3336c70`,
      dataType: "json",
    }).then(function (res) {
      console.log(res);
      $("#title").text(res.Title);
      $("#actors").text(res.Actors);
      $("#rated").text(res.Rated);
      // $("#year").text(res.Year);
      var year = parseInt(res.Year);
      if (year < 2000) {
        $("#year").text(`${year} - This is a classic`);
      } else {
        $("#year").text(`${year} - This is a modern movie`);
      }
    });
  });
});
