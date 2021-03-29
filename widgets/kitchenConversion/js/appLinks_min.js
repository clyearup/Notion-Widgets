var appLinks=[{title:"Kitchen Calculator",name:"Kitchen Calculator",desc:"Kitchen calculator and recipe conversion tools for cooking and baking.",appImage:"https://www.mykitchencalculator.com/images/MKC150.png",appImageAltText:"Kitchen Calculator app icon",googlePlayLink:"https://play.google.com/store/apps/details?id=com.mykitchencalculator.kitchencalculator&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",googlePlayBadge:"/images/google_play_badge_100.png",googlePlayBadgeAltText:"Get it on Google Play",amazonAppLink:"https://www.amazon.com/MyKitchenCalculator-com-Kitchen-Calculator-Converter/dp/B009QHHCWW/",amazonBadge:"/images/amazon_badge_100.png",amazonBadgeAltText:"Available at Amazon Appstore"},{title:"Tip Calculator",name:"Get Tipsy",desc:"An easy to use tip calculator",appImage:"https://www.mykitchencalculator.com/images/GetTipsy150.png",appImageAltText:"Kitchen Calculator app icon",googlePlayLink:"https://play.google.com/store/apps/details?id=com.app2playdev.gettipsy",googlePlayBadge:"/images/google_play_badge_100.png",googlePlayBadgeAltText:"Get it on Google Play",amazonAppLink:"https://www.amazon.com/MyKitchenCalculator-com-Get-Tipsy-Tip-Calculator/dp/B00KD7HCTW/",amazonBadge:"/images/amazon_badge_100.png",amazonBadgeAltText:"Available at Amazon Appstore"}];function buildAppLinks(a){for(var e='<h2 class="over">Support this website by downloading these apps.</h2>',l=0;l<a.length;l++)e+='\n        <div class="app-container">\n            <div class="app-icon">\n                <img src="'+a[l].appImage+'" alt="'+a[l].appImageAltText+'">\n            </div>\n                \n            <div class="app-info">    \n                <h3>'+a[l].title+'</h3>                \n                <div class="app-links">\n                    <a class="badge"\n                        href=\''+a[l].googlePlayLink+"'>\n                        <img class=\"app-badge\" alt='"+a[l].googlePlayBadgeAltText+"' src='"+a[l].googlePlayBadge+"' />\n                    </a>\n                    <a class=\"badge\"\n                        href='"+a[l].amazonAppLink+"'>\n                        <img class=\"app-badge\" alt='"+a[l].amazonBadgeAltText+"'\n                            src='"+a[l].amazonBadge+"' />\n                    </a>\n                </div>\n            </div>\n        </div>\n        ";document.querySelector("#appLinks").innerHTML=e}