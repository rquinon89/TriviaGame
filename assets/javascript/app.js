









var audio = new Audio("raven.mp3");

setTimeout(oneTwentySeconds, 1000 * 120);
setTimeout(timeUp, 1000 * 15);


	function timeUp() {

  // in the element with an id of time-left add an h2 saying Time's Up!
  // console log done
  console.log("done");
  $("#time-left").append("<h2>Time's Up!</h2>");
  console.log("time is up");

  //  The following line will play the audio file we linked to above:
  audio.play();