const contrySel = document.querySelector("#countrySelector")

const input = document.querySelector("input")

let country = ""

contrySel.addEventListener("change",(e)=>{
    country = e.target.value
    console.log(country);
    input.value = ""
    input.value = country
    
})