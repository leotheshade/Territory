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

if(textTest == 1){
alert("Dear nephew, If you are reading this, I have passed from this world. As you are my only heir, my kingdom and everything it encompasses is now yours. Although do not belive this to be a blessing. As of this letter being written, my kingdom is in a state of great disparage. The vile Acursed haunt my roads, my coffers grow empty, the Night Beasts terrorize my settlements, and a dragon threatens everything if he does not recieve payment frequently. Given all this, I emplore you to take my mantle and rule my kingless nation. I care about my people greatly, and without a leader to guide and rule them, they would wither and die swiftly. Things may be looking grim, but I belive that if you take my throne, and lead my people, you will be able to make my crumbling nation into a mightly empire! If you do decide to take all the risks, and rule my kingdom, take this letter to my steward and he will help you with everything you need to know. Signed, Old King Genus")

alert("Steward: Ah, so you have come. Your uncle was right about you, he never once lost faith that you would accept. Well, onto business. The first thing you would like too know is how to order your men to do tasks. First you must click on your supply wagon. It's the brown box under your castle. Then you must click on whoever you want to acompany the wagon, then select the destination you want it to be sent to. The mountains hold incredible ammounts of ore free for the taking, and the forest has plenty of excelent building wood that we can harvest at our lesure. Once you have chosen a destination, select the red box at the bottom of your screen to order your wagon to begin moving.")
alert("Steward: Beware, when moving your units or resources, the vile Acursed are sure to be attracted. What are the Acursed you ask? Well they are vile creatures, once men, they are now ruthless theives who partol your roads and rob your people. Somehow they react to the Shadow Veil and gain immense power while its darkness envelops our land and become much more aggressive than normal. They can be easily identified by the glowing rune that is branded on their backs. They will attack your supply wagons if they spot them.(currently the combat features are not in place so when you are attacked, all that will happen is tell you what bandit team attacked and make a red label appear letting you know that you have been attacked)")
alert("Steward: One facillity you might want to make use of is The Market located north of your castle. You can use it to buy or sell extra resources you might need. The people that run it are not part of any kingdom, do business indiscriminately, and have allies with any major power in this world. They deal in bundles of 100s, so if you give them 100 ore, they will trade you 100 gold in return and vice versa. You can access it by selecting either Buy or Sell from your wagon next to what resource you want to trade in. Be aware that the route to The Market is shorter then other routes so it will take less time for your wagon to arrive there. ")
alert("Steward: One of the main threats of this kingdom is a mighty dragon that insists that he requires a protection fee to keep us safe, but has hinted that if we don't pay, he will destroy this kingdom and everyone in it. I do not belive that he is aware that your uncle is dead, so he will not expect you to be in your uncle's place when he comes. He always talked with Old King Genus when he came so he may want to speak with you. This will be your chance to make an impression on him, so make it a good one. When he first comes, he will demand 300 gold, so make sure you have earned that much by tomorrow. Every time he comes he will demand 50 more gold the next day.")
alert("Steward: Your kingdom is a large one, so you will be required to make certain descisions that will affect certain aspects of your kingdom. When such a descision comes up, select whatever choice seems the best to you. Be wary, when interacting with certain figures, simple choices could have massive consequences. You may recieve a report saying that scouts have sighted a Night Beast in close proximity to some of your workers. You will be forced to decide to send reinforcements to the camp, send the workers home, or just do nothing. This descision will decide the fate of your subjects. But know this, you can't save everyone, accidents happen, things can be unpredictable. You can just hope that you made the right descision, and if you didn't, all you can do is shrug it off, and do better next time.")
}
timec()
 // killWorker1()
