function timeLineNavigation() {

  var elementWidth = 100;
  var marginLeft = 250

  var navigationElement = $("#TimeLineNavigation #scrolNav ul li");
  var scrollContent = $("#TimeLineNavigation #scrolNavContent li");
  var scrolNavPlaceholder = $("#TimeLineNavigation #scrolNavPlaceholder");

  var animationDuration = arguments[0].duration
  var fadeDuration = arguments[0].fade



  //get all the navigation elements from the container

  var elementsCount = [];

  $(navigationElement).each(function() {
    elementsCount.push($(this))
  });

  //set width of all the elements

  $("#TimeLineNavigation #scrolNav ul, #TimeLineNavigation #scrolNavPlaceholder").css({
    "width": (elementsCount.length * elementWidth) + "px",
    "margin-left": marginLeft + "px"
  })

  $("#TimeLineNavigation #scrolNav").css({
    "margin-left": -marginLeft + "px"

  })

  $("#TimeLineNavigation #scrolNav ul li").css({

    "width": elementWidth
  })

  //default select for the last element
  $(navigationElement[elementsCount.length - 1]).addClass("clicked")

  //make sure content exists

  if (elementsCount.length == scrollContent.length) {
    scrolNavPlaceholder.html(scrollContent[elementsCount.length - 1].innerHTML);
  } else {
    console.log("Your Navigation elements count does not match your content count")
  }


  // when navigation item clicked
  $(navigationElement).on("click", function() {

    // reove existing "click" classe
    $(navigationElement).each(function() {

      if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");

      }

    });

    //add "clicked" class to clicked navigation element
    $(this).addClass("clicked");

    var inc = 1;

    $(navigationElement).each(function() {
      //check which element has been clicked
      if (!$(this).hasClass("clicked")) {
        inc++;

      } else {
        return false
      }

    });

    //set left margin 
    var newMarginLeft = ((marginLeft + ((elementWidth * elementsCount.length))) - (elementWidth * inc));

    //fancy animation
    $(this).parent().animate({
      'margin-left': newMarginLeft + "px"
    }, animationDuration);

    //content fade

    //make sure the nav elements has its content element  

    scrolNavPlaceholder.fadeOut(fadeDuration, function() {

      if (scrolNavPlaceholder.html() != "") {
        scrolNavPlaceholder.html(scrollContent[inc - 1].innerHTML);
      } else {
        console.log("error:" + " You have " + scrollContent.length + " content elements, and " + elementsCount.length + " navigation elements")
      }
    });
    scrolNavPlaceholder.fadeIn(fadeDuration);

  })

}