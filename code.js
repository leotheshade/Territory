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
var castleOre = 0
var wagonOre = 0
var forestWood = 0
var wagonWood = 0
var castleWood = 0
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

timec()
 var cycle = setInterval(timec, 360000)
function forestClick(){
  if(wagonCheck1 == 1){
    wagonMountains1 =0
    wagonForest = 1
    wagonCastle = 0
    wagonCheck1 = 0
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
 // if(wagonCastle == 1 ){
 //
 // }
if(wagonSellW == 1 && wagonPosition1 == "castle" && castleWood >= 100){
  document.getElementById("wagon1MoveX").setAttribute("from", 450)
 document.getElementById("wagon1MoveX").setAttribute("to", 435)
  document.getElementById("wagon1MoveX").setAttribute("dur", 20)

 document.getElementById("wagon1MoveY").setAttribute("from", 350)
 document.getElementById("wagon1MoveY").setAttribute("to", 110)
 document.getElementById("wagon1MoveY").setAttribute("dur", 20)

  document.getElementById("wagon1MoveX").beginElement()
 document.getElementById("wagon1MoveY").beginElement()

 document.getElementById("supplyWagon1").setAttribute("x", 435)
 document.getElementById("supplyWagon1").setAttribute("y", 111)

 wagonPosition1 = "moving"

 var wagonTakeW = setTimeout(takeWoodForest, 20000)
}

if(wagonBuyW == 1 && wagonPosition1 == "castle"){
  document.getElementById("wagon1MoveX").setAttribute("from", 450)
 document.getElementById("wagon1MoveX").setAttribute("to", 435)
  document.getElementById("wagon1MoveX").setAttribute("dur", 20)

 document.getElementById("wagon1MoveY").setAttribute("from", 350)
 document.getElementById("wagon1MoveY").setAttribute("to", 110)
 document.getElementById("wagon1MoveY").setAttribute("dur", 20)

  document.getElementById("wagon1MoveX").beginElement()
 document.getElementById("wagon1MoveY").beginElement()

 document.getElementById("supplyWagon1").setAttribute("x", 435)
 document.getElementById("supplyWagon1").setAttribute("y", 111)

 wagonPosition1 = "moving"

 var wagonTakeW = setTimeout(takeWoodForest, 20000)
}

if(wagonSellO == 1 && wagonPosition1 == "castle"){
  document.getElementById("wagon1MoveX").setAttribute("from", 450)
 document.getElementById("wagon1MoveX").setAttribute("to", 435)
  document.getElementById("wagon1MoveX").setAttribute("dur", 20)

 document.getElementById("wagon1MoveY").setAttribute("from", 350)
 document.getElementById("wagon1MoveY").setAttribute("to", 110)
 document.getElementById("wagon1MoveY").setAttribute("dur", 20)

  document.getElementById("wagon1MoveX").beginElement()
 document.getElementById("wagon1MoveY").beginElement()

 document.getElementById("supplyWagon1").setAttribute("x", 435)
 document.getElementById("supplyWagon1").setAttribute("y", 111)

 wagonPosition1 = "moving"

 var wagonTakeW = setTimeout(takeWoodForest, 20000)
}

if(wagonBuyO == 1 && wagonPosition1 == "castle"){
  document.getElementById("wagon1MoveX").setAttribute("from", 450)
 document.getElementById("wagon1MoveX").setAttribute("to", 435)
  document.getElementById("wagon1MoveX").setAttribute("dur", 20)

 document.getElementById("wagon1MoveY").setAttribute("from", 350)
 document.getElementById("wagon1MoveY").setAttribute("to", 110)
 document.getElementById("wagon1MoveY").setAttribute("dur", 20)

  document.getElementById("wagon1MoveX").beginElement()
 document.getElementById("wagon1MoveY").beginElement()

 document.getElementById("supplyWagon1").setAttribute("x", 435)
 document.getElementById("supplyWagon1").setAttribute("y", 111)

 wagonPosition1 = "moving"

 var wagonTakeW = setTimeout(takeWoodForest, 20000)
}

  if(castleWorker1 == 1 && worker1position == "forest"){

      document.getElementById("worker1moveX").setAttribute("from", 800)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 10)

    document.getElementById("worker1moveY").setAttribute("from", 250)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 10)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
    castleWorker1 = 0
    worker1position = "moving"
    var startMine1 = setTimeout(worker1castle, 10000)
    }
    if(castleWorker2 == 1 && worker2position == "forest"){
      document.getElementById("worker2moveX").setAttribute("from", 800)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 10)

    document.getElementById("worker2moveY").setAttribute("from", 280)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 10)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
    castleWorker2 = 0
    worker2position = "moving"
    setTimeout(worker2castle, 10000)

    }
    if(castleWorker3 == 1 && worker3position == "forest"){
       document.getElementById("worker3moveX").setAttribute("from", 800)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 10)

    document.getElementById("worker3moveY").setAttribute("from", 310)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 10)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
    castleWorker3 = 0
    worker3position = "moving"
    setTimeout(worker3castle, 10000)
    }
    //down
    if(castleWorker4 == 1 && worker4position == "forest"){
      document.getElementById("worker4moveX").setAttribute("from", 800)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 10)

    document.getElementById("worker4moveY").setAttribute("from", 340)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 10)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    castleWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 10000)

    }


  //up
  //down


  if(wagonWorker1 == 1 && worker1position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){

    wagonDefence += 1

      document.getElementById("worker1moveX").setAttribute("from", 800)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 20)

    document.getElementById("worker1moveY").setAttribute("from", 250)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 20)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
    // wagonWorker1 = 0
    worker1position = "moving"
    var startMine1 = setTimeout(worker1castle, 20000)
    }
    if(wagonWorker2 == 1 && worker2position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
      document.getElementById("worker2moveX").setAttribute("from", 800)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 20)

    document.getElementById("worker2moveY").setAttribute("from", 280)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 20)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
    // wagonWorker2 = 0
    worker2position = "moving"
    setTimeout(worker2castle, 20000)

    }
    if(wagonWorker3 == 1 && worker3position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
       document.getElementById("worker3moveX").setAttribute("from", 800)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 20)

    document.getElementById("worker3moveY").setAttribute("from", 310)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 20)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
    // wagonWorker3 = 0
    worker3position = "moving"
    setTimeout(worker3castle, 20000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "forest" && wagonCastle == 1 && wagonPosition1 == "forest"){
      wagonDefence += 1
      document.getElementById("worker4moveX").setAttribute("from", 800)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 20)

    document.getElementById("worker4moveY").setAttribute("from", 340)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 20)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    // wagonWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 20000)

    }
  if(wagonCastle == 1 && wagonPosition1 == "forest"){
    raid()
    document.getElementById("wagon1MoveX").setAttribute("from", 760)
    document.getElementById("wagon1MoveX").setAttribute("to", 450)
    document.getElementById("wagon1MoveX").setAttribute("dur", 20)

    document.getElementById("wagon1MoveY").setAttribute("from", 280)
    document.getElementById("wagon1MoveY").setAttribute("to", 350)
    document.getElementById("wagon1MoveY").setAttribute("dur", 20)

    document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 450)
    document.getElementById("supplyWagon1").setAttribute("y", 350)

    wagonCastle = 0
    wagonPosition1 = "moving"
    var depoOre = setTimeout(depositWood, 20000)

  }


  //up



  if(wagonForest == 1 && wagonPosition1 == "castle"){
     document.getElementById("wagon1MoveX").setAttribute("from", 450)
    document.getElementById("wagon1MoveX").setAttribute("to", 760)
     document.getElementById("wagon1MoveX").setAttribute("dur", 20)

    document.getElementById("wagon1MoveY").setAttribute("from", 350)
    document.getElementById("wagon1MoveY").setAttribute("to", 280)
    document.getElementById("wagon1MoveY").setAttribute("dur", 20)

     document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 760)
    document.getElementById("supplyWagon1").setAttribute("y", 280)

    wagonPosition1 = "moving"

    var wagonTakeW = setTimeout(takeWoodForest, 20000)
  }
   if(wagonWorker1 == 1 && worker1position == "castle" && wagonForest == 1){

      document.getElementById("worker1moveX").setAttribute("from", 410)
    document.getElementById("worker1moveX").setAttribute("to", 800)
    document.getElementById("worker1moveX").setAttribute("dur", 20)

    document.getElementById("worker1moveY").setAttribute("from", 320)
    document.getElementById("worker1moveY").setAttribute("to", 250)
    document.getElementById("worker1moveY").setAttribute("dur", 20)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 800)
    document.getElementById("worker1").setAttribute("cy", 250)
    // wagonWorker1 = 0
    worker1position = "moving"
    var startMine1 = setTimeout(worker1cutting, 20000)
    }
  if(wagonWorker2 == 1 && worker2position == "castle" && wagonForest == 1){
     document.getElementById("worker2moveX").setAttribute("from", 440)
    document.getElementById("worker2moveX").setAttribute("to", 800)
    document.getElementById("worker2moveX").setAttribute("dur", 20)

    document.getElementById("worker2moveY").setAttribute("from", 320)
    document.getElementById("worker2moveY").setAttribute("to", 280)
    document.getElementById("worker2moveY").setAttribute("dur", 20)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 800)
    document.getElementById("worker2").setAttribute("cy", 280)
    // wagonWorker2 = 0
    worker2position = "moving"
    var startMine1 = setTimeout(worker2cutting, 20000)
  }
   if(wagonWorker3 == 1 && worker3position == "castle" && wagonForest == 1){
     document.getElementById("worker3moveX").setAttribute("from", 470)
    document.getElementById("worker3moveX").setAttribute("to", 800)
    document.getElementById("worker3moveX").setAttribute("dur", 20)

    document.getElementById("worker3moveY").setAttribute("from", 320)
    document.getElementById("worker3moveY").setAttribute("to", 310)
    document.getElementById("worker3moveY").setAttribute("dur", 20)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 800)
    document.getElementById("worker3").setAttribute("cy", 310)
    // wagonWorker3 = 0
    worker3position = "moving"
     var startMine1 = setTimeout(worker3cutting, 20000)
  }
   if(wagonWorker4 == 1 && worker4position == "castle" && wagonForest == 1){
     document.getElementById("worker4moveX").setAttribute("from", 500)
    document.getElementById("worker4moveX").setAttribute("to", 800)
    document.getElementById("worker4moveX").setAttribute("dur", 20)

    document.getElementById("worker4moveY").setAttribute("from", 320)
    document.getElementById("worker4moveY").setAttribute("to", 340)
    document.getElementById("worker4moveY").setAttribute("dur", 20)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 800)
    document.getElementById("worker4").setAttribute("cy", 340)
    // wagonWorker4 = 0
    worker4position = "moving"
     var startMine1 = setTimeout(worker4cutting, 20000)
  }

  //normal
   if(forestWorker1 == 1 && worker1position == "castle"){

      document.getElementById("worker1moveX").setAttribute("from", 410)
    document.getElementById("worker1moveX").setAttribute("to", 800)
    document.getElementById("worker1moveX").setAttribute("dur", 10)

    document.getElementById("worker1moveY").setAttribute("from", 320)
    document.getElementById("worker1moveY").setAttribute("to", 250)
    document.getElementById("worker1moveY").setAttribute("dur", 10)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 800)
    document.getElementById("worker1").setAttribute("cy", 250)
    wagonWorker1 = 0
    worker1position = "moving"
   var startMine1 = setTimeout(worker1cutting, 10000)
    }
  if(forestWorker2 == 1 && worker2position == "castle"){
     document.getElementById("worker2moveX").setAttribute("from", 440)
    document.getElementById("worker2moveX").setAttribute("to", 800)
    document.getElementById("worker2moveX").setAttribute("dur", 10)

    document.getElementById("worker2moveY").setAttribute("from", 320)
    document.getElementById("worker2moveY").setAttribute("to", 280)
    document.getElementById("worker2moveY").setAttribute("dur", 10)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 800)
    document.getElementById("worker2").setAttribute("cy", 280)
    wagonWorker2 = 0
    worker2position = "moving"
    var startMine1 = setTimeout(worker2cutting, 10000)
  }
   if(forestWorker3 == 1 && worker3position == "castle"){
     document.getElementById("worker3moveX").setAttribute("from", 470)
    document.getElementById("worker3moveX").setAttribute("to", 800)
    document.getElementById("worker3moveX").setAttribute("dur", 10)

    document.getElementById("worker3moveY").setAttribute("from", 320)
    document.getElementById("worker3moveY").setAttribute("to", 310)
    document.getElementById("worker3moveY").setAttribute("dur", 10)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 800)
    document.getElementById("worker3").setAttribute("cy", 310)
    wagonWorker3 = 0
    worker3position = "moving"
     var startMine1 = setTimeout(worker3cutting, 10000)
  }
   if(forestWorker4 == 1 && worker4position == "castle"){
     document.getElementById("worker4moveX").setAttribute("from", 500)
    document.getElementById("worker4moveX").setAttribute("to", 800)
    document.getElementById("worker4moveX").setAttribute("dur", 10)

    document.getElementById("worker4moveY").setAttribute("from", 320)
    document.getElementById("worker4moveY").setAttribute("to", 340)
    document.getElementById("worker4moveY").setAttribute("dur", 10)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 800)
    document.getElementById("worker4").setAttribute("cy", 340)
    // wagonWorker4 = 0
    worker4position = "moving"
     var startMine1 = setTimeout(worker4cutting, 10000)
  }
  //normal ^
  if(wagonMountains1 == 1 && wagonPosition1 == "castle"){
    document.getElementById("wagon1MoveX").setAttribute("from", 450)
    document.getElementById("wagon1MoveX").setAttribute("to", 70)
    document.getElementById("wagon1MoveX").setAttribute("dur", 20)

    document.getElementById("wagon1MoveY").setAttribute("from", 350)
    document.getElementById("wagon1MoveY").setAttribute("to", 480)
    document.getElementById("wagon1MoveY").setAttribute("dur", 20)

    document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 70)
    document.getElementById("supplyWagon1").setAttribute("y", 480)


    wagonPosition1 = "moving"
    var startTakeOreM = setTimeout(takeOreMountains, 20000)

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
    document.getElementById("worker1moveX").setAttribute("dur", 20)

    document.getElementById("worker1moveY").setAttribute("from", 320)
    document.getElementById("worker1moveY").setAttribute("to", 450)
    document.getElementById("worker1moveY").setAttribute("dur", 20)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 40)
    document.getElementById("worker1").setAttribute("cy", 450)
    worker1position = "moving"
    var startMine1 = setTimeout(worker1mining, 20000)
    }
    if(wagonWorker2 == 1 && worker2position == "castle" && wagonMountains1 == 1){
      document.getElementById("worker2moveX").setAttribute("from", 440)
    document.getElementById("worker2moveX").setAttribute("to", 70)
    document.getElementById("worker2moveX").setAttribute("dur", 20)

    document.getElementById("worker2moveY").setAttribute("from", 320)
    document.getElementById("worker2moveY").setAttribute("to", 450)
    document.getElementById("worker2moveY").setAttribute("dur", 20)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 70)
    document.getElementById("worker2").setAttribute("cy", 450)
    worker2position = "moving"
    setTimeout(worker2mining, 20000)

    }
    if(wagonWorker3 == 1 && worker3position == "castle" && wagonMountains1 == 1){
       document.getElementById("worker3moveX").setAttribute("from", 470)
    document.getElementById("worker3moveX").setAttribute("to", 100)
    document.getElementById("worker3moveX").setAttribute("dur", 20)

    document.getElementById("worker3moveY").setAttribute("from", 320)
    document.getElementById("worker3moveY").setAttribute("to", 450)
    document.getElementById("worker3moveY").setAttribute("dur", 20)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 100)
    document.getElementById("worker3").setAttribute("cy", 450)
    worker3position = "moving"
    setTimeout(worker3mining, 20000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "castle" && wagonMountains1 == 1){
      document.getElementById("worker4moveX").setAttribute("from", 500)
    document.getElementById("worker4moveX").setAttribute("to", 130)
    document.getElementById("worker4moveX").setAttribute("dur", 20)

    document.getElementById("worker4moveY").setAttribute("from", 320)
    document.getElementById("worker4moveY").setAttribute("to", 450)
    document.getElementById("worker4moveY").setAttribute("dur", 20)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 130)
    document.getElementById("worker4").setAttribute("cy", 450)
    worker4position = "moving"
    setTimeout(worker4mining, 20000)

    }
  //down send back to castle
  if(wagonWorker1 == 1 && worker1position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker1moveX").setAttribute("from", 40)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 20)

    document.getElementById("worker1moveY").setAttribute("from", 450)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 20)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
    worker1position = "moving"
    var startMine1 = setTimeout(worker1castle, 20000)
    }
    if(wagonWorker2 == 1 && worker2position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker2moveX").setAttribute("from", 70)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 20)

    document.getElementById("worker2moveY").setAttribute("from", 450)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 20)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
    worker2position = "moving"
    setTimeout(worker2castle, 20000)

    }
    if(wagonWorker3 == 1 && worker3position == "mountains" && wagonCastle == 1 && wagonPosition1=="mountains"){
       document.getElementById("worker3moveX").setAttribute("from", 100)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 20)

    document.getElementById("worker3moveY").setAttribute("from", 450)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 20)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
    worker3position = "moving"
    setTimeout(worker3castle, 20000)
    }
    //down
    if(wagonWorker4 == 1 && worker4position == "mountains" && wagonCastle == 1 && wagonPosition1 == "mountains"){
      document.getElementById("worker4moveX").setAttribute("from", 130)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 20)

    document.getElementById("worker4moveY").setAttribute("from", 450)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 20)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    worker4position = "moving"
    setTimeout(worker4castle, 20000)

    }
  if(wagonCastle == 1 && wagonPosition1 == "mountains"){
    document.getElementById("wagon1MoveX").setAttribute("from", 70)
    document.getElementById("wagon1MoveX").setAttribute("to", 450)
    document.getElementById("wagon1MoveX").setAttribute("dur", 20)

    document.getElementById("wagon1MoveY").setAttribute("from", 480)
    document.getElementById("wagon1MoveY").setAttribute("to", 350)
    document.getElementById("wagon1MoveY").setAttribute("dur", 20)

    document.getElementById("wagon1MoveX").beginElement()
    document.getElementById("wagon1MoveY").beginElement()

    document.getElementById("supplyWagon1").setAttribute("x", 450)
    document.getElementById("supplyWagon1").setAttribute("y", 350)

    wagonCastle = 0
    wagonPosition1 = "moving"
    var depoOre = setTimeout(depositOre, 20000)

  }
  //up


  if(mountainWorker1 == 1 && worker1position == "castle" ){
    document.getElementById("worker1moveX").setAttribute("from", 410)
    document.getElementById("worker1moveX").setAttribute("to", 40)
    document.getElementById("worker1moveX").setAttribute("dur", 10)

    document.getElementById("worker1moveY").setAttribute("from", 320)
    document.getElementById("worker1moveY").setAttribute("to", 450)
    document.getElementById("worker1moveY").setAttribute("dur", 10)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 40)
    document.getElementById("worker1").setAttribute("cy", 450)
    mountainWorker1 = 0
    worker1position = "moving"
    var startMine1 = setTimeout(worker1mining, 10000)

  }

  if(mountainWorker2 == 1 && worker2position == "castle" ){
    document.getElementById("worker2moveX").setAttribute("from", 440)
    document.getElementById("worker2moveX").setAttribute("to", 70)
    document.getElementById("worker2moveX").setAttribute("dur", 10)

    document.getElementById("worker2moveY").setAttribute("from", 320)
    document.getElementById("worker2moveY").setAttribute("to", 450)
    document.getElementById("worker2moveY").setAttribute("dur", 10)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 70)
    document.getElementById("worker2").setAttribute("cy", 450)
    mountainWorker2 = 0
    worker2position = "moving"
    setTimeout(worker2mining, 10000)

  }

  if(mountainWorker3 == 1 && worker3position == "castle" ){
    document.getElementById("worker3moveX").setAttribute("from", 470)
    document.getElementById("worker3moveX").setAttribute("to", 100)
    document.getElementById("worker3moveX").setAttribute("dur", 10)

    document.getElementById("worker3moveY").setAttribute("from", 320)
    document.getElementById("worker3moveY").setAttribute("to", 450)
    document.getElementById("worker3moveY").setAttribute("dur", 10)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 100)
    document.getElementById("worker3").setAttribute("cy", 450)
    mountainWorker3 = 0
    worker3position = "moving"
    setTimeout(worker3mining, 10000)

  }
