
/**
 * Get the credentials from the session storage
 * @returns {string} - Session key
 */
function getSessionKey() {
  const sessionKey = sessionStorage.getItem("sdk:flash-liveness:key");
  return sessionKey;
}

/**
 * Set the credentials in the session storage
 * @param {string} key - Session key
 */
function setSessionKey(key) {
  sessionStorage.setItem("sdk:flash-liveness:key", key);
}
