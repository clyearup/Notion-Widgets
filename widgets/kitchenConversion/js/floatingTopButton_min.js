var floatingTopButton=document.querySelector("#floatingTopButton");function gotoTop(){window.scrollTo(0,0)}function hideButton(){floatingTopButton.style.visibility="hidden"}function showButton(){floatingTopButton.style.visibility="visible"}function toggleFloatingTopButton(){(200<=window.pageYOffset?showButton:hideButton)()}floatingTopButton.addEventListener("click",function(){gotoTop()}),window.addEventListener("scroll",toggleFloatingTopButton);