if(mountainWorker4 == 1 && worker4position == "castle" ){
    document.getElementById("worker4moveX").setAttribute("from", 500)
    document.getElementById("worker4moveX").setAttribute("to", 130)
    document.getElementById("worker4moveX").setAttribute("dur", 10)

    document.getElementById("worker4moveY").setAttribute("from", 320)
    document.getElementById("worker4moveY").setAttribute("to", 450)
    document.getElementById("worker4moveY").setAttribute("dur", 10)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 130)
    document.getElementById("worker4").setAttribute("cy", 450)
    mountainWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4mining, 10000)

  }

  if(castleWorker1 == 1 && worker1position == "mountains"){
    document.getElementById("worker1moveX").setAttribute("from", 40)
    document.getElementById("worker1moveX").setAttribute("to", 410)
    document.getElementById("worker1moveX").setAttribute("dur", 10)

    document.getElementById("worker1moveY").setAttribute("from", 450)
    document.getElementById("worker1moveY").setAttribute("to", 320)
    document.getElementById("worker1moveY").setAttribute("dur", 10)
    document.getElementById("worker1moveX").beginElement()
    document.getElementById("worker1moveY").beginElement()
    document.getElementById("worker1").setAttribute("cx", 410)
    document.getElementById("worker1").setAttribute("cy", 320)
    castleWorker1 = 0
    worker1position = "moving"
    setTimeout(worker1castle, 10000)
    clearTimeout(startMine1);
  }


  if(castleWorker2 == 1 && worker2position == "mountains"){
    document.getElementById("worker2moveX").setAttribute("from", 70)
    document.getElementById("worker2moveX").setAttribute("to", 440)
    document.getElementById("worker2moveX").setAttribute("dur", 10)

    document.getElementById("worker2moveY").setAttribute("from", 450)
    document.getElementById("worker2moveY").setAttribute("to", 320)
    document.getElementById("worker2moveY").setAttribute("dur", 10)
    document.getElementById("worker2moveX").beginElement()
    document.getElementById("worker2moveY").beginElement()
    document.getElementById("worker2").setAttribute("cx", 440)
    document.getElementById("worker2").setAttribute("cy", 320)
    castleWorker2 = 0
    worker2position = "moving"
    setTimeout(worker2castle, 10000)
    clearTimeout(startMine1);
  }



   if(castleWorker3 == 1 && worker3position == "mountains"){
    document.getElementById("worker3moveX").setAttribute("from", 100)
    document.getElementById("worker3moveX").setAttribute("to", 470)
    document.getElementById("worker3moveX").setAttribute("dur", 10)

    document.getElementById("worker3moveY").setAttribute("from", 450)
    document.getElementById("worker3moveY").setAttribute("to", 320)
    document.getElementById("worker3moveY").setAttribute("dur", 10)
    document.getElementById("worker3moveX").beginElement()
    document.getElementById("worker3moveY").beginElement()
    document.getElementById("worker3").setAttribute("cx", 470)
    document.getElementById("worker3").setAttribute("cy", 320)
    castleWorker3 = 0
    worker3position = "moving"
    setTimeout(worker3castle, 10000)
    clearTimeout(startMine1);
  }


  if(castleWorker4 == 1 && worker4position == "mountains"){
    document.getElementById("worker4moveX").setAttribute("from", 130)
    document.getElementById("worker4moveX").setAttribute("to", 500)
    document.getElementById("worker4moveX").setAttribute("dur", 10)

    document.getElementById("worker4moveY").setAttribute("from", 450)
    document.getElementById("worker4moveY").setAttribute("to", 320)
    document.getElementById("worker4moveY").setAttribute("dur", 10)
    document.getElementById("worker4moveX").beginElement()
    document.getElementById("worker4moveY").beginElement()
    document.getElementById("worker4").setAttribute("cx", 500)
    document.getElementById("worker4").setAttribute("cy", 320)
    castleWorker4 = 0
    worker4position = "moving"
    setTimeout(worker4castle, 10000)
    clearTimeout(startMine1);
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
  var cut = setInterval(cutting4, 1000)
  cutCheck4 = 1
  }
}

