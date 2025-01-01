// JavaScript to dynamically add a fact to the facts section
document.getElementById('add-fact-btn').addEventListener('click', function () {
    const factList = document.getElementById('fact-list');
    const newFact = document.createElement('li');
    newFact.textContent = "Increased education can lead to a 12% reduction in global poverty rates.";
    factList.appendChild(newFact);
});
