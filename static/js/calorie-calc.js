const loader = document.querySelector('.loader');

// select inputs
const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const weight = document.querySelector('#weight');
const imperial = document.querySelector('#imperial');
const activity = document.querySelector('#activity');
const goals = document.querySelector('#goals');
const gender = document.querySelector('#gender');
const height = document.querySelector('#height');

const bmr = document.querySelector('#bmr');
const bmr_a = document.querySelector('#bmr-a');
const calorie = document.querySelector('#calorie');
const protien = document.querySelector('#protien');

submitBtn.addEventListener('click', () => {
    const ageRange = Number(age.value);
    const heightRange = Number(height.value)
    const weightRange = Number(weight.value)

    if (!age.value.length) {
      showAlert('Enter your age');
    } else if (!gender.value.length) {
      showAlert('Enter your gender');
    } else if (!height.value.length) {
      showAlert('Enter your height');
    } else if (!weight.value.length) {
      showAlert('Enter your weight');
    } else if (!imperial.value.length) {
      showAlert('Enter your metric/imperial preference');
    } else if (!activity.value.length) {
      showAlert('Enter your activity level');
    } else if (!goals.value.length) {
      showAlert('Enter your weightloss goal');
    } else if (ageRange < 0 || ageRange > 120) {
      showAlert('Age must be between 0 and 120');
    } else if (heightRange < 0 || heightRange > 213) {
      showAlert('Height must be between 0 and 213');
    } else if (weightRange < 0 || weightRange > 500) {
      showAlert('Weight must be between 0 and 500');
    } else {
      // submit form
      loader.style.display = 'block';
      sendData('/calorie-calculator', {
        'name': name.value,
        'age': age.value,
        'weight': weight.value,
        'imperial': imperial.value,
        'activity': activity.value,
        'goals': goals.value,
        'height': height.value,
        'gender': gender.value
      })
    }
})

// alert function
const showAlert = (msg) => {
  let alertBox = document.querySelector('.alert-box');
  let alertMsg = document.querySelector('.alert-msg');
  alertMsg.innerHTML = msg;
  alertBox.classList.add('show');
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3001);
}

// send data function
const sendData = (path, data) => {
  fetch(path, {
    method: 'post',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(data)
  }).then((res) => res.json())
    .then(response => {
      
      processData(response);
    })
}

const processData = (data) => {
  loader.style.display = "none";
  console.log(data)
  if (data.alert) {
    showAlert(data.alert);
  } else if (data.bmr) {
    // result = JSON.stringify(data);
    bmr.value = "BMR: " + data.bmr;
    bmr_a.value = "BMR+A: " + data.bmr_a;
    calorie.value = "Recommended calorie (Kcal): " + data.calorie;
    protien.value = "Recommended Grams of Protein: " + data.protein;
  }
}