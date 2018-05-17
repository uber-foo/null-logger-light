const levels = ['fatal','error','warn','info','debug','trace'];

function nullLog() {
  // do nothing
}

module.exports = levels.reduce((logger, level) => logger[level] = nullLog, {});
