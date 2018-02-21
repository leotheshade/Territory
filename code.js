var Omusic = new Audio('Sounds/Skeleton of a Town - Icewind Dale 2 soundtrack.mp3');


//known bug: Something is causing the "send workers home" function for the night beast choice event to fail. It may have something to do with the new code that stops you from ignoing the event, or unselected workers
var namespace = "http://www.w3.org/2000/svg"
var worker1check = 0
var worker2check = 0
var worker3check = 0
var worker4check = 0
var mountainWorker1 = 0
var mountainWorker2 = 0
var mountainWorker3 = 0
var mountainWorker4 = 0
var castleWorker1 = 0
var castleWorker2 = 0
var castleWorker3 = 0
var castleWorker4 = 0
var forestWorker1 = 0
var forestWorker2 = 0
var forestWorker3 = 0
var forestWorker4 = 0
var wagonMountains1 = 0
var wagonCastle = 0
var wagonForest = 0
var wagonWorker1 = 0
var wagonWorker2 = 0
var wagonWorker3 = 0
var wagonWorker4 = 0
var wagonCheck1 = 0
var worker1position = "castle"
var worker2position = "castle"
var worker3position = "castle"
var worker4position = "castle"
var wagonPosition1 = "castle"
var wagonPosition1D = "castle"
var worker1move = 0
var worker2move = 0
var worker3move = 0
var worker4move = 0
var mountainOre = 0
var castleOre = 100
var wagonOre = 0
var forestWood = 0
var wagonWood = 0
var castleWood = 100
var mineCheck1 = 0
var mineCheck2 = 0
var mineCheck3 = 0
var mineCheck4 = 0
var cutCheck1 = 0
var cutCheck2 = 0
var cutCheck3 = 0
var cutCheck4 = 0
var time = "morning"
var wagonDefence = 0
var axeLVL = 1
var pickLVL = 1
var banditT1 = 0
var banditT2 = 0
var banditT3 = 0
var banditT4 = 0
var banditT5 = 0
var Ocheck = 0
var Ncheck = 0
var wagonSellW = 0
var wagonBuyW = 0
var wagonBuyO = 0
var wagonSellO = 0
var castleGold = 0
var wagonGold = 0
var ransomGold = 300
var dragonRep = 0
var citRep = 10
var firstDragVisit = 0
var keyChoice = "blank"
var choice = "blank"
var textTest = 0
var dragonIntroR = "blank"
var AcursedRep = 0
var garrisonCooldown = 0
//choice var code down
var choiceNo1 = 0
var choiceNo2 = 0
var choiceNo3 = 0
var choiceNo4 = 0
var choiceNo5 = 0
var choiceNo6 = 0

var choiceNo1A = 0
var choiceNo2A = 0
var choiceNo3A = 0
var choiceNo4A = 0
var choiceNo5A = 0
var choiceNo6A = 0

var choiceCount = 0

var choicePerc1 = 0
var choicePerc2 = 0

var musicLock = 0

// choice var code up

var wagonOcean = 0
var oceanWorker1 = 0
var oceanWorker2 = 0
var oceanWorker3 = 0
var oceanWorker4 = 0
var choiceLock = 0

var worker1CW = 0
var worker1S1 = 1
var worker1S2 = 0

var worker2CW = 0
var worker2S1 = 1
var worker2S2 = 0

var worker3CW = 0
var worker3S1 = 1
var worker3S2 = 0

var worker4CW = 0
var worker4S1 = 1
var worker4S2 = 0

var RezA = document.getElementById("RezPT1A")

var raidHit = 0

var travelDur = 15

var buyLock = 0
var sellOreLock = 0
var sellWoodLock = 0
// REZT()
console.log(new Date() + " program Begins")
function REZT(){
// REZPT1A.beginElement
console.log("hells")
document.getElementById("RezPT1A").beginElement()

}


function musicLoop(){
Omusic.play()
  setTimeout(musicLoop, 12000)
  if(textTest == 1){
    setTimeout(startText, 1000)
  }

}


musicLoop()
function startText(){



alert("Dear nephew, If you are reading this, I have passed from this world. As you are my only heir, my kingdom and everything it encompasses is now yours. But be warned, do not belive this to be a blessing. As of this letter being written, my kingdom is on the verge of collapse. The vile Accursed haunt my roads, my coffers grow empty, the Night Beasts terrorize my settlements, and a great dragon threatens everything if he does not recieve payment frequently. Knowing this, I emplore you to take up my mantle and rule my kingless nation. I care greatly for my people, and without a leader to guide and protect them, they would wither and die swiftly. Things may be looking grim, but I belive that if you take my throne and lead my people, you will be able save my kingdom, and become a great king! If you do decide to take all the risks, and rule my kingdom, come to Castle Murus and my steward will teach you with everything you need to know. Signed, Old King Benignus")

alert("Steward: Ah, so you have arrived. Your uncle was right about you, he never once lost faith that you would come. Well, onto business. The first thing you need to know is how to assign workers to tasks. First you must click on your supply wagon. It's the brown box under your castle(placeholder). Then you must click the icon of whoever you want to acompany the wagon. Then select the destination you want it to be sent to. The mountains hold incredible ammounts of ore, and the forest has plenty of excelent wood that we can harvest. Once you have chosen a destination, select the red box at the bottom of your screen to order your wagon to begin moving.")
alert("Steward: Beware, when moving your units or resources, the vile Accursed are sure to be attracted.(going to change this) What are the Acursed you ask? Well they are vile creatures, once men, they are now ruthless theives who partol your roads and rob your people. Somehow they react to the Shadow Veil and gain immense power while its darkness envelops our land and become much more aggressive than normal. They can be easily identified by the glowing rune that is branded on their backs. They will attack your supply wagons if they spot them.")
alert("Steward: One facillity you might want to make use of is The Guild Outpost located north of Castle Murus. You can use it to buy or sell any extra resources you might need. The Guild is a branch of The Empire solely devoted to commerce and maintaining the standard of currency. They trade in almost everything, do business indiscriminately, and have the power of the whole Empire at their backs. You can sell resources to gain gold, or spend gold to purchase resources. You can access the outpost by selecting either Buy or Sell from your wagon menu next to what resource you want to trade in. Be aware that the route to The Market is shorter then other routes so it will take less time for your wagon to arrive there. ")
alert("Steward: One of the greatest threats to this kingdom is a mighty dragon that insists that he requires a protection fee to keep us safe, but has hinted that if we don't pay, he will destroy this kingdom and everyone in it. I do not belive that he is aware that your uncle is dead, so he will not expect you to be in your uncle's place when he comes. He was always fond of talking with Old King Benignus whenever he came so he may want to speak with you as well. This will be your chance to make an impression on him, so make it a good one. When he arrives, he will demand 300 gold, so make sure you have earned that much by tomorrow. Every time he comes he will demand 50 more gold the next day.")
alert("Steward: Your kingdom is a large one, so you will be required to make many descisions that will affect certain aspects of your kingdom. When such a descision comes up, select whatever choice seems the best to you. Be wary, when interacting with certain figures, simple choices could have massive consequences. Your choices may decide the fate of your subjects, but know this, you can't save everyone, accidents happen, things can be unpredictable. You can just hope that you made the right choice, and if you didn't, just accept the consequences of your actions, and do better next time. Be aware that when the time comes for you to make a descision, you will be unable to send orders to your wagon until the issue is resolved. ")
textTest = 0


}

timec()
 // killWorker1()
updateText()
var rEvent = setTimeout(randomChoice, 135000)
function updateText(){
  document.getElementById("displayWagonOre").textContent = wagonOre;
  document.getElementById("displayWagonWood").textContent = wagonWood;
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayCastleOre").textContent = castleOre;
  document.getElementById("displayCastleWood").textContent = castleWood;
  document.getElementById("displayCastleGold").textContent = castleGold;
  document.getElementById("displayMountainOre").textContent = mountainOre;
  document.getElementById("displayForestWood").textContent = forestWood;
requestAnimationFrame(updateText)
}
 var cycle = setInterval(timec, 270000)
