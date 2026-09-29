process.stdout.write("Hello");
const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const answers = [];

function ask(index = 0) {
  process.stdout.write(`\n \n \n ${questions[index]}`);
  process.stdout.write(` > `);
}

process.stdin.on("data", function (data) {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", function () {
  process.stdout.write("\n\n\n");
  process.stdout.write(
    `Go ${answers[0]} ${answers[1]} you can finish writing ${answers[2]} later`
  );
});

ask(answers.length);
