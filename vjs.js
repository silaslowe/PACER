const submit = document.getElementById('submit');
const output = document.getElementById('output');

submit.addEventListener('click', function (e) {
  let minuteTime = document.getElementById('minutes').value;
  // console.log(minuteTime);
  let secondTime = document.getElementById('seconds').value;
  // console.log(secondTime);
  let distance = document.getElementById('distance').value;
  // console.log(distance);
  let radioValue = document.querySelector('input[name="exercise"]:checked').value;
  console.log(radioValue);
  milePace(minuteTime, secondTime, distance);
  e.preventDefault();
});

const milePace = (m, s, d) => {
  const minute = Math.floor(m / d);
  console.log(m);
  const minRe = Math.floor((m % d) * 60);
  let second = Math.floor((parseInt(s) + minRe) / d);
  if (second.toString().length < 2) {
    second = `${second}0`;
  }
  let pace = `Your pace was a ${minute}:${second} mile!`;
  output.innerHTML = pace;
};

// When the inputs are 1 , 1, .1 the output is 10:60. I need to make the max seconds only 59.
// I think I need to make the whole function more modular and use functions as arguments to make it easier to expand the project later.
// I need to add alert for no input and add an hours section.