updateText()
var rEvent = setInterval(randomChoice, 135000)
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
 var cycle = setInterval(timec, 360000)
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
function send(){
  //down
 raid()
 if(wagonCastle == 1 && wagonPosition1 == "market"){
   document.getElementById("wagon1MoveX").setAttribute("from", 435)
  document.getElementById("wagon1MoveX").setAttribute("to", 450)
   document.getElementById("wagon1MoveX").setAttribute("dur", 10)

  document.getElementById("wagon1MoveY").setAttribute("from", 110)
  document.getElementById("wagon1MoveY").setAttribute("to", 350)
  document.getElementById("wagon1MoveY").setAttribute("dur", 10)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 450)
  document.getElementById("supplyWagon1").setAttribute("y", 350)

  wagonPosition1 = "moving"

  var wagonTakeW = setTimeout(depositResources, 10000)
 }




 if(wagonBuyO == 1 && wagonPosition1 == "castle" && castleGold >= 100){
   document.getElementById("wagon1MoveX").setAttribute("from", 450)
  document.getElementById("wagon1MoveX").setAttribute("to", 435)
   document.getElementById("wagon1MoveX").setAttribute("dur", 10)

  document.getElementById("wagon1MoveY").setAttribute("from", 350)
  document.getElementById("wagon1MoveY").setAttribute("to", 110)
  document.getElementById("wagon1MoveY").setAttribute("dur", 10)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 435)
  document.getElementById("supplyWagon1").setAttribute("y", 111)

  wagonPosition1 = "moving"
 takeGoldCastle()
  var wagonTakeW = setTimeout(tradeOreB, 10000)
 }

  if( wagonSellO == 1 && wagonPosition1 == "castle" && castleOre >= 100){
   document.getElementById("wagon1MoveX").setAttribute("from", 450)
  document.getElementById("wagon1MoveX").setAttribute("to", 435)
   document.getElementById("wagon1MoveX").setAttribute("dur", 10)

  document.getElementById("wagon1MoveY").setAttribute("from", 350)
  document.getElementById("wagon1MoveY").setAttribute("to", 110)
  document.getElementById("wagon1MoveY").setAttribute("dur", 10)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 435)
  document.getElementById("supplyWagon1").setAttribute("y", 111)

  wagonPosition1 = "moving"
 takeOreCastle()
  var wagonTakeW = setTimeout(tradeOreS, 10000)
 }
 if(wagonBuyW == 1 && wagonPosition1 == "castle" && castleGold >= 100){
   document.getElementById("wagon1MoveX").setAttribute("from", 450)
  document.getElementById("wagon1MoveX").setAttribute("to", 435)
   document.getElementById("wagon1MoveX").setAttribute("dur", 10)

  document.getElementById("wagon1MoveY").setAttribute("from", 350)
  document.getElementById("wagon1MoveY").setAttribute("to", 110)
  document.getElementById("wagon1MoveY").setAttribute("dur", 10)

   document.getElementById("wagon1MoveX").beginElement()
  document.getElementById("wagon1MoveY").beginElement()

  document.getElementById("supplyWagon1").setAttribute("x", 435)
  document.getElementById("supplyWagon1").setAttribute("y", 111)

  wagonPosition1 = "moving"
 takeGoldCastle()
  var wagonTakeW = setTimeout(tradeWoodB, 10000)
 }
