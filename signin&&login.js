let loginBtn = document.querySelector(".login");
let signupBtn = document.querySelector(".signup");
let body = document.querySelector("body");
let introSection = document.querySelector(".intro");
// let userCreationForm = document.createElement("form");
let loginScreen = document.createElement("div");
let SignupScreen = document.createElement("div");

if (document.readyState !== "loading") {
    // getLocalTodos();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        // getLocalTodos();
    });
}
loginBtn.addEventListener("click", showLoginScreen);
signupBtn.addEventListener("click", showSignupScreen);
//  TODO Prevent button from summoning multiple forms
// TODO Add Google and Facebook Buttons
// TODO Create Sexy Transistions
// TODO Forgot Password Section?
function showLoginScreen(event) {
    SignupScreen.remove();
    console.log("targeted");
    // let loginScreen = document.createElement("div");
    let loginSection = document.createElement("div");
    let passwordSection = document.createElement("div");
    let userCreationForm = document.createElement("form");
    let loginInput = document.createElement("input");
    let containerPasswordSubmit = document.createElement("div");
    let forgetPasswordLink = document.createElement("p");
    let passInput = document.createElement("input");
    let submitBtn = document.createElement("button");
    let buttonText = document.createElement("div");
    let optionToDiv = document.createElement("div");
    let optionText = document.createElement("p");
    let signInButtonsSection = document.createElement("div");
    let googleButton = document.createElement("button");
    let facebookButton = document.createElement("button");
    let githubButton = document.createElement("button");
    let twitterButton = document.createElement("button");
    let exitout = document.createElement("button");
    let passwordResetHyperlink = document.createElement("a");
    exitout.innerHTML =
        '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-5x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>';
    forgetPasswordLink.innerHTML = "Forget your Password?";
    loginSection.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3zm0 1c-.488 0-.936.175-1.283.466L11.5 11.52l7.783-5.054A1.992 1.992 0 0 0 18 6H5zm6.5 6.712L3.134 7.28A1.995 1.995 0 0 0 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.254-.047-.497-.134-.72L11.5 12.711z" /><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>';
    passwordSection.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"><path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm6 10l.002 8H6v-8h12zm-9-2V7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9z" /><rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /></svg>';
    facebookButton.innerHTML =
        '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167.657 167.657" style="enable-background:new 0 0 167.657 167.657;" xml:space="preserve"><g><path d="M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154C167.657,37.881,130.125,0.349,83.829,0.349z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
    googleButton.innerHTML =
        '<svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg>';
    githubButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.549 438.549" class="djNn9trRfsEc9m0LrQMmN"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" fill="currentColor" style="--darkreader-inline-fill:currentColor;" data-darkreader-inline-fill=""></path></svg>';
    twitterButton.innerHTML =
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve"><style type="text/css">.st0{fill:#1DA1F2;}.st1{fill:#FFFFFF;}</style><g id="Dark_Blue"><circle class="st0" cx="200" cy="200" r="200"/></g><g id="Logo__x2014__FIXED"><path class="st1" d="M163.4,305.5c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5"/></g></svg>';
    loginSection.classList.add("loginSection");
    exitout.classList.add("exitoutofframe");
    passwordSection.classList.add("passwordSection");
    loginScreen.classList.add("userCreationForm");
    loginInput.placeholder = "Username";
    loginInput.classList.add("form-control");
    passInput.placeholder = "Password";
    passInput.type = "password";
    optionToDiv.classList.add("options-section");
    facebookButton.classList.add("facebookbtn");
    twitterButton.classList.add("twitterbtn");
    githubButton.classList.add("githubbtn");
    googleButton.classList.add("googlebtn");
    passInput.classList.add("form-control");
    loginScreen.innerText = "User Login";
    submitBtn.classList.add("submit-button");
    buttonText.classList.add("login-text");
    loginSection.classList.add("svg-unfill");
    passwordSection.classList.add("svg-unfill");
    signInButtonsSection.classList.add("btnsection");
    containerPasswordSubmit.classList.add("container-pw-reset-submit");
    forgetPasswordLink.classList.add("pw-reset");
    buttonText.innerText = "Sign in";
    optionText.innerText = "Or";
    passwordResetHyperlink.href = "#";
    passwordResetHyperlink.innerHTML = "Click Here";

    // * Give focus to Input Sections not just Input
    loginScreen.appendChild(exitout);
    submitBtn.appendChild(buttonText);
    loginSection.appendChild(loginInput);
    passwordSection.appendChild(passInput);
    userCreationForm.appendChild(loginSection);
    userCreationForm.appendChild(passwordSection);
    optionToDiv.appendChild(optionText);
    signInButtonsSection.appendChild(twitterButton);
    signInButtonsSection.appendChild(githubButton);
    signInButtonsSection.appendChild(facebookButton);
    signInButtonsSection.appendChild(googleButton);
    forgetPasswordLink.appendChild(passwordResetHyperlink);

    userCreationForm.appendChild(submitBtn);
    submitBtn.addEventListener("click", CREATEFUNCTIONHERE);
    exitout.addEventListener("click", removeForm);
    loginScreen.appendChild(userCreationForm);

    loginScreen.appendChild(optionToDiv);
    loginScreen.appendChild(signInButtonsSection);
    loginScreen.appendChild(forgetPasswordLink);
    introSection.appendChild(loginScreen);
    loginInput.addEventListener("focus", (event) => {
        loginSection.classList.remove("svg-unfill");
        loginSection.classList.add("svg-fill");
    });
    loginInput.addEventListener("blur", (event) => {
        loginSection.classList.remove("svg-fill");
        loginSection.classList.add("svg-unfill");
    });
    passInput.addEventListener("focus", (event) => {
        passwordSection.classList.remove("svg-unfill");
        passwordSection.classList.add("svg-fill");
    });
    passInput.addEventListener("blur", (event) => {
        passwordSection.classList.remove("svg-fill");
        passwordSection.classList.add("svg-unfill");
    });
}
function CREATEFUNCTIONHERE(event) {
    event.preventDefault();
}
function removeForm(event) {
    var target = event.target;
    var parent = target.parentElement;
    parent.remove();
}
function showSignupScreen(event) {
    loginScreen.remove();
    let userCreationForm = document.createElement("form");
    // * Exit Button
    let exitout = document.createElement("button");
    // * Login Section
    let loginSection = document.createElement("div");
    let loginInput = document.createElement("input");
    let loginFloatText = document.createElement("span");
    // * Password Section
    let passwordSection = document.createElement("div");
    let passInput = document.createElement("input");
    let passFloatText = document.createElement("span");
    let passShowButton = document.createElement("button");
    // * Password Section 2
    let passwordSection2 = document.createElement("div");
    let passInput2 = document.createElement("input");
    let passFloatText2 = document.createElement("span");
    let passShowButton2 = document.createElement("button");
    //* Sign in Section
    let SubmitbuttonContainer = document.createElement("div");
    let containerPasswordSubmit = document.createElement("div");
    let signInButtonsSection = document.createElement("div");
    let submitBtn = document.createElement("button");
    let submitButtonText = document.createElement("div");

    // * Options Section
    let optionToDiv = document.createElement("div");
    let optionText = document.createElement("p");
    // * Options Section Buttons
    let googleButton = document.createElement("button");
    let facebookButton = document.createElement("button");
    let githubButton = document.createElement("button");
    let twitterButton = document.createElement("button");
    // * Forget Section
    let forgetPasswordLink = document.createElement("p");
    let passwordResetHyperlink = document.createElement("a");
    // * SVG Section
    submitBtn.innerHTML =
        '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg>';
    exitout.innerHTML =
        '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-5x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>';
    facebookButton.innerHTML =
        '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 167.657 167.657" style="enable-background:new 0 0 167.657 167.657;" xml:space="preserve"><g><path d="M83.829,0.349C37.532,0.349,0,37.881,0,84.178c0,41.523,30.222,75.911,69.848,82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037,12.238-30.956,30.115-30.956c8.562,0,15.92,0.638,18.056,0.919v20.944l-12.399,0.006c-9.72,0-11.594,4.618-11.594,11.397v14.947h23.193l-3.025,23.42H94.026v65.653c41.476-5.048,73.631-40.312,73.631-83.154C167.657,37.881,130.125,0.349,83.829,0.349z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
    googleButton.innerHTML =
        '<svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg>';
    githubButton.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.549 438.549" class="djNn9trRfsEc9m0LrQMmN"><path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" fill="currentColor" style="--darkreader-inline-fill:currentColor;" data-darkreader-inline-fill=""></path></svg>';
    twitterButton.innerHTML =
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" style="enable-background:new 0 0 400 400;" xml:space="preserve"><style type="text/css">.st0{fill:#1DA1F2;}.st1{fill:#FFFFFF;}</style><g id="Dark_Blue"><circle class="st0" cx="200" cy="200" r="200"/></g><g id="Logo__x2014__FIXED"><path class="st1" d="M163.4,305.5c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25c-8.6,3.8-17.9,6.4-27.7,7.6c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2c-26.6,0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7C110.8,297.5,136.2,305.5,163.4,305.5"/></g></svg>';

    SignupScreen.innerText = "Sign Up";
    submitButtonText.innerText = "Next";
    optionText.innerText = "Or";
    passwordResetHyperlink.href = "#";
    passwordResetHyperlink.innerHTML = "Click Here";
    loginFloatText.innerText = "Email";
    passFloatText.innerText = "Password";
    passFloatText2.innerText = "Verify Password";
    passInput.type = "password";
    passInput2.type = "password";
    forgetPasswordLink.innerHTML = "Forget your Password?";
    passShowButton.innerHTML = "Show";
    passShowButton2.innerHTML = "Show";
    // * CSS Class Adding Section
    SignupScreen.classList.add("userCreationForm");
    exitout.classList.add("exitoutofframe");
    exitout.classList.add("sign");
    loginSection.classList.add("loginSection");
    loginInput.classList.add("form-control");
    loginInput.classList.add("sign");
    loginFloatText.classList.add("floating-label");
    // * Password Section
    // TODO Must create button to allow user to see what they're typing
    passwordSection.classList.add("passwordSection");
    passInput.classList.add("form-control");
    passInput.classList.add("sign");
    passInput.classList.add("pass");
    passFloatText.classList.add("floating-label");
    passShowButton.classList.add("passShowButton");
    // * Recheck Password
    // TODO Must create button to allow user to see what they're typing
    passwordSection2.classList.add("passwordSection");
    passInput2.classList.add("form-control");
    passInput2.classList.add("sign");
    passInput2.classList.add("pass");
    passFloatText2.classList.add("floating-label");
    passShowButton2.classList.add("passShowButton");
    // * Prev Next Buttons Sections
    SubmitbuttonContainer.classList.add("submit-button-container");
    submitBtn.classList.add("submit-button");
    submitBtn.classList.add("sign");
    submitButtonText.classList.add("login-text");
    // * Options Section
    optionToDiv.classList.add("options-section");
    optionToDiv.classList.add("sign");
    facebookButton.classList.add("facebookbtn");
    twitterButton.classList.add("twitterbtn");
    githubButton.classList.add("githubbtn");
    googleButton.classList.add("googlebtn");
    signInButtonsSection.classList.add("btnsection");
    containerPasswordSubmit.classList.add("container-pw-reset-submit");
    forgetPasswordLink.classList.add("pw-reset");
    forgetPasswordLink.classList.add("sign");
    // * Give focus to Input Sections not just Input
    SignupScreen.appendChild(exitout);
    submitBtn.appendChild(submitButtonText);
    SubmitbuttonContainer.appendChild(submitBtn);
    // * Login Section
    loginSection.appendChild(loginInput);
    loginSection.appendChild(loginFloatText);
    // * Password Section
    passwordSection.appendChild(passInput);
    passwordSection.appendChild(passFloatText);
    passwordSection.appendChild(passShowButton);
    // * Password2 Section
    passwordSection2.appendChild(passInput2);
    passwordSection2.appendChild(passFloatText2);
    passwordSection2.appendChild(passShowButton2);
    // * Form Section
    userCreationForm.appendChild(loginSection);
    userCreationForm.appendChild(passwordSection);
    userCreationForm.appendChild(passwordSection2);
    userCreationForm.appendChild(SubmitbuttonContainer);
    // * Options Section
    optionToDiv.appendChild(optionText);
    signInButtonsSection.appendChild(twitterButton);
    signInButtonsSection.appendChild(githubButton);
    signInButtonsSection.appendChild(facebookButton);
    signInButtonsSection.appendChild(googleButton);
    forgetPasswordLink.appendChild(passwordResetHyperlink);
    submitBtn.addEventListener("click", CREATEFUNCTIONHERE);
    exitout.addEventListener("click", removeForm);
    // * Main Sign up Screen
    SignupScreen.appendChild(userCreationForm);
    SignupScreen.appendChild(optionToDiv);
    SignupScreen.appendChild(signInButtonsSection);
    SignupScreen.appendChild(forgetPasswordLink);
    introSection.appendChild(SignupScreen);
    passShowButton.addEventListener("click", (event) => {
        event.preventDefault();
        if (passInput.type == "password") {
            passInput.type = "none";
        } else {
            passInput.type = "password";
        }
    });
    passShowButton2.addEventListener("click", (event) => {
        event.preventDefault();
        if (passInput2.type == "password") {
            passInput2.type = "none";
        } else {
            passInput2.type = "password";
        }
    });
    loginInput.addEventListener("blur", (event) => {
        // console.log(loginInput.value);
        if (loginInput.value == "") {
            loginFloatText.classList.remove("valid");
        } else if (loginInput.value != "") {
            loginFloatText.classList.add("valid");
        }
    });
    passInput.addEventListener("blur", (event) => {
        // console.log(passInput.value);
        if (passInput.value == "") {
            passFloatText.classList.remove("valid");
        } else if (passInput.value != "") {
            passFloatText.classList.add("valid");
        }
    });
    passInput2.addEventListener("blur", (event) => {
        // console.log(passInput.value);
        if (passInput2.value == "") {
            passFloatText2.classList.remove("valid");
        } else if (passInput2.value != "") {
            passFloatText2.classList.add("valid");
        }
    });
    passInput2.addEventListener("blur", (event) => {
        // console.log(passInput2.value);
        if (passInput2.value == passInput.value) {
            passInput.classList.remove("not-matched");
            passInput2.classList.remove("not-matched");
        } else if (
            passInput2.value != "" &&
            passInput2.value != passInput.value
        ) {
            console.log("not matched");
            passInput.classList.add("not-matched");
            passInput2.classList.add("not-matched");
        }
    });
    passInput.addEventListener("blur", (event) => {
        // console.log(passInput2.value);
        if (passInput.value == passInput2.value) {
            passInput.classList.remove("not-matched");
            passInput2.classList.remove("not-matched");
        } else if (
            passInput.value != "" &&
            passInput.value != passInput2.value &&
            passInput2.value != ""
        ) {
            console.log("not matched");
            passInput.classList.add("not-matched");
            passInput2.classList.add("not-matched");
        }
    });
    submitBtn.addEventListener("click", (event) => {
        // * Section Removal

        signInButtonsSection.style.display = "none";
        optionToDiv.style.display = "none";
        forgetPasswordLink.style.display = "none";
        loginSection.style.display = "none";
        passwordSection.style.display = "none";
        passwordSection2.style.display = "none";
        submitBtn.style.display = "none";
        // * firstName Section
        let firstNameSection = document.createElement("div");
        let firstNameInput = document.createElement("input");
        let firstNameFloatText = document.createElement("span");
        // * lastName Section
        let lastNameSection = document.createElement("div");
        let lastNameInput = document.createElement("input");
        let lastNameFloatText = document.createElement("span");
        // * country Section 2
        let countrySection = document.createElement("div");
        let countryInput = document.createElement("select");
        let countryFloatText = document.createElement("span");
        function countryAdder() {
            let countryList = [
                "",
                "Afghanistan",
                "Albania",
                "Algeria",
                "Andorra",
                "Angola",
                "Anguilla",
                "Antigua &amp; Barbuda",
                "Argentina",
                "Armenia",
                "Aruba",
                "Australia",
                "Austria",
                "Azerbaijan",
                "Bahamas",
                "Bahrain",
                "Bangladesh",
                "Barbados",
                "Belarus",
                "Belgium",
                "Belize",
                "Benin",
                "Bermuda",
                "Bhutan",
                "Bolivia",
                "Bosnia &amp; Herzegovina",
                "Botswana",
                "Brazil",
                "British Virgin Islands",
                "Brunei",
                "Bulgaria",
                "Burkina Faso",
                "Burundi",
                "Cambodia",
                "Cameroon",
                "Canada",
                "Cape Verde",
                "Cayman Islands",
                "Central Arfrican Republic",
                "Chad",
                "Chile",
                "China",
                "Colombia",
                "Congo",
                "Cook Islands",
                "Costa Rica",
                "Cote D Ivoire",
                "Croatia",
                "Cuba",
                "Curacao",
                "Cyprus",
                "Czech Republic",
                "Denmark",
                "Djibouti",
                "Dominica",
                "Dominican Republic",
                "Ecuador",
                "Egypt",
                "El Salvador",
                "Equatorial Guinea",
                "Eritrea",
                "Estonia",
                "Ethiopia",
                "Falkland Islands",
                "Faroe Islands",
                "Fiji",
                "Finland",
                "France",
                "French Polynesia",
                "French West Indies",
                "Gabon",
                "Gambia",
                "Georgia",
                "Germany",
                "Ghana",
                "Gibraltar",
                "Greece",
                "Greenland",
                "Grenada",
                "Guam",
                "Guatemala",
                "Guernsey",
                "Guinea",
                "Guinea Bissau",
                "Guyana",
                "Haiti",
                "Honduras",
                "Hong Kong",
                "Hungary",
                "Iceland",
                "India",
                "Indonesia",
                "Iran",
                "Iraq",
                "Ireland",
                "Isle of Man",
                "Israel",
                "Italy",
                "Jamaica",
                "Japan",
                "Jersey",
                "Jordan",
                "Kazakhstan",
                "Kenya",
                "Kiribati",
                "Kosovo",
                "Kuwait",
                "Kyrgyzstan",
                "Laos",
                "Latvia",
                "Lebanon",
                "Lesotho",
                "Liberia",
                "Libya",
                "Liechtenstein",
                "Lithuania",
                "Luxembourg",
                "Macau",
                "Macedonia",
                "Madagascar",
                "Malawi",
                "Malaysia",
                "Maldives",
                "Mali",
                "Malta",
                "Marshall Islands",
                "Mauritania",
                "Mauritius",
                "Mexico",
                "Micronesia",
                "Moldova",
                "Monaco",
                "Mongolia",
                "Montenegro",
                "Montserrat",
                "Morocco",
                "Mozambique",
                "Myanmar",
                "Namibia",
                "Nauro",
                "Nepal",
                "Netherlands",
                "Netherlands Antilles",
                "New Caledonia",
                "New Zealand",
                "Nicaragua",
                "Niger",
                "Nigeria",
                "North Korea",
                "Norway",
                "Oman",
                "Pakistan",
                "Palau",
                "Palestine",
                "Panama",
                "Papua New Guinea",
                "Paraguay",
                "Peru",
                "Philippines",
                "Poland",
                "Portugal",
                "Puerto Rico",
                "Qatar",
                "Reunion",
                "Romania",
                "Russia",
                "Rwanda",
                "Saint Pierre &amp; Miquelon",
                "Samoa",
                "San Marino",
                "Sao Tome and Principe",
                "Saudi Arabia",
                "Senegal",
                "Serbia",
                "Seychelles",
                "Sierra Leone",
                "Singapore",
                "Slovakia",
                "Slovenia",
                "Solomon Islands",
                "Somalia",
                "South Africa",
                "South Korea",
                "South Sudan",
                "Spain",
                "Sri Lanka",
                "St Kitts &amp; Nevis",
                "St Lucia",
                "St Vincent",
                "Sudan",
                "Suriname",
                "Swaziland",
                "Sweden",
                "Switzerland",
                "Syria",
                "Taiwan",
                "Tajikistan",
                "Tanzania",
                "Thailand",
                "Timor L'Este",
                "Togo",
                "Tonga",
                "Trinidad &amp; Tobago",
                "Tunisia",
                "Turkey",
                "Turkmenistan",
                "Turks &amp; Caicos",
                "Tuvalu",
                "Uganda",
                "Ukraine",
                "United Arab Emirates",
                "United Kingdom",
                "United States of America",
                "Uruguay",
                "Uzbekistan",
                "Vanuatu",
                "Vatican City",
                "Venezuela",
                "Vietnam",
                "Virgin Islands (US)",
                "Yemen",
                "Zambia",
                "Zimbabwe",
            ];
            let CL = countryFloatText.innerHTML;
            for (let i = 0; i < countryList.length; i++) {
                CL +=
                    "<option value='" +
                    countryList[i] +
                    "'> " +
                    countryList[i] +
                    " </option>";
            }
            countryInput.innerHTML = CL;
        }
        countryAdder();

        // * Former User now First Name Section
        firstNameSection.classList.add("firstNameSection");
        firstNameInput.classList.add("form-control");
        firstNameInput.classList.add("sign");
        firstNameFloatText.classList.add("floating-label");
        firstNameFloatText.innerText = "First Name";
        // * Former Password now Last Name Section
        lastNameSection.classList.add("lastNameSection");
        lastNameInput.classList.add("form-control");
        lastNameInput.classList.add("sign");
        lastNameFloatText.classList.add("floating-label");
        lastNameFloatText.innerText = "Last Name";
        // * Former Password now Country Section
        countrySection.classList.add("countrySection");
        countryInput.classList.add("form-control");
        countryInput.classList.add("sign");
        countryFloatText.classList.add("floating-label");
        countryFloatText.innerText = "Country";
        // * Submit Button Creation
        let trueSubmitBtn = document.createElement("button");
        let trueSubmitButtonText = document.createElement("div");
        trueSubmitBtn.classList.add("submit-button");
        trueSubmitBtn.classList.add("sign");
        trueSubmitButtonText.classList.add("login-text");
        trueSubmitButtonText.innerText = "Submit";
        trueSubmitBtn.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-right fa-w-6 fa-3x"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z" class=""></path></svg>';

        // * Previous Button Creation
        let previousBtn = document.createElement("button");
        let previousButtonText = document.createElement("div");
        previousBtn.innerHTML =
            '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" class="svg-inline--fa fa-angle-left fa-w-6 fa-3x"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z" class=""></path></svg>';
        previousButtonText.innerText = "Prev";
        previousBtn.classList.add("previous-button");
        previousBtn.classList.add("sign");
        previousButtonText.classList.add("previous-text");
        previousBtn.addEventListener("click", (event) => {
            event.preventDefault();
            loginSection.style.display = "flex";
            passwordSection.style.display = "flex";
            passwordSection2.style.display = "flex";
            submitBtn.style.display = "flex";
            trueSubmitBtn.style.display = "none";
            previousBtn.style.display = "none";
            firstNameSection.style.display = "none";
            lastNameSection.style.display = "none";
            countrySection.style.display = "none";
            console.log(loginInput.value);
            console.log(passInput.value);
            console.log("works");
            // TODO Needs to run to previous survey must include user info already
        });
        // // * Paginator 1 Button Section

        // let paginationContainer = document.createElement("div");
        // let roundIndicator = document.createElement("span");
        // roundIndicator.innerText = "1";
        // roundIndicator.classList.add("dot");
        // roundIndicator.classList.add("sign");
        // roundIndicator.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     console.log("works");
        //     // TODO Needs to implement pagination must include user info already
        // });
        // // * Paginator 2 Button Section
        // let roundIndicator2 = document.createElement("span");
        // roundIndicator2.innerText = "2";
        // roundIndicator2.classList.add("dot");
        // roundIndicator2.classList.add("sign");
        // roundIndicator2.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     console.log("works");
        //     // TODO Needs to implement pagination must include user info already
        // });
        // // * Paginator Container
        // paginationContainer.classList.add("pagination-container");
        // paginationContainer.classList.add("sign");
        // paginationContainer.appendChild(roundIndicator);
        // paginationContainer.appendChild(roundIndicator2);
        // SignupScreen.appendChild(paginationContainer);
        // * Login Section
        firstNameSection.appendChild(firstNameInput);
        firstNameSection.appendChild(firstNameFloatText);
        // * Password Section
        lastNameSection.appendChild(lastNameInput);
        lastNameSection.appendChild(lastNameFloatText);
        // * Password2 Section
        countrySection.appendChild(countryInput);
        countrySection.appendChild(countryFloatText);
        // * Final Submit Button Section
        trueSubmitBtn.appendChild(trueSubmitButtonText);
        SubmitbuttonContainer.appendChild(trueSubmitBtn);
        // * Previous Button Section
        previousBtn.appendChild(previousButtonText);
        SubmitbuttonContainer.appendChild(previousBtn);

        // // * Pagination Displayer
        // paginationContainer.appendChild(roundIndicator);
        // paginationContainer.appendChild(roundIndicator2);
        // SignupScreen.appendChild(paginationContainer);
        // * Form Section
        userCreationForm.appendChild(firstNameSection);
        userCreationForm.appendChild(lastNameSection);
        userCreationForm.appendChild(countrySection);
        userCreationForm.appendChild(SubmitbuttonContainer);
        firstNameInput.addEventListener("blur", (event) => {
            console.log(firstNameInput.value);
            if (firstNameInput.value == "") {
                firstNameFloatText.classList.remove("valid");
            } else if (firstNameInput.value != "") {
                firstNameFloatText.classList.add("valid");
            }
        });
        lastNameInput.addEventListener("blur", (event) => {
            console.log(lastNameInput.value);
            if (lastNameInput.value == "") {
                lastNameFloatText.classList.remove("valid");
            } else if (lastNameInput.value != "") {
                lastNameFloatText.classList.add("valid");
            }
        });
        countryInput.addEventListener("blur", (event) => {
            console.log(countryInput.value);
            if (countryInput.value == "") {
                countryFloatText.classList.remove("valid");
            } else if (countryInput.value != "") {
                countryFloatText.classList.add("valid");
            }
        });
    });
}

