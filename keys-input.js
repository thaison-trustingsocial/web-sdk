/* eslint-disable prefer-destructuring */
/* eslint-disable no-var */
var inputAccessKey = {
  value: '',
};
var inputSecretKey = {
  value: '',
};
var inputApiUrl = {
  value: '',
};
const keyInputHtml = `
  <button id="key-import-string">IMPORT KEYS FROM STRING</button>
  <button id="key-import-qr">IMPORT KEYS FROM QR</button>
  <br/>
  <br/>
  <textarea cols="40" rows="5" id="key-input-string" hidden></textarea>
  <br/>
  <div id="key-parse"></div>
`;
const keyPlaceholder = document.getElementById('keys-input-placeholder');
keyPlaceholder.insertAdjacentHTML('afterbegin', keyInputHtml);

function onImportStrClick() {
  const curState = document.getElementById('key-input-string').hidden;
  document.getElementById('key-input-string').hidden = !curState;

  const keyParsedPlaceholder = document.getElementById('key-parse');
  keyParsedPlaceholder.innerHTML = '';
}

function importKeys(keys) {
  let keyStr = '';
  if (keys?.inputType === 'insertFromPaste') {
    keyStr = keys?.target?.value;
  }
  if (typeof keys === 'string') keyStr = keys;
  if (!keyStr) return;
  // parse key
  const keyParsed = keyStr.split(',');
  // format: key_name/api_url/access_key/secret_key
  const keyDisplayHtml = `
    <span>Key Name: <i>${keyParsed[0]}</i></span><br/>
    <span id="api-url-value">Api Url: <i>${keyParsed[1]}</i></span><br/>
    <span id="access-key-value">Access Key: <i>${keyParsed[2]}</i></span><br/>
    <span id="secret-value">Secret Key: <i>${keyParsed[3]}</i></span><br/>
  `;
  const keyParsedPlaceholder = document.getElementById('key-parse');
  keyParsedPlaceholder.innerHTML = keyDisplayHtml;
  document.getElementById('key-input-string').hidden = true;

  inputApiUrl.value = keyParsed[1];
  inputAccessKey.value = keyParsed[2];
  inputSecretKey.value = keyParsed[3];
}

document.getElementById('key-import-string').addEventListener('click', onImportStrClick);
// eslint-disable-next-line no-undef
document.getElementById('key-import-qr').addEventListener('click', startQRScan);
document.getElementById('key-input-string').addEventListener('input', importKeys);

// function getKeysValue() {
//   const apiUrl = document.getElementById('api-url-value').innerText;
//   const accessKey = document.getElementById('access-key-value').innerText;
//   const secretKey = document.getElementById('secret-value').innerText;
//   return {
//     apiUrl: apiUrl.slice(apiUrl.indexOf(':') + 2),
//     accessKey: accessKey.slice(accessKey.indexOf(':') + 2),
//     secretKey: secretKey.slice(secretKey.indexOf(':') + 2),
//   };
// }
