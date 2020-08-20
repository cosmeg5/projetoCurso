const user = [{
    id: 1,
    email: "",
    password: "",
    admin: "",
}];

form.addEventListener('submit', function create(e) {

    event.preventDefault();
    let $id = user.length;
    let $email = document.querySelector('#email').value;
    let $password = document.querySelector('#password').value;
    let $admin = document.querySelector('#admin').value;


    user.push({
        id: $id,
        email: $email,
        password: $password,
        admin: $admin,
    });

    var valores = Object.entries(user);

    for(let index = 0; index < user.length; index++) {
        if(valores.length -1 == index) {
            var tabela = document.querySelector(".texto")
            var userId = user[index].id;
            var userEmail = user[index].email;
            var userAdmin = user[index].admin;
        
            var newUser = `<tr class="Usuarios"> 
                    <td class="idTb">${userId}</td>`+
                    `<td class="emailTd">${userEmail}</td>`+ `<td class="adminTd">${userAdmin}</td></tr>`
                ;            
    
                tabela.innerHTML += newUser;
        }
        if(valores.length -1 != index) {
            var tabela = document.querySelector(".texto");
        }
    }    
    return create;
});


btnBusca.addEventListener('click', function findByPk() {
    let $resultadobusca = document.querySelector('#resultadoBusca')
    $resultadobusca.innerHtml = "";

    let busca =  document.querySelector("#txtBusca").value;
    
    const buscaUsers = user.find(users => users.email == busca || users.id == busca);

    if(buscaUsers) {     
        $resultadobusca.innerHTML = `Usuário com ID ou E-mail Cadastrado`;
    }else {
        $resultadobusca.innerHTML = "Não encontrado";
    }

});

del.addEventListener('click', function destroy() {
    
    let busca =  document.querySelector("#txtBusca").value;
     
    if(busca) {
         const resultado = user.find(users => users.email == busca || users.id == busca);

         const deletado = resultado.id -1
         console.log("1 " + deletado + user)
         user.splice(deletado, 1)

         var tabela = document.querySelector(".texto")
         tabelaUp = tabela.innerHTML;
            tabela.innerHTML = 'Um item da tabela foi excluído';
    }
}); 