if(wagonSellW == 1 && wagonPosition1 == "castle" && castleWood >= 100){
  document.getElementById("wagon1MoveX").setAttribute("from", 450)
 document.getElementById("wagon1MoveX").setAttribute("to", 435)
  document.getElementById("wagon1MoveX").setAttribute("dur", 10)

 document.getElementById("wagon1MoveY").setAttribute("from", 350)
 document.getElementById("wagon1MoveY").setAttribute("to", 110)
 document.getElementById("wagon1MoveY").setAttribute("dur", 10)

  document.getElementById("wagon1MoveX").beginElement()
 document.getElementById("wagon1MoveY").beginElement()

 document.getElementById("supplyWagon1").setAttribute("x", 435)
 document.getElementById("supplyWagon1").setAttribute("y", 111)

 wagonPosition1 = "moving"
takeWoodCastle()
 var wagonTakeW = setTimeout(tradeWoodS, 10000)
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


  if(wagonWorker1 == 1 && worker1position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){

    wagonDefence += 1

      document.getElementById("worker1moveX").setAttribute("from", 800)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 15)

    document.getElementById("worker1moveY").setAttribute("from", 250)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 15)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
    // wagonWorker1 = 0
    worker1position = "moving"
    var startMine1 = setTimeout(worker1castle, 15000)
    }
    if(wagonWorker2 == 1 && worker2position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
      document.getElementById("worker2moveX").setAttribute("from", 800)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 15)

    document.getElementById("worker2moveY").setAttribute("from", 280)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 15)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
    // wagonWorker2 = 0
    worker2position = "moving"
    setTimeout(worker2castle, 15000)

    }
    if(wagonWorker3 == 1 && worker3position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
       document.getElementById("worker3moveX").setAttribute("from", 800)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 15)

    document.getElementById("worker3moveY").setAttribute("from", 310)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 15)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
    // wagonWorker3 = 0
    worker3position = "moving"
    setTimeout(worker3castle, 15000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
      document.getElementById("worker4moveX").setAttribute("from", 800)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 15)

    document.getElementById("worker4moveY").setAttribute("from", 340)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 15)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    // wagonWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 15000)

    }
  if(wagonCastle == 1 && wagonPosition1 == "forest"){
    // raid()
    document.getElementById("wagon1MoveX").setAttribute("from", 760)
    document.getElementById("wagon1MoveX").setAttribute("to", 450)
    document.getElementById("wagon1MoveX").setAttribute("dur", 15)

    document.getElementById("wagon1MoveY").setAttribute("from", 280)
    document.getElementById("wagon1MoveY").setAttribute("to", 350)
    document.getElementById("wagon1MoveY").setAttribute("dur", 15)

    document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 450)
    document.getElementById("supplyWagon1").setAttribute("y", 350)

    wagonCastle = 0
    wagonPosition1 = "moving"
    var depoOre = setTimeout(depositWood, 15000)

  }


  //up



  if(wagonForest == 1 && wagonPosition1 == "castle"){
     document.getElementById("wagon1MoveX").setAttribute("from", 450)
    document.getElementById("wagon1MoveX").setAttribute("to", 760)
     document.getElementById("wagon1MoveX").setAttribute("dur", 15)

    document.getElementById("wagon1MoveY").setAttribute("from", 350)
    document.getElementById("wagon1MoveY").setAttribute("to", 280)
    document.getElementById("wagon1MoveY").setAttribute("dur", 15)

     document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 760)
    document.getElementById("supplyWagon1").setAttribute("y", 280)

    wagonPosition1 = "moving"

    var wagonTakeW = setTimeout(takeWoodForest, 15000)
  }
   if(wagonWorker1 == 1 && worker1position == "castle" && wagonForest == 1){

      document.getElementById("worker1moveX").setAttribute("from", 410)
    document.getElementById("worker1moveX").setAttribute("to", 800)
    document.getElementById("worker1moveX").setAttribute("dur", 15)

    document.getElementById("worker1moveY").setAttribute("from", 320)
    document.getElementById("worker1moveY").setAttribute("to", 250)
    document.getElementById("worker1moveY").setAttribute("dur", 15)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 800)
    document.getElementById("worker1").setAttribute("cy", 250)
    // wagonWorker1 = 0
    worker1position = "moving"
    var startMine1 = setTimeout(worker1cutting, 15000)
    }
  if(wagonWorker2 == 1 && worker2position == "castle" && wagonForest == 1){
     document.getElementById("worker2moveX").setAttribute("from", 440)
    document.getElementById("worker2moveX").setAttribute("to", 800)
    document.getElementById("worker2moveX").setAttribute("dur", 15)

    document.getElementById("worker2moveY").setAttribute("from", 320)
    document.getElementById("worker2moveY").setAttribute("to", 280)
    document.getElementById("worker2moveY").setAttribute("dur", 15)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 800)
    document.getElementById("worker2").setAttribute("cy", 280)
    // wagonWorker2 = 0
    worker2position = "moving"
    var startMine1 = setTimeout(worker2cutting, 15000)
  }
   if(wagonWorker3 == 1 && worker3position == "castle" && wagonForest == 1){
     document.getElementById("worker3moveX").setAttribute("from", 470)
    document.getElementById("worker3moveX").setAttribute("to", 800)
    document.getElementById("worker3moveX").setAttribute("dur", 15)

    document.getElementById("worker3moveY").setAttribute("from", 320)
    document.getElementById("worker3moveY").setAttribute("to", 310)
    document.getElementById("worker3moveY").setAttribute("dur", 15)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 800)
    document.getElementById("worker3").setAttribute("cy", 310)
    // wagonWorker3 = 0
    worker3position = "moving"
     var startMine1 = setTimeout(worker3cutting, 15000)
  }
   if(wagonWorker4 == 1 && worker4position == "castle" && wagonForest == 1){
     document.getElementById("worker4moveX").setAttribute("from", 500)
    document.getElementById("worker4moveX").setAttribute("to", 800)
    document.getElementById("worker4moveX").setAttribute("dur", 15)

    document.getElementById("worker4moveY").setAttribute("from", 320)
    document.getElementById("worker4moveY").setAttribute("to", 340)
    document.getElementById("worker4moveY").setAttribute("dur", 15)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 800)
    document.getElementById("worker4").setAttribute("cy", 340)
    // wagonWorker4 = 0
    worker4position = "moving"
     var startMine1 = setTimeout(worker4cutting, 15000)
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
  if(wagonMountains1 == 1 && wagonPosition1 == "castle"){
    document.getElementById("wagon1MoveX").setAttribute("from", 450)
    document.getElementById("wagon1MoveX").setAttribute("to", 70)
    document.getElementById("wagon1MoveX").setAttribute("dur", 15)

    document.getElementById("wagon1MoveY").setAttribute("from", 350)
    document.getElementById("wagon1MoveY").setAttribute("to", 480)
    document.getElementById("wagon1MoveY").setAttribute("dur", 15)

    document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 70)
    document.getElementById("supplyWagon1").setAttribute("y", 480)


    wagonPosition1 = "moving"
    var startTakeOreM = setTimeout(takeOreMountains, 15000)

  }
  if(wagonMountains1 == 1 && wagonPosition1 == "mountains"){
    takeOreMountains()
  }
  if(wagonForest == 1 && wagonPosition1 == "forest"){
    takeWoodForest()

  }
    if(wagonWorker1 == 1 && worker1position == "castle" && wagonMountains1 == 1){

      document.getElementById("worker1moveX").setAttribute("from", 410)
    document.getElementById("worker1moveX").setAttribute("to", 40)
    document.getElementById("worker1moveX").setAttribute("dur", 15)

    document.getElementById("worker1moveY").setAttribute("from", 320)
    document.getElementById("worker1moveY").setAttribute("to", 450)
    document.getElementById("worker1moveY").setAttribute("dur", 15)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 40)
    document.getElementById("worker1").setAttribute("cy", 450)
    worker1position = "moving"
    var startMine1 = setTimeout(worker1mining, 15000)
    }
    if(wagonWorker2 == 1 && worker2position == "castle" && wagonMountains1 == 1){
      document.getElementById("worker2moveX").setAttribute("from", 440)
    document.getElementById("worker2moveX").setAttribute("to", 70)
    document.getElementById("worker2moveX").setAttribute("dur", 15)

    document.getElementById("worker2moveY").setAttribute("from", 320)
    document.getElementById("worker2moveY").setAttribute("to", 450)
    document.getElementById("worker2moveY").setAttribute("dur", 15)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 70)
    document.getElementById("worker2").setAttribute("cy", 450)
    worker2position = "moving"
    setTimeout(worker2mining, 15000)

    }
    if(wagonWorker3 == 1 && worker3position == "castle" && wagonMountains1 == 1){
       document.getElementById("worker3moveX").setAttribute("from", 470)
    document.getElementById("worker3moveX").setAttribute("to", 100)
    document.getElementById("worker3moveX").setAttribute("dur", 15)

    document.getElementById("worker3moveY").setAttribute("from", 320)
    document.getElementById("worker3moveY").setAttribute("to", 450)
    document.getElementById("worker3moveY").setAttribute("dur", 15)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 100)
    document.getElementById("worker3").setAttribute("cy", 450)
    worker3position = "moving"
    setTimeout(worker3mining, 15000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "castle" && wagonMountains1 == 1){
      document.getElementById("worker4moveX").setAttribute("from", 500)
    document.getElementById("worker4moveX").setAttribute("to", 130)
    document.getElementById("worker4moveX").setAttribute("dur", 15)

    document.getElementById("worker4moveY").setAttribute("from", 320)
    document.getElementById("worker4moveY").setAttribute("to", 450)
    document.getElementById("worker4moveY").setAttribute("dur", 15)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 130)
    document.getElementById("worker4").setAttribute("cy", 450)
    worker4position = "moving"
    setTimeout(worker4mining, 15000)

    }
  //down send back to castle
  if(wagonWorker1 == 1 && worker1position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker1moveX").setAttribute("from", 40)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 15)

    document.getElementById("worker1moveY").setAttribute("from", 450)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 15)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
    worker1position = "moving"
    var startMine1 = setTimeout(worker1castle, 15000)
    }
    if(wagonWorker2 == 1 && worker2position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker2moveX").setAttribute("from", 70)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 15)

    document.getElementById("worker2moveY").setAttribute("from", 450)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 15)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
    worker2position = "moving"
    setTimeout(worker2castle, 15000)

    }
    if(wagonWorker3 == 1 && worker3position == "mountains" && wagonCastle == 1 && wagonPosition1=="mountains"){
       document.getElementById("worker3moveX").setAttribute("from", 100)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 15)

    document.getElementById("worker3moveY").setAttribute("from", 450)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 15)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
    worker3position = "moving"
    setTimeout(worker3castle, 15000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker4moveX").setAttribute("from", 130)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 15)

    document.getElementById("worker4moveY").setAttribute("from", 450)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 15)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    worker4position = "moving"
    setTimeout(worker4castle, 15000)

    }
  if(wagonCastle == 1 && wagonPosition1 == "mountains"){
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
    var depoOre = setTimeout(depositOre, 15000)

  }
  //up


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
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
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
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
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
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
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
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    castleWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 23000)

    }
}