function saveLocalData(emailVal, pwVal, fnVal, lnVal, countryVal) {
    let userData;
    if (localStorage.getItem("userData") === null) {
        userData = [];
    } else {
        userData = JSON.parse(localStorage.getItem("userData"));
    }
    let userInfo = {
        Email: emailVal,
        Password: pwVal,
        FirstName: fnVal,
        LastName: lnVal,
        Country: countryVal,
    };
    userData.push(userInfo);
    localStorage.setItem("userData", JSON.stringify(userData));
}

// loginScreen.remove();

// // * Exit Button
// let exitout = document.createElement("button");
// // * Login Section
// let loginSection = document.createElement("div");
// let loginInput = document.createElement("input");
// let loginFloatText = document.createElement("span");
// // * Password Section
// let passwordSection = document.createElement("div");
// let passInput = document.createElement("input");
// let passFloatText = document.createElement("span");
// // * Password Section 2
// let passwordSection2 = document.createElement("div");
// let passInput2 = document.createElement("input");
// let passFloatText2 = document.createElement("span");
// //* Sign in Section
// let SubmitbuttonContainer = document.createElement("div");
// let containerPasswordSubmit = document.createElement("div");
// let signInButtonsSection = document.createElement("div");
// let submitBtn = document.createElement("button");
// let submitButtonText = document.createElement("div");

