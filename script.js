	var button = document.getElementById('buttonText');
	var textArea = document.getElementById("textButthurt");
	var checkLink = document.getElementById("checkLink");
	
	function parseText() {
		if(!textArea.value) return false;
		var text = textArea.value;
		var arrText = text.split("\n");
		var dog = false;
		for (var i = 0; i < arrText.length; i++) {

			if (arrText[i] == "") continue;

			function nextString() {
				var b = i + 1; 
				if (arrText[b] == "A" || arrText[b] == "a" || arrText[b] == "а" || arrText[b] == "А" || 
					arrText[b] == "@" || arrText[b] == "") {
					dog = true;
				} else {
					dog = false;
				}
			}

			nextString();

			if (arrText[i] == "A" || arrText[i] == "a" || arrText[i] == "а" || arrText[i] == "А" || 
					arrText[i] == "@") {

				arrText[i] = "@";
			}  else if (i < (arrText.length - 1) && !dog) {

				arrText[i] = arrText[i].concat("\n@");
			}
			
		}

		text = arrText.join("\n");
		text = text.toUpperCase();


		if (text.indexOf("**") != 0) {
			var newString = "**";
			var newString = newString.concat(text);

			text = newString;
		}


		if (text.lastIndexOf("**") != (text.length - 2) && text.lastIndexOf("**") != (text.length - 1)) {
			var newString = "**";
			var newString = text.concat(newString);

			text = newString;
		}

		var checkingLink = text.indexOf(String(window.location).toUpperCase());

		if (checkLink.checked && checkingLink < 0) text = text.concat("\n\n*" + window.location + "*");

		textArea.value = text;
		textArea.select();
	}

	function ctrlEnter(e) {
		if (textArea.value) {
			button.click();
		}
	}

	function ctrlV(e) {
		if (textArea.value) {
			button.click();
		}
	}

	button.onclick = function (e) {
		parseText();
	}

	window.onkeydown = function(e) {
		if (e.ctrlKey && e.keyCode == 13) ctrlEnter(e);
		
	}
	window.onkeyup = function(e) {
		if (e.ctrlKey && e.keyCode == 86) ctrlV(e);
	}