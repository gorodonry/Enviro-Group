// This function alternately expands and collapses the size of the blog for the home page depending on its current state
function toggleBlogSize() {
	// If the blog is already expanded, reduce the size of the blog and switch the buttons back to default
	if (document.getElementById("expandBlog").style.display == "none") {
		document.getElementById("expandBlog").style.display = "block";
		document.getElementById("reduceBlog").style.display = "none";
		document.getElementById("blogContainer").style.height = "250px";
	// If the blog isn't expanded, expand the blog and switch the buttons so the blog can be reduced again
	} else {
		document.getElementById("expandBlog").style.display = "none";
		document.getElementById("reduceBlog").style.display = "block";
		document.getElementById("blogContainer").style.height = "500px";
	}
}

// This function reveals more images on the gallery page
function showMoreImages() {
	// Hide the show more images button
	document.getElementById("showMoreButton").style.display = "none";
	// Get a list of all the images that are to be displayed
	var toShow = document.getElementsByClassName("showMore")
	// For every item in the list, set display to flex
	for (i = 0; i < toShow.length; i++) {
		toShow[i].style.display = "flex";
	}
}
