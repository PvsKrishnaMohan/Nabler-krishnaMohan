let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let companyEl = document.getElementById("companyName");
let textAreaEl = document.getElementById("TextArea");
let checkboxEl = document.getElementById("checkbox");
let nameErrMsgEl = document.getElementById("errMsg");
let nameErrMsgEl1 = document.getElementById("errMsg1");
let nameErrMsgEl2 = document.getElementById("errMsg2");
let formEl = document.getElementById("formid");
let errorMsg = "Required*";

let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("Reset");

resetBtn.onclick = function() {
    nameEl.value = "";
    emailEl.value = "";
    companyEl.value = "";
    textAreaEl.value = "";
    nameErrMsgEl.textContent = "";
};

function alphaOnly(value) {
    var letters = /^[A-Za-z]+$/;
    if (value.match(letters)) {
        nameErrMsgEl.textContent = "";

        return true;
    } else {
        nameErrMsgEl.textContent = "Please Enter Valid Name";
        return false;
    }
}

function ValidateEmail(value) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

    if (value.match(validRegex)) {
        nameErrMsgEl.textContent = "";
        return true;

    } else {
        nameErrMsgEl.textContent = "Please Enter Valid Email";
        return false;
    }
}

function getNameInfo(value) {
    if (value === "") {
        nameErrMsgEl.textContent = "Name" + " " + errorMsg;
        return false;
    } else if (value !== "") {
        return alphaOnly(value);
    }
}

function getEmailInfo(value) {
    if (value === "") {
        nameErrMsgEl.textContent = "Email" + " " + errorMsg;
        return false;
    } else if (value !== "") {
        return ValidateEmail(value);
    }
}
function getCompanyInfo(value) {
    console.log("comp");
    if (value === "") {
        nameErrMsgEl.textContent = "Company Name" + " " + errorMsg;
        return false;
    } else {
        nameErrMsgEl.textContent = "";
        return true;
    }
}

function getTextAreaInfo(value) {
    if (value === "") {
        nameErrMsgEl.textContent = "Your Message" + " " + errorMsg;
        return false;
    } else {
        nameErrMsgEl.textContent = "";
        return true;
    }
}

nameEl.addEventListener("blur", function(event) {
    getNameInfo(event.target.value);
});

emailEl.addEventListener("blur", function(event) {
    getEmailInfo(event.target.value);
});

companyEl.addEventListener("blur", function(event) {
    getCompanyInfo(event.target.value);
});
textAreaEl.addEventListener("blur", function(event) {
    getTextAreaInfo(event.target.value);
});

nameEl.addEventListener("change", function(event) {
    getNameInfo(event.target.value);

});

emailEl.addEventListener("change", function(event) {
    getEmailInfo(event.target.value);
});

companyEl.addEventListener("change", function(event) {
    getCompanyInfo(event.target.value);
});
textAreaEl.addEventListener("change", function(event) {
    getTextAreaInfo(event.target.value);
});

formid.addEventListener("submit", function(event) {
    event.preventDefault();
    if (getNameInfo(nameEl.value)) {
        if (getEmailInfo(emailEl.value)) {
            if (getCompanyInfo(companyEl.value)) {
                if (getTextAreaInfo(textAreaEl.value)) {
                    let formData = {
                        name: nameEl.value,
                        email: emailEl.value,
                        companyName: companyEl.value,
                        message: textAreaEl.value
                    };
                    localStorage.setItem("formInfo", JSON.stringify(formData));
                }
            }
        }
    }

});