function evacMount(){

  if(worker1position == "mountains"){

    document.getElementById("worker1moveX").setAttribute("from", 40)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 23)

    document.getElementById("worker1moveY").setAttribute("from", 450)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 23)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
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
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
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
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
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
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    castleWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 23000)

  }

}
function nbHitMount(){
if(worker1position == "mountains"){
  killWorker1()
}
if(worker2position == "mountains"){
  killWorker2()

}
if(worker3position == "mountains"){
  killWorker3()
}
if(worker4position == "mountains"){
  killWorker4()
}

}
function nbHitForest(){
  if(worker1position == "forest"){
killWorker1()
  }
  if(worker2position == "forest"){
    killWorker2()
  }
  if(worker3position == "forest"){
    killWorker3()
  }
  if(worker4position == "forest"){
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
  var cut = setInterval(cutting4, 1300)
  cutCheck4 = 1
  }
}

function worker3cutting(){
  worker3position = "forest"
  if(worker3position == "forest" && cutCheck3 == 0){

  var mine = setInterval(cutting3, 1300)
  cutCheck3 = 1
  }
}


function worker2cutting(){

  worker2position = "forest"
  if(worker2position == "forest" && cutCheck2 == 0){

  var mine = setInterval(cutting2, 1300)
  cutCheck2 = 1
  }
}
function worker1cutting(){

  worker1position = "forest"
  if(worker1position == "forest" && cutCheck1 == 0){
  var cut = setInterval(cutting1, 1300)
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
  var mine = setInterval(mining4, 1300)
  mineCheck4 = 1
  }
}

