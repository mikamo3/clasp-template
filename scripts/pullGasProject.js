const CommandError = require("./common").CommandError;
const runCommand = require("./common").runCommand;
try {
  runCommand("clasp", ["pull"]);
  runCommand("mv", ["./dist/appsscript.json", "./src/appsscript.json"]);
} catch (error) {
  if (error instanceof CommandError) {
    console.log(error.message);
  } else {
    throw error;
  }
}
