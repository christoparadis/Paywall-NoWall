chrome.action.onClicked.addListener(() => {
	console.log("Ladder?");
	addLadder();
});

async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

async function addLadder() {
	const tab = await getCurrentTab();
	const ladder = "https://12ft.io/" + tab.url;
	chrome.tabs.update(tab.id, { url: ladder });
}
