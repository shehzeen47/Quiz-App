var data = [
  {
    Q: "Q1 : JS is used for?",
    a: "Frontend",
    b: "Animation",
    c: "Dynamically update Content",
    d: "Backened",
    ans: "ans3",
  },

  {
    Q: "Q2 : JS full form?",
    a: "JavaScript",
    b: "JavaScience",
    c: "JavaS",
    d: "JavaSecure",
    ans: "ans1",
  },

  {
    Q: "Q3 : Who developed JS?",
    a: "Santa",
    b: "Brenden Eich",
    c: "George",
    d: "Neck",
    ans: "ans2",
  },

  {
    Q: "Q4 : When JS developed?",
    a: "1995",
    b: "1990",
    c: "1999",
    d: "1892",
    ans: "ans1",
  },
];

var question = document.getElementById("qns");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");

var answers = document.querySelectorAll(".options");
var num = 0;
var score = 0;
var myScore = document.querySelector(".myScore");
var nextBtn = document.getElementById("next");

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function checkAns() {
  var ans;
  answers.forEach((curElement) => {
    if (curElement.checked) {
      ans = curElement.id;
      console.log(ans);
    }
  });
  return ans;
}

function disSelect() {
  answers.forEach((curElement) => {
    curElement.checked = false;
  });
}

function next() {
  var checkedAns = checkAns();

  if (checkedAns == data[num].ans) {
    score++;
  }
  num++;
  disSelect();
  if (num < data.length) {
    question.innerHTML = data[num].Q;
    option1.innerHTML = data[num].a;
    option2.innerHTML = data[num].b;
    option3.innerHTML = data[num].c;
    option4.innerHTML = data[num].d;
  } else {
    myScore.innerHTML = `You Score ${score}/${data.length} <br/> <br/> <button onclick="location.reload()">Play Again</button>`;

    nextBtn.style.display = "none";
    // document.querySelector(".btn").style.backgroundColor="lightpink"
  }
}
