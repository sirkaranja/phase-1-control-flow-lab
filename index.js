function scuberGreetingForFeet(distance){
  
  if(distance<=400){
    return "This one is on me!";
  }
  else if(distance > 2000 && distance <=2500){
    return "I will gladly take your thirty bucks."
  
  
  }
  else if(distance > 2500){
    return "No can do."
  }

  console.log(scuberGreetingForFeet(3000));
 
 
  // Write your code here!
}

let destination;
function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}
console.log(ternaryCheckCity(destination));

function switchOnCharmFromTip(){
  // Write your code here!
}
// function switchOnCharmFromTip()

let tip;
function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
console.log(switchOnCharmFromTip(tip));