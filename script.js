$("document").ready(function() {


    //click handler for the search button gathers all user data
    $("#search").on("click", function(event) {
        event.preventDefault();
        var searchInput = $("#searchInput").val();
        var recordsNum = $("#recordsNum").val();
        var startInput = $("#startInput").val();
        var endInput = $("#endInput").val();
        console.log(startInput);
        console.log(endInput);
        console.log(recordsNum);
        console.log(searchInput);


        displayArticles();
    })

    //click handler for the clear button removes all user data
    $("#clear").on("click", function(){
        $("input").empty();
    })


//function clears old search results and displays new results
function displayArticles() {
    $(".articles-body").empty();

    var recordsSelect = $("#recordsNum").val();

    for(i=0;i<recordsSelect;i++) {

        var article = $("<div>");

        article.addClass("article");

        $(".articles-body").append(article);
    }

}

})

