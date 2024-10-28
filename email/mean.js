let frm = document.forms[0]

let tkn = sessionStorage.getItem(`token`)
if (tkn){
  frm.style.display = `none`
  let sendToken =sessionStorage.getItem(`token-type`)+ `` + tkn
  fetch(`https://bizi.uz/api/products`, {
    method:`Get`,
    headers:{
      "Content-type": "application/json",
      "Authorization": sendToken
    }
  }).then(data=>data.json())
  .then(json=>console.log(json))
}else{
  frm.addEventListener(`submit`, (e) =>{
    e.preventDefault()
    let sendData ={
      email:frm.email.value,
      password: frm.password.value
    }

    fetch(`https://bizi.uz/api/login`,{
      method:`POST`,
       headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify(sendData)
    }).then(data => data.json()).then(json => {
      sessionStorage.setItem(`token`, json.access_token)
      sessionStorage.setItem(`token-type`, json.token_type)
      sessionStorage.setItem(`exp_time`, json.expires_in)
      

      console.log(json)

    })


  })
}


// "email": "vodimaxjon@gmail.com",
//"password":"123" 