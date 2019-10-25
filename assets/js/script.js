$("ul li a").click(function(){
  var parent = $(this).parent();
  //create .ink element if it doesn't exist
  if(parent.find(".ink").length == 0) {
    parent.prepend("<span class='ink'></span>");

    var ink = parent.find(".ink");

    //set size of .ink
    if(!ink.height() && !ink.width()) {
      //use parent's width or height whichever is larger to make a circle which can cover the entire element
    }
  }
});
