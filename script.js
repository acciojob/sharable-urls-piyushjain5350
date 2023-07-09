const button = document.getElementById("button");

button.addEventListener("click",(e)=>{
	const form =document.getElementById("form");
	e.preventDefault();
	const h3 =document.getElementById("url");
	h3.innerHTML="https://localhost:8080/";
	const name=document.getElementById("name").value;
	const year=document.getElementById("year").value;

	if(name!=""&&year!=""){
		h3.innerHTML+=`?name=${name}&year=${year}`;
	}
	else if(name==""){
		h3.innerHTML+=`?year=${year}`
	}
    else{  h3.innerHTML+=`?name=${name}`

    }
    form.reset();
});

function fetchUrl(){
	
}