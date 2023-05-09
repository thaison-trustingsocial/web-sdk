/* eslint-disable prefer-destructuring */
/* eslint-disable no-var */
var logInputAccessKey = {
  value: '',
};
var logInputSecretKey = {
  value: '',
};
var logInputApiUrl = {
  value: '',
};
const logKeyInputHtml = `
  <button id="logKey-import-string">IMPORT KEYS FROM STRING</button>
  <button id="logKey-import-qr">IMPORT KEYS FROM QR</button>
  <br/>
  <br/>
  <textarea cols="40" rows="5" id="logKey-input-string" hidden></textarea>
  <br/>
  <div id="logKey-parse"></div>
`;
const logKeyPlaceholder = document.getElementById('logKeys-input-placeholder');
logKeyPlaceholder.insertAdjacentHTML('afterbegin', logKeyInputHtml);

function onLogImportStrClick() {
  const curState = document.getElementById('logKey-input-string').hidden;
  document.getElementById('logKey-input-string').hidden = !curState;

  const logKeyParsedPlaceholder = document.getElementById('logKey-parse');
  logKeyParsedPlaceholder.innerHTML = '';
}

function importLogKeys(logKeys) {
  let logKeyStr = '';
  if (logKeys?.inputType === 'insertFromPaste') {
    logKeyStr = logKeys?.target?.value;
  }
  if (typeof logKeys === 'string') logKeyStr = logKeys;
  if (!logKeyStr) return;
  // parse logKey
  const logKeyParsed = logKeyStr.split(',');
  // format: logKey_name/api_url/access_logKey/secret_logKey
  const logKeyDisplayHtml = `
    <span>Key Name: <i>${logKeyParsed[0]}</i></span><br/>
    <span id="api-url-value">Api Url: <i>${logKeyParsed[1]}</i></span><br/>
    <span id="access-logKey-value">Access Key: <i>${logKeyParsed[2]}</i></span><br/>
    <span id="secret-value">Secret Key: <i>${logKeyParsed[3]}</i></span><br/>
  `;
  const logKeyParsedPlaceholder = document.getElementById('logKey-parse');
  logKeyParsedPlaceholder.innerHTML = logKeyDisplayHtml;
  document.getElementById('logKey-input-string').hidden = true;

  logInputApiUrl.value = logKeyParsed[1];
  logInputAccessKey.value = logKeyParsed[2];
  logInputSecretKey.value = logKeyParsed[3];
}

document.getElementById('logKey-import-string').addEventListener('click', onLogImportStrClick);
// eslint-disable-next-line no-undef
document.getElementById('logKey-import-qr').addEventListener('click', () => startQRScan('log'));
document.getElementById('logKey-input-string').addEventListener('input', importLogKeys);

// function getKeysValue() {
//   const apiUrl = document.getElementById('api-url-value').innerText;
//   const accessKey = document.getElementById('access-logKey-value').innerText;
//   const secretKey = document.getElementById('secret-value').innerText;
//   return {
//     apiUrl: apiUrl.slice(apiUrl.indexOf(':') + 2),
//     accessKey: accessKey.slice(accessKey.indexOf(':') + 2),
//     secretKey: secretKey.slice(secretKey.indexOf(':') + 2),
//   };
// }
