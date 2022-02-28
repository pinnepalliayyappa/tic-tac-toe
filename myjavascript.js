var one=document.querySelector('#one');
var two=document.querySelector('#two');
var three=document.querySelector('#three');
var four=document.querySelector('#four');
var five=document.querySelector('#five');
var six=document.querySelector('#six');
var seven=document.querySelector('#seven');
var eight=document.querySelector('#eight');
var nine=document.querySelector('#nine');

var cp='btn1'


var head=document.getElementById('head')
//var restart=document.getElementById('restart')
var guduri=document.getElementById('guduri')
var possibility=document.getElementById("possibility")
possibility.style.color='#ff00d0'

console.log(head);
//heading color change function
function getRandomcolor() {
  var letters='0123456789ABCDEF'
  var color='#'
  for (var i = 0; i < 6; i++) {
    color+= letters[Math.floor(Math.random()*16)]
  }
  return color
}
function changeColor() {
  color=getRandomcolor()
  head.style.color=color
  //p1.style.color=color
//  p2.style.color=color
  guduri.style.color=color
  //restart.style.color=color
}
setInterval("changeColor()",500)



/*function currentPlayer(ele_id) {

  if (ele_id==='btn1') {
    cp='btn1'
    console.log(cp);
  }
  else if (ele_id==='btn2') {
    cp='btn2'
    console.log(cp);
  }
}

if (cp==='btn1') {
  console.log('T');
  //one.textContent='X'
}
else {
  console.log(cp);
  console.log("F");
  //one.textContent='O'
}
*/
//CEEL ONE
one.addEventListener('click',function (){

  if (one.textContent==='') {
    if (cp==='btn1') {
      console.log(cp);
      one.textContent='X'

      if ((two.textContent==='X' && three.textContent==='X')||
      (four.textContent==='X' && seven.textContent==='X')||
      (five.textContent==='X' && nine.textContent==='X')) {
        alert("Congratulations.. You Won the Game....!")
        return ''
      }
    botOne('one')
    }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//CELL two
two.addEventListener('click',function () {

  if (two.textContent==='') {
    if (cp==='btn1') {
      two.textContent='X'
      if ((one.textContent==='X' && three.textContent==='X')||
      (five.textContent==='X' && eight.textContent==='X')) {
       alert("Congratulations.. You Won the Game....!")
        return ''
      }
      botTwo('two')
    }
  }
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//CELL THREE
three.addEventListener('click',function () {

  if (three.textContent==='') {
    if (cp==='btn1') {
      three.textContent='X'
      if ((two.textContent==='X' && one.textContent==='X')||
      (five.textContent==='X' && seven.textContent==='X')||
      (six.textContent==='X' && nine.textContent==='X')) {
        alert("Congratulations.. You Won the Game....!")
        return ''
      }
      botThree('three')
    }
}
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//CELL FOUR
four.addEventListener('click',function () {

  if (four.textContent==='') {
    if (cp==='btn1') {
      four.textContent='X'
      if ((five.textContent==='X' && six.textContent==='X')||
      (one.textContent==='X' && seven.textContent==='X')){
        alert("Congratulations.. You Won the Game....!")
        return ''
      }
    botFour('four')
  }
}
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//cell five coding placed at last
//cell six
six.addEventListener('click',function () {

  if (six.textContent==='') {
    if (cp==='btn1') {
      six.textContent='X'
      if ((five.textContent==='X' && four.textContent==='X')||
      (three.textContent==='X' && nine.textContent==='X')) {
        alert("Congratulations.. You Won the Game....!")
        return ''
      }
    botSix('six')
  }
}
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//cell seven
seven.addEventListener('click',function () {

  if (seven.textContent==='') {
    if (cp==='btn1') {
      seven.textContent='X'
      if ((five.textContent==='X' && three.textContent==='X')||
      (four.textContent==='X' && one.textContent==='X')||
      (eight.textContent==='X' && nine.textContent==='X')) {
        alert("Congratulations.. You Won the Game....!")
        return ''
      }
  botSeven("seven")
  }
}
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//cell eight
eight.addEventListener('click',function () {

  if (eight.textContent==='') {
    if (cp==='btn1') {
      eight.textContent='X'
      if ((seven.textContent==='X' && nine.textContent==='X')||
      (five.textContent==='X' && two.textContent==='X')){
       alert("Congratulations.. You Won the Game....!")
        return ''
      }
    botEight('eight')
  }
}
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})
//cell nine
nine.addEventListener('click',function () {

  if (nine.textContent==='') {
    if (cp==='btn1') {
      nine.textContent='X'
      if ((five.textContent==='X' && one.textContent==='X')||
      (eight.textContent==='X' && seven.textContent==='X')||
      (six.textContent==='X' && three.textContent==='X')) {
       alert("Congratulations.. You Won the Game....!")
        return ''
      }
    botNine('nine')
  }
}

  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})

//cell five
five.addEventListener('click',function () {

  if (five.textContent==='') {
    if (cp==='btn1') {
      five.textContent='X'
      if ((nine.textContent==='X' && one.textContent==='X')||
      (three.textContent==='X' && seven.textContent==='X')||
      (two.textContent==='X' && eight.textContent==='X')||
       (four.textContent==='X' && six.textContent==='X')){
         alert("you Won the Game....!")
         return ''
      }
    }
    botFive('five')
  }
  else {
    alert("Cell is not Empty.Try Another Cell...")
  }
})


console.log(one);
var squares=document.querySelectorAll("td")

//function that cleares all the content of all the squares.
function clearSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent=''
  }

}


function botOne(prev) {
    if ((four.textContent==='O' && five.textContent==='O' && six.textContent==='')||
    (four.textContent==='O' && six.textContent==='O' && five.textContent==='')||
    (five.textContent==='O' && six.textContent==='O'&& four.textContent==='')){
      if (four.textContent==='O' && five.textContent==='O') {
        if (six.textContent==='') {
        six.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
      else if (four.textContent==='O' && six.textContent==='O') {
        if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
      else{
       if (four.textContent==='') {
        four.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''

    }
  }
  }
    else if ((seven.textContent==='O' && eight.textContent==='O' && nine.textContent==='')||
    (seven.textContent==='O' && nine.textContent==='O' && eight.textContent==='')||
    (eight.textContent==='O' && nine.textContent==='O' && seven.textContent==='')){
      if (seven.textContent==='O' && eight.textContent==='O') {
        if (nine.textContent==='') {
          nine.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else if (seven.textContent==='O' && nine.textContent==='O') {
        if (eight.textContent==='') {
          eight.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else {
        if (seven.textContent==='') {
          seven.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
    }
    else if ((two.textContent==='O' && five.textContent==='O' && eight.textContent==='' )||
    (two.textContent==='O' && eight.textContent==='O' && five.textContent==='')||
    (five.textContent==='O' && eight.textContent==='O' && two.textContent==='')){
      if (two.textContent==='O' && five.textContent==='O') {
        if (eight.textContent==='') {
          eight.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else if (two.textContent==='O' && eight.textContent==='O') {
        if (five.textContent==='') {
          five.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else {
        if (two.textContent==='') {
          two.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
    }
    else if ((three.textContent==='O' && six.textContent==='O' && nine.textContent==='')||
    (three.textContent==='O' && nine.textContent==='O' && six.textContent==='')||
    (six.textContent==='O' && nine.textContent==='O' && three.textContent==='')){
      if (three.textContent==='O' && six.textContent==='O') {
        if (nine.textContent==='') {
          nine.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else if (three.textContent==='O' && nine.textContent==='O') {
        if (six.textContent==='') {
          six.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else {
        if (three.textContent==='') {
          three.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
    }
    else if ((three.textContent==='O' && five.textContent==='O' && seven.textContent==='')||
    (three.textContent==='O' && seven.textContent==='O' && five.textContent==='')||
    (five.textContent==='O' && seven.textContent==='O' && three.textContent==='')){
      if (three.textContent==='O' && five.textContent==='O') {
        if (seven.textContent==='') {
          seven.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else if (three.textContent==='O' && seven.textContent==='O') {
        if (five.textContent==='') {
          five.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
      else {
        if (three.textContent==='') {
          three.textContent='O'
          alert("You Lost the Game...Try Again..!")
          return ''
        }
      }
    }
    else if ((two.textContent==='X') &&(three.textContent==='')||(two.textContent==='' && three.textContent==='X')){
      if (two.textContent==='') {
        two.textContent='O'
      }
      else {
        three.textContent='O'
      }
    }
    else if ((four.textContent==='X') &&(seven.textContent==='')||(four.textContent==='' && seven.textContent==='X')) {
      if (four.textContent==='') {
        four.textContent='O'
      }
      else {
        seven.textContent='O'
      }
    }
    else {
      if (five.textContent==='') {
        five.textContent='O'
      }
      else{
        if (nine.textContent==='') {
          nine.textContent="O"
        }
        else {
          if (two.textContent==='') {
            two.textContent='O'
          }
          else if (five.textContent==='') {
            five.textContent='O'
          }
          else {
            alert("Game Tied no chance of Winning...Try Again...!")
            return ''
          }
        }
    }
  }
}

function botTwo(prev) {
  if ((four.textContent==='O' && five.textContent==='O' && six.textContent==='')||
  (four.textContent==='O' && six.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && six.textContent==='O'&& four.textContent==='')){
    if (four.textContent==='O' && five.textContent==='O') {
      if (six.textContent==='') {
      six.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
    else if (four.textContent==='O' && six.textContent==='O') {
      if (five.textContent==='') {
      five.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
    else{
     if (four.textContent==='') {
      four.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''

  }
}
}
  else if ((seven.textContent==='O' && eight.textContent==='O' && nine.textContent==='')||
  (seven.textContent==='O' && nine.textContent==='O' && eight.textContent==='')||
  (eight.textContent==='O' && nine.textContent==='O' && seven.textContent==='')){
    if (seven.textContent==='O' && eight.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''

      }
    }
    else if (seven.textContent==='O' && nine.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && four.textContent==='O' && seven.textContent==='' )||
  (one.textContent==='O' && seven.textContent==='O' && four.textContent==='')||
  (four.textContent==='O' && seven.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && four.textContent==='O') {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (one.textContent==='O' && seven.textContent==='O') {
      if (four.textContent==='') {
        four.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((three.textContent==='O' && six.textContent==='O' && nine.textContent==='')||
  (three.textContent==='O' && nine.textContent==='O' && six.textContent==='')||
  (six.textContent==='O' && nine.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && six.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && nine.textContent==='O') {
      if (six.textContent==='') {
        six.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((three.textContent==='O' && five.textContent==='O' && seven.textContent==='')||
  (three.textContent==='O' && seven.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && seven.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && five.textContent==='O') {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && seven.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && five.textContent==='O' && nine.textContent==='')||
  (one.textContent==='O' && nine.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && nine.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && five.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (five.textContent==='O' && nine.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
     else if ((one.textContent==='X') &&(three.textContent==='')||(one.textContent==='' && three.textContent==='X')){
      if (one.textContent==='') {
        one.textContent='O'
        botWinning()
      }
      else {
        three.textContent='O'
        botWinning()
      }
    }
    else if ((five.textContent==='X') &&(eight.textContent==='')||(five.textContent==='' && eight.textContent==='X')) {
      if (five.textContent==='') {
        five.textContent='O'
        botWinning()
      }
      else {
        eight.textContent='O'
        botWinning()
      }
    }
      else {
        if (one.textContent==='' && three.textContent==='') {
          if (one.textContent==='') {
            one.textContent='O'
            botWinning()
          }else{
            three.textContent='O'
            botWinning()
          }
        }
        else if (seven.textContent==='') {
          seven.textContent='O'
          botWinning()
        }
        else if (nine.textContent==='') {
          nine.textContent='O'
          botWinning()
        }
        else if (five.textContent==='') {
            five.textContent='O'
            botWinning()
        }
        else {
          alert("Game Tied no chance of Winning...Try Again...!")
          return ''
        }
      }
}
function botThree(prev) {
  if ((four.textContent==='O' && five.textContent==='O' && six.textContent==='')||
  (four.textContent==='O' && six.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && six.textContent==='O' && four.textContent==='')){
    if (four.textContent==='O' && five.textContent==='O') {
      if (six.textContent==='') {
        six.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (four.textContent==='O' && six.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (four.textContent==='') {
        four.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((seven.textContent==='O' && eight.textContent==='O' && nine.textContent==='')||
  (seven.textContent==='O' && nine.textContent==='O' && eight.textContent==='')||
  (eight.textContent==='O' && nine.textContent==='O' && seven.textContent==='')){
    if (seven.textContent==='O' && eight.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (seven.textContent==='O' && nine.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((two.textContent==='O' && five.textContent==='O' && eight.textContent==='')||
  (two.textContent==='O' && eight.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && eight.textContent==='O' && two.textContent==='')){
    if (two.textContent==='O' && five.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (two.textContent==='O' && eight.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (two.textContent==='') {
        two.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && four.textContent==='O' && seven.textContent==='')||
  (one.textContent==='O' && seven.textContent==='O' && four.textContent==='')||
  (four.textContent==='O' && seven.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && four.textContent==='O') {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (one.textContent==='O' && seven.textContent==='O') {
      if (four.textContent==='') {
        four.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && five.textContent==='O' && nine.textContent==='')||
  (one.textContent==='O' && nine.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && nine.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && five.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (five.textContent==='O' && nine.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
    else if ((one.textContent==='X') &&(two.textContent==='')||(one.textContent==='' && two.textContent==='X')){
      if (one.textContent==='') {
        one.textContent='O'
      }
      else {
        two.textContent='O'
      }
    }
    else if ((six.textContent==='X') &&(nine.textContent==='')||(six.textContent==='' && nine.textContent==='X')) {
      if (six.textContent==='') {
        six.textContent='O'
      }
      else {
        nine.textContent='O'
      }
    }
    else {
      if (five.textContent==='') {
        five.textContent='O'
      }
      else{
      if (seven.textContent==='') {
        seven.textContent="O"
      }
      else if (two.textContent==='') {
        two.textContent='O'
      }
      else if (six.textContent==='') {
        six.textContent='O'
      }
      else {
        alert("Game Tied no chance of Winning...Try Again...!")
        return ''
      }
    }
  }
}
function botFour(prev) {
  if ((one.textContent==='O' && two.textContent==='O' && three.textContent==='')||
  (one.textContent==='O' && three.textContent==='O' && two.textContent==='')||
  (two.textContent==='O' && three.textContent==='O' && one.textContent)){
    if (one.textContent==='O' && two.textContent==='O') {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (one.textContent==='O' && three.textContent==='O') {
      if (two.textContent==='') {
        two.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((seven.textContent==='O' && eight.textContent==='O' && nine.textContent==='')||
  (seven.textContent==='O' && nine.textContent==='O' && eight.textContent==='')||
  (eight.textContent==='O' && nine.textContent==='O' && seven.textContent==='')){
    if (seven.textContent==='O' && eight.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (seven.textContent==='O' && nine.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((two.textContent==='O' && five.textContent==='O' && eight.textContent==='')||
  (two.textContent==='O' && eight.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && eight.textContent==='O' && two.textContent==='')){
    if (two.textContent==='O' && five.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (two.textContent==='O' && eight.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (two.textContent==='') {
        two.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((three.textContent==='O' && six.textContent==='O' && nine.textContent==='')||
  (three.textContent==='O' && nine.textContent==='O' && six.textContent==='')||
  (six.textContent==='O' && nine.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && six.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && nine.textContent==='O') {
      if (six.textContent==='') {
        six.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((three.textContent==='O' && five.textContent==='O' && seven.textContent==='')||
  (three.textContent==='O' && seven.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && seven.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && five.textContent==='O') {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && seven.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && five.textContent==='O' && nine.textContent==='')||
  (one.textContent==='O' && nine.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && nine.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && five.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (five.textContent==='O' && nine.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='X') &&(seven.textContent==='')||(one.textContent==='' && seven.textContent==='X')){
      if (one.textContent==='') {
        one.textContent='O'
        botWinning()
      }
      else {
        seven.textContent='O'
        botWinning()
      }
    }
    else if ((five.textContent==='X') &&(six.textContent==='')||(five.textContent==='' && six.textContent==='X')) {
      if (five.textContent==='') {
        five.textContent='O'
        botWinning()
      }
      else {
        six.textContent='O'
        botWinning()
      }
    }
      else {
        if (one.textContent==='' && seven.textContent==='') {
          if (one.textContent==='') {
            one.textContent='O'
            botWinning()
          }
          else{
            seven.textContent='O'
            botWinning()
          }
        }
        else if (five.textContent==='') {
          five.textContent='O'
          botWinning()
        }
        else if (nine.textContent==='') {
          nine.textContent='O'
          botWinning()
        }
        else if (three.textContent==='') {
          three.textContent='O'
          botWinning()
        }
        else {
          alert("Game Tied no chance of Winning...Try Again...!")
          return ''
        }
      }
}

function botFive(prev) {

    if ((four.textContent==='X') &&(six.textContent==='')||(four.textContent==='' && six.textContent==='X')){
      if (four.textContent==='') {
        four.textContent='O'
      }
      else {
        six.textContent='O'
      }
    }
    else if ((two.textContent==='X') &&(eight.textContent==='')||(two.textContent==='' && eight.textContent==='X')) {
      if (two.textContent==='') {
        two.textContent='O'
      }
      else {
        eight.textContent='O'
      }
    }
    else if ((three.textContent==='X') &&(seven.textContent==='')||(three.textContent==='' && seven.textContent==='X')) {
      if (three.textContent==='') {
        three.textContent='O'
      }
      else {
        seven.textContent='O'
      }
    }
    else if ((one.textContent==='X') &&(nine.textContent==='')||(one.textContent==='' && nine.textContent==='X')) {
      if (one.textContent==='') {
        one.textContent='O'
      }
      else {
        nine.textContent='O'
      }
    }
      else {
        if (one.textContent==='' && nine.textContent==='') {
          if (one.textContent==='') {
            one.textContent='O'
          }
          else {
            nine.textContent='O'
          }
        }
        else if (three.textContent==='' && seven.textContent==='') {
          if (three.textContent==='') {
            three.textContent='O'
          }
          else {
            seven.textContent='O'
          }
        }
      }
    }


function botSix(prev) {
  if ((one.textContent==='O' && two.textContent==='O' && three.textContent==='')||
  (one.textContent==='O' && three.textContent==='O' && two.textContent==='')||
  (two.textContent==='O' && three.textContent==='O' && one.textContent)){
    if (one.textContent==='O' && two.textContent==='O') {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (one.textContent==='O' && three.textContent==='O') {
      if (two.textContent==='') {
        two.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((seven.textContent==='O' && eight.textContent==='O' && nine.textContent==='')||
  (seven.textContent==='O' && nine.textContent==='O' && eight.textContent==='')||
  (eight.textContent==='O' && nine.textContent==='O' && seven.textContent==='')){
    if (seven.textContent==='O' && eight.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (seven.textContent==='O' && nine.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((two.textContent==='O' && five.textContent==='O' && eight.textContent==='')||
  (two.textContent==='O' && eight.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && eight.textContent==='O' && two.textContent==='')){
    if (two.textContent==='O' && five.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (two.textContent==='O' && eight.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (two.textContent==='') {
        two.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && four.textContent==='O' && seven.textContent==='')||
  (one.textContent==='O' && seven.textContent==='O' && four.textContent==='')||
  (four.textContent==='O' && seven.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && four.textContent==='O') {
      seven.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else if (one.textContent==='O' && seven.textContent==='O') {
      four.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else {
      one.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
  else if ((three.textContent==='O' && five.textContent==='O' && seven.textContent==='')||
  (three.textContent==='O' && seven.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && seven.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && five.textContent==='O') {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && seven.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && five.textContent==='O' && nine.textContent==='')||
  (one.textContent==='O' && nine.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && nine.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && five.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (five.textContent==='O' && nine.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
    else if ((three.textContent==='X') &&(nine.textContent==='')||(three.textContent==='' && nine.textContent==='X')){
      if (three.textContent==='') {
        three.textContent='O'
        botWinning()
      }
      else {
        playerWinning()
        botWinning()
      }
    }
    else if ((four.textContent==='X') &&(five.textContent==='')||(four.textContent==='' && five.textContent==='X')) {
      if (four.textContent==='') {
        four.textContent='O'
        botWinning()
      }
      else {
        five.textContent='O'
        botWinning()
      }
    }
      else {
        if (five.textContent==='') {
          five.textContent='O'
          botWinning()
        }
        else if (three.textContent==='' && nine.textContent==='') {
          if (three.textContent==='') {
            three.textContent='O'
            botWinning()
          }
          else {
            nine.textContent='O'
            botWinning()
          }
        }
        else if (one.textContent==='') {
          one.textContent='O'
          botWinning()
        }
        else if (seven.textContent==='') {
          seven.textContent='O'
          botWinning()
        }
        else {
          alert("Game Tied no chance of Winning...Try Again...!")
          return ''
        }
      }
}

function botSeven(prev) {
  if ((one.textContent==='O' && two.textContent==='O' && three.textContent==='')||
  (one.textContent==='O' && three.textContent==='O' && two.textContent==='')||
  (two.textContent==='O' && three.textContent==='O' && one.textContent)){
    if (one.textContent==='O' && two.textContent==='O') {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (one.textContent==='O' && three.textContent==='O') {
      if (two.textContent==='') {
        two.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((four.textContent==='O' && five.textContent==='O' && six.textContent==='')||
  (four.textContent==='O' && six.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && six.textContent==='O' && four.textContent==='')){
    if (four.textContent==='O' && five.textContent==='O') {
      if (six.textContent==='') {
        six.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (four.textContent==='O' && six.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (four.textContent==='') {
        four.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((three.textContent==='O' && six.textContent==='O' && nine.textContent==='')||
  (three.textContent==='O' && nine.textContent==='O' && six.textContent==='')||
  (six.textContent==='O' && nine.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && six.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && nine.textContent==='O') {
      if (six.textContent==='') {
        six.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((two.textContent==='O' && five.textContent==='O' && eight.textContent==='')||
  (two.textContent==='O' && eight.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && eight.textContent==='O' && two.textContent==='')){
    if (two.textContent==='O' && five.textContent==='O') {
      if (eight.textContent==='') {
        eight.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (two.textContent==='O' && eight.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (two.textContent==='') {
        two.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && five.textContent==='O' && nine.textContent==='')||
  (one.textContent==='O' && nine.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && nine.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && five.textContent==='O') {
      nine.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else if (one.textContent==='O' && nine.textContent==='O') {
      five.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else {
      one.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
    else if ((one.textContent==='X') &&(four.textContent==='')||(one.textContent==='' && four.textContent==='X')){
      if (one.textContent==='') {
        one.textContent='O'
      }
      else {
        four.textContent='O'
      }
    }
    else if ((eight.textContent==='X') &&(nine.textContent==='')||(eight.textContent==='' && nine.textContent==='X')) {
      if (eight.textContent==='') {
        eight.textContent='O'
      }
      else {
        nine.textContent='O'
      }
    }
    else {
      if (five.textContent==='') {
        five.textContent='O'
      }
      else{
      if (three.textContent==="") {
        three.textContent='O'
      }
      else if (eight.textContent==='') {
        eight.textContent='O'
      }
      else {
        alert("Game Tied no chance of Winning...Try Again...!")
        return ''
      }
    }
  }
}

function botEight(prev) {
  if ((four.textContent==='O' && five.textContent==='O' && six.textContent==='')||
  (four.textContent==='O' && six.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && six.textContent==='O'&& four.textContent==='')){
    if (four.textContent==='O' && five.textContent==='O') {
      if (six.textContent==='') {
      six.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
    else if (four.textContent==='O' && six.textContent==='O') {
      if (five.textContent==='') {
      five.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
    else{
     if (four.textContent==='') {
      four.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''

  }
}
}
if ((one.textContent==='O' && two.textContent==='O' && three.textContent==='')||
(one.textContent==='O' && three.textContent==='O' && two.textContent==='')||
(two.textContent==='O' && three.textContent==='O' && one.textContent==='')){
  if (one.textContent==='O' && two.textContent==='O') {
    three.textContent='O'
    alert("You Lost the Game...Try Again..!")
    return ''
  }
  else if (one.textContent==='O' && three.textContent==='O') {
    two.textContent='O'
    alert("You Lost the Game...Try Again..!")
    return ''
  }
  else {
    one.textContent='O'
    alert("You Lost the Game...Try Again..!")
    return ''
  }
}
  else if ((one.textContent==='O' && four.textContent==='O' && seven.textContent==='' )||
  (one.textContent==='O' && seven.textContent==='O' && four.textContent==='')||
  (four.textContent==='O' && seven.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && four.textContent==='O') {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (one.textContent==='O' && seven.textContent==='O') {
      if (four.textContent==='') {
        four.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((three.textContent==='O' && six.textContent==='O' && nine.textContent==='')||
  (three.textContent==='O' && nine.textContent==='O' && six.textContent==='')||
  (six.textContent==='O' && nine.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && six.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && nine.textContent==='O') {
      if (six.textContent==='') {
        six.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((three.textContent==='O' && five.textContent==='O' && seven.textContent==='')||
  (three.textContent==='O' && seven.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && seven.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && five.textContent==='O') {
      if (seven.textContent==='') {
        seven.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (three.textContent==='O' && seven.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (three.textContent==='') {
        three.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((one.textContent==='O' && five.textContent==='O' && nine.textContent==='')||
  (one.textContent==='O' && nine.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && nine.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && five.textContent==='O') {
      if (nine.textContent==='') {
        nine.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else if (five.textContent==='O' && nine.textContent==='O') {
      if (five.textContent==='') {
        five.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
    else {
      if (one.textContent==='') {
        one.textContent='O'
        alert("You Lost the Game...Try Again..!")
        return ''
      }
    }
  }
  else if ((two.textContent==='X') &&(five.textContent==='')||(two.textContent==='' && five.textContent==='X')){
      if (two.textContent==='') {
        two.textContent='O'
        botWinning()
      }
      else {
        five.textContent='O'
        botWinning()
      }
    }
    else if ((seven.textContent==='X') &&(nine.textContent==='')||(seven.textContent==='' && nine.textContent==='X')) {
      if (seven.textContent==='') {
        seven.textContent='O'
        botWinning()
      }
      else {
        nine.textContent='O'
        botWinning()
      }
    }
      else {
        if (seven.textContent==='' && nine.textContent==='') {
          if (seven.textContent==='') {
            seven.textContent='O'
            botWinning()
          }
          else {
            nine.textContent='O'
            botWinning()
          }
        }
        else if (one.textContent==='') {
          one.textContent='O'
          botWinning()
        }
        else if (three.textContent==='') {
          three.textContent='O'
          botWinning()
        }
        else if (five.textContent==='') {
          five.textContent='O'
          botWinning()
        }
        else {
          alert("Game Tied no chance of Winning...Try Again...!")
          return ''
        }
      }
}

function botNine(prev) {
  if ((one.textContent==='O' && two.textContent==='O' && three.textContent==='')||
  (one.textContent==='O' && three.textContent==='O' && two.textContent==='')||
  (two.textContent==='O' && three.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && two.textContent==='O') {
      three.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else if (one.textContent==='O' && three.textContent==='O') {
      two.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else {
      one.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
  else if ((four.textContent==='O' && five.textContent==='O' && six.textContent==='')||
  (four.textContent==='O' && six.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && six.textContent==='O' && four.textContent==='')){
    if (four.textContent==='O' && five.textContent==='O') {
      six.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else if (four.textContent==='O' && six.textContent==='O') {
      five.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else {
      four.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
  else if ((one.textContent==='O' && four.textContent==='O' && seven.textContent==='')||
  (one.textContent==='O' && seven.textContent==='O' && four.textContent==='')||
  (four.textContent==='O' && seven.textContent==='O' && one.textContent==='')){
    if (one.textContent==='O' && four.textContent==='O') {
      seven.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else if (one.textContent==='O' && seven.textContent==='O') {
      four.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else {
      one.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
  else if ((two.textContent==='O' && five.textContent==='O' && eight.textContent==='')||
  (two.textContent==='O' && eight.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && eight.textContent==='O' && two.textContent==='')){
    if (two.textContent==='O' && five.textContent==='O') {
      eight.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else if (two.textContent==='O' && eight.textContent==='O') {
      five.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else {
      two.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
  else if ((three.textContent==='O' && five.textContent==='O' && seven.textContent==='')||
  (three.textContent==='O' && seven.textContent==='O' && five.textContent==='')||
  (five.textContent==='O' && seven.textContent==='O' && three.textContent==='')){
    if (three.textContent==='O' && five.textContent==='O') {
      seven.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else if (three.textContent==='O' && seven.textContent==='O') {
      five.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
    else {
      three.textContent='O'
      alert("You Lost the Game...Try Again..!")
      return ''
    }
  }
    else if ((three.textContent==='X') &&(six.textContent==='')||(three.textContent==='' && six.textContent==='X')){
      if (three.textContent==='') {
        three.textContent='O'
      }
      else {
        six.textContent='O'
      }
    }
    else if ((seven.textContent==='X') &&(eight.textContent==='')||(seven.textContent==='' && eight.textContent==='X')) {
      if (seven.textContent==='') {
        seven.textContent='O'
      }
      else {
        eight.textContent='O'
      }
    }
    else {
      if (five.textContent==='') {
        five.textContent='O'
      }
      else{
        if (one.textContent==="") {
          one.textContent='O'
        }
        else if (six.textContent==='') {
          six.textContent='O'
        }
        else if (eight.textContent==='') {
          eight.textContent='O'
        }
        else {
          alert("Game Tied no chance of Winning..Try Again...!")
          return ''
        }
    }
  }
}
function botWinning() {
  if ((one.textContent==='O' && two.textContent==='O' && three.textContent==='O')||
   (four.textContent==='O' && five.textContent==='O' && six.textContent==='O')||
   (seven.textContent==='O' && eight.textContent==='O' && nine.textContent==='O')||
   (one.textContent==='O' && four.textContent==='O' && seven.textContent==='O')||
   (two.textContent==='O' && five.textContent==='O' && eight.textContent==='O')||
   (three.textContent==='O' && six.textContent==='O' && nine.textContent==='O')||
   (one.textContent==='O' && five.textContent==='O' && nine.textContent==='O')||
   (three.textContent==='O' && five.textContent==='O' && seven.textContent==='O')){
    alert("You Lost the Game...Try Again..!")
  }

}
function playerWinning() {
  //plater winning case is four six and nine
  if (one.textContent==='') {
    one.textContent='O'
    botWinning()
  }
  else if (two.textContent==='') {
    two.textContent='O'
    botWinning()
  }
  else if (three.textContent==='') {
    three.textContent='O'
    botWinning()
  }
  else if (four.textContent==='') {
    four.textContent='O'
    botWinning()
  }
  else if (five.textContent==='') {
    five.textContent='O'
    botWinning()
  }
  else if (six.textContent==='') {
    six.textContent='O'
    botWinning()
  }
  else if (seven.textContent==='') {
    seven.textContent='O'
    botWinning()
  }
  else if (eight.textContent==='') {
    eight.textContent='O'
    botWinning()
  }
}
