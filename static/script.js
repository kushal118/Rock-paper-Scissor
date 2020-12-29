function rpsGame(yourChoice){
    console.log(yourChoice)
    var humanChoice, botChoice
    humanChoice = yourChoice.id
    botChoice = numberToChoice(randToRpsInt())
    console.log ('computer choice:',botChoice)
    
    result = decideWinner(humanChoice,botChoice)
    console.log(result)
    message =finalMessage(result)
    console.log(message)
}
function randToRpsInt(){
    return Math.floor(Math.random()*3)
}
function numberToChoice(number){
    return ['rock','paper','scissor'][number]
}
function decideWinner(yourChoice,computerChoice){
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper':0},
        'paper': {'scissor': 0, 'rock': 1, 'paper': 0.5},
        'scissor':{'scissor': 0.5, 'rock': 0, 'paper':1},
      

  }
  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];
  return [yourScore,computerScore]
}
function finalMessage ([yourScore,computerScore]){
    if(yourScore=== 0){
        return {'message':'You lost!','color':'red'};}
    else if(yourScore=== 0.5){
       return {'message':'You tied!','color':'blue'};}
    else{
           return {'message':'You win!','color':'green'};}
    }