function forestClick(){
  if(wagonCheck1 == 1){
    wagonMountains1 =0
    wagonForest = 1
    wagonCastle = 0
    wagonCheck1 = 0
    wagonSellW = 0
    wagonBuyW = 0
    wagonSellO = 0
    wagonBuyO = 0
    document.getElementById("supplyWagon1").setAttribute("fill", "brown")
  }
  if(worker1check == 1){
     mountainWorker1 = 0
    castleWorker1 = 0
    forestWorker1 = 1
    worker1check = 0
    wagonWorker1 = 0
    document.getElementById("worker1").setAttribute("fill", "blue")
    document.getElementById("w1Label").setAttribute("fill","blue")


     }
  if(worker2check == 1){
    mountainWorker2 = 0
    castleWorker2 = 0
    forestWorker2 = 1
    worker2check = 0
    wagonWorker2 = 0
    document.getElementById("worker2").setAttribute("fill", "blue")
    document.getElementById("w2Label").setAttribute("fill","blue")
  }
  if(worker3check == 1){
    mountainWorker3 = 0
    castleWorker3 = 0
    forestWorker3 = 1
    worker3check = 0
    wagonWorker3 = 0
    document.getElementById("worker3").setAttribute("fill", "blue")
    document.getElementById("w3Label").setAttribute("fill","blue")

  }
  if(worker4check == 1){
    mountainWorker4 = 0
    castleWorker4 = 0
    forestWorker4 = 1
    worker4check = 0
    wagonWorker4 = 0
    document.getElementById("worker4").setAttribute("fill", "blue")
    document.getElementById("w4Label").setAttribute("fill","blue")
  }
}
function mountainClick(){
  if(wagonCheck1 == 1){
    wagonMountains1 = 1
    wagonForest = 0
    wagonCastle = 0
    wagonCheck1 = 0
    wagonSellW = 0
    wagonBuyW = 0
    wagonSellO = 0
    wagonBuyO = 0
    document.getElementById("supplyWagon1").setAttribute("fill", "brown")
  }
  if(worker1check == 1){
     mountainWorker1 = 1
    castleWorker1 = 0
    forestWorker1 = 0
    worker1check = 0
    wagonWorker1 = 0
    document.getElementById("worker1").setAttribute("fill", "blue")
    document.getElementById("w1Label").setAttribute("fill","blue")

     }
  if(worker2check == 1){
    mountainWorker2 = 1
    castleWorker2 = 0
    forestWorker2 = 0
    worker2check = 0
    wagonWorker2 = 0
    document.getElementById("worker2").setAttribute("fill", "blue")
    document.getElementById("w2Label").setAttribute("fill","blue")
  }
  if(worker3check == 1){
    mountainWorker3 = 1
    castleWorker3 = 0
    forestWorker3 = 0
    worker3check = 0
    wagonWorker3 = 0
    document.getElementById("worker3").setAttribute("fill", "blue")
    document.getElementById("w3Label").setAttribute("fill","blue")

  }
  if(worker4check == 1){
    mountainWorker4 = 1
    castleWorker4 = 0
    forestWorker4 = 0
    worker4check = 0
    wagonWorker4 = 0
    document.getElementById("worker4").setAttribute("fill", "blue")
    document.getElementById("w4Label").setAttribute("fill","blue")
  }
}
function closeMenu(){
     document.getElementById("worker1X1").style.display = "none";
    document.getElementById("worker1X2").style.display = "none";

    document.getElementById("worker2X1").style.display = "none";
    document.getElementById("worker2X2").style.display = "none";

    document.getElementById("worker3X1").style.display = "none";
    document.getElementById("worker3X2").style.display = "none";

    document.getElementById("worker4X1").style.display = "none";
    document.getElementById("worker4X2").style.display = "none";


document.getElementById("wagonMenu").style.display = "none";
document.getElementById("mI").style.display = "none"
document.getElementById("fI").style.display = "none"
document.getElementById("cI").style.display = "none"
document.getElementById("oI").style.display = "none"

document.getElementById("woodTrade").style.display = "none"
document.getElementById("sellWood").style.display = "none"
document.getElementById("buyWood").style.display = "none"

document.getElementById("buyLabel").style.display = "none"
document.getElementById("sellLabel").style.display = "none"

document.getElementById("oreTrade").style.display = "none"
document.getElementById("sellOre").style.display = "none"
document.getElementById("buyOre").style.display = "none"

document.getElementById("w1I").style.display = "none"
document.getElementById("w2I").style.display = "none"
document.getElementById("w3I").style.display = "none"
document.getElementById("w4I").style.display = "none"

document.getElementById("w1Label").style.display = "none"
document.getElementById("w2Label").style.display = "none"
document.getElementById("w3Label").style.display = "none"
document.getElementById("w4Label").style.display = "none"

document.getElementById("closeButton").style.display = "none"



}
//working on 12/12/16
function menuLaunch(){
  if(wagonCheck1 == 1){
// alert("menu up")
document.getElementById("worker1X1").style.display = "block";
document.getElementById("worker1X2").style.display = "block";

document.getElementById("worker2X1").style.display = "block";
document.getElementById("worker2X2").style.display = "block";

document.getElementById("worker3X1").style.display = "block";
document.getElementById("worker3X2").style.display = "block";

document.getElementById("worker4X1").style.display = "block";
document.getElementById("worker4X2").style.display = "block";


 document.getElementById("wagonMenu").style.display = "block";
 document.getElementById("mI").style.display = "block"
 document.getElementById("fI").style.display = "block"
 document.getElementById("cI").style.display = "block"
 document.getElementById("oI").style.display = "block"

 document.getElementById("woodTrade").style.display = "block"
 document.getElementById("sellWood").style.display = "block"
 document.getElementById("buyWood").style.display = "block"

 document.getElementById("buyLabel").style.display = "block"
 document.getElementById("sellLabel").style.display = "block"

 document.getElementById("oreTrade").style.display = "block"
 document.getElementById("sellOre").style.display = "block"
 document.getElementById("buyOre").style.display = "block"

 document.getElementById("w1I").style.display = "block"
 document.getElementById("w2I").style.display = "block"
 document.getElementById("w3I").style.display = "block"
 document.getElementById("w4I").style.display = "block"

 document.getElementById("w1Label").style.display = "block"
 document.getElementById("w2Label").style.display = "block"
 document.getElementById("w3Label").style.display = "block"
 document.getElementById("w4Label").style.display = "block"

 document.getElementById("closeButton").style.display = "block"
  }

  else if(wagonCheck1 == 0){

    document.getElementById("worker1X1").style.display = "none";
    document.getElementById("worker1X2").style.display = "none";

    document.getElementById("worker2X1").style.display = "none";
    document.getElementById("worker2X2").style.display = "none";

    document.getElementById("worker3X1").style.display = "none";
    document.getElementById("worker3X2").style.display = "none";

    document.getElementById("worker4X1").style.display = "none";
    document.getElementById("worker4X2").style.display = "none";


document.getElementById("wagonMenu").style.display = "none";
document.getElementById("mI").style.display = "none"
document.getElementById("fI").style.display = "none"
document.getElementById("cI").style.display = "none"
document.getElementById("oI").style.display = "none"

document.getElementById("woodTrade").style.display = "none"
document.getElementById("sellWood").style.display = "none"
document.getElementById("buyWood").style.display = "none"

document.getElementById("buyLabel").style.display = "none"
document.getElementById("sellLabel").style.display = "none"

document.getElementById("oreTrade").style.display = "none"
document.getElementById("sellOre").style.display = "none"
document.getElementById("buyOre").style.display = "none"

document.getElementById("w1I").style.display = "none"
document.getElementById("w2I").style.display = "none"
document.getElementById("w3I").style.display = "none"
document.getElementById("w4I").style.display = "none"

document.getElementById("w1Label").style.display = "none"
document.getElementById("w2Label").style.display = "none"
document.getElementById("w3Label").style.display = "none"
document.getElementById("w4Label").style.display = "none"

document.getElementById("closeButton").style.display = "none"





  // alert("menu down")
  }
}
function wagonClick(){
   if(worker1check == 1){
    wagonWorker1 = 1
    mountainWorker1 = 0
    castleWorker1 = 0
    forestWorker1 = 0
    worker1check = 0
    document.getElementById("worker1").setAttribute("fill", "blue")
  }
   else if(worker2check == 1){
    wagonWorker2 = 1
    mountainWorker2 = 0
    castleWorker2 = 0
    forestWorker2 = 0
    worker2check = 0
    document.getElementById("worker2").setAttribute("fill", "blue")
  }
  else if(worker3check == 1){
    wagonWorker3 = 1
    mountainWorker3 = 0
    castleWorker3 = 0
    forestWorker3 = 0
    worker3check = 0
    document.getElementById("worker3").setAttribute("fill", "blue")
  }
  else if(worker4check == 1){
    wagonWorker4 = 1
    mountainWorker4 = 0
    castleWorker4 = 0
    forestWorker4 = 0
    worker4check = 0
    document.getElementById("worker4").setAttribute("fill", "blue")

  }

  else{
    if(wagonCheck1 == 0){
    wagonCheck1 = 1
      document.getElementById("supplyWagon1").setAttribute("fill", "chocolate")
    }

    else if(wagonCheck1 == 1){
      wagonCheck1 = 0
      document.getElementById("supplyWagon1").setAttribute("fill", "brown")
    }
  }

}
function castleClick(){
   if(wagonCheck1 == 1){
    wagonMountains1 = 0
    wagonForest = 0
    wagonCastle = 1
    wagonCheck1 = 0
    wagonSellW = 0
    wagonBuyW = 0
    wagonSellO = 0
    wagonBuyO = 0
    document.getElementById("supplyWagon1").setAttribute("fill", "brown")
  }
  if(worker1check == 1){
    mountainWorker1 = 0
    castleWorker1 = 1
    forestWorker1 = 0
    worker1check = 0
    wagonWorker1 = 0
    document.getElementById("worker1").setAttribute("fill", "blue")
    document.getElementById("w1Label").setAttribute("fill","blue")

  }
  if(worker2check == 1){
    mountainWorker2 = 0
    castleWorker2 = 1
    forestWorker2 = 0
    worker2check = 0
    wagonWorker2 = 0
    document.getElementById("worker2").setAttribute("fill", "blue")
    document.getElementById("w2Label").setAttribute("fill","blue")
  }
  if(worker3check == 1){
    mountainWorker3 = 0
    castleWorker3 = 1
    forestWorker3 = 0
    worker3check = 0
    wagonWorker3 = 0
    document.getElementById("worker3").setAttribute("fill", "blue")
    document.getElementById("w3Label").setAttribute("fill","blue")
  }
  if(worker4check == 1){
    mountainWorker4 = 0
    castleWorker4 = 1
    forestWorker4 = 0
    worker4check = 0
    wagonWorker4 = 0
    document.getElementById("worker4").setAttribute("fill", "blue")
    document.getElementById("w4Label").setAttribute("fill","blue")
  }
}




function oceanClick(){
  alert("working")
   if(wagonCheck1 == 1){
    wagonMountains1 = 0
    wagonForest = 0
    wagonCastle = 0
    wagonOcean = 1
    wagonCheck1 = 0
    wagonSellW = 0
    wagonBuyW = 0
    wagonSellO = 0
    wagonBuyO = 0
    document.getElementById("supplyWagon1").setAttribute("fill", "brown")
  }
  if(worker1check == 1){
    mountainWorker1 = 0
    castleWorker1 = 0
    oceanWorker1 = 1
    forestWorker1 = 0
    worker1check = 0
    wagonWorker1 = 0
    document.getElementById("worker1").setAttribute("fill", "blue")
    document.getElementById("w1Label").setAttribute("fill","blue")

  }
  if(worker2check == 1){
    mountainWorker2 = 0
    castleWorker2 = 0
      oceanWorker2 = 1
    forestWorker2 = 0
    worker2check = 0
    wagonWorker2 = 0
    document.getElementById("worker2").setAttribute("fill", "blue")
    document.getElementById("w2Label").setAttribute("fill","blue")
  }
  if(worker3check == 1){
    mountainWorker3 = 0
    castleWorker3 = 0
      oceanWorker3 = 1
    forestWorker3 = 0
    worker3check = 0
    wagonWorker3 = 0
    document.getElementById("worker3").setAttribute("fill", "blue")
    document.getElementById("w3Label").setAttribute("fill","blue")
  }
  if(worker4check == 1){
    mountainWorker4 = 0
    castleWorker4 = 0
    forestWorker4 = 0
      oceanWorker4 = 1
    worker4check = 0
    wagonWorker4 = 0
    document.getElementById("worker4").setAttribute("fill", "blue")
    document.getElementById("w4Label").setAttribute("fill","blue")
  }
}
   //worker checks

function worker1Click(){
    if(wagonWorker1 == 0){
      //  worker1check = 1
      wagonWorker1 = 1
      document.getElementById("worker1").setAttribute("fill", "green")
      document.getElementById("w1Label").setAttribute("fill","green")
       }
    else if(wagonWorker1 == 1){
      // worker1check = 0
      wagonWorker1 = 0
      document.getElementById("worker1").setAttribute("fill", "blue")
        document.getElementById("w1Label").setAttribute("fill","blue")
    }
  }
function worker2Click(){
    if( wagonWorker2 == 0){
       wagonWorker2 = 1
      document.getElementById("worker2").setAttribute("fill", "green")
        document.getElementById("w2Label").setAttribute("fill","green")
       }
    else if(wagonWorker2 == 1){
      wagonWorker2 = 0
      document.getElementById("worker2").setAttribute("fill", "blue")
        document.getElementById("w2Label").setAttribute("fill","blue")
    }
  }
function worker3Click(){
    if(wagonWorker3 == 0){
       wagonWorker3 = 1
      document.getElementById("worker3").setAttribute("fill", "green")
        document.getElementById("w3Label").setAttribute("fill","green")
       }
    else if(wagonWorker3 == 1){
      wagonWorker3 = 0
      document.getElementById("worker3").setAttribute("fill", "blue")
        document.getElementById("w3Label").setAttribute("fill","blue")
    }
  }
function worker4Click(){
    if(wagonWorker4 == 0){
       wagonWorker4 = 1
      document.getElementById("worker4").setAttribute("fill", "green")
        document.getElementById("w4Label").setAttribute("fill","green")
       }
    else if(wagonWorker4 == 1){
      wagonWorker4 = 0
      document.getElementById("worker4").setAttribute("fill", "blue")
        document.getElementById("w4Label").setAttribute("fill","blue")
    }
  }
function sellWoodS(){
  //  alert("ye")
  if(wagonCheck1 == 1){
   wagonMountains1 = 0
   wagonForest = 0
   wagonCastle = 0
   wagonSellW = 1
   wagonBuyW = 0
   wagonSellO = 0
   wagonBuyO = 0
   wagonCheck1 = 0
   document.getElementById("supplyWagon1").setAttribute("fill", "brown")
 }
}
function buyWoodS(){
  // alert("yg")
  if(wagonCheck1 == 1){
   wagonMountains1 = 0
   wagonForest = 0
   wagonCastle = 0
   wagonSellW = 0
   wagonBuyW = 1
   wagonSellO = 0
   wagonBuyO = 0
   wagonCheck1 = 0
   document.getElementById("supplyWagon1").setAttribute("fill", "brown")
 }
}
function sellOreS(){
  // alert("tf")
  if(wagonCheck1 == 1){
   wagonMountains1 = 0
   wagonForest = 0
   wagonCastle = 0
   wagonSellW = 0
   wagonBuyW = 0
   wagonSellO = 1
   wagonBuyO = 0
   wagonCheck1 = 0
   document.getElementById("supplyWagon1").setAttribute("fill", "brown")
 }
}
function buyOreS(){
  // alert("ffr")
  if(wagonCheck1 == 1){
   wagonMountains1 = 0
   wagonForest = 0
   wagonCastle = 0
   wagonSellW = 0
   wagonBuyW = 0
   wagonSellO = 0
   wagonBuyO = 1
   wagonCheck1 = 0
   document.getElementById("supplyWagon1").setAttribute("fill", "brown")
 }
}

function worker1WalkWP(){

 if(worker1position == "moving"){

if(worker1S1 == 1){
 document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B8.png")
// document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
  worker1S1 = 0
  worker1S2 = 1
  setTimeout(worker1WalkWP, 500)
}
else if(worker1S2 == 1){
  document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B7.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker1S1 = 1
  worker1S2 = 0
  setTimeout(worker1WalkWP, 500)
}

 }
else{
  document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B7.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker1S1 = 1
  worker1S2 = 0
}

}
function worker2WalkWP(){

 if(worker2position == "moving"){

if(worker2S1 == 1){
 document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A5.png")
// document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
  worker2S1 = 0
  worker2S2 = 1
  setTimeout(worker2WalkWP, 500)
}
else if(worker2S2 == 1){
  document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A4.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker2S1 = 1
  worker2S2 = 0
  setTimeout(worker2WalkWP, 500)
}

 }
else{
  document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A4.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker2S1 = 1
  worker2S2 = 0
}

}

function worker3WalkWP(){

 if(worker3position == "moving"){

if(worker3S1 == 1){
 document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A7.png")
// document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
  worker3S1 = 0
  worker3S2 = 1
  setTimeout(worker3WalkWP, 500)
}
else if(worker3S2 == 1){
  document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A3.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker3S1 = 1
  worker3S2 = 0
  setTimeout(worker3WalkWP, 500)
}

 }
else{
  document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A3.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker3S1 = 1
  worker3S2 = 0
}

}

function worker4WalkWP(){

 if(worker4position == "moving"){

if(worker4S1 == 1){
 document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/C1.png")
// document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
  worker4S1 = 0
  worker4S2 = 1
  setTimeout(worker4WalkWP, 500)
}
else if(worker4S2 == 1){
  document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B5.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker4S1 = 1
  worker4S2 = 0
  setTimeout(worker4WalkWP, 500)
}

 }
else{
  document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B5.png")

// document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
  worker4S1 = 1
  worker4S2 = 0
}

}

