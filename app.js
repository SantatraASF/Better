	function openmodal(){
		document.body.style.backgroundColor ="magenta"; 
			var paragirafy = document.getElementsByTagName("p");
			var i;
			for (i=0; i <paragirafy.length; i++){
			paragirafy[i].style.color="blue";
			paragirafy[i].style.fontFamily = 'papyrus';
			}
			
			var ash1= document.getElementsByTagName ("h1");
			var i;
			for (i=0; i <ash1.length; i++) {
			ash1[i].style.color = "green";
			ash1[i].style.fontFamily = 'Comic Sans';
			}
					
			var ash2 = document.getElementsByTagName("h2")
			var i;
			for (i = 0; i <ash2.length; i++) {
			ash2[i].style.color = "green";
			ash2[i].style.fontFamily = 'Comic Sans';
			}
}