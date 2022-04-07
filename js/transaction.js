const myModal= new boostrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = {
    transaction:[]
};

document.getElementById("button-logout").addEventListener("click",logout);

function logout(){
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href ="index.html";

}
document.getElementById("transaction-form").addEventListener("submit",function(e){
    e.preventDefault();

    const value = document.getElementById("value-input").value;
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transaction.unshift({
        value: value, type:type, description: description,date: date


    })
    saveData(data);
e.target.reset();
myModal.hide();
getTransaction();

alert("lançamento adicionado com sucesso");
})

checklogged();

function checklogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(!logged){

        window.location.href = "index.html";
        return;
    }


    const dataUser = localStorage.getItem(logged)
    if(dataUser){
        data = JSON.parse(dataUser);
    }
    getTransaction();
    
    function logout(){
        sessionStorage.removeItem("logged");
        localStorage.removeItem("session");

        window.location.href ="index.html";

    }
}function getTransaction(){
    const transacton =data.transaction;
    let transactionHtml = ``;
        if(transacton.length){
       transacton.forEach((item)=>{
           let type  = "Entrada";
           if(item.type==="2"){
               type = "Saida";
           }
           transactionHtml += `
           <tr>
                                        <th scope="row">${item.date}</th>
                                        <td>${item.value.toFixed(2)}</td>
                                        <td>${type}</td>
                                        <td>${item.description}</td>
                                      </tr>
           
           `
       })
    }tra
    document.getElementById("transacton-list").innerHTML = transactionHtml;
}



function saveData(data){
    localStorage.setItem(data.login,JSON.stringify(data));}