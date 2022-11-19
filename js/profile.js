function showUserProfile() {
  const loginBtn = document.querySelector(".navigation .login-btn");
  const registerBtn = document.querySelector(".navigation .sign-up-btn");
  const userProfileBtn = document.querySelector(
    ".navigation .user-profile-btn"
  );

  const sessionID = getLocalstorage("SessionID");

  if (sessionID && sessionID.length > 0) {
    [loginBtn, registerBtn].forEach((btn) => {
      btn.classList.add("hide");
    });
    userProfileBtn.classList.remove("hide");
  } else {
    [loginBtn, registerBtn].forEach((btn) => {
      btn.classList.remove("hide");
    });
    userProfileBtn.classList.add("hide");
  }
}

window.addEventListener("DOMContentLoaded", showUserProfile);
