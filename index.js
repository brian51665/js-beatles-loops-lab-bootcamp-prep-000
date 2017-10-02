var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
var plays = new Array();

function theBeatlesPlay(musicians, instruments) {
    for (var i = 0; i < 4; i++ ){
      plays[i] = musicians[i] + " plays " + instruments[i];
  }
 return plays
}


// var facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

var i = 0;

function johnLennonFacts(facts) {
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
return facts
}
