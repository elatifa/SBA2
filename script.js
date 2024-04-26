const form = document.getElementById('tip-form');
const billAmountInput = document.getElementById('bill-amount');
const calculateTipButton = document.getElementById('calculate-tip');
const tipResultDiv = document.getElementById('tip-result');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const billAmount = Number(billAmountInput.value);
	const tipAmount = calculateTip(billAmount);
	const tipPercentage = getTipPercentage(tipAmount, billAmount);
	tipResultDiv.textContent = `Recommended tip: ${tipPercentage}% of $${billAmount}`;
});

function calculateTip(billAmount) {
	const tipAmount = billAmount * 0.15;
	return tipAmount;
}

function getTipPercentage(tipAmount, billAmount) {
	const tipPercentage = (tipAmount / billAmount) * 100;
	return tipPercentage.toFixed(2);
}