function worker1WalkEP(){
  if(worker1position == "moving"){

  if(worker1S1 == 1){
  document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B9.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker1S1 = 0
   worker1S2 = 1
   setTimeout(worker1WalkEP, 500)
  }
  else if(worker1S2 == 1){
   document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D9.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker1S1 = 1
   worker1S2 = 0
   setTimeout(worker1WalkEP, 500)
  }

  }
  else{
   document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D9.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker1S1 = 1
   worker1S2 = 0
  }


}

function worker2WalkEP(){
  if(worker2position == "moving"){

  if(worker2S1 == 1){
  document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A6.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker2S1 = 0
   worker2S2 = 1
   setTimeout(worker2WalkEP, 500)
  }
  else if(worker2S2 == 1){
   document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D7.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker2S1 = 1
   worker2S2 = 0
   setTimeout(worker2WalkEP, 500)
  }

  }
  else{
   document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D7.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker2S1 = 1
   worker2S2 = 0
  }


}


function worker3WalkEP(){
  if(worker3position == "moving"){

  if(worker3S1 == 1){
  document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A8.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker3S1 = 0
   worker3S2 = 1
   setTimeout(worker3WalkEP, 500)
  }
  else if(worker3S2 == 1){
   document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D6.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker3S1 = 1
   worker3S2 = 0
   setTimeout(worker3WalkEP, 500)
  }

  }
  else{
   document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D6.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker3S1 = 1
   worker3S2 = 0
  }


}

function worker4WalkEP(){
  if(worker4position == "moving"){

  if(worker4S1 == 1){
  document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/C2.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker4S1 = 0
   worker4S2 = 1
   setTimeout(worker4WalkEP, 500)
  }
  else if(worker4S2 == 1){
   document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D6.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker4S1 = 1
   worker4S2 = 0
   setTimeout(worker4WalkEP, 500)
  }

  }
  else{
   document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D6.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker4S1 = 1
   worker4S2 = 0
  }


}
//forestWalk

function worker1WalkEA(){
  if(worker1position == "moving"){

  if(worker1S1 == 1){
  document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/C9.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker1S1 = 0
   worker1S2 = 1
   setTimeout(worker1WalkEA, 500)
  }
  else if(worker1S2 == 1){
   document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D4.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker1S1 = 1
   worker1S2 = 0
   setTimeout(worker1WalkEA, 500)
  }

  }
  else{
   document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D4.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker1S1 = 1
   worker1S2 = 0
  }


}

function worker2WalkEA(){
  if(worker2position == "moving"){

  if(worker2S1 == 1){
  document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B3.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker2S1 = 0
   worker2S2 = 1
   setTimeout(worker2WalkEA, 500)
  }
  else if(worker2S2 == 1){
   document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D2.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker2S1 = 1
   worker2S2 = 0
   setTimeout(worker2WalkEA, 500)
  }

  }
  else{
   document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D2.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker2S1 = 1
   worker2S2 = 0
  }


}


function worker3WalkEA(){
  if(worker3position == "moving"){

  if(worker3S1 == 1){
  document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B1.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker3S1 = 0
   worker3S2 = 1
   setTimeout(worker3WalkEA, 500)
  }
  else if(worker3S2 == 1){
   document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D3.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker3S1 = 1
   worker3S2 = 0
   setTimeout(worker3WalkEA, 500)
  }

  }
  else{
   document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D3.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker3S1 = 1
   worker3S2 = 0
  }


}

function worker4WalkEA(){
  if(worker4position == "moving"){

  if(worker4S1 == 1){
  document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/C4.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker4S1 = 0
   worker4S2 = 1
   setTimeout(worker4WalkEA, 500)
  }
  else if(worker4S2 == 1){
   document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D5.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker4S1 = 1
   worker4S2 = 0
   setTimeout(worker4WalkEA, 500)
  }

  }
  else{
   document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/D5.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker4S1 = 1
   worker4S2 = 0
  }


}
function worker1WalkWA(){
  if(worker1position == "moving"){

  if(worker1S1 == 1){
  document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/C7.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker1S1 = 0
   worker1S2 = 1
   setTimeout(worker1WalkWA, 500)
  }
  else if(worker1S2 == 1){
   document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B6.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker1S1 = 1
   worker1S2 = 0
   setTimeout(worker1WalkWA, 500)
  }

  }
  else{
   document.getElementById("worker1").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B6.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker1S1 = 1
   worker1S2 = 0
  }




}

function worker2WalkWA(){
  if(worker2position == "moving"){

  if(worker2S1 == 1){
  document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B2.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker2S1 = 0
   worker2S2 = 1
   setTimeout(worker2WalkWA, 500)
  }
  else if(worker2S2 == 1){
   document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A1.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker2S1 = 1
   worker2S2 = 0
   setTimeout(worker2WalkWA, 500)
  }

  }
  else{
   document.getElementById("worker2").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A1.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker2S1 = 1
   worker2S2 = 0
  }


}

function worker3WalkWA(){
  if(worker3position == "moving"){

  if(worker3S1 == 1){
  document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A9.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker3S1 = 0
   worker3S2 = 1
   setTimeout(worker3WalkWA, 500)
  }
  else if(worker3S2 == 1){
   document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A2.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker3S1 = 1
   worker3S2 = 0
   setTimeout(worker3WalkWA, 500)
  }

  }
  else{
   document.getElementById("worker3").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/A2.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker3S1 = 1
   worker3S2 = 0
  }




}

function worker4WalkWA(){
  if(worker4position == "moving"){

  if(worker4S1 == 1){
  document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/C3.png")
  // document.getElementById("worker1").setAttribute('href', 'Images/female wood 2 step l.png')
   worker4S1 = 0
   worker4S2 = 1
   setTimeout(worker4WalkWA, 500)
  }
  else if(worker4S2 == 1){
   document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B4.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker4S1 = 1
   worker4S2 = 0
   setTimeout(worker4WalkWA, 500)
  }

  }
  else{
   document.getElementById("worker4").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "Worker-models/B4.png")

  // document.getElementById("worker1").setAttribute("href", "Images/female wood 2.png")
   worker4S1 = 1
   worker4S2 = 0
  }




}






function send(){
  //down
  if(choiceLock == 1){
    alert("You must deal with the business at hand before continuing on with other things..")
  }
  if(choiceLock == 0){
    if(wagonCastle == 1 && wagonPosition1 == "market"){
      travelDur = 10
 raid()
}
 if(wagonCastle == 1 && wagonPosition1 == "market"){
   document.getElementById("wagon1MoveX").setAttribute("from", 435)
  document.getElementById("wagon1MoveX").setAttribute("to", 450)
   document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

  document.getElementById("wagon1MoveY").setAttribute("from", 110)
  document.getElementById("wagon1MoveY").setAttribute("to", 350)
  document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 450)
  document.getElementById("supplyWagon1").setAttribute("y", 350)

  wagonPosition1 = "moving"

  var wagonTakeW = setTimeout(depositResources, travelDur * 1000)
 }



 if(wagonPosition1 == "castle" && castleGold >= 100 && wagonBuyO == 1 || wagonBuyW == 1){
 travelDur = 10
 buyLock = 1
 takeGoldCastle()
 raid()
 }
 else if(wagonPosition1 == "castle" && wagonSellW == 1 && castleWood >= 100){
 travelDur = 10
 sellWoodLock = 1
 takeWoodCastle()
 raid()
 }
 else if(wagonPosition1 == "castle" && wagonSellO == 1  && castleOre >= 100){
 travelDur = 10
 sellOreLock = 1
 takeOreCastle()
 raid()
 }
 if(wagonBuyO == 1 && wagonPosition1 == "castle" && buyLock == 1){
   document.getElementById("wagon1MoveX").setAttribute("from", 450)
  document.getElementById("wagon1MoveX").setAttribute("to", 435)
   document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

  document.getElementById("wagon1MoveY").setAttribute("from", 350)
  document.getElementById("wagon1MoveY").setAttribute("to", 110)
  document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 435)
  document.getElementById("supplyWagon1").setAttribute("y", 111)

  wagonPosition1 = "moving"
buyLock = 0
  var wagonTakeW = setTimeout(tradeOreB, travelDur * 1000)
 }

  if( wagonSellO == 1 && wagonPosition1 == "castle" && sellOreLock == 1){
   document.getElementById("wagon1MoveX").setAttribute("from", 450)
  document.getElementById("wagon1MoveX").setAttribute("to", 435)
   document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

  document.getElementById("wagon1MoveY").setAttribute("from", 350)
  document.getElementById("wagon1MoveY").setAttribute("to", 110)
  document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 435)
  document.getElementById("supplyWagon1").setAttribute("y", 111)

  wagonPosition1 = "moving"
sellOreLock = 0
  var wagonTakeW = setTimeout(tradeOreS, travelDur * 1000)
 }
 if(wagonBuyW == 1 && wagonPosition1 == "castle" && buyLock == 1){
   document.getElementById("wagon1MoveX").setAttribute("from", 450)
  document.getElementById("wagon1MoveX").setAttribute("to", 435)
   document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

  document.getElementById("wagon1MoveY").setAttribute("from", 350)
  document.getElementById("wagon1MoveY").setAttribute("to", 110)
  document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 435)
  document.getElementById("supplyWagon1").setAttribute("y", 111)

  wagonPosition1 = "moving"
buyLock = 0
  var wagonTakeW = setTimeout(tradeWoodB, travelDur * 1000)
 }
if(wagonSellW == 1 && wagonPosition1 == "castle" && sellWoodLock == 1){
  document.getElementById("wagon1MoveX").setAttribute("from", 450)
 document.getElementById("wagon1MoveX").setAttribute("to", 435)
  document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

 document.getElementById("wagon1MoveY").setAttribute("from", 350)
 document.getElementById("wagon1MoveY").setAttribute("to", 110)
 document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

  document.getElementById("wagon1MoveX").beginElement()
 document.getElementById("wagon1MoveY").beginElement()

 document.getElementById("supplyWagon1").setAttribute("x", 435)
 document.getElementById("supplyWagon1").setAttribute("y", 111)

 wagonPosition1 = "moving"
sellWoodLock = 0
 var wagonTakeW = setTimeout(tradeWoodS, travelDur * 1000)
}



  // if(castleWorker1 == 1 && worker1position == "forest"){
  //
  //     document.getElementById("worker1moveX").setAttribute("from", 800)
  //   document.getElementById("worker1moveX").setAttribute("to", 410)
  //   document.getElementById("worker1moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker1moveY").setAttribute("from", 250)
  //   document.getElementById("worker1moveY").setAttribute("to", 320)
  //   document.getElementById("worker1moveY").setAttribute("dur", 10)
  //   document.getElementById("worker1moveX").beginElement()
  //   document.getElementById("worker1moveY").beginElement()
  //   document.getElementById("worker1").setAttribute("cx", 410)
  //   document.getElementById("worker1").setAttribute("cy", 320)
  //   castleWorker1 = 0
  //   worker1position = "moving"
  //   var startMine1 = setTimeout(worker1castle, 10000)
  //   }
  //   if(castleWorker2 == 1 && worker2position == "forest"){
  //     document.getElementById("worker2moveX").setAttribute("from", 800)
  //   document.getElementById("worker2moveX").setAttribute("to", 440)
  //   document.getElementById("worker2moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker2moveY").setAttribute("from", 280)
  //   document.getElementById("worker2moveY").setAttribute("to", 320)
  //   document.getElementById("worker2moveY").setAttribute("dur", 10)
  //   document.getElementById("worker2moveX").beginElement()
  //   document.getElementById("worker2moveY").beginElement()
  //   document.getElementById("worker2").setAttribute("cx", 440)
  //   document.getElementById("worker2").setAttribute("cy", 320)
  //   castleWorker2 = 0
  //   worker2position = "moving"
  //   setTimeout(worker2castle, 10000)
  //
  //   }
  //   if(castleWorker3 == 1 && worker3position == "forest"){
  //      document.getElementById("worker3moveX").setAttribute("from", 800)
  //   document.getElementById("worker3moveX").setAttribute("to", 470)
  //   document.getElementById("worker3moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker3moveY").setAttribute("from", 310)
  //   document.getElementById("worker3moveY").setAttribute("to", 320)
  //   document.getElementById("worker3moveY").setAttribute("dur", 10)
  //   document.getElementById("worker3moveX").beginElement()
  //   document.getElementById("worker3moveY").beginElement()
  //   document.getElementById("worker3").setAttribute("cx", 470)
  //   document.getElementById("worker3").setAttribute("cy", 320)
  //   castleWorker3 = 0
  //   worker3position = "moving"
  //   setTimeout(worker3castle, 10000)
  //   }
  //   //down
  //   if(castleWorker4 == 1 && worker4position == "forest"){
  //     document.getElementById("worker4moveX").setAttribute("from", 800)
  //   document.getElementById("worker4moveX").setAttribute("to", 500)
  //   document.getElementById("worker4moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker4moveY").setAttribute("from", 340)
  //   document.getElementById("worker4moveY").setAttribute("to", 320)
  //   document.getElementById("worker4moveY").setAttribute("dur", 10)
  //   document.getElementById("worker4moveX").beginElement()
  //   document.getElementById("worker4moveY").beginElement()
  //   document.getElementById("worker4").setAttribute("cx", 500)
  //   document.getElementById("worker4").setAttribute("cy", 320)
  //   castleWorker4 = 0
  //   worker4position = "moving"
  //   setTimeout(worker4castle, 10000)
  //
  //   }


  //up
  //down
