//your JS code here. If required.
// let body = document.getElementById("my-body");
function buttonClick() {
	let statusPara = document.getElementById("status");
	
	const header = document.createElement('h1');
	header.textContent = "Entered Metaverse"
	header.id = "status";

	//replace child
	// statusPara.parentNode.replaceChild(header, statusPara);
	statusPara.appendChild(header);
	
}
