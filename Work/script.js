window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



console.log('ran');

document.addEventListener('click', function (e) {
  var button = e.target;
  
  if (button.getAttribute('data-reset') === 'true') {
    // Reset the filters
    var filter = button.getAttribute('data-filter');
    resetFilter(filter);
  } else {
    // Filter the tag
    var filter = button.getAttribute('data-filter');
    var tag    = button.getAttribute('data-filter-tag');
    filterTag(filter, tag);
  }
});

// Filter tag
function filterTag (filter, tag) {
  var items = document.querySelectorAll('.' + filter + ' > a');
  console.log(items);

  for (var i = 0; i < items.length; i++) {
    var itemTags = items[i].getAttribute('data-tags');

    // Catch case with no tags
    if (itemTags != null) {
      if (itemTags.indexOf(tag) < 0) {
        items[i].setAttribute('data-toggle', 'off');
      }
    }
  }
}

//Reset filters
function resetFilter (filter) {
  var items = document.querySelectorAll('.' + filter + ' > a');

  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('data-toggle', 'rest');
  }
}