function myScope() {
  const form = document.querySelector(".form"); // selecionando o form pela classe
  const resultForm = document.querySelector(".result-form");
  const person = [];

  function formEventReceiver(event) {
    event.preventDefault();
    

    const name = form.querySelector("#name");
    const lastname = form.querySelector("#lastname");
    const weight = form.querySelector("#weight");
    const height = form.querySelector("#height");

    console.log(name)
    person.push({
      name: name.value,
      lastname: lastname.value,
      weight: weight.value,
      height: height.value,
    });

    resultForm.innerHTML += `<p>${name.value} ${lastname.value}, Peso: ${weight.value}, Altura: ${height.value}`;
}

  form.addEventListener("submit", formEventReceiver);
}

myScope();