if(wagonCastle == 1 && wagonPosition1 == "forest"){
travelDur = 15
raid()
}

  if(wagonWorker1 == 1 && worker1position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){

    wagonDefence += 1

      document.getElementById("worker1moveX").setAttribute("from", 780)
    document.getElementById("worker1moveX").setAttribute("to", 390)
    document.getElementById("worker1moveX").setAttribute("dur", travelDur)

    document.getElementById("worker1moveY").setAttribute("from", 250)
    document.getElementById("worker1moveY").setAttribute("to", 310)
    document.getElementById("worker1moveY").setAttribute("dur", travelDur)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("x", 390)
    document.getElementById("worker1").setAttribute("y", 310)
    // wagonWorker1 = 0
    worker1position = "moving"
    worker1WalkWA()
    var startMine1 = setTimeout(worker1castle, travelDur * 1000)
    }
    if(wagonWorker2 == 1 && worker2position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
      document.getElementById("worker2moveX").setAttribute("from", 780)
    document.getElementById("worker2moveX").setAttribute("to", 420)
    document.getElementById("worker2moveX").setAttribute("dur", travelDur)

    document.getElementById("worker2moveY").setAttribute("from", 285)
    document.getElementById("worker2moveY").setAttribute("to", 310)
    document.getElementById("worker2moveY").setAttribute("dur", travelDur)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("x", 420)
    document.getElementById("worker2").setAttribute("y", 310)
    // wagonWorker2 = 0
    worker2position = "moving"
    worker2WalkWA()
    setTimeout(worker2castle, travelDur * 1000)

    }
    if(wagonWorker3 == 1 && worker3position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
       document.getElementById("worker3moveX").setAttribute("from", 780)
    document.getElementById("worker3moveX").setAttribute("to", 450)
    document.getElementById("worker3moveX").setAttribute("dur", travelDur)

    document.getElementById("worker3moveY").setAttribute("from", 320)
    document.getElementById("worker3moveY").setAttribute("to", 310)
    document.getElementById("worker3moveY").setAttribute("dur", travelDur)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("x", 450)
    document.getElementById("worker3").setAttribute("y", 310)
    // wagonWorker3 = 0
    worker3position = "moving"
    worker3WalkWA()
    setTimeout(worker3castle, travelDur * 1000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
      document.getElementById("worker4moveX").setAttribute("from", 780)
    document.getElementById("worker4moveX").setAttribute("to", 480)
    document.getElementById("worker4moveX").setAttribute("dur", travelDur)

    document.getElementById("worker4moveY").setAttribute("from", 355)
    document.getElementById("worker4moveY").setAttribute("to", 310)
    document.getElementById("worker4moveY").setAttribute("dur", travelDur)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("x", 480)
    document.getElementById("worker4").setAttribute("y", 310)
    // wagonWorker4 = 0
    worker4position = "moving"
    worker4WalkWA()
    setTimeout(worker4castle, travelDur * 1000)

    }
    if(wagonCastle == 1 && wagonPosition1 == "forest"){
      // raid()

      document.getElementById("wagon1MoveX").setAttribute("from", 760)
      document.getElementById("wagon1MoveX").setAttribute("to", 450)
      document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

      document.getElementById("wagon1MoveY").setAttribute("from", 280)
      document.getElementById("wagon1MoveY").setAttribute("to", 350)
      document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

      document.getElementById("wagon1MoveX").beginElement()
      document.getElementById("wagon1MoveY").beginElement()

      document.getElementById("supplyWagon1").setAttribute("x", 450)
      document.getElementById("supplyWagon1").setAttribute("y", 350)

      wagonCastle = 0
      wagonPosition1 = "moving"
      wagonPosition1D = "forest"
      var depoOre = setTimeout(depositResources, travelDur * 1000)

    }


  //up



  if(wagonForest == 1 && wagonPosition1 == "castle"){
  travelDur = 15
  raid()
  }
   if(wagonWorker1 == 1 && worker1position == "castle" && wagonForest == 1 && wagonPosition1 == "castle" ){

      document.getElementById("worker1moveX").setAttribute("from", 390)
    document.getElementById("worker1moveX").setAttribute("to", 780)
    document.getElementById("worker1moveX").setAttribute("dur", travelDur)

    document.getElementById("worker1moveY").setAttribute("from", 310)
    document.getElementById("worker1moveY").setAttribute("to", 250)
    document.getElementById("worker1moveY").setAttribute("dur", travelDur)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("x", 780)
    document.getElementById("worker1").setAttribute("y", 250)
    // wagonWorker1 = 0
    worker1position = "moving"
    // worker1Walk()
    worker1WalkEA()
    var startMine1 = setTimeout(worker1cutting, travelDur * 1000)
    }
  if(wagonWorker2 == 1 && worker2position == "castle" && wagonForest == 1 && wagonPosition1 == "castle"){
     document.getElementById("worker2moveX").setAttribute("from", 420)
    document.getElementById("worker2moveX").setAttribute("to", 780)
    document.getElementById("worker2moveX").setAttribute("dur", travelDur)

    document.getElementById("worker2moveY").setAttribute("from", 310)
    document.getElementById("worker2moveY").setAttribute("to", 285)
    document.getElementById("worker2moveY").setAttribute("dur", travelDur)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("x", 780)
    document.getElementById("worker2").setAttribute("y", 285)
    // wagonWorker2 = 0

    worker2position = "moving"
    worker2WalkEA()
    var startMine1 = setTimeout(worker2cutting, travelDur * 1000)
  }
   if(wagonWorker3 == 1 && worker3position == "castle" && wagonForest == 1 && wagonPosition1 == "castle"){
     document.getElementById("worker3moveX").setAttribute("from", 450)
    document.getElementById("worker3moveX").setAttribute("to", 780)
    document.getElementById("worker3moveX").setAttribute("dur", travelDur)

    document.getElementById("worker3moveY").setAttribute("from", 310)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", travelDur)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("x", 780)
    document.getElementById("worker3").setAttribute("y", 320)
    // wagonWorker3 = 0
    worker3position = "moving"
    worker3WalkEA()
     var startMine1 = setTimeout(worker3cutting, travelDur * 1000)
  }
   if(wagonWorker4 == 1 && worker4position == "castle" && wagonForest == 1 && wagonPosition1 == "castle"){
     document.getElementById("worker4moveX").setAttribute("from", 480)
    document.getElementById("worker4moveX").setAttribute("to", 780)
    document.getElementById("worker4moveX").setAttribute("dur", travelDur)

    document.getElementById("worker4moveY").setAttribute("from", 310)
    document.getElementById("worker4moveY").setAttribute("to", 355)
    document.getElementById("worker4moveY").setAttribute("dur", travelDur)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("x", 780)
    document.getElementById("worker4").setAttribute("y", 355)
    // wagonWorker4 = 0
    worker4position = "moving"
    worker4WalkEA()
     var startMine1 = setTimeout(worker4cutting, travelDur)
  }
  if(wagonForest == 1 && wagonPosition1 == "castle"){
     document.getElementById("wagon1MoveX").setAttribute("from", 450)
    document.getElementById("wagon1MoveX").setAttribute("to", 760)
     document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

    document.getElementById("wagon1MoveY").setAttribute("from", 350)
    document.getElementById("wagon1MoveY").setAttribute("to", 280)
    document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

     document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 760)
    document.getElementById("supplyWagon1").setAttribute("y", 280)

    wagonPosition1 = "moving"

    var wagonTakeW = setTimeout(takeWoodForest, travelDur * 1000)
  }
  //normal
  //  if(forestWorker1 == 1 && worker1position == "castle"){
  //
  //     document.getElementById("worker1moveX").setAttribute("from", 410)
  //   document.getElementById("worker1moveX").setAttribute("to", 800)
  //   document.getElementById("worker1moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker1moveY").setAttribute("from", 320)
  //   document.getElementById("worker1moveY").setAttribute("to", 250)
  //   document.getElementById("worker1moveY").setAttribute("dur", 10)
  //   document.getElementById("worker1moveX").beginElement()
  //   document.getElementById("worker1moveY").beginElement()
  //   document.getElementById("worker1").setAttribute("cx", 800)
  //   document.getElementById("worker1").setAttribute("cy", 250)
  //   wagonWorker1 = 0
  //   worker1position = "moving"
  //  var startMine1 = setTimeout(worker1cutting, 10000)
  //   }
  // if(forestWorker2 == 1 && worker2position == "castle"){
  //    document.getElementById("worker2moveX").setAttribute("from", 440)
  //   document.getElementById("worker2moveX").setAttribute("to", 800)
  //   document.getElementById("worker2moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker2moveY").setAttribute("from", 320)
  //   document.getElementById("worker2moveY").setAttribute("to", 280)
  //   document.getElementById("worker2moveY").setAttribute("dur", 10)
  //   document.getElementById("worker2moveX").beginElement()
  //   document.getElementById("worker2moveY").beginElement()
  //   document.getElementById("worker2").setAttribute("cx", 800)
  //   document.getElementById("worker2").setAttribute("cy", 280)
  //   wagonWorker2 = 0
  //   worker2position = "moving"
  //   var startMine1 = setTimeout(worker2cutting, 10000)
  // }
  //  if(forestWorker3 == 1 && worker3position == "castle"){
  //    document.getElementById("worker3moveX").setAttribute("from", 470)
  //   document.getElementById("worker3moveX").setAttribute("to", 800)
  //   document.getElementById("worker3moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker3moveY").setAttribute("from", 320)
  //   document.getElementById("worker3moveY").setAttribute("to", 310)
  //   document.getElementById("worker3moveY").setAttribute("dur", 10)
  //   document.getElementById("worker3moveX").beginElement()
  //   document.getElementById("worker3moveY").beginElement()
  //   document.getElementById("worker3").setAttribute("cx", 800)
  //   document.getElementById("worker3").setAttribute("cy", 310)
  //   wagonWorker3 = 0
  //   worker3position = "moving"
  //    var startMine1 = setTimeout(worker3cutting, 10000)
  // }
  //  if(forestWorker4 == 1 && worker4position == "castle"){
  //    document.getElementById("worker4moveX").setAttribute("from", 500)
  //   document.getElementById("worker4moveX").setAttribute("to", 800)
  //   document.getElementById("worker4moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker4moveY").setAttribute("from", 320)
  //   document.getElementById("worker4moveY").setAttribute("to", 340)
  //   document.getElementById("worker4moveY").setAttribute("dur", 10)
  //   document.getElementById("worker4moveX").beginElement()
  //   document.getElementById("worker4moveY").beginElement()
  //   document.getElementById("worker4").setAttribute("cx", 800)
  //   document.getElementById("worker4").setAttribute("cy", 340)
  //   // wagonWorker4 = 0
  //   worker4position = "moving"
  //    var startMine1 = setTimeout(worker4cutting, 10000)
  // }
  //normal ^

  if(wagonMountains1 == 1 && wagonPosition1 == "mountains"){
    takeOreMountains()
  }
  if(wagonForest == 1 && wagonPosition1 == "forest"){
    takeWoodForest()

  }
  if(wagonMountains1 == 1 && wagonPosition1 == "castle"){
  travelDur = 15
  raid()
  console.log(travelDur)
  }
    if(wagonWorker1 == 1 && worker1position == "castle" && wagonMountains1 == 1 && wagonPosition1 == "castle"){

      document.getElementById("worker1moveX").setAttribute("from", 390)
    document.getElementById("worker1moveX").setAttribute("to", 20)
    document.getElementById("worker1moveX").setAttribute("dur", travelDur)

    document.getElementById("worker1moveY").setAttribute("from", 310)
    document.getElementById("worker1moveY").setAttribute("to", 440)
    document.getElementById("worker1moveY").setAttribute("dur", travelDur)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("x", 20)
    document.getElementById("worker1").setAttribute("y", 440)
    worker1position = "moving"
    worker1WalkWP()
    var startMine1 = setTimeout(worker1mining, travelDur * 1000)
    }
    if(wagonWorker2 == 1 && worker2position == "castle" && wagonMountains1 == 1 && wagonPosition1 == "castle"){
      document.getElementById("worker2moveX").setAttribute("from", 420)
    document.getElementById("worker2moveX").setAttribute("to", 50)
    document.getElementById("worker2moveX").setAttribute("dur", travelDur)

    document.getElementById("worker2moveY").setAttribute("from", 310)
    document.getElementById("worker2moveY").setAttribute("to", 440)
    document.getElementById("worker2moveY").setAttribute("dur", travelDur)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("x", 50)
    document.getElementById("worker2").setAttribute("y", 440)
    worker2position = "moving"
    worker2WalkWP()
    setTimeout(worker2mining, travelDur * 1000)

    }
    if(wagonWorker3 == 1 && worker3position == "castle" && wagonMountains1 == 1 && wagonPosition1 == "castle"){
       document.getElementById("worker3moveX").setAttribute("from", 450)
    document.getElementById("worker3moveX").setAttribute("to", 80)
    document.getElementById("worker3moveX").setAttribute("dur", travelDur)

    document.getElementById("worker3moveY").setAttribute("from", 310)
    document.getElementById("worker3moveY").setAttribute("to", 440)
    document.getElementById("worker3moveY").setAttribute("dur", travelDur)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("x", 80)
    document.getElementById("worker3").setAttribute("y", 440)
    worker3position = "moving"
    worker3WalkWP()
    setTimeout(worker3mining, travelDur * 1000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "castle" && wagonMountains1 == 1 && wagonPosition1 == "castle"){
      document.getElementById("worker4moveX").setAttribute("from", 480)
    document.getElementById("worker4moveX").setAttribute("to", 110)
    document.getElementById("worker4moveX").setAttribute("dur", travelDur)

    document.getElementById("worker4moveY").setAttribute("from", 310)
    document.getElementById("worker4moveY").setAttribute("to", 440)
    document.getElementById("worker4moveY").setAttribute("dur", travelDur)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("x", 110)
    document.getElementById("worker4").setAttribute("y", 440)

    worker4position = "moving"
    worker4WalkWP()
    setTimeout(worker4mining, travelDur * 1000)

    }
    if(wagonMountains1 == 1 && wagonPosition1 == "castle"){
      document.getElementById("wagon1MoveX").setAttribute("from", 450)
      document.getElementById("wagon1MoveX").setAttribute("to", 70)
      document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

      document.getElementById("wagon1MoveY").setAttribute("from", 350)
      document.getElementById("wagon1MoveY").setAttribute("to", 480)
      document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

      document.getElementById("wagon1MoveX").beginElement()
      document.getElementById("wagon1MoveY").beginElement()

      document.getElementById("supplyWagon1").setAttribute("x", 70)
      document.getElementById("supplyWagon1").setAttribute("y", 480)


      wagonPosition1 = "moving"
      var startTakeOreM = setTimeout(takeOreMountains, travelDur * 1000)

    }
  //down send back to castle
  if(wagonCastle == 1 && wagonPosition1 == "mountains"){
  travelDur = 15
  raid()
  }
  if(wagonWorker1 == 1 && worker1position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker1moveX").setAttribute("from", 20)
    document.getElementById("worker1moveX").setAttribute("to", 390)
    document.getElementById("worker1moveX").setAttribute("dur", travelDur)

    document.getElementById("worker1moveY").setAttribute("from", 440)
    document.getElementById("worker1moveY").setAttribute("to", 310)
    document.getElementById("worker1moveY").setAttribute("dur", travelDur)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("x", 390)
    document.getElementById("worker1").setAttribute("y", 310)
    worker1position = "moving"
    worker1WalkEP()
    var startMine1 = setTimeout(worker1castle, travelDur * 1000)
    }
    if(wagonWorker2 == 1 && worker2position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker2moveX").setAttribute("from", 50)
    document.getElementById("worker2moveX").setAttribute("to", 420)
    document.getElementById("worker2moveX").setAttribute("dur", travelDur)

    document.getElementById("worker2moveY").setAttribute("from", 440)
    document.getElementById("worker2moveY").setAttribute("to", 310)
    document.getElementById("worker2moveY").setAttribute("dur", travelDur)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("x", 420)
    document.getElementById("worker2").setAttribute("y", 310)
    worker2position = "moving"
    worker2WalkEP()
    setTimeout(worker2castle, travelDur * 1000)

    }
    if(wagonWorker3 == 1 && worker3position == "mountains" && wagonCastle == 1 && wagonPosition1=="mountains"){
       document.getElementById("worker3moveX").setAttribute("from", 80)
    document.getElementById("worker3moveX").setAttribute("to", 450)
    document.getElementById("worker3moveX").setAttribute("dur", travelDur)

    document.getElementById("worker3moveY").setAttribute("from", 440)
    document.getElementById("worker3moveY").setAttribute("to", 310)
    document.getElementById("worker3moveY").setAttribute("dur", travelDur)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("x", 450)
    document.getElementById("worker3").setAttribute("y", 310)
    worker3position = "moving"
    worker3WalkEP()
    setTimeout(worker3castle, travelDur * 1000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker4moveX").setAttribute("from", 110)
    document.getElementById("worker4moveX").setAttribute("to", 480)
    document.getElementById("worker4moveX").setAttribute("dur", travelDur)

    document.getElementById("worker4moveY").setAttribute("from", 440)
    document.getElementById("worker4moveY").setAttribute("to", 310)
    document.getElementById("worker4moveY").setAttribute("dur", travelDur)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("x", 480)
    document.getElementById("worker4").setAttribute("y", 310)
    worker4position = "moving"
    setTimeout(worker4castle, travelDur * 1000)

    }
  if(wagonCastle == 1 && wagonPosition1 == "mountains"){
    document.getElementById("wagon1MoveX").setAttribute("from", 70)
    document.getElementById("wagon1MoveX").setAttribute("to", 450)
    document.getElementById("wagon1MoveX").setAttribute("dur", travelDur)

    document.getElementById("wagon1MoveY").setAttribute("from", 480)
    document.getElementById("wagon1MoveY").setAttribute("to", 350)
    document.getElementById("wagon1MoveY").setAttribute("dur", travelDur)

    document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 450)
    document.getElementById("supplyWagon1").setAttribute("y", 350)

    wagonCastle = 0
    wagonPosition1 = "moving"
    var depoOre = setTimeout(depositResources, travelDur * 1000)

  }
  //up

//down fishing camp

  if(wagonWorker1 == 1 && worker1position == "castle" && wagonOcean == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker1moveX").setAttribute("from", 40)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 15)

    document.getElementById("worker1moveY").setAttribute("from", 450)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 15)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("x", 410)
    document.getElementById("worker1").setAttribute("y", 320)
    worker1position = "moving"
    var startMine1 = setTimeout(worker1castle, 15000)
    }
    if(wagonWorker2 == 1 && worker2position == "mountains" && wagonOcean == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker2moveX").setAttribute("from", 70)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 15)

    document.getElementById("worker2moveY").setAttribute("from", 450)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 15)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("x", 440)
    document.getElementById("worker2").setAttribute("y", 320)
    worker2position = "moving"
    setTimeout(worker2castle, 15000)

    }
    if(wagonWorker3 == 1 && worker3position == "mountains" && wagonOcean == 1 && wagonPosition1=="mountains"){
       document.getElementById("worker3moveX").setAttribute("from", 100)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 15)

    document.getElementById("worker3moveY").setAttribute("from", 450)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 15)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("x", 470)
    document.getElementById("worker3").setAttribute("y", 320)
    worker3position = "moving"
    setTimeout(worker3castle, 15000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "mountains" && wagonOcean == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker4moveX").setAttribute("from", 130)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 15)

    document.getElementById("worker4moveY").setAttribute("from", 450)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 15)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("x", 500)
    document.getElementById("worker4").setAttribute("y", 320)
    worker4position = "moving"
    setTimeout(worker4castle, 15000)

    }
  if(wagonOcean == 1 && wagonPosition1 == "mountains"){
    document.getElementById("wagon1MoveX").setAttribute("from", 70)
    document.getElementById("wagon1MoveX").setAttribute("to", 450)
    document.getElementById("wagon1MoveX").setAttribute("dur", 15)

    document.getElementById("wagon1MoveY").setAttribute("from", 480)
    document.getElementById("wagon1MoveY").setAttribute("to", 350)
    document.getElementById("wagon1MoveY").setAttribute("dur", 15)

    document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 450)
    document.getElementById("supplyWagon1").setAttribute("y", 350)

    wagonCastle = 0
    wagonPosition1 = "moving"
    // var depoOre = setTimeout(depositOre, 15000)

  }


