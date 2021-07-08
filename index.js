// Your code here
function saturdayFun(activity='roller-skate') {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
  return "This Monday, I will " + activity + ".";
}

function wrapAdjective(adjective='*') {
  const youAre = 'You are ';
  return function(text) {
    const closing = '!';
    return youAre + adjective + text + adjective + closing;
  }
}
