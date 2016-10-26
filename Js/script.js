$(document).ready(function(){
    
        $("#welcome").slideDown(600);
        $("#homeLink").addClass("active");

        
        $("#homeLink").click(function(){
            
            $("#about").slideUp(600);
            $("#aboutLink").removeClass("active");
            $("#resume").slideUp(600);
            $("#resumeLink").removeClass("active");
            $("#projects").slideUp(600);
            $("#projectsLink").removeClass("active");
            $("#contact").slideUp(600);
            $("#contactLink").removeClass("active");
            
            
            $("#welcome").slideDown(600);
            $("#homeLink").addClass("active");
            
        });
        
        
        $("#aboutLink").click(function(){
            
            $("#welcome").slideUp(600);
            $("#homeLink").removeClass("active");
            $("#resume").slideUp(600);
            $("#resumeLink").removeClass("active");
            $("#projects").slideUp(600);
            $("#projectsLink").removeClass("active");
            $("#contact").slideUp(600);
            $("#contactLink").removeClass("active");
            
            
            $("#about").slideDown(600);
            $("#aboutLink").addClass("active");
            
        });
        
        $("#moreAboutMe").click(function(){
            
            $("#welcome").slideUp(600);
            $("#homeLink").removeClass("active");
            $("#resume").slideUp(600);
            $("#resumeLink").removeClass("active");
            $("#projects").slideUp(600);
            $("#projectsLink").removeClass("active");
            $("#contact").slideUp(600);
            $("#contactLink").removeClass("active");
            
            
            $("#about").slideDown(600);
            $("#aboutLink").addClass("active");
            
        });
        
        $("#resumeLink").click(function(){
            
            $("#welcome").slideUp(600);
            $("#homeLink").removeClass("active");
            $("#about").slideUp(600);
            $("#aboutLink").removeClass("active");
            $("#projects").slideUp(600);
            $("#projectsLink").removeClass("active");
            $("#contact").slideUp(600);
            $("#contactLink").removeClass("active");
            
            
            $("#resume").slideDown(600);
            $("#resumeLink").addClass("active");
            
        });
        
        $("#readMyResume").click(function(){
            
            $("#welcome").slideUp(600);
            $("#homeLink").removeClass("active");
            $("#about").slideUp(600);
            $("#aboutLink").removeClass("active");
            $("#projects").slideUp(600);
            $("#projectsLink").removeClass("active");
            $("#contact").slideUp(600);
            $("#contactLink").removeClass("active");
            
            
            $("#resume").slideDown(600);
            $("#resumeLink").addClass("active");
            
        });
        
        $("#projectsLink").click(function(){
            
            $("#welcome").slideUp(600);
            $("#homeLink").removeClass("active");
            $("#about").slideUp(600);
            $("#aboutLink").removeClass("active");
            $("#resume").slideUp(600);
            $("#resumeLink").removeClass("active");
            $("#contact").slideUp(600);
            $("#contactLink").removeClass("active");
            
            
            $("#projects").slideDown(600);
            $("#projectsLink").addClass("active");
            
        });
        
        $("#contactLink").click(function(){
            
            $("#welcome").slideUp(600);
            $("#homeLink").removeClass("active");
            $("#about").slideUp(600);
            $("#aboutLink").removeClass("active");
            $("#resume").slideUp(600);
            $("#resumeLink").removeClass("active");
            $("#projects").slideUp(600);
            $("#projectsLink").removeClass("active");
            
            
            $("#contact").slideDown(600);
            $("#contactLink").addClass("active");
            
        });
        

        
		if ($(window).width() < 700)
		{
			$("#menuToggle").click(function()
			{
		
				$("nav ul li").slideToggle(600);
				
			});
			
			$("nav ul li").click(function()
			{
				$("nav ul li").slideToggle(600);
			});
		}

    
});


var scrollAmount = 145;

$(window).on('scroll', function(){
  if($(window).scrollTop()>=scrollAmount && !$('nav').hasClass('fixed')){
    $('nav').addClass('fixed'); 
  }
  else if($(window).scrollTop()<scrollAmount && $('nav').hasClass('fixed')){
     $('nav').removeClass('fixed') 
  }
});

function formProcessing()
{
    var name = document.getElementById("firstName").value;
    
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    
    document.getElementById("thanks").innerHTML = "Thank you, " + name + " your comment has been submitted.";
}