// // * Options Section
// let optionToDiv = document.createElement("div");
// let optionText = document.createElement("p");
// // * Options Section Buttons
// let googleButton = document.createElement("button");
// let facebookButton = document.createElement("button");
// let githubButton = document.createElement("button");
// let twitterButton = document.createElement("button");
// // * Forget Section
// let forgetPasswordLink = document.createElement("p");
// let passwordResetHyperlink = document.createElement("a");

// SignupScreen.innerText = "Sign Up";
// submitButtonText.innerText = "Next";

// optionText.innerText = "Or";
// passwordResetHyperlink.href = "#";
// passwordResetHyperlink.innerHTML = "Click Here";
// loginFloatText.innerText = "Email";
// passFloatText.innerText = "Password";
// passFloatText2.innerText = "Verify Password";
// passInput.type = "password";
// passInput2.type = "password";
// forgetPasswordLink.innerHTML = "Forget your Password?";

// SignupScreen.classList.add("userCreationForm");
// exitout.classList.add("exitoutofframe");
// exitout.classList.add("sign");
// loginSection.classList.add("loginSection");
// loginInput.classList.add("form-control");
// loginInput.classList.add("sign");
// loginFloatText.classList.add("floating-label");
// // * Password Section
// passwordSection.classList.add("passwordSection");
// passInput.classList.add("form-control");
// passInput.classList.add("sign");
// passFloatText.classList.add("floating-label");
// // * Recheck Password
// passwordSection2.classList.add("passwordSection");
// passInput2.classList.add("form-control");
// passInput2.classList.add("sign");
// passFloatText2.classList.add("floating-label");
// // * Prev Next Buttons Sections
// SubmitbuttonContainer.classList.add("submit-button-container");
// submitBtn.classList.add("submit-button");
// submitBtn.classList.add("sign");
// submitButtonText.classList.add("login-text");

// // * Options Section
// optionToDiv.classList.add("options-section");
// optionToDiv.classList.add("sign");
// signInButtonsSection.classList.add("btnsection");
// containerPasswordSubmit.classList.add("container-pw-reset-submit");
// forgetPasswordLink.classList.add("pw-reset");
// forgetPasswordLink.classList.add("sign");