//   if(mountainWorker1 == 1 && worker1position == "castle" ){
//     document.getElementById("worker1moveX").setAttribute("from", 410)
//     document.getElementById("worker1moveX").setAttribute("to", 40)
//     document.getElementById("worker1moveX").setAttribute("dur", 10)
//
//     document.getElementById("worker1moveY").setAttribute("from", 320)
//     document.getElementById("worker1moveY").setAttribute("to", 450)
//     document.getElementById("worker1moveY").setAttribute("dur", 10)
//     document.getElementById("worker1moveX").beginElement()
//     document.getElementById("worker1moveY").beginElement()
//     document.getElementById("worker1").setAttribute("cx", 40)
//     document.getElementById("worker1").setAttribute("cy", 450)
//     mountainWorker1 = 0
//     worker1position = "moving"
//     var startMine1 = setTimeout(worker1mining, 10000)
//
//   }
//
//   if(mountainWorker2 == 1 && worker2position == "castle" ){
//     document.getElementById("worker2moveX").setAttribute("from", 440)
//     document.getElementById("worker2moveX").setAttribute("to", 70)
//     document.getElementById("worker2moveX").setAttribute("dur", 10)
//
//     document.getElementById("worker2moveY").setAttribute("from", 320)
//     document.getElementById("worker2moveY").setAttribute("to", 450)
//     document.getElementById("worker2moveY").setAttribute("dur", 10)
//     document.getElementById("worker2moveX").beginElement()
//     document.getElementById("worker2moveY").beginElement()
//     document.getElementById("worker2").setAttribute("cx", 70)
//     document.getElementById("worker2").setAttribute("cy", 450)
//     mountainWorker2 = 0
//     worker2position = "moving"
//     setTimeout(worker2mining, 10000)
//
//   }
//
//   if(mountainWorker3 == 1 && worker3position == "castle" ){
//     document.getElementById("worker3moveX").setAttribute("from", 470)
//     document.getElementById("worker3moveX").setAttribute("to", 100)
//     document.getElementById("worker3moveX").setAttribute("dur", 10)
//
//     document.getElementById("worker3moveY").setAttribute("from", 320)
//     document.getElementById("worker3moveY").setAttribute("to", 450)
//     document.getElementById("worker3moveY").setAttribute("dur", 10)
//     document.getElementById("worker3moveX").beginElement()
//     document.getElementById("worker3moveY").beginElement()
//     document.getElementById("worker3").setAttribute("cx", 100)
//     document.getElementById("worker3").setAttribute("cy", 450)
//     mountainWorker3 = 0
//     worker3position = "moving"
//     setTimeout(worker3mining, 10000)
//
//   }
// if(mountainWorker4 == 1 && worker4position == "castle" ){
//     document.getElementById("worker4moveX").setAttribute("from", 500)
//     document.getElementById("worker4moveX").setAttribute("to", 130)
//     document.getElementById("worker4moveX").setAttribute("dur", 10)
//
//     document.getElementById("worker4moveY").setAttribute("from", 320)
//     document.getElementById("worker4moveY").setAttribute("to", 450)
//     document.getElementById("worker4moveY").setAttribute("dur", 10)
//     document.getElementById("worker4moveX").beginElement()
//     document.getElementById("worker4moveY").beginElement()
//     document.getElementById("worker4").setAttribute("cx", 130)
//     document.getElementById("worker4").setAttribute("cy", 450)
//     mountainWorker4 = 0
//     worker4position = "moving"
//     setTimeout(worker4mining, 10000)
//
//   }
//
  // if(castleWorker1 == 1 && worker1position == "mountains"){
  //   document.getElementById("worker1moveX").setAttribute("from", 40)
  //   document.getElementById("worker1moveX").setAttribute("to", 410)
  //   document.getElementById("worker1moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker1moveY").setAttribute("from", 450)
  //   document.getElementById("worker1moveY").setAttribute("to", 320)
  //   document.getElementById("worker1moveY").setAttribute("dur", 10)
  //   document.getElementById("worker1moveX").beginElement()
  //   document.getElementById("worker1moveY").beginElement()
  //   document.getElementById("worker1").setAttribute("cx", 410)
  //   document.getElementById("worker1").setAttribute("cy", 320)
  //   castleWorker1 = 0
  //   worker1position = "moving"
  //   setTimeout(worker1castle, 10000)
  //   clearTimeout(startMine1);
  // }
  //
  //
  // if(castleWorker2 == 1 && worker2position == "mountains"){
  //   document.getElementById("worker2moveX").setAttribute("from", 70)
  //   document.getElementById("worker2moveX").setAttribute("to", 440)
  //   document.getElementById("worker2moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker2moveY").setAttribute("from", 450)
  //   document.getElementById("worker2moveY").setAttribute("to", 320)
  //   document.getElementById("worker2moveY").setAttribute("dur", 10)
  //   document.getElementById("worker2moveX").beginElement()
  //   document.getElementById("worker2moveY").beginElement()
  //   document.getElementById("worker2").setAttribute("cx", 440)
  //   document.getElementById("worker2").setAttribute("cy", 320)
  //   castleWorker2 = 0
  //   worker2position = "moving"
  //   setTimeout(worker2castle, 10000)
  //   clearTimeout(startMine1);
  // }
  //
  //
  //
  //  if(castleWorker3 == 1 && worker3position == "mountains"){
  //   document.getElementById("worker3moveX").setAttribute("from", 100)
  //   document.getElementById("worker3moveX").setAttribute("to", 470)
  //   document.getElementById("worker3moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker3moveY").setAttribute("from", 450)
  //   document.getElementById("worker3moveY").setAttribute("to", 320)
  //   document.getElementById("worker3moveY").setAttribute("dur", 10)
  //   document.getElementById("worker3moveX").beginElement()
  //   document.getElementById("worker3moveY").beginElement()
  //   document.getElementById("worker3").setAttribute("cx", 470)
  //   document.getElementById("worker3").setAttribute("cy", 320)
  //   castleWorker3 = 0
  //   worker3position = "moving"
  //   setTimeout(worker3castle, 10000)
  //   clearTimeout(startMine1);
  // }
  //
  //
  // if(castleWorker4 == 1 && worker4position == "mountains"){
  //   document.getElementById("worker4moveX").setAttribute("from", 130)
  //   document.getElementById("worker4moveX").setAttribute("to", 500)
  //   document.getElementById("worker4moveX").setAttribute("dur", 10)
  //
  //   document.getElementById("worker4moveY").setAttribute("from", 450)
  //   document.getElementById("worker4moveY").setAttribute("to", 320)
  //   document.getElementById("worker4moveY").setAttribute("dur", 10)
  //   document.getElementById("worker4moveX").beginElement()
  //   document.getElementById("worker4moveY").beginElement()
  //   document.getElementById("worker4").setAttribute("cx", 500)
  //   document.getElementById("worker4").setAttribute("cy", 320)
  //   castleWorker4 = 0
  //   worker4position = "moving"
  //   setTimeout(worker4castle, 10000)
  //   clearTimeout(startMine1);
  // }


}
}
function evacForest(){
  if(worker1position == "forest"){

      document.getElementById("worker1moveX").setAttribute("from", 800)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 23)

    document.getElementById("worker1moveY").setAttribute("from", 250)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 23)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("x", 410)
    document.getElementById("worker1").setAttribute("y", 320)
    castleWorker1 = 0
    worker1position = "moving"
    var startMine1 = setTimeout(worker1castle, 23000)
    }
    if(worker2position == "forest"){
      document.getElementById("worker2moveX").setAttribute("from", 800)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 23)

    document.getElementById("worker2moveY").setAttribute("from", 280)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 23)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("x", 440)
    document.getElementById("worker2").setAttribute("y", 320)
    castleWorker2 = 0
    worker2position = "moving"
    setTimeout(worker2castle, 23000)

    }
    if(worker3position == "forest"){
       document.getElementById("worker3moveX").setAttribute("from", 800)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 23)

    document.getElementById("worker3moveY").setAttribute("from", 310)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 23)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("x", 470)
    document.getElementById("worker3").setAttribute("y", 320)
    castleWorker3 = 0
    worker3position = "moving"
    setTimeout(worker3castle, 23000)
    }
    //down
    if(worker4position == "forest"){
      document.getElementById("worker4moveX").setAttribute("from", 800)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 23)

    document.getElementById("worker4moveY").setAttribute("from", 340)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 23)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("x", 500)
    document.getElementById("worker4").setAttribute("y", 320)
    castleWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 23000)

    }
}

