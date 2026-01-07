document.getElementById('calculate-btn').addEventListener('click', calculateCalories);

function calculateCalories() {
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    if (!age || !weight || !height) {
        alert('Please enter valid values for all fields.');
        return;
    }

    let bmr;

    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const tdee = Math.round(bmr * activity);

    const container = document.getElementById('result-container');
    container.style.display = 'block';

    document.getElementById('result').innerText =
        `Calories to maintain weight: ${tdee} kcal`;

    let suggestion = "";

    if (tdee < 1800) {
        suggestion = "Suggestion: Light exercise and balanced diet recommended.";
    } else if (tdee < 2500) {
        suggestion = "Suggestion: Maintain moderate activity to stay fit.";
    } else {
        suggestion = "Suggestion: High energy needs — stay active and eat balanced meals.";
    }

    document.getElementById('suggestion').innerText = suggestion;
}