function worker3mining(){
  worker3position = "mountains"
  if(worker3position == "mountains" && mineCheck3 == 0){

  var mine = setInterval(mining3, 1300)
  mineCheck3 = 1
  }
}


function worker2mining(){
  clearInterval(mine)
  worker2position = "mountains"
  if(worker2position == "mountains" && mineCheck2 == 0){

  var mine = setInterval(mining2, 1300)
  mineCheck2 = 1
  }
}
function worker1mining(){
  clearInterval(mine)
  worker1position = "mountains"
  if(worker1position == "mountains" && mineCheck1 == 0){
  var mine = setInterval(mining1, 1300)
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


  wagonGold += 100
  wagonWood -= 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonWood").textContent = wagonWood;
  wagonPosition1 = "market"
}
function tradeWoodB(){
  wagonWood += 100
  wagonGold -= 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonWood").textContent = wagonWood;
  wagonPosition1 = "market"
}
function tradeOreS(){
  wagonOre -= 100
  wagonGold += 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonOre").textContent = wagonOre;
wagonPosition1 = "market"
}
function tradeOreB(){
  wagonOre += 100
  wagonGold -= 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonOre").textContent = wagonOre;
wagonPosition1 = "market"
}
function depositResources(){
  wagonPosition1 = "castle"
  if(wagonGold >= 100){
    wagonGold -= 100
    castleGold += 100
  }
  if(wagonOre >= 100){
    wagonOre -= 100
    castleOre += 100
  }
  if(wagonWood >= 100){
    wagonWood -= 100
    castleWood += 100
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

  if(chance < 0.80 && time == "night"){
     var chance = Math.random()
    document.getElementById("raidAlert").style.display = "block";
  document.getElementById("raidAlert").textContent = "You Have Been Raided";
  if(Ocheck == 0){
  setTimeout(setOpacityR, 5000)
    Ocheck = 1
  }
 if(banditT1 > 0 && chance < .20){
    alert("T1")
 }
 else if(banditT2 > 0 && chance < .40){
    alert("T2")
 }
 else if(banditT3 > 0 && chance < .60){
    alert("T3")
 }
 else if(banditT4 > 0 && chance < .80){
    alert("T4")
 }
 else if(banditT5 > 0 && chance < 1){
   alert("T5")
 }
 }
   if(chance < 0.33 && time == "day"){
     var chance = Math.random()
    document.getElementById("raidAlert").style.display = "block";
      document.getElementById("raidAlert").textContent = "You Have Been Raided";
     if(Ocheck == 0){
     setTimeout(setOpacityR, 5000)
       Ocheck = 1
     }
    if(banditT1 > 0 && chance < .20){
       alert("T1")
    }
    else if(banditT2 > 0 && chance < .40){
       alert("T2")
    }
    else if(banditT3 > 0 && chance < .60){
       alert("T3")
    }
    else if(banditT4 > 0 && chance < .80){
       alert("T4")
    }
    else if(banditT5 > 0 && chance < 1){
      alert("T5")
    }
  }
  else{
    alert("no raid")
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
  document.getElementById("worker1").setAttribute("cx", 410)
  document.getElementById("worker1").setAttribute("cy", 320)
  alert("worker 1 was revived from the dead")
}
function reviveWorker2(){
  document.getElementById("worker2X1").setAttribute("opacity", 0)
  document.getElementById("worker2X2").setAttribute("opacity", 0)
  worker2position = "castle"
  document.getElementById("worker2").setAttribute("cx", 440)
  document.getElementById("worker2").setAttribute("cy", 320)
  alert("worker 2 was revived from the dead")
}

function reviveWorker3(){
  document.getElementById("worker3X1").setAttribute("opacity", 0)
  document.getElementById("worker3X2").setAttribute("opacity", 0)
  worker3position = "castle"
  document.getElementById("worker3").setAttribute("cx", 470)
  document.getElementById("worker3").setAttribute("cy", 320)
  alert("worker 3 was revived from the dead")
}

function reviveWorker4(){
  document.getElementById("worker4X1").setAttribute("opacity", 0)
  document.getElementById("worker4X2").setAttribute("opacity", 0)
  worker4position = "castle"
  document.getElementById("worker4").setAttribute("cx", 500)
  document.getElementById("worker4").setAttribute("cy", 320)
  alert("worker 4 was revived from the dead")
}

function killWorker1(){
  document.getElementById("worker1X1").setAttribute("opacity", 1)
  document.getElementById("worker1X2").setAttribute("opacity", 1)

worker1position = "dead"
document.getElementById("worker1").setAttribute("cx", 1500)
document.getElementById("worker1").setAttribute("cy", 1500)
alert("worker 1 died")
setTimeout(reviveWorker1, 180000)
}
function killWorker2(){
  document.getElementById("worker2X1").setAttribute("opacity", 1)
  document.getElementById("worker2X2").setAttribute("opacity", 1)

worker2position = "dead"
document.getElementById("worker2").setAttribute("cx", 1500)
document.getElementById("worker2").setAttribute("cy", 1500)
alert("worker 2 died")
setTimeout(reviveWorker2, 180000)
}

function killWorker3(){
  document.getElementById("worker3X1").setAttribute("opacity", 1)
  document.getElementById("worker3X2").setAttribute("opacity", 1)

worker3position = "dead"
document.getElementById("worker3").setAttribute("cx", 1500)
document.getElementById("worker3").setAttribute("cy", 1500)
alert("worker 3 died")
setTimeout(reviveWorker3, 180000)
}

function killWorker4(){
  document.getElementById("worker4X1").setAttribute("opacity", 1)
  document.getElementById("worker4X2").setAttribute("opacity", 1)

worker4position = "dead"
document.getElementById("worker4").setAttribute("cx", 1500)
document.getElementById("worker4").setAttribute("cy", 1500)
alert("worker 4 died")
setTimeout(reviveWorker4, 180000)
}


function randomChoice(){
  if(worker1position == "mountains" || worker2position == "mountains" || worker3position == "mountains" || worker4position == "mountains"){
    choice = "nbMount"

    choiceMake()
  }
  if(worker1position == "forest" || worker2position == "forest" || worker3position == "forest" || worker4position == "forest"){
    choice = "nbForest"

    choiceMake()
  }
  if(castleGold >= 500){
    choice = "citRobbed"
    choiceMake()
  }
}
function choiceMake(){
  document.getElementById("choiceOne").style.display = "block";
  document.getElementById("choiceTwo").style.display = "block";
  document.getElementById("choiceThree").style.display = "block";

if(choice == "citRobbed"){
  alert("Steward: Sir! Citizens from a local village have come to us saying that they were robbed by a group of Acursed! As their ruler, I think they want you to help them by recovering what they've lost.")
  alert("Choice: Select the RED to do nothing. Select GRAY to pay them in equal value to what they've lost(-100 gold). Select BLUE to send the garrison to find and recover the stolen possesions from the Acursed(-50 gold + chance)")
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
  alert("As you stand where the dragon will meet you on, you feel the ground shake and hear loud thuds at regular intervals. Steward: He approaches/. The thuds grow louder until a massive shape swoops down from the clouds and lands before you. It is a dragon. You cannot help but gape in awe at the sight before you. The dragon lowers it's head and speaks. Dragon: Who is this who stands before me? Where is Old King Genus? Speak human, or I shall slay you where you stand!/. You manage to explain that Old King Genus is dead, and that you are his nephew and heir. The dragon relaxes and droops slightly. Dragon: So that is why. You have my condolences and my grief. He was a good king and we had such pleasent talks. I assume that I will be meeting you from now on, and that your steward has already explained how these meetings will work? But, in Old King Genus's memory, I will not ask for my pay this time. Now that thats out out of the way, I would like to speak with you.")
alert("Choice: Select the RED choice to speak with him in a hostile tone. Select the GRAY choice to tell him that you don't feel like talking at that moment. Select the BLUE choice to oblige him in a friendly conversation. ")
}
if(choice == "dragonT"){
  alert("As you stand where you will meet the dragon, you hear the familiar thuds as you feel the dragon aproaching. The dragon lands before you and looks down. Dragon: Greetings my young king. I have come to collect my payment. But why just do business? let us talk, about anything that might be happening with you and your kingdom.")
  alert("Choice: Select the RED choice to speak hostily. Select the GRAY choice to tell him that you don't feel like talking. Select the BLUE choice to speak to him in a friendly tone.")
}
}
function choice1select(){
document.getElementById("choiceOne").style.display = "none";
document.getElementById("choiceTwo").style.display = "none";
document.getElementById("choiceThree").style.display = "none";
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
  if(chance < .45){
    alert("Steward: We have recieved reports that the Night Beast has moved on, and the garrison did not encounter it.")
  }
  else if(chance < .9){
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
}
if(choice == "nbForest"){
  var chance = Math.random()
  if(chance < .45){
    alert("Steward: We have recieved reports that the Night Beast has moved on, and the garrison did not encounter it.")
  }
  else if(chance < .9){
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
}


}
function choice2select(){
  document.getElementById("choiceOne").style.display = "none";
  document.getElementById("choiceTwo").style.display = "none";
  document.getElementById("choiceThree").style.display = "none";
  if(keyChoice == "dragonIntro"){
alert("Dragon: Of course. I wouldn't want to force someone to have a conversation they wouldn't want to have. Although I hope that you will speak with me next time. I do miss the talks I had with Old King Genus. I will be back tomorrow for my fee. You have my farewell until the next time we speak.")
keyChoice = "blank"
dragonIntroR = 2
  }
  if(choice == "dragonT"){
    alert("Dragon: I see. Well, I am not one to force another to talk for my pleasure, but i do enjoy talking with someone, and Old King Genus was the only one that realy obliged my desire. I do hope you will talk to me tomorrow. Farewell until next time my young king.")
choice = "blank"

  }
  if(choice == "nbMount"){
    var chance = Math.random()
    if(chance < .6){
      alert("Steward: We have recieved reports that the workers didn't encounter the Night Beast, and have continued working as planned")
    }
else{
  alert("Steward: We have recieved reports that the Night Beast found your workers and they did not survive the encounter.")
  castleGold -= 100
  mountainOre = 0
  nbHitMount()
}
    choice = "blank"
  }

  if(choice == "nbForest"){
    var chance = Math.random()
    if(chance < .6){
      alert("Steward: We have recieved reports that the workers didn't encounter the Night Beast, and have continued working as planned")
    }
else{
  alert("Steward: We have recieved reports that the Night Beast found your workers and they didn't survive the encounter.")
  castleGold -= 100
  forestWood = 0
  nbHitForest()
}
    choice = "blank"
  }
}
function choice3select(){
  document.getElementById("choiceOne").style.display = "none";
  document.getElementById("choiceTwo").style.display = "none";
  document.getElementById("choiceThree").style.display = "none";
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
     setTimeout(notificationOP, 7000)
       Ncheck = 1
     }
    time = "night"
      document.getElementById("dayNight").setAttribute("opacity", 0.6)

    document.getElementById("dayToNight").beginElement()
  }
  else if(time == "night"){
    time = "day"
    document.getElementById("dayNight").setAttribute("opacity", 0)
dragon()
      document.getElementById("nightToDay").beginElement()
    setBandits1()
     setBandits2()
     setBandits3()
     setBandits4()
     setBandits5()
  }

}
