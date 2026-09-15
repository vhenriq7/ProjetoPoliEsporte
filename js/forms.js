(function () {
  function getField(control) {
    return control ? control.closest(".form-field") : null;
  }

  function getFeedback(control) {
    var field = getField(control);
    return field ? field.querySelector(".invalid-feedback") : null;
  }

  function markInvalid(control, message) {
    var feedback = getFeedback(control);
    control.classList.add("is-invalid");
    control.classList.remove("is-valid");
    if (feedback && message) {
      feedback.textContent = message;
    }
    if (feedback) {
      feedback.classList.add("d-block");
    }
  }

  function markValid(control) {
    var feedback = getFeedback(control);
    control.classList.remove("is-invalid");
    control.classList.add("is-valid");
    if (feedback) {
      feedback.classList.remove("d-block");
    }
  }

  function clearField(control) {
    var feedback = getFeedback(control);
    control.classList.remove("is-invalid", "is-valid");
    if (feedback) {
      feedback.classList.remove("d-block");
    }
  }

  function showAlert(alert, type, message) {
    if (!alert) {
      return;
    }
    alert.className = "alert alert-" + type + " form-alert";
    alert.textContent = message;
  }

  function isEmailValid(control) {
    return control.value.trim() !== "" && control.checkValidity();
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

  function setTodayMin(input) {
    if (!input || input.min) {
      return;
    }
    var today = new Date();
    var year = today.getFullYear();
    var month = String(today.getMonth() + 1).padStart(2, "0");
    var day = String(today.getDate()).padStart(2, "0");
    input.min = year + "-" + month + "-" + day;
  }

  function setupAgendaForm() {
    var form = document.getElementById("agendaForm");
    if (!form) {
      return;
    }

    var alert = document.getElementById("agendaAlert");
    var nome = document.getElementById("nome");
    var telefone = document.getElementById("telefone");
    var email = document.getElementById("email");
    var espaco = document.getElementById("espaco");
    var data = document.getElementById("data");
    var hora = document.getElementById("hora");
    var pessoas = document.getElementById("pessoas");

    setTodayMin(data);

    telefone.addEventListener("input", function () {
      telefone.value = formatPhone(telefone.value);
    });

    [nome, telefone, email, espaco, data, hora, pessoas].forEach(function (control) {
      control.addEventListener("input", function () {
        clearField(control);
      });
      control.addEventListener("change", function () {
        clearField(control);
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var valid = true;

      if (nome.value.trim().split(/\s+/).length < 2) {
        markInvalid(nome, "Informe nome e sobrenome.");
        valid = false;
      } else {
        markValid(nome);
      }

      var telefoneNumeros = onlyNumbers(telefone.value);
      if (telefoneNumeros.length < 10 || telefoneNumeros.length > 11) {
        markInvalid(telefone, "Informe um telefone com DDD.");
        valid = false;
      } else {
        markValid(telefone);
      }

      if (!isEmailValid(email)) {
        markInvalid(email, "Informe um e-mail válido.");
        valid = false;
      } else {
        markValid(email);
      }

      if (!espaco.value) {
        markInvalid(espaco, "Escolha um espaço.");
        valid = false;
      } else {
        markValid(espaco);
      }

      if (!data.value) {
        markInvalid(data, "Escolha uma data.");
        valid = false;
      } else if (data.min && data.value < data.min) {
        markInvalid(data, "Escolha uma data atual ou futura.");
        valid = false;
      } else {
        markValid(data);
      }

      if (!hora.value) {
        markInvalid(hora, "Escolha um horário.");
        valid = false;
      } else {
        markValid(hora);
      }

      var quantidadePessoas = Number(pessoas.value);
      if (!pessoas.value || quantidadePessoas < 1 || quantidadePessoas > 60) {
        markInvalid(pessoas, "Informe uma quantidade entre 1 e 60 pessoas.");
        valid = false;
      } else {
        markValid(pessoas);
      }

      if (!valid) {
        showAlert(alert, "danger", "Revise os campos destacados antes de continuar.");
        return;
      }

      showAlert(
        alert,
        "success",
        "Simulação concluída: os dados foram validados no navegador, mas não são enviados ou registrados nesta versão do projeto."
      );
    });
  }

  setupAgendaForm();
})();
