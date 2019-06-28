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


// get all of our list items
// var itemsToFilter = document.querySelectorAll("#itemsToFilter li");
  
// //setup click event handlers on our checkboxes
// var checkBoxes = document.querySelectorAll(".filterSection li input");
  
// for (var i = 0; i < checkBoxes.length; i++) {
//     checkBoxes[i].addEventListener("click", filterItems, false);
//     checkBoxes[i].checked = true;
// }
  
// // the event handler!
// function filterItems(e) {
//     var clickedItem = e.target;
      
//     if (clickedItem.checked == true) {
//         hideOrShowItems(clickedItem.value, "hideItem", "showItem");
//     } else if (clickedItem.checked == false) {
//         hideOrShowItems(clickedItem.value, "showItem", "hideItem");
//     } else {
//         // deal with the indeterminate state if needed
//     }
// }
  
// // add or remove classes to show or hide our content
// function hideOrShowItems(itemType, classToRemove, classToAdd) {
//     for (var i = 0; i < itemsToFilter.length; i++) {
//         var currentItem = itemsToFilter[i];
          
//         if (currentItem.getAttribute("data-type") == itemType) {
//             removeClass(currentItem, classToRemove);
//             addClass(currentItem, classToAdd);
//         }
//     }
// }
  
// //
// // Helper functions for adding and removing class values
// //
// function addClass(element, classToAdd) {
//     var currentClassValue = element.className;
        
//     if (currentClassValue.indexOf(classToAdd) == -1) {
//         if ((currentClassValue == null) || (currentClassValue === "")) {
//             element.className = classToAdd;
//         } else {
//             element.className += " " + classToAdd;
//         }
//     }
// }
        
// function removeClass(element, classToRemove) {
//     var currentClassValue = element.className;
  
//     if (currentClassValue == classToRemove) {
//         element.className = "";
//         return;
//     }
  
//     var classValues = currentClassValue.split(" ");
//     var filteredList = [];
  
//     for (var i = 0 ; i < classValues.length; i++) {
//         if (classToRemove != classValues[i]) {
//             filteredList.push(classValues[i]);
//         }
//     }
  
//     element.className = filteredList.join(" ");
// }