function worker3cutting(){
  worker3position = "forest"
  if(worker3position == "forest" && cutCheck3 == 0){

  var mine = setInterval(cutting3, 1000)
  cutCheck3 = 1
  }
}


function worker2cutting(){

  worker2position = "forest"
  if(worker2position == "forest" && cutCheck2 == 0){

  var mine = setInterval(cutting2, 1000)
  cutCheck2 = 1
  }
}
function worker1cutting(){

  worker1position = "forest"
  if(worker1position == "forest" && cutCheck1 == 0){
  var cut = setInterval(cutting1, 1000)
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
  var mine = setInterval(mining4, 1000)
  mineCheck4 = 1
  }
}

function worker3mining(){
  worker3position = "mountains"
  if(worker3position == "mountains" && mineCheck3 == 0){

  var mine = setInterval(mining3, 1000)
  mineCheck3 = 1
  }
}


function worker2mining(){
  clearInterval(mine)
  worker2position = "mountains"
  if(worker2position == "mountains" && mineCheck2 == 0){

  var mine = setInterval(mining2, 1000)
  mineCheck2 = 1
  }
}
function worker1mining(){
  clearInterval(mine)
  worker1position = "mountains"
  if(worker1position == "mountains" && mineCheck1 == 0){
  var mine = setInterval(mining1, 1000)
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
}
function tradeWoodB(){
  wagonWood += 100
  wagonGold -= 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonWood").textContent = wagonWood;
}
function tradeOreS(){
  wagonOre -= 100
  wagonGold += 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonOre").textContent = wagonOre;

}
function tradeOreB(){
  wagonOre += 100
  wagonGold -= 100
  document.getElementById("displayWagonGold").textContent = wagonGold;
  document.getElementById("displayWagonOre").textContent = wagonOre;

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
    document.getElementById("raidAlert").style.display = "block";

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

      document.getElementById("nightToDay").beginElement()
    setBandits1()
     setBandits2()
     setBandits3()
     setBandits4()
     setBandits5()
  }

}
