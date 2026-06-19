$(document).ready(function(){
  const portfolio = [
    {
      title: "Design", 
      description:"My <b> UI and Web Design </b> portfolio. Here you'll find websites I've created for clients along with some personal design projects.", 
      image:"assets/models/mac.gif", 
      link:"/pages/portfolio_pages/web.html"
    },
    {
      title: "Writing", 
      description:"My <b> Writing </b> portfolio. I've written both fiction and non-fiction on both Medium and Substack. I typically write about the intersections between society, culture, and technology.", 
      image:"assets/models/typewriter.gif", 
      link:"pages/portfolio_pages/writing.html"
    },
    {
      title: "Creative Projects", 
      description:"Currently a work in progress. All of my <b> creative projects </b> will go here, whether it's classwork or a personal creative coding project. Stay tuned.", 
      image:"assets/models/wii.gif", 
      link:"pages/portfolio_pages/creative_projects.html"
    },
    {
      title: "Art", 
      description:"All my <b> artwork </b>, both physical and digital, is here. I've experimented with collages, drawings and 3D modeling. All 3D Models you see in the menu were made by me in <i> PicoCAD2</i>.", 
      image:"assets/models/art.gif", 
      link:"pages/portfolio_pages/art.html"
    }
  ];

  let currentIndex = 0;

  function displayPortfolio(){
    $(".inventory-item-title").html(portfolio[currentIndex].title)
    $("#main-option").attr("src",portfolio[currentIndex].image)
    $("#option-desc").html(portfolio[currentIndex].description)

    $("#option-enter").click(function() {
      window.location.href = portfolio[currentIndex].link;
    });

    
    let leftIndex = currentIndex - 1;
    if (leftIndex < 0){ 
      leftIndex = portfolio.length - 1;
    }
    $("#left-option").attr("src",portfolio[leftIndex].image)
    

    let rightIndex = currentIndex + 1;
    if(rightIndex>= portfolio.length){
      rightIndex = 0
    }
    $("#right-option").attr("src",portfolio[rightIndex].image)
  }

  $("#prev-btn").click(function(){
    currentIndex--;
    if (currentIndex < 0){ 
      currentIndex = portfolio.length - 1;
    }
    displayPortfolio()
  })

  $("#next-btn").click(function(){
    currentIndex++;
    if (currentIndex >= portfolio.length){ 
      currentIndex = 0;
    }
    displayPortfolio()
  })

 $("#enter-button").mouseenter(function() {
    $(this).html(">ENTER");
  });

  $("#enter-button").mouseleave(function() {
    $(this).html("ENTER");
  });

  $("#about-button").mouseenter(function() {
    $(this).html(">ABOUT");
  });

  $("#about-button").mouseleave(function() {
    $(this).html("ABOUT");
  });

  $(document).keydown(function(event) {

    if (event.key === "ArrowLeft") {
        $("#prev-btn").click();
    }

    if (event.key === "ArrowRight") {
        $("#next-btn").click();
    }

});

  displayPortfolio()

})