const setLocalstorage = (key, object) => {
  const oldObjects = JSON.parse(localStorage.getItem(key));
  let newObjects = [];
  if (oldObjects && oldObjects.length > 0) {
    newObjects = [...oldObjects, object];
  } else {
    newObjects.push(object);
  }
  localStorage.setItem(key, JSON.stringify(newObjects));
  return JSON.parse(localStorage.getItem(key));
};

const getLocalstorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

function validateInput(formEle) {
  if (formEle.name) {
  }

  if (formEle.phone) {
  }

  if (formEle.email) {
  }

  if (formEle.password) {
  }

  const isValid = true;
  const errs = [];
  return [isValid, errs];
}

const registerFormEle = document.querySelector(".register-form");

registerFormEle?.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const [isValid, errs] = validateInput(registerFormEle);

  if (isValid) {
    const userInfo = {
      UserID: Math.floor(Math.random() * Math.pow(10, 10)),
      UserName: registerFormEle.name.value,
      Phone: registerFormEle.phone.value,
      Email: registerFormEle.email.value,
      Password: registerFormEle.password.value,
    };

    setLocalstorage("users", userInfo);
    localStorage.setItem("SessionID", userInfo.UserID);
    // console.log(getLocalstorage("users"));

    window.location.href = "./login.html";
  }
});

const loginFormEle = document.querySelector(".login-form");
loginFormEle?.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const userList = getLocalstorage("users");
  let isValid = true;
  let errorMessage = "";
  let errs = [];
  let sessionId = "";

  for (const storedUserInfo of userList) {
    if (
      loginFormEle.email.value === storedUserInfo["Email"] &&
      loginFormEle.password.value === storedUserInfo
    ) {
      sessionId = storedUserInfo["UserID"];
      break;
    } else if (
      loginFormEle.email.value !== storedUserInfo["Email"] &&
      loginFormEle.password.value === storedUserInfo["Password"]
    ) {
      isValid = false;
      errorMessage = "INCORRECT_EMAIL";
      errs.push();
    } else if (
      loginFormEle.email.value === storedUserInfo["Email"] &&
      loginFormEle.password.value !== storedUserInfo["Password"]
    ) {
      isValid = false;
      errorMessage = "INCORRECT_PASSWORD";
      errs.push();
    }
  }

  if (isValid) {
    setLocalstorage("SessionID", sessionId);
    window.location.href = "./main.html";
  }

  return [isValid, errs];
});
