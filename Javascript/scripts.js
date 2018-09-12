
	var QueuedSpells = new Array();
	var userDidAnything = false;
	function queueSpell(){
		var spellName = get("Input").value;
		if(SpellNames.indexOf(spellName) > -1){
			QueuedSpells.push(spellName);
			var option = createElement("option");
			option.innerHTML = spellName;
			get("AddedSpells").appendChild(option);
			get("Input").value = "";
			userDidAnything = true;
			get("AddSpell").setAttribute("class", "Button");}
		else{
			flashAddButton();
		}
	}
	
	function flashAddButton(){
		var b = get("AddSpell");
		//b.style = "background-color: red;";
		b.setAttribute("class", "Flashed1");
		setTimeout(function(){
			b.setAttribute("class", "Flashed2");
		}, 250);
	}
	
	function resetSpells(){
		removeAllChildren(get("AddedSpells"));
		if(userDidAnything){
			location.reload();
		}
	}
	
	function removeSpell(){
		get("AddedSpells").removeChild(getSelectedOption("AddedSpells"));
	}
	
	function generate(){
		console.log(QueuedSpells.length);
		for(var i = 0; i<QueuedSpells.length; i++){
			CanvasManager.addSpell(Spells[QueuedSpells[i]]);
		}
		QueuedSpells = new Array();
		removeAllChildren(get("AddedSpells"));
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	