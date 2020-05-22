// Globals

var apiUrl = "https://localhost:44336/";
var loginData = null;

// Functions

function isLoggedIn() {
    //todo: sessionstorage ve localstorage da tutulan login bilgilerine bakarak login olup olmadığına karar ver ve eğer loginse uygulamayı aç login değilse login/register sayfasını göster
}

function loginData() {
    //todo: sessionstorage'da, eğer orada bulamaıysan localstorage'da kayıtlı login data'yı json'dan object'e dönüştür ve yolla eğer yoksa null yolla
}

function success(message) {
    $(".tab-pane.active .message")
        .removeClass("alert-danger")
        .addClass("alert-success")
        .text(message)
        .show();
}

function error(modelState) {
    var errors = [];
    if (modelState) {
        for (var prop in modelState) {
            for (var i = 0; i < modelState[prop].length; i++) {
                errors.push(modelState[prop][i]);
            }
        }
    }
    var ul = $("<ul/>");
    for (var j = 0; j < errors.length; j++) {
        ul.append($("<li/>").text(errors[j]));
    }
    $(".tab-pane.active .message")
        .removeClass("alert-success")
        .addClass("alert-danger")
        .html(ul)
        .show();
}

function errorMessage(message) {
    if (message) {
        $(".tab-pane.active .message")
            .removeClass("alert-success")
            .addClass("alert-danger")
            .text(message)
            .show();
    }
}

function resetLoginForms() {
    $(".message").hide();
    $("#login form").each(function () {
        this.reset();
    });
}

// Events

$(document).ajaxStart(function () {
    $(".loading").removeClass("d-none");
});

$(document).ajaxStop(function () {
    $(".loading").addClass("d-none");
});

$("#signupform").submit(function (event) {
    event.preventDefault();
    var formdata = $(this).serialize();

    $.post(apiUrl + "api/Account/Register", formdata, function (data) {
        resetLoginForms();
        success("Your account has been successfully created.");

    }).fail(function (xhr, status, err) {
        error(xhr.responseJSON.ModelState);
    });

});

$("#signinform").submit(function (event) {
    event.preventDefault();
    var formdata = $(this).serialize();

    $.post(apiUrl + "Token", formdata, function (data) {

        var datastr = JSON.stringify(data);
        if ($("#signinrememberme").prop("checked")) {
            sessionStorage.removeItem("login");
            localStorage["login"] = datastr;
        } else {
            sessionStorage["login"] = datastr;
        }

        resetLoginForms();
        success("You have been logged in successfully. Redirecting..");

    }).fail(function (xhr, status, err) {
        errorMessage(xhr.responseJSON.error_description);
    });

});

$('#login a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    // e.target // newly activated tab
    // e.relatedTarget // previous active tab

    resetLoginForms();
});

// https://getbootstrap.com/docs/4.0/components/navs/#via-javascript
$(".navbar-login a").click(function() {
    var href = $(this).attr("href");
    $('#pills-tab a[href="' + href + '"]').tab('show'); // Select tab by name
});