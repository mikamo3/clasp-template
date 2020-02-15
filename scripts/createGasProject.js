const CommandError = require("./common").CommandError;
const runCommand = require("./common").runCommand;
const getCurrentDir = require("./common").getCurrentDir;
try {
  if (process.argv.length !== 3) {
    throw new CommandError("usage node createGasProject [projectType]");
  }
  const type = process.argv[2];
  const projTitie = getCurrentDir();
  runCommand(
    "ls",
    ["./.clasp.json"],
    () => {
      //empty
    },
    () => {
      throw new CommandError("gas project already created");
    }
  );
  runCommand(
    "clasp",
    ["create", "--type", `${type}`, "--rootDir", "dist", "--title", projTitie],
    result => {
      throw new CommandError(result.stderr);
    }
  );
  runCommand("mv", ["./dist/appsscript.json", "./src/appsscript.json"]);
  console.log("done");
} catch (error) {
  if (error instanceof CommandError) {
    console.log(error.message);
  } else {
    throw error;
  }
}
