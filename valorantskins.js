var GameOpt = document.getElementById("GameOpt") //game option
var SkinOpt = document.getElementById("SkinOpt") //skin options
var display = document.getElementById("skins-list") //display for showing the options
var clearBNT = document.getElementById("clear")
var banner = document.getElementById("GameName")


//if user chooses csgo then display the skin options
let clickV1 = 0
GameOpt.addEventListener('click',()=>{
clickV1++


if(clickV1 == 2){

    if( document.getElementById("GameOpt").value == "Valorant"){
        banner.innerText = "Valorant"
        SkinOpt.options.length = 0;
        SkinOpt.options[SkinOpt.options.length] = new Option('Any')
        SkinOpt.options[SkinOpt.options.length] = new Option('Classic')
        SkinOpt.options[SkinOpt.options.length] = new Option('Shorty')
        SkinOpt.options[SkinOpt.options.length] = new Option('Frenzy')
        SkinOpt.options[SkinOpt.options.length] = new Option('Ghost')
        SkinOpt.options[SkinOpt.options.length] = new Option('Sherif')
        SkinOpt.options[SkinOpt.options.length] = new Option('Stinger')
        SkinOpt.options[SkinOpt.options.length] = new Option('Spectre')
        SkinOpt.options[SkinOpt.options.length] = new Option('Bucky')
        SkinOpt.options[SkinOpt.options.length] = new Option('Judge')
        SkinOpt.options[SkinOpt.options.length] = new Option('Bulldog')
        SkinOpt.options[SkinOpt.options.length] = new Option('Guardian')
        SkinOpt.options[SkinOpt.options.length] = new Option('Phantom')
        SkinOpt.options[SkinOpt.options.length] = new Option('vandal')
        SkinOpt.options[SkinOpt.options.length] = new Option('Marshal')
        SkinOpt.options[SkinOpt.options.length] = new Option('Operator')
        SkinOpt.options[SkinOpt.options.length] = new Option('Ares')
        SkinOpt.options[SkinOpt.options.length] = new Option('Odin')  
             
        } 
   clickV1 = 0 }   
})













//once user chooses what skin type they want then display those skins
let clickV2 = 0;

SkinOpt.addEventListener('click', ()=>{
    if(banner.innerText == "Valorant"){
   
clickV2++
if(clickV2==1){}
if(clickV2 == 2){

    //div popup for rating pics
    document.getElementById('rateboard').style.display = ""
    var all = document.getElementsByTagName("*");
    document.body.style.backgroundImage = "url('capsule_616x353.jpg')"
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundSize = "100% 100%"
    document.getElementById('options').style.display = ""


    //after skin type is slected
    for (var i=0; i < all.length; i++) {
        if(all[i].id !== 'rateboard' && all[i].id !== 'body' && all[i].id !== 'head' && all[i].id !== 'showskin'&& all[i].id !== 'bntOPT' && all[i].id !== 'html' && all[i].id !== 'content' && all[i].className !== 'bnt' && all[i].id!== 'exit'){
            all[i].classList.add("blur")

        }
        
           
        
    }

//exit function


document.getElementById('exit').addEventListener("click", function(){

    for (var i=0; i < all.length; i++) {
        if(all[i].id !== 'rateboard' && all[i].id !== 'body' && all[i].id !== 'head' && all[i].id !== 'showskin'&& all[i].id !== 'bntOPT' && all[i].id !== 'html' && all[i].id !== 'content' && all[i].className !== 'bnt' && all[i].id!== 'exit'){
            all[i].classList.remove("blur")
        }
    }

    document.getElementById('options').style.display == ""
    document.getElementById('rateboard').style.display = "none"
    document.body.style.backgroundImage = ""
    document.body.style.backgroundColor = 'white'




  });



    
    clickV2=0
}

}
})