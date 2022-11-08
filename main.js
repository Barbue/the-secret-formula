
//Part 1

let alertForm = document.querySelector('#alertForm');

let alertInput = document.querySelector('#alertInput');


alertForm.addEventListener('submit',function(event){
    event.preventDefault();
    alert(alertInput.value);
    alertInput.value = '';
})

// Part 2

let sandwichForm = document.querySelector('#sandwichForm');

let ingredients = document.querySelectorAll('#sandwichForm .ingredients');

for(let item of ingredients){
    console.log(item.id);
}

sandwichForm.addEventListener('submit',function(event){
    event.preventDefault();
    let newStr = '';
    for(let i = 0;i < ingredients.length;i++){
        if(ingredients[i].checked === true){
            newStr += `${ingredients[i].id}, `;
        }

    }
    console.log(newStr);

    alert(`Your sandwich contains: ${newStr}`)

})


// Part 3 

let haircutForm = document.querySelector('#haircutForm');

let haircutDate = document.querySelector('#date');

let barber = document.querySelector('#barber');

let lengthHairShort = document.querySelector('#short');
let lengthHairLong = document.querySelector('#long');



haircutForm.addEventListener('submit', function(event){ 
    event.preventDefault();
    let newHair = '';
   
        if(lengthHairShort.checked === true){
            newHair = 'short';
            
        }else if(lengthHairLong.checked === true){
            newHair = 'long';
        }
       
alert(`Haircut scheduled for ${haircutDate.value}  with  ${barber.value} for ${newHair} hair.`)

  })


// Part 4

let accountForm = document.querySelector('#accountForm');

let userName = document.querySelector('#username');

let email = document.querySelector('#email');

let password = document.querySelector('#password');

let wordPass = document.querySelector('#confirmpassword');

accountForm.addEventListener('submit',function(event){
event.preventDefault();

alert('Username: '+ userName.value + '  Email: '+ email.value)

userName.value = '';
email.value = '';
password.value = '';
wordPass.value = '';


})

