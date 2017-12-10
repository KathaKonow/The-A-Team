$.ajax({
  url: 'http://api.giphy.com/v1/gifs/search',
  method: 'GET',
  contentType: 'application/json; charset=UTF-8',
  data: {
    q:'feierabend',  // We are searching for cats
    limit: 15,  // We limit this search to 5 gifs only
    api_key: 'dc6zaTOxFJmzC'  // Password to authenticate us as a legitimate Giphy user
  },
  success: handleResults  // Name of a function to be called after API call was successful
});

function handleResults(response_body) {
	response_body.data.forEach(function(item) {
		var url = item.images.fixed_height_downsampled.url;
		var image = $(document.createElement("img"));
		image.attr("src", url)
		image.appendTo("#photo-container")
	})
}
