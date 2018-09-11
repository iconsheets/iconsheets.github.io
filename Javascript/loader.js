
	// THIS IS NOT BEING USED IN THE PROJECT
	// IT WAS USED AS A TOOL

	function beautifyLevel(spellLevel){
		var ret = "";
		if(spellLevel != "cantrip"){
			if(spellLevel == "1"){ret += spellLevel + "st Level";}
			else if(spellLevel == "2"){ret += spellLevel + "nd Level";}
			else if(spellLevel == "3"){ret += spellLevel + "rd Level";}
			else {ret += spellLevel + "th Level";}}
		else{ret = "Cantrip";}
		return ret;}
		
	function generateSpell(name, type, castingTime, range, components, duration, description){
		var t = get("TextArea");
		t.value += "new Spell(" + queryStringArguments(name, type, castingTime, range, components, duration, description);
		t.value += ");\n";}

	function jsonToSpellCode(){
		loadJSON("Database/SpellDatabase.json", function(jsonstring){
			console.log("Called back!");
			var SpellDatabase = JSON.parse(jsonstring);
			for(var i = 0; i<SpellDatabase.length; i++){
				var thisSpell = SpellDatabase[i];
				generateSpell(
					thisSpell.name,
					capitalizeFirstLetter(thisSpell.school) + " " + beautifyLevel(thisSpell.level),
					thisSpell.casting_time,
					thisSpell.range,
					thisSpell.components.raw,
					thisSpell.duration,
					thisSpell.description)
			}
		});
	}
	
	
// Name
// Type
// CastingTime
// Range
// Components
// Duration
// Description


