function f() {
    let a = document.getElementById('studentName')
    let b = document.getElementById('fatherName')
    let c = document.getElementById('email')
    let d = document.getElementById('phone')
    let e = document.getElementById('password')
    if(a.value==''||b.value==''||c.value==''||d.value==''||e.value==''){
    alert("please fill all input feilds !")
    return
    }

    let obj = {
        names: a.value,
        fathername: b.value,
        Email: c.value,
        phone: d.value,
        password:e.value
    };

    localStorage.setItem("formData", JSON.stringify(obj));
    console.log("Data saved in localStorage:", obj);


ab=document.getElementById('db')
ab.innerHTML=`<button id="lo">login</button>`
document.getElementById("lo").addEventListener("click", function () {
  window.location.href = "indexx.html"; 
});

    a.value=""
    b.value=""
    c.value=""
    d.value=""
    e.value=""
    
}
function Login() {
  let name = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (name === "" || pass === "") {
    alert("Please enter both name and password.");
    return;
  }

  let data = JSON.parse(localStorage.getItem("formData"));

  if (data && name === data.names && pass === data.password) {
  window.location.href = "indexxx.html";
  } else {
    alert("Wrong name or password!");
  }
}


textav=document.getElementById('text')
textav.innerHTML=`<b>${formData.names}</b>
            <p> efuew gyfruey</p>`