function evacMount(){

  if(worker1position == "mountains"){

    document.getElementById("worker1moveX").setAttribute("from", 40)
    document.getElementById("worker1moveX").setAttribute("to", 390)
    document.getElementById("worker1moveX").setAttribute("dur", 23)

    document.getElementById("worker1moveY").setAttribute("from", 450)
    document.getElementById("worker1moveY").setAttribute("to", 310)
    document.getElementById("worker1moveY").setAttribute("dur", 23)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("x", 390)
    document.getElementById("worker1").setAttribute("y", 310)
    castleWorker1 = 0
    worker1position = "moving"
    setTimeout(worker1castle, 23000)

  }


  if(worker2position == "mountains"){
    document.getElementById("worker2moveX").setAttribute("from", 70)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 23)

    document.getElementById("worker2moveY").setAttribute("from", 450)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 23)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("x", 440)
    document.getElementById("worker2").setAttribute("y", 320)
    castleWorker2 = 0
    worker2position = "moving"
    setTimeout(worker2castle, 23000)

  }



   if(worker3position == "mountains"){
    document.getElementById("worker3moveX").setAttribute("from", 100)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 23)

    document.getElementById("worker3moveY").setAttribute("from", 450)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 23)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("x", 470)
    document.getElementById("worker3").setAttribute("y", 320)
    castleWorker3 = 0
    worker3position = "moving"
    setTimeout(worker3castle, 23000)

  }


  if(worker4position == "mountains"){
    document.getElementById("worker4moveX").setAttribute("from", 130)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 23)

    document.getElementById("worker4moveY").setAttribute("from", 450)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 23)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("x", 500)
    document.getElementById("worker4").setAttribute("y", 320)
    castleWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 23000)

  }
}

function nbHitMount(){
  var chance = Math.random()
if(worker1position == "mountains" && chance < .80){
  killWorker1()
}
chance = Math.random()
if(worker2position == "mountains" && chance < .80){
  killWorker2()

}
chance = Math.random()
if(worker3position == "mountains" && chance < .80){
  killWorker3()
}
chance = Math.random()
if(worker4position == "mountains" && chance < .80){
  killWorker4()
}

}
function nbHitForest(){
  chance = Math.random()
  if(worker1position == "forest" && chance < .80){
killWorker1()
  }
  chance = Math.random()
  if(worker2position == "forest" && chance < .80){
    killWorker2()
  }
  chance = Math.random()
  if(worker3position == "forest" && chance < .80){
    killWorker3()
  }
  chance = Math.random()
  if(worker4position == "forest" && chance < .80){
    killWorker4()
  }
}
function worker1castle(){
  worker1position = "castle"

}
function worker2castle(){
  worker2position = "castle"
}
function worker3castle(){
  worker3position = "castle"

}
function worker4castle(){
  worker4position = "castle"
}
//cutting down
function worker4cutting(){

  worker4position = "forest"
  if(worker4position == "forest" && cutCheck4 == 0){
  var cut = setInterval(cutting4, 1700)
  cutCheck4 = 1
  }
}

function worker3cutting(){
  worker3position = "forest"
  if(worker3position == "forest" && cutCheck3 == 0){

  var mine = setInterval(cutting3, 1700)
  cutCheck3 = 1
  }
}


function worker2cutting(){

  worker2position = "forest"
  if(worker2position == "forest" && cutCheck2 == 0){

  var mine = setInterval(cutting2, 1700)
  cutCheck2 = 1
  }
}
function worker1cutting(){

  worker1position = "forest"
  if(worker1position == "forest" && cutCheck1 == 0){
  var cut = setInterval(cutting1, 1700)
  cutCheck1 = 1
  }
}



function cutting1(){
  if(worker1position == "forest" && forestWood != 200){

  forestWood +=  axeLVL;

  document.getElementById("displayForestWood").textContent = forestWood;
  }
}
function cutting2(){
  if(worker2position == "forest" && forestWood != 200){
 forestWood +=  axeLVL;
  document.getElementById("displayForestWood").textContent = forestWood;
  }
}
function cutting3(){
  if(worker3position == "forest" && forestWood != 200){
  forestWood +=  axeLVL;
  document.getElementById("displayForestWood").textContent = forestWood;
  }
}
function cutting4(){
  if(worker4position == "forest" && forestWood != 200){
  forestWood +=  axeLVL ;
 document.getElementById("displayForestWood").textContent = forestWood;
  }
}
//cutting ^
function worker4mining(){

  worker4position = "mountains"
  if(worker4position == "mountains" && mineCheck4 == 0){
  var mine = setInterval(mining4, 1700)
  mineCheck4 = 1
  }
}

function worker3mining(){
  worker3position = "mountains"
  if(worker3position == "mountains" && mineCheck3 == 0){

  var mine = setInterval(mining3, 1700)
  mineCheck3 = 1
  }
}


function worker2mining(){
  clearInterval(mine)
  worker2position = "mountains"
  if(worker2position == "mountains" && mineCheck2 == 0){

  var mine = setInterval(mining2, 1700)
  mineCheck2 = 1
  }
}
function worker1mining(){
  clearInterval(mine)
  worker1position = "mountains"
  if(worker1position == "mountains" && mineCheck1 == 0){
  var mine = setInterval(mining1, 1700)
  mineCheck1 = 1
  }
}

function mining1(){
  if(worker1position == "mountains" && mountainOre != 200){

  mountainOre +=  pickLVL;

  document.getElementById("displayMountainOre").textContent = mountainOre;
  }
}
function mining2(){
  if(worker2position == "mountains" && mountainOre != 200){
  mountainOre +=  pickLVL;
  document.getElementById("displayMountainOre").textContent = mountainOre;
  }
}
function mining3(){
  if(worker3position == "mountains" && mountainOre != 200){
  mountainOre +=  pickLVL;
  document.getElementById("displayMountainOre").textContent = mountainOre;
  }
}
function mining4(){
  if(worker4position == "mountains" && mountainOre != 200){
  mountainOre +=  pickLVL ;
  document.getElementById("displayMountainOre").textContent = mountainOre;
  }
}
function takeWoodCastle(){

  castleWood -= 100
  wagonWood += 100
  document.getElementById("displayWagonWood").textContent = wagonWood;
  document.getElementById("displayCastleWood").textContent = castleWood;

}

function takeOreCastle(){

  castleOre -= 100
  wagonOre += 100
  document.getElementById("displayCastleOre").textContent = castleOre;
  document.getElementById("displayWagonOre").textContent = wagonOre;
}

function takeGoldCastle(){
  castleGold -= 100
  wagonGold += 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayCastleGold").textContent = castleGold;

}

function tradeWoodS(){


  wagonGold += wagonWood
  wagonWood -= wagonWood
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonWood").textContent = wagonWood;
  wagonPosition1 = "market"
}
function tradeWoodB(){
  wagonWood += wagonGold
  wagonGold -= wagonGold
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonWood").textContent = wagonWood;
  wagonPosition1 = "market"
}
function tradeOreS(){
  wagonGold += wagonOre
  wagonOre -= wagonOre
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonOre").textContent = wagonOre;
wagonPosition1 = "market"
}
function tradeOreB(){
  wagonOre += wagonGold
  wagonGold -= wagonGold
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonOre").textContent = wagonOre;
wagonPosition1 = "market"
}
function depositResources(){
  wagonPosition1 = "castle"
  if(wagonGold > 0){
    castleGold += wagonGold
      wagonGold -= wagonGold
  }
  if(wagonOre > 0){
    castleOre += wagonOre
    wagonOre -= wagonOre
  }
  if(wagonWood > 0){
    castleWood += wagonWood
      wagonWood -= wagonWood
  }
}
function takeOreMountains(){
  document.getElementById("displayWagonOre").textContent = wagonOre;
  wagonPosition1 = "mountains"
  if(mountainOre >= 200 && wagonOre < 200){
     mountainOre -= 200
     wagonOre += 200
     document.getElementById("displayWagonOre").textContent = wagonOre;
     wagonMountains1 = 0
  }
}
function depositOre(){
  wagonPosition1 = "castle"
  document.getElementById("displayWagonOre").textContent = wagonOre;
  if(castleOre < 2000 && wagonOre == 200){
    wagonOre -= 200
    castleOre += 200
     document.getElementById("displayWagonOre").textContent = wagonOre;
    document.getElementById("displayCastleOre").textContent = castleOre;
  }
}
function takeWoodForest(){
  document.getElementById("displayForestWood").textContent = forestWood;
  wagonPosition1 = "forest"
  if(forestWood >= 200 && wagonWood < 200){
     forestWood -= 200
     wagonWood += 200
     document.getElementById("displayWagonWood").textContent = wagonWood;
     wagonForest1 = 0
  }
}
function depositWood(){
  wagonPosition1 = "castle"
  document.getElementById("displayWagonWood").textContent = wagonWood;
  if(castleWood < 2000 && wagonWood == 200){
    wagonWood -= 200
    castleWood += 200
     document.getElementById("displayWagonWood").textContent = wagonWood;
    document.getElementById("displayCastleWood").textContent = castleWood;
  }
}
function raid(){
  var chance = Math.random()
  var timeTillRaid = chance * 20
  console.log(chance + " generalRaid Night ")
  if(chance < 0.80 && time == "night"){
     var chance = Math.random()
    document.getElementById("raidAlert").style.display = "block";
  document.getElementById("raidAlert").textContent = "Your Supply Wagon Has Been Attacked!";
  raidHit = 1
travelDur *= 1.7
  if(Ocheck == 0){
  setTimeout(setOpacityR, 5000)
    Ocheck = 1
  }
  if(wagonGold > 0){
    wagonGold -= wagonGold/2

  }
  if(wagonOre > 0){
    wagonOre -= wagonOre/2

  }
  if(wagonWood > 0){
    wagonWood -= wagonWood/2

  }
  if(wagonBuyO != 1 && wagonBuyW != 1 && wagonSellO != 1 && wagonSellW != 1){
  chance = Math.random()
     console.log(chance + " W1 Night")
  if(worker1position == wagonPosition1 && wagonWorker1 == 1 && chance < .60){

    killWorker1()
  }
   chance = Math.random()
      console.log(chance + " W2 Night")
  if(worker2position == wagonPosition1 && wagonWorker2 == 1 && chance < .60){
    killWorker2()

  }
   chance = Math.random()
      console.log(chance + " W3 Night ")
  if(worker3position == wagonPosition1 && wagonWorker3 == 1 && chance < .60){
    killWorker3()
  }
   chance = Math.random()
      console.log(chance + " W4 Night")
  if(worker4position == wagonPosition1 && wagonWorker4 == 1 && chance < .60){
    killWorker4()
  }
}
 }
    console.log(chance + " generalRaid Day ")
   if(chance < 0.29 && time == "day"){
     var chance = Math.random()
    document.getElementById("raidAlert").style.display = "block";
      document.getElementById("raidAlert").textContent = "Your Supply Wagon Has Been Attacked!";
      raidHit = 1
travelDur *= 1.5
     if(Ocheck == 0){
     setTimeout(setOpacityR, 5000)
       Ocheck = 1
     }
     if(wagonGold > 0){
       wagonGold -= wagonGold/2

     }
     if(wagonOre > 0){
       wagonOre -= wagonOre/2

     }
     if(wagonWood > 0){
       wagonWood -= wagonWood/2

     }
     if(wagonBuyO != 1 && wagonBuyW != 1 && wagonSellO != 1 && wagonSellW != 1){
     chance = Math.random()
        console.log(chance + " W1")
     if(worker1position == wagonPosition1 && wagonWorker1 == 1 && chance < .30){

       killWorker1()
     }
      chance = Math.random()
         console.log(chance + " W2")
     if(worker2position == wagonPosition1 && wagonWorker2 == 1 && chance < .30){
       killWorker2()

     }
      chance = Math.random()
         console.log(chance + " W3")
     if(worker3position == wagonPosition1 && wagonWorker3 == 1 && chance < .30){
       killWorker3()
     }
      chance = Math.random()
         console.log(chance + " W4")
     if(worker4position == wagonPosition1 && wagonWorker4 == 1 && chance < .30){
       killWorker4()
     }
}




  }
  else{
    // alert("no raid")
  }



}
function attack(){

}
function setOpacityR(){
  document.getElementById("raidAlert").style.display = "none";
  Ocheck = 0
}
function setBandits1(){
  var chance = Math.random()

  if(chance < .1666){
    banditT1 = 0
  }
  else if(chance < .3332){
    banditT1 = 1
  }
  else if(chance < .4998){
    banditT1 = 2
  }
  else if(chance < .6664){
    banditT1 = 3
  }
  else if(chance < .883){
     banditT1 = 4
  }
  else if(chance < 1){
    banditT1 = 5
  }

}

