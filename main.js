$(document).ready(function () {
  $('#submit').click(function () {
    let hourTime = $('#hours').val();
    let minuteTime = $('#minutes').val();
    let secondTime = $('#seconds').val();
    let distance = $('#distance').val();
    let radioValue = $("input[name='unit']:checked").val();

    const milePace = (m, s, d) => {
      let minute = Math.floor(m / d);
      console.log(minute);
      let minRe = Math.floor((m % d) * 60);
      console.log(minRe);
      let second = Math.floor((parseInt(s) + minRe) / d);
      console.log(second);
      let pace = `Your mile pace was a ${minute}:${second} mile!`;
      $('#output').text(pace);
    };

    if (radioValue === 'mile') {
      milePace(minuteTime, secondTime, distance);
    }
    if (radioValue === 'kilometer') {
      milePace(minuteTime, secondTime, distance * 1.6);
    }
  });
});

// When the inputs are 1 , 1, .1 the output is 10:60. I need to make the max seconds only 59.
// I think I need to make the whole function more modular and use functions as arguments to make it easier to expand the project later.
// I need to add alert for no input and add an hours section.
