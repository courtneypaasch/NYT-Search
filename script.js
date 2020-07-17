$("document").ready(function() {


  //click handler for the search button gathers all user data
  $("#search").on("click", function(event) {
      event.preventDefault();
      var searchInput = $("#searchInput").val();
      var recordsNum = $("#recordsNum").val();
      var startInput = $("#startInput").val();
      var endInput = $("#endInput").val();
      var startYear = startInput + "0101";
      var endYear = endInput + "1231";
      console.log(startInput);
      console.log(endInput);
      console.log(recordsNum);
      console.log(searchInput);

      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&api-key=yphqAtha1ohzADvpzcslkLfFIZ2BWbJ5&begin_date=" + startYear + "&end_date=" + endYear + ""
      
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        // $(".articles-body").empty();
          console.log(response)
          console.log(response.response.docs)

          var recordsSelect = $("#recordsNum").val();
      
          for(i=0;i<recordsSelect;i++) {
            $("#cardBody").append("<div>"+response.response.docs[i].headline.main+"</div>");
          }
            
        });
  

      
  })

  //click handler for the clear button removes all user data
  $("#clear").on("click", function(){
      $("input").empty();
  })
});
