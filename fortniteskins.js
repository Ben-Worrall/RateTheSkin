var GameOpt = document.getElementById("GameOpt") //game option
var SkinOpt = document.getElementById("SkinOpt") //skin options
var display = document.getElementById("skins-list") //display for showing the options
var clearBNT = document.getElementById("clear")
var banner = document.getElementById("GameName")

//if user chooses csgo then display the skin options
let click1 = 0
GameOpt.addEventListener('click',()=>{

    if( document.getElementById("GameOpt").value == "Fortnite"){
        SkinOpt.options.length = 0
        
    }
})

//once user chooses what skin type they want then display those skins

SkinOpt.addEventListener('click', ()=>{

})