(function () {
  function getField(input) {
    return input.closest(".auth-field");
  }

  function getFeedback(input) {
    var field = getField(input);
    return field ? field.querySelector(".invalid-feedback") : null;
  }

  function markInvalid(input, message) {
    var feedback = getFeedback(input);
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    if (feedback) {
      feedback.textContent = message;
      feedback.classList.add("d-block");
    }
  }

  function markValid(input) {
    var feedback = getFeedback(input);
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    if (feedback) {
      feedback.classList.remove("d-block");
    }
  }

  function clearField(input) {
    var feedback = getFeedback(input);
    input.classList.remove("is-invalid", "is-valid");
    if (feedback) {
      feedback.classList.remove("d-block");
    }
  }

  function showAlert(alert, type, message) {
    if (!alert) {
      return;
    }
    alert.className = "alert alert-" + type + " auth-alert";
    alert.textContent = message;
  }

  function isEmailValid(input) {
    return input.value.trim() !== "" && input.checkValidity();
  }

  function onlyNumbers(value) {
    return value.replace(/\D/g, "");
  }

  function formatPhone(value) {
    var numbers = onlyNumbers(value).slice(0, 11);

    if (numbers.length <= 2) {
      return numbers;
    }

    if (numbers.length <= 6) {
      return "(" + numbers.slice(0, 2) + ") " + numbers.slice(2);
    }

    if (numbers.length <= 10) {
      return "(" + numbers.slice(0, 2) + ") " + numbers.slice(2, 6) + "-" + numbers.slice(6);
    }

    return "(" + numbers.slice(0, 2) + ") " + numbers.slice(2, 7) + "-" + numbers.slice(7);
  }

  function resetPasswordToggles(scope) {
    scope.querySelectorAll("[data-password-toggle]").forEach(function (button) {
      var input = document.querySelector(button.getAttribute("data-password-toggle"));
      if (!input) {
        return;
      }
      input.type = "password";
      button.textContent = "Mostrar";
      button.setAttribute("aria-label", "Mostrar senha");
    });
  }

  document.querySelectorAll("[data-password-toggle]").forEach(function (button) {
    var input = document.querySelector(button.getAttribute("data-password-toggle"));
    if (!input) {
      return;
    }

    button.addEventListener("click", function () {
      var showing = input.type === "text";
      input.type = showing ? "password" : "text";
      button.textContent = showing ? "Mostrar" : "Ocultar";
      button.setAttribute("aria-label", showing ? "Mostrar senha" : "Ocultar senha");
    });
  });

  document.querySelectorAll(".auth-field input").forEach(function (input) {
    input.addEventListener("input", function () {
      clearField(input);
    });
    input.addEventListener("change", function () {
      clearField(input);
    });
  });

  document.querySelectorAll('input[type="tel"]').forEach(function (input) {
    input.addEventListener("input", function () {
      input.value = formatPhone(input.value);
    });
  });

  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
    var loginAlert = document.getElementById("loginAlert");
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var email = document.getElementById("email");
      var senha = document.getElementById("senha");
      var valid = true;

      if (!isEmailValid(email)) {
        markInvalid(email, "Informe um e-mail v\u00e1lido.");
        valid = false;
      } else {
        markValid(email);
      }

      if (senha.value.trim().length < 6) {
        markInvalid(senha, "A senha precisa ter pelo menos 6 caracteres.");
        valid = false;
      } else {
        markValid(senha);
      }

      if (!valid) {
        showAlert(loginAlert, "danger", "Revise os campos destacados antes de continuar.");
        return;
      }

      localStorage.setItem("poliesporteUserName", "cliente");
      localStorage.setItem("poliesporteUserEmail", email.value.trim());
      showAlert(loginAlert, "success", "Acesso validado. Redirecionando para sua área.");
      setTimeout(function () {
        window.location.href = "minha-conta.html";
      }, 700);
    });
  }

  var cadastroForm = document.getElementById("cadastroForm");
  if (cadastroForm) {
    var cadastroAlert = document.getElementById("cadastroAlert");
    cadastroForm.addEventListener("submit", function (event) {
      event.preventDefault();

      var nome = document.getElementById("cadastroNome");
      var telefone = document.getElementById("cadastroTelefone");
      var email = document.getElementById("cadastroEmail");
      var senha = document.getElementById("cadastroSenha");
      var confirmarSenha = document.getElementById("confirmarSenha");
      var valid = true;

      if (nome.value.trim().split(/\s+/).length < 2) {
        markInvalid(nome, "Informe nome e sobrenome.");
        valid = false;
      } else {
        markValid(nome);
      }

      if (telefone && onlyNumbers(telefone.value).length < 10) {
        markInvalid(telefone, "Informe um telefone com DDD.");
        valid = false;
      } else if (telefone) {
        markValid(telefone);
      }

      if (!isEmailValid(email)) {
        markInvalid(email, "Informe um e-mail v\u00e1lido.");
        valid = false;
      } else {
        markValid(email);
      }

      if (senha.value.trim().length < 6) {
        markInvalid(senha, "A senha precisa ter pelo menos 6 caracteres.");
        valid = false;
      } else {
        markValid(senha);
      }

      if (confirmarSenha.value !== senha.value || confirmarSenha.value.trim() === "") {
        markInvalid(confirmarSenha, "As senhas precisam ser iguais.");
        valid = false;
      } else {
        markValid(confirmarSenha);
      }

      if (!valid) {
        showAlert(cadastroAlert, "danger", "Revise os campos destacados antes de criar o cadastro.");
        return;
      }

      localStorage.setItem("poliesporteUserName", nome.value.trim().split(/\s+/)[0]);
      localStorage.setItem("poliesporteUserEmail", email.value.trim());
      showAlert(cadastroAlert, "success", "Cadastro validado. Redirecionando para sua área.");
      setTimeout(function () {
        window.location.href = "minha-conta.html";
      }, 700);
    });
  }

  var accountName = document.getElementById("accountName");
  if (accountName) {
    accountName.textContent = localStorage.getItem("poliesporteUserName") || "visitante";
  }

  var accountEmail = document.getElementById("accountEmail");
  if (accountEmail) {
    accountEmail.textContent = localStorage.getItem("poliesporteUserEmail") || "nome@email.com";
  }
})();
