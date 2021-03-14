var mobile_menu_btn = document.getElementById("mobile-bar")
var mobile_header_content = document.getElementById("mobile-header-content")

mobile_menu_btn.addEventListener('click',toggleMenu)

function toggleMenu(){
    if(mobile_header_content.style.display === "" || mobile_header_content.style.display === "none"){
        mobile_header_content.style.display = "flex"
    }
    else{
        mobile_header_content.style.display = "none"
    }
}