var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
var plays = new Array();

function theBeatlesPlay(musicians, instruments) {
    for (var i = 0; i < 4; i++ ){
      plays[i] = musicians[i] + " plays " + instruments[i];
  }
 return plays
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

var i = 0;

var newFacts = new Array(4)

function johnLennonFacts(facts) {
    while (i < 4){
      newFacts = facts[i] + "!!!" ;
      i++;
  }
  return newFacts
}
