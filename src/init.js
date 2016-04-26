$(document).ready(function() {
  window.dancers = [];

    $("#menu_button").on("mouseenter", function () {
      $('ul#file_menu').slideDown();
    });

    $("ul#file_menu").on("mouseenter", function () {
      $('ul#file_menu').slideDown();
    });

    $("ul#file_menu").on("mouseleave", function () {
      $('ul#file_menu').slideUp();
    });    

    // $('ul.file_menu').bind('click', function(){
    //   $('ul.file_menu').slideUp('medium'); 
    //   console.log('clicked');
    // });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() - 100,
      $("body").width() * Math.random() - 100,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);

    window.dancers.push(dancer);

  });

  //background images

  var images = ['birthday.jpg', 'bubbles.jpg', 'disco.jpg', 'energy.jpg', 'party.jpg'];
  var eachImg = function(array) {
    for (var i = 0; i < array.length; i++) {
      $('html').css({'background-image': 'url(Backgrounds/' + images[Math.floor(Math.random() * images.length)] + ')'});
      $('html').css({'background-size': 'cover'});
    }
  };


  setInterval(function() {
    eachImg(images);
  }, 6000); 

  eachImg(images);

  //Arrow keys & spacebar

    function leftArrowPressed() {
      window.dancers.forEach(function(dancer) {
        dancer.left = 100;
        dancer.setPosition();
      });
    }

    function upArrowPressed() {
      window.dancers.forEach(function(dancer) {
        dancer.top = 15;
        dancer.setPosition();
      });
    }

    function rightArrowPressed() {
      window.dancers.forEach(function(dancer) {
        dancer.right = 15;
        dancer.setPosition();
      });
    }

    function downArrowPressed() {
      window.dancers.forEach(function(dancer) {
        dancer.bottom = 15;
        dancer.setPosition();
      });
    }

    function moveSelection(e) {
      //Left arrow
      if (e.keyCode === 37) {
        leftArrowPressed();
      }
      //Up arrow
      if (e.keyCode === 38) {
        upArrowPressed();
      }
      //Right arrow
      if (e.keyCode === 39) {
        rightArrowPressed();
      }
      //Down arrow
      if (e.keyCode === 40) {
        downArrowPressed();
      }
      if (e.keyCode === 32) {
        window.dancers.forEach(function(dancer) {
          dancer.top = $("body").height() * Math.random() - 100;
          dancer.left = $("body").width() * Math.random() - 100;
          dancer.setPosition();
        });
      }
    }

    (function docReady() {
      window.addEventListener('keydown', moveSelection);
    })();


});

