var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums']
var plays = new Array();

function theBeatlesPlay(musicians, instruments) {
    for (var i = 0; i < 4; i++ ){
      plays[i] = musicians[i] + " plays " + instruments[i];
  }
 return plays
}





function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i] + "!!!";
    i++;
  }
return facts
}
