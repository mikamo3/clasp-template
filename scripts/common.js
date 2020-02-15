const spawnSync = require("child_process").spawnSync;
const basename = require("path").basename;
class CommandError extends Error {}
const runCommand = (
  cmd,
  args,
  onError = result => {
    throw new CommandError(result.stderr);
  },
  onSuccess = undefined
) => {
  const result = spawnSync(cmd, args);
  if (result.status === 0 && onSuccess) {
    onSuccess(result);
  }
  if (result.status !== 0 && onError) {
    onError(result);
  }
  return result;
};
const getCurrentDir = () => basename(__dirname);
module.exports.CommandError = CommandError;
module.exports.runCommand = runCommand;
module.exports.getCurrentDir = getCurrentDir;
