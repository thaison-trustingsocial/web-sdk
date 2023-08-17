function clearUserId() {
  // Clear the user id from local storage
  // So that SDK will generate a new user id everytime
  localStorage.removeItem("tv:user-id");
}