function setBandits2(){
  var chance = Math.random()
  if(chance < .1666){
    banditT2 = 0
  }
  else if(chance < .3332){
    banditT2 = 1
  }
  else if(chance < .4998){
    banditT2 = 2
  }
  else if(chance < .6664){
    banditT2 = 3
  }
  else if(chance < .883){
     banditT2 = 4
  }
  else if(chance < 1){
    banditT2 = 5
  }
}


function setBandits3(){
  var chance = Math.random()
  if(chance < .1666){
    banditT3 = 0
  }
  else if(chance < .3332){
    banditT3 = 1
  }
  else if(chance < .4998){
    banditT3 = 2
  }
  else if(chance < .6664){
    banditT3 = 3
  }
  else if(chance < .883){
     banditT3 = 4
  }
  else if(chance < 1){
    banditT3 = 5
  }
}

function setBandits4(){
  var chance = Math.random()
  if(chance < .1666){
    banditT4 = 0
  }
  else if(chance < .3332){
    banditT4 = 1
  }
  else if(chance < .4998){
    banditT4 = 2
  }
  else if(chance < .6664){
    banditT4 = 3
  }
  else if(chance < .883){
     banditT4 = 4
  }
  else if(chance < 1){
    banditT4 = 5
  }
}

function setBandits5(){
  var chance = Math.random()
  if(chance < .1666){
    banditT5 = 0
  }
  else if(chance < .3332){
    banditT5 = 1
  }
  else if(chance < .4998){
    banditT5 = 2
  }
  else if(chance < .6664){
    banditT5 = 3
  }
  else if(chance < .883){
     banditT5 = 4
  }
  else if(chance < 1){
    banditT5 = 5
  }
}
function reviveWorker1(){
  document.getElementById("worker1X1").setAttribute("opacity", 0)
  document.getElementById("worker1X2").setAttribute("opacity", 0)
  worker1position = "castle"
  document.getElementById("worker1").setAttribute("x", 390)
  document.getElementById("worker1").setAttribute("y", 310)
  // alert("worker 1 was revived from the dead")
  RezA.beginElement()
}
function reviveWorker2(){
  document.getElementById("worker2X1").setAttribute("opacity", 0)
  document.getElementById("worker2X2").setAttribute("opacity", 0)
  worker2position = "castle"
  document.getElementById("worker2").setAttribute("x", 420)
  document.getElementById("worker2").setAttribute("y", 310)
  // alert("worker 2 was revived from the dead")
  RezA.beginElement()
}

function reviveWorker3(){
  document.getElementById("worker3X1").setAttribute("opacity", 0)
  document.getElementById("worker3X2").setAttribute("opacity", 0)
  worker3position = "castle"
  document.getElementById("worker3").setAttribute("x", 450)
  document.getElementById("worker3").setAttribute("y", 310)
  // alert("worker 3 was revived from the dead")
  RezA.beginElement()
}

function reviveWorker4(){
  document.getElementById("worker4X1").setAttribute("opacity", 0)
  document.getElementById("worker4X2").setAttribute("opacity", 0)
  worker4position = "castle"
  document.getElementById("worker4").setAttribute("x", 480)
  document.getElementById("worker4").setAttribute("y", 310)
  // alert("worker 4 was revived from the dead")
  RezA.beginElement()
}

function killWorker1(){
  document.getElementById("worker1X1").setAttribute("opacity", 1)
  document.getElementById("worker1X2").setAttribute("opacity", 1)

worker1position = "dead"
document.getElementById("worker1").setAttribute("x", 1500)
document.getElementById("worker1").setAttribute("y", 1500)
// alert("worker 1 died")
setTimeout(reviveWorker1, 150000)
}
function killWorker2(){
  document.getElementById("worker2X1").setAttribute("opacity", 1)
  document.getElementById("worker2X2").setAttribute("opacity", 1)

worker2position = "dead"
document.getElementById("worker2").setAttribute("x", 1500)
document.getElementById("worker2").setAttribute("y", 1500)
// alert("worker 2 died")
setTimeout(reviveWorker2, 150000)
}

function killWorker3(){
  document.getElementById("worker3X1").setAttribute("opacity", 1)
  document.getElementById("worker3X2").setAttribute("opacity", 1)

worker3position = "dead"
document.getElementById("worker3").setAttribute("x", 1500)
document.getElementById("worker3").setAttribute("y", 1500)
// alert("worker 3 died")
setTimeout(reviveWorker3, 150000)
}

function killWorker4(){
  document.getElementById("worker4X1").setAttribute("opacity", 1)
  document.getElementById("worker4X2").setAttribute("opacity", 1)

worker4position = "dead"
document.getElementById("worker4").setAttribute("x", 1500)
document.getElementById("worker4").setAttribute("y", 1500)
// alert("worker 4 died")
setTimeout(reviveWorker4, 150000)
}








