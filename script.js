var enterButton = document.getElementById("addbtn");
var input = document.getElementById("myInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value)); 
	ul.appendChild(li); 
	input.value = ""; 
	li.style.color = "black";

	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("Remove"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	////Adding Css dynamically using js
	dBtn.style.padding = "0.3rem 1rem 0.3rem 1rem";
	dBtn.style.marginLeft = "16rem";
	dBtn.style.background = "red";
	dBtn.style.borderRadius = "2rem";
	function deleteListItem(){
		li.classList.add("delete")
	}

	var done = document.createElement("button");
	done.appendChild(document.createTextNode("Done"));
	li.appendChild(done);
	done.addEventListener("click", completed);
	done.style.padding = "0.3rem 1rem 0.3rem 1rem";
	done.style.marginLeft = "16rem";
	done.style.background = "green";
	done.style.borderRadius = "2rem";

	function completed(){
		li.style.color="green";
	}

}

function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

