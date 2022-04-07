const myModal= new boostrap.Modal("#register-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");


checklogged();
//Logar sistema
document.getElementById("login-form").addEventListener("submit",function(e){
    e.preventDefault();

    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if(account){
        alert("Verifique o usuario e a senha");
        return;
    }

    if(account){
        if(account.password !== password){
            alert("Verifique o usuario e a senha");
            return;
        }

        saveSession(email,checkSession);

        window.location.href = "home.html";
    }

    
});


//Criar conta
document.getElementById("create-form").addEventListener("submit", function(e){
    
    e.preventDefault();
   
   const email=document.getElementById("email-create-input").value;
   const password=document.getElementById("password-create-input").value;

   if(email.length <5){
       alert("Preencha o campo com um email valido.");
       return
   }
   if(password < 4){
       alert("Preencha a senha com no minimo 4 digitos.");
   }

   myModal.hide();

   saveAccount({
       login: email,
       password: password,
       transaction: []
   });

   alert("Conta criada com sucesso");

})
function checklogged(){
    if(session){
        sessionStorage.setItem("logged", session);
        logged = session;
    }
    if(logged){
        saveSession(logged,session);

        window.location.href = "home.html";
    }
}


function saveAccount(data){
    localStorage.setItem(data.login,JSON.stringify(data));
}

function saveSession(data,saveSession){
    if(saveSession){
        localStorage.setItem("session",data);
    }
    sessionStorage.setItem("logged",data);

}

function getAccount(key){
const account = localStorage.getItem(key);

if(account){
    return JSON.parse(account);
}
    return"";
}

    