function randomChoice(){
  console.log(new Date() + "choice Timer")
  if(choice == "blank" && keyChoice == "blank"){

   choiceNo1 = 0
   choiceNo2 = 0
  choiceNo3 = 0
   choiceNo4 = 0
  choiceNo5 = 0
   choiceNo6 = 0

   choiceNo1A = 0
   choiceNo2A = 0
   choiceNo3A = 0
   choiceNo4A = 0
   choiceNo5A = 0
   choiceNo6A = 0

   choiceCount = 0

   choicePerc1 = 0
   choicePerc2 = 0
var chanceC = Math.random()
  if(chanceC < .7 && worker1position == "mountains" || worker2position == "mountains" || worker3position == "mountains" || worker4position == "mountains"){
    // choice = "nbMount"
choiceNo1A = 1
choiceCount += 1
choiceNo1 = choiceCount
    // choiceMake()
  }
  chanceC = Math.random()
  if(chanceC < .7 && worker1position == "forest" || worker2position == "forest" || worker3position == "forest" || worker4position == "forest"){
    // choice = "nbForest"
    choiceNo2A = 1
    choiceCount += 1
    choiceNo2 = choiceCount
    // choiceMake()
  }
  chanceC = Math.random()
  if(chanceC < .6 && castleGold >= 300){
    // choice = "citRobbed"
    choiceNo3A = 1
    choiceCount += 1
    choiceNo3 = choiceCount
    // choiceMake()
  }
  if(castleGold >= 200){
    // choice = "citKidN"
    choiceNo4A = 1
    choiceCount += 1
    choiceNo4 = choiceCount
    // choiceMake()
  }
  if(castleGold >= 1300){
    choiceNo5A = 1
    choiceCount += 1
    choiceNo5 = choiceCount
  }
  choicePerc1 = 100/choiceCount
  choicePerc2 = choicePerc1 * .01
  var chance = Math.random()
  if(choiceNo1A && chance < choicePerc2 * choiceNo1){
    choice = "nbMount"
    choiceMake()
  }
  else if(choiceNo2A && chance < choicePerc2 * choiceNo2){
    choice = "nbForest"
    choiceMake()
  }
  else if(choiceNo3A && chance < choicePerc2 * choiceNo3){
    choice = "citRobbed"
    choiceMake()
  }
  else if(choiceNo4A && chance < choicePerc2 * choiceNo4){
    choice = "citKidN"
    choiceMake()
  }
  else if(choiceNo5A && chance < choicePerc2 * choiceNo5){
    choice = "castleAttack"
    choiceMake()
  }
  if(choice == "blank" && keyChoice == "blank"){
    setTimeout(randomChoice, 135000)

  }
}
else{
  setTimeout(RandomChoice, 10000)
  alert("problem")
  console.log("Problem")
}


}
function choiceMake(){
  choiceLock = 1
  document.getElementById("choiceOne").style.display = "block";
  document.getElementById("choiceTwo").style.display = "block";
  document.getElementById("choiceThree").style.display = "block";
  if(choice == "castleAttack"){
    //scrapped
    alert("Steward: My lord! A massive army of Accursed aproaches Castle Murus! An attack of this scale hasn't happened since the releasing of The Curse! The Garrison and the Gudbrand Knights are preparing to fight off the Accursed Hoards, what shall we do?")
    alert(" (going to change this)Choice: select the RED choice to flee the castle. Select the GRAY choice to continue holding them off, and send for help from one of your allies(The dragon or any of your other allies). Select the BLUE choice to go out onto the battlements with your troops and fight alongside them to give them a morale boost.")
  }
if(choice == "citKidN"){
  alert("Steward: My lord! Citizens from a local village have come to us saying that a group of Accursed have kidnapped their child, and are demanding a ransom fee! This is truly dire news, what shall you do?")
  alert("Choice: Select the RED choice to do nothing. Select the GRAY choice to pay off the ransom fee(-100 gold). Select the BLUE choice to send the garrison to go save the child themselves.(-50 gold + chance)")
}
if(choice == "citRobbed"){
  alert("Steward: My lord! Citizens from a local village have come to us saying that they were robbed by a group of Accursed! They are requesting your assistance in this matter. What shall you do?")
  alert("Choice: Select the RED to do nothing. Select GRAY to pay them for what they've lost(-100 gold). Select BLUE to send the garrison to find and recover the stolen possesions from the Accursed(-50 gold + chance)")
}

  if(choice == "nbForest"){
    alert("Steward: Sir! Scouts around the forest camp have reported sightings of a Night Beast roaming the area! If it finds your workers, they will be in grave peril. What shall we do?")
    alert("Choice: Select the RED choice to send your garrison to the camp to protect it from the Night Beast(-50 gold). Select the GRAY choice leave your camp how it is(chance). Select the BLUE choice to send your workers back to your castle(forfeit all resources at the camp)")
  }
  if(choice == "nbMount"){
    alert("Steward: Sir! Scouts around the mountain camp have reported sightings of a Night Beast roaming the area! If it finds your workers, they will be in grave peril. What shall we do?")
    alert("Choice: Select the RED choice to send your garrison to the camp to protect it from the Night Beast(-50 gold). Select the GRAY choice leave your camp how it is(chance). Select the BLUE choice to send your workers back to your castle(forfeit all resources at the camp)")
  }
if(keyChoice == "dragonIntro"){
  //will be changed
  alert("As you stand where the dragon will meet you, you feel the ground shake and hear loud thuds at regular intervals. Steward: He approaches/. The thuds grow louder until a massive shape swoops down from the clouds and lands before you. It is a dragon. You cannot help but gape in awe at the sight before you. The dragon lowers it's head and speaks. Dragon: Who is this who stands before me? Where is Old King Genus? Speak human, or I shall slay you where you stand!/. You manage to explain that Old King Genus is dead, and that you are his nephew and heir. The dragon relaxes and droops slightly. Dragon: So that is why. You have my condolences and my grief. He was a good king and we had such pleasent talks. I assume that I will be meeting you from now on, and that your steward has already explained how these meetings will work? But, in Old King Genus's memory, I will not ask for my pay this time. Now that thats out out of the way, I would like to speak with you.")
alert("Choice: Select the RED choice to speak with him in a hostile tone. Select the GRAY choice to tell him that you don't feel like talking at that moment. Select the BLUE choice to oblige him in a friendly conversation. ")
}
if(choice == "dragonT"){
  //will be changed
  alert("As you stand where you will meet the dragon, you hear the familiar thuds as you feel the dragon aproaching. The dragon lands before you and looks down. Dragon: Greetings my young king. I have come to collect my payment. But why just do business? let us talk, about anything that might be happening with you and your kingdom.")
  alert("Choice: Select the RED choice to speak hostily. Select the GRAY choice to tell him that you don't feel like talking. Select the BLUE choice to speak to him in a friendly tone.")
}
}
function choice1select(){
  choiceLock = 0
document.getElementById("choiceOne").style.display = "none";
document.getElementById("choiceTwo").style.display = "none";
document.getElementById("choiceThree").style.display = "none";
if(choice == "castleAttack"){
  var chance = Math.random()
  if(chance < .325){
    launchGameO()
    alert("While escaping the castle, you were seen by some of the Acursed attackers and were swiftly killed. The sight of their king's demise greatly impacted your soldiers, and they were defeated and killed. The Acursed take over your castle and rule as tyrants.")
  }
  else if(chance < .65){
    launchGameO()
    alert("After escaping you return to the castle after the sounds of fighting die out only to discover that the Acursed won the battle and are occupying your castle. You are quickly spotted by the Acursed watchmen and are swiftly killed.")
  }
  else{
    alert("After escaping you return to the castle after the sounds of fighting die out, and find that The Garrison managed to win the battle, but not before your castle was robbed of a large portion of it's gold. You quickly regain control, but have lost the respect of many of your subjects.")
    castleGold -= 600
    citRep -= 10
  }
  choice = "blank"
  setTimeout(randomChoice, 135000)
}
if(choice == "citKidN"){
  alert("Steward: So you would leave your people to pay off the ransom themselves? Very well, if it is your descision, even if i don't agree with it. ")
  choice = "blank"
  citRep -= 3
  setTimeout(randomChoice, 135000)
}
if(choice == "citRobbed"){
  alert("Steward: The citizens that were robbed don't seem to find your descision popular. I do agree that it is your responsibility to help your people in any way you can.")
  choice = "blank"
  citRep -= 2
  setTimeout(randomChoice, 135000)
}
if(keyChoice == "dragonIntro"){
alert("Dragon: You walk a dangerous line my young king. Some might take a tone like that badly. But you are Old King Genus's nephew, and you are new, but know this, if you continue how you are going, you await a dangerous fate. I will return tomorrow and for you and your kingdom's sake, I hope you will have my payment then.")
dragonRep -= 5
keyChoice = "blank"
dragonIntroR = 1
}

if(choice == "dragonT"){
  alert("Dragon: I see that you choose to walk that line. I choose to talk with you because I miss my conversations with Old King Genus. Continue acting like this at your own peril, and you know I will be back tomorrow for my payment.")
  dragonRep -= 1
choice = "blank"

}
if(choice == "nbMount"){
  var chance = Math.random()
  if(chance < .35){
    alert("Steward: We have recieved reports that the Night Beast has moved on, and the garrison did not encounter it.")
  }
  else if(chance < .80){
    alert("Steward: We have recieved reports that the garrison encountered the Night Beast, but they were able to fight it off.")
  }
  else{
    alert("Steward: We have recieved reports that the garrison encountered the Night Beast, but sadly, they were unable to fight it off ")
    castleGold -= 100
    mountainOre = 0
    nbHitMount()
  }
  castleGold -= 50
  choice = "blank"
  setTimeout(randomChoice, 135000)
}
if(choice == "nbForest"){
  var chance = Math.random()
  if(chance < .35){
    alert("Steward: We have recieved reports that the Night Beast has moved on, and the garrison did not encounter it.")
  }
  else if(chance < .80){
    alert("Steward: We have recieved reports that the garrison encountered the Night Beast, but they were able to fight it off.")
  }
  else{
    alert("Steward: We have recieved reports that the garrison encountered the Night Beast, but sadly, they were unable to fight it off. ")
    castleGold -= 100
    forestWood = 0
    nbHitForest()
  }
  castleGold -= 50
  choice = "blank"
  setTimeout(randomChoice, 135000)
}


}
function choice2select(){
  choiceLock = 0
  document.getElementById("choiceOne").style.display = "none";
  document.getElementById("choiceTwo").style.display = "none";
  document.getElementById("choiceThree").style.display = "none";
  if(choice == "castleAttack"){
    var chance = Math.random()
    if(chance < .3){
      launchGameO()
      alert("Once you send your messanger there is no time to keep track of him or see what became of him. You fight for a long time but hear no word from your allies. The fight drags on until The Acursed forces break through your defences, slaughter everyone, and take over your castle.")

    }
    else if(chance < .6){
alert("As you send your messanger there is no time to keep track of him or see what became of him. As the fight drags on you begin to lose hope that your allies will come. Then you hear the familiar thumping sound. You smile as you see the large shape coming from the sky at a very fast rate. Then The Dragon lands in the middle of The Acursed forces with his sweeping claws and mighty tail. The battle did not last long after that with the dragon by your side. You thank him immensly for his help in the battle.")

      dragonRep += 3
    }
    else{
      alert("As you send your messanger there is no time to keep track of him or see what became of him. You fight for a long time but hear no word from your allies. Even with all the odds against you, you still manage to hold off The Acursed until they are finally forced to retreat.")
    }
    choice = "blank"
    setTimeout(randomChoice, 135000)
  }
  if(choice == "citKidN"){
    alert("Steward: The citizens have told us that the Acursed turned over the child without any issues once they got their gold. The citizens are very grateful towards your help in the matter. This truly was the best choice you could make, I do not think they could have affored the ransom by themselves.")
castleGold -= 100
citRep += 4
choice = "blank"
setTimeout(randomChoice, 135000)
  }
  if(choice == "citRobbed"){
    alert("Steward: The citizens are grateful that you would pay for their lost possesions, but I think that you should actually deal with the acursed instead of giving them more to pillage.")
    castleGold -= 100
    citRep += 1
    choice = "blank"
    setTimeout(randomChoice, 135000)
  }
  if(keyChoice == "dragonIntro"){
alert("Dragon: Of course. I wouldn't want to force someone to have a conversation they wouldn't want to have. Although I hope that you will speak with me next time. I do miss the talks I had with Old King Genus. I will be back tomorrow for my fee. You have my farewell until the next time we speak.")
keyChoice = "blank"
dragonIntroR = 2
  }
  if(choice == "dragonT"){
    alert("Dragon: I see. Well, I am not one to force another to talk for my own pleasure, but i do enjoy talking with someone, and Old King Genus was the only one that realy obliged my desire. I do hope you will talk to me tomorrow. Farewell until next time my young king.")
choice = "blank"

  }
  if(choice == "nbMount"){
    var chance = Math.random()
    if(chance < .45){
      alert("Steward: We have recieved reports that the workers didn't encounter the Night Beast, and have continued working as planned")
    }
else{
  alert("Steward: We have recieved reports that the Night Beast found your workers and they did not survive the encounter.")
  castleGold -= 100
  mountainOre = 0
  nbHitMount()
}
    choice = "blank"
    setTimeout(randomChoice, 135000)
  }

  if(choice == "nbForest"){
    var chance = Math.random()
    if(chance < .45){
      alert("Steward: We have recieved reports that the workers didn't encounter the Night Beast, and have continued working as planned")
    }
else{
  alert("Steward: We have recieved reports that the Night Beast found your workers and they didn't survive the encounter.")
  castleGold -= 100
  forestWood = 0
  nbHitForest()
}
    choice = "blank"
    setTimeout(randomChoice, 135000)
  }

}
function choice3select(){
  choiceLock = 0
  document.getElementById("choiceOne").style.display = "none";
  document.getElementById("choiceTwo").style.display = "none";
  document.getElementById("choiceThree").style.display = "none";
  if(choice == "castleAttack"){
var chance = Math.random()
    if(chance < .4){
      launchGameO()
      alert("As you stand on the battlements, you watch to your dismay as The Acursed break through your defences. Even with this, your soldiers rally with you. Even with everything going wrong, your soldiers still don't give up. As the last of your men fall by your side, you hold on until you are struck down, although, you die with your sword in hand, and with a pile of Acursed at your feet.")

    }
    else{
alert("As you stand on the battlements, your soldiers are rallied by your presence. With you by your force's side, The Acursed never get an oppritunity to break through, and they are forced to retreat.")
citRep += 10

    }
    choice = "blank"
    setTimeout(randomChoice, 135000)
  }
  if(choice == "citKidN"){
    var chance = Math.random()
    castleGold -= 50
    if(chance < .7){
alert("Steward: The Garrison found the Acursed camp holding the captive child, and were able to bring them to safety. The citizens responsible for the child are very grateful for your help as well.")
      citRep += 4
    }
    else{
alert("Steward: The Garrison found the Acursed camp holding the captive child, but were unable to save him and were forced to retreat. The citizens are furious and grief stricken for their child. We do not know what fate he awaits, but the Acursed will not take kindly towards your transgression.")
      citRep -= 5
      castleGold -= 100
    }
    choice = "blank"
    setTimeout(randomChoice, 135000)
  }
  if(choice == "citRobbed"){
    var chance = Math.random()
    castleGold -= 50
    if(chance < .7){
      alert("Steward: The Garrison found the Acursed camp and managed to recover the stolen possesions, while taking care of quite a few of Acursed occupying it. The citizens are very grateful toward you as well. This will make them more loyal to you, good work.")
      citRep += 3
    }
    else{
      alert("Steward: We have recieved reports that the Garrison found the Acursed camp, but they were overpowered by them and were forced to retreat. The citizens are grateful for your effort, but I think that they worry that you are not strong enouugh to protect them.")
castleGold -= 100
citRep += 1
    }
    choice = "blank"
    setTimeout(randomChoice, 135000)
  }
  if(keyChoice == "dragonIntro"){
alert("Dragon: Your manners and diplomacy are admirable my young king. I enjoyed talking with you this time. You will make a great ruler, and a worthy successor to your uncle. I look forward to our next meeting, but unfortunately, I will need my payment then. Farewell for now my young king.")
    dragonRep += 5
    keyChoice = "blank"
    dragonIntroR = 3
  }
  if(choice == "dragonT"){
    alert("Dragon: You hold an enjoyable conversation my young king, but unfortunately, I must away to take care of my own business. I will return tommorow, and maybe we will talk then. You have my farewell my young king.")
    choice = "blank"
    dragonRep += 1
  }
  if(choice == "nbMount"){
alert("Steward: We have recieved reports that your workers are on their way back to the castle.")
choice = "blank"
evacMount()
  }

  if(choice == "nbForest"){
alert("Steward: We have recieved reports that your workers are on their way back to the castle.")
choice = "blank"
evacForest()
setTimeout(randomChoice, 135000)
  }

}
function launchGameO(){
  document.getElementById("deathScreen").style.display = "block";
  document.getElementById("gameO").style.display = "block";
  document.getElementById("gameOT").style.display = "block";
  document.getElementById("gameOT2").style.display = "block";

}
function dragon(){
  if(firstDragVisit == 0){

    keyChoice = "dragonIntro"
    choiceMake()
    firstDragVisit = 1

  }
  else if(castleGold >= ransomGold){
    castleGold -= ransomGold
    ransomGold += 50
    alert("The dragon came to collect his protection fee, the next time he will want 50 more")
    choice = "dragonT"
    choiceMake()
  }
  else{
    alert("The dragon came to collect his protection fee, but was enraged to find that you didn't offered him the demanded ammount. In his blind rage he razed your kingdom to the ground.")
launchGameO()
  }
}

function notificationOP(){
  document.getElementById("notifications").style.display = "none";
  Ncheck = 0
}
function timec(){
  if(time == "morning"){
    time = "day"
    document.getElementById("dayNight").setAttribute("opacity", 0)
    // document.getElementById("dayToNight").beginElement()
    setBandits1()
     setBandits2()
     setBandits3()
     setBandits4()
     setBandits5()
  }
  else if(time == "day"){
     document.getElementById("notifications").style.display = "block";
      document.getElementById("notifications").textContent = "As the shadow vale rises, the acursed grow stronger...";
    if(Ncheck == 0){
     setTimeout(notificationOP, 15000)
       Ncheck = 1
     }
    time = "night"
      document.getElementById("dayNight").setAttribute("opacity", 0.6)

    document.getElementById("dayToNight").beginElement()
  }
  else if(time == "night"){
    time = "day"
    dragon()
    document.getElementById("dayNight").setAttribute("opacity", 0)

      document.getElementById("nightToDay").beginElement()
    setBandits1()
     setBandits2()
     setBandits3()
     setBandits4()
     setBandits5()
  }

}
