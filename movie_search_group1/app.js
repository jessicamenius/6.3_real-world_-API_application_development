$(document).ready(function () {
  $("#submitBtn").on("click", function (e) {
    e.preventDefault();
    inputText = $("#inputText").val();
    $("#inputText").val("");
    // console.log(inputText);
    $.ajax({
      type: "GET",
      url: `https://www.omdbapi.com/?s=${inputText}&i=tt3896198&apikey=ad1e270a`,
      dataType: "json",
    }).then(function (response) {
      //   console.log(response.Search[1].Title);
      //   console.log(response.Search[1].Year);
      //   var movieTitle = response.Search[1].Title;
      //   var movieYear = response.Search[1].Year;
      for (let i = 0; i < 10; i++) {
        console.log(response.Search[i].Title);
        console.log(response.Search[i].Year);
        var movieTitle = response.Search[i].Title;
        var movieYear = response.Search[i].Year;
        var genre = "";

        if (movieYear < 2010) {
          genre = "Classic";
        } else {
          genre = "Recent";
        }

        $("#movieInfo").append(
          `<div>The title of this movie is: ${movieTitle}. It came out in: ${movieYear}. It's a ${genre}.</div>`
        );
      }
      //   $("#movieInfo").append(
      //     `<div>This movie's title is : ${movieTitle} and it came out in: ${movieYear}</div>`
      //   );
    });
  });
});
