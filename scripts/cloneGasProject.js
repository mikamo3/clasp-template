const CommandError = require("./common").CommandError;
const runCommand = require("./common").runCommand;
try {
  if (process.argv.length !== 3) {
    throw new CommandError("usage node cloneGasProject.js [projectId]");
  }
  const projectId = process.argv[2];

  runCommand(
    "ls",
    ["./.clasp.json"],
    () => {
      //empty
    },
    () => {
      throw new CommandError("gas project already exists");
    }
  );
  runCommand("clasp", ["clone", "--rootDir", "dist", projectId]);
  runCommand("mv", ["./dist/appsscript.json", "./src/appsscript.json"]);
} catch (error) {
  if (error instanceof CommandError) {
    console.log(error.message);
  } else {
    throw error;
  }
}
