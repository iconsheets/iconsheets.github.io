
	var QueuedSpells = new Array();
	function queueSpell(){
		var spellName = get("Input").value;
		QueuedSpells.push(spellName);
		var option = createElement("option");
		option.innerHTML = spellName;
		get("AddedSpells").appendChild(option);
		get("Input").value = "";}
	
	function resetSpells(){
		removeAllChildren(get("AddedSpells"));
		location.reload();
		}
	
	function removeSpell(){
		get("AddedSpells").removeChild(getSelectedOption("AddedSpells"));
	}
	
	function generate(){
		console.log(QueuedSpells.length);
		for(var i = 0; i<QueuedSpells.length; i++){
			CanvasManager.addSpell(Spells[QueuedSpells[i]]);
		}
	}
	
	function gotoLink(l){
		window.location = l;
	}

	function download() {
		ReImg.fromCanvas(get("Canvas0")).downloadPng("Spell Sheet");
	}
	
	
	window.onload = function(){
		get("Input").value = "";
		resetSpells();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
