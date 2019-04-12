$(function() {
    $(".change-watched").on("click", function(event) {
      var id = $(this).data("id");
      var newwatched = $(this).data("newwatched");
  
      var newWatchedState = {
        watched: newwatched
      };
  
      // Send the PUT request.
      $.ajax("/api/anime/" + id, {
        type: "PUT",
        data: newWatchedState
      }).then(
        function() {
          console.log("changed watched to", newwatched);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newAnime = {
        name: $("#watch").val().trim(),
        watched: $("[name=watched]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/anime", {
        type: "POST",
        data: newAnime
      }).then(
        function() {
          console.log("created new anime");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-anime").on("click", function(){
      var id = $(this).attr("data-id")
      console.log("hello")
      $.ajax("/api/anime/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("created new anime");
          // Reload the page to get the updated list
          location.reload();
        }
      );
     }) 
  });
  //ca