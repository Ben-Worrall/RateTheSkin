var numList = [0,1,2,3,4,5,6,7,8,9]
var num = 0
var Answer = [2,7,9,0]
for(let i = 0; i < numList.length; i++){
  let Curi = numList[i]
  for(let j = 0; j < numList.length; j++){
    let Curj = numList[j]
    for(let k = 0; k < numList.length; k++){
      let Curk = numList[k]
      for(let l = 0; l < numList.length; l++){
        let Curl = numList[l]
        num++
        //console.log(Curi + Curj + Curk+ Curl,' ran this for the',num, 'time') 
        if(Curi == Answer[0] && Curj == Answer[1] && Curk == Answer[2] && Curl == Answer[3]){
          console.log('you found the answer, it is:', Curi, Curj, Curk, Curl)
          break
        }

      }
    }
  }
}








  






























































//run code on current chrome page from the popup html on extension
/*
async function execInPage(code) {
  const [tab] = await chrome.tabs.query({currentWindow: true, active: true});
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: () => {
      
      var x = document.getElementsByTagName("yt-formatted-string")
      for(let i = 0; i < x.length; i++){
        x[i].innerHTML = "test"
      }

    },
    args: [code],
    world: 'MAIN',
    //injectImmediately: true, // Chrome 102+
  });
}


  */






