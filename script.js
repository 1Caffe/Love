
function goToPage2() {
    var nickname = document.getElementById('nickname').value;
    if(nickname) {
        document.getElementById('page1').style.display = "none";
        document.getElementById('page2').style.display = "flex";
    } else {
        alert("Por favor, insira seu apelido!");
    }
}

function goToPage3() {
    var nickname2 = document.getElementById('nickname2').value;
    if(nickname2) {
        alert("Bem-vindo(a), " + nickname2 + "!");
        // Adicione aqui a lógica para navegar para a próxima etapa
    } else {
        alert("Por favor, insira seu apelido!");
    }
}
