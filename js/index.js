//quick nav tools

let options_to_chapters = [
    "","#Ch5","#Ch7", "#Ch9", "#Ch11"
];


function navigate(){
    window.location.hash = "";
    window.location.hash = options_to_chapters[document.getElementById("html_indexnav").selectedIndex];
}