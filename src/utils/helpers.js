export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill('⌛️').join('')} ${minutes} min read`;
}

export function formatPostDate(date, lang) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date;
  }

  date = new Date(date);
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean);
  return date.toLocaleDateString(...args);
}

export function insertTrollsText() {
  console.log('>>> Testing deployments...')
  const asciiText = ' ____  __.                                                 \n' +
    '|    |/ _|____   ____ ______    ___.__. ____  __ _________ \n' +
    '|      <_/ __ \\_/ __ \\\\____ \\  <   |  |/  _ \\|  |  \\_  __ \\\n' +
    '|    |  \\  ___/\\  ___/|  |_> >  \\___  (  <_> )  |  /|  | \\/\n' +
    '|____|__ \\___  >\\___  >   __/   / ____|\\____/|____/ |__|   \n' +
    '        \\/   \\/     \\/|__|      \\/                         \n' +
    '                     .__                                        \n' +
    '   ____   _________  |  |   ______ _____ __  _  _______  ___.__.\n' +
    '  / ___\\ /  _ \\__  \\ |  |  /  ___/ \\__  \\\\ \\/ \\/ /\\__  \\<   |  |\n' +
    ' / /_/  >  <_> ) __ \\|  |__\\___ \\   / __ \\\\     /  / __ \\\\___  |\n' +
    ' \\___  / \\____(____  /____/____  > (____  /\\/\\_/  (____  / ____|\n' +
    '/_____/            \\/          \\/       \\/             \\/\\/     \n' +
    '  _____                          __  .__            \n' +
    '_/ ____\\______  ____   _____   _/  |_|  |__   ____  \n' +
    '\\   __\\\\_  __ \\/  _ \\ /     \\  \\   __\\  |  \\_/ __ \\ \n' +
    ' |  |   |  | \\(  <_> )  Y Y  \\  |  | |   Y  \\  ___/ \n' +
    ' |__|   |__|   \\____/|__|_|  /  |__| |___|  /\\___  >\n' +
    '                           \\/             \\/     \\/ \n' +
    '  __                .__  .__          \n' +
    '_/  |________  ____ |  | |  |   ______\n' +
    '\\   __\\_  __ \\/  _ \\|  | |  |  /  ___/\n' +
    ' |  |  |  | \\(  <_> )  |_|  |__\\___ \\ \n' +
    ' |__|  |__|   \\____/|____/____/____  >\n' +
    '\t\t\t\t   \\/ \n';

  var c = document.createComment(asciiText);
  document.head.prepend(c);
}
