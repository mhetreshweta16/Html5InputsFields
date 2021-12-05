
//UC1
const text=document.querySelector('#text');
const textError=document.querySelector('.text-error');
text.addEventListener('input',function()
{
     let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$');
     if(nameRegex.test(text.value))
     {  
         textError.textContent=" ";
     }
     else
     {
         textError.textContent="name is incorrect";

     }


});

//UC2
const text1=document.querySelector('#email');
const textError1=document.querySelector('.text-error1');
text1.addEventListener('input',function()
{
     let nameRegex=RegExp('^[a-z]{3}[.][a-z]*[@]{1}[bl]{2}[.]{1}[co]{2}[.]{1}[a-z]*$');
     if(nameRegex.test(text1.value))
     {  
         textError1.textContent=" ";
     }
     else
     {
         textError1.textContent="incorrect email";

     }


});

const salary=document.querySelector('#salary');
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function()
{
     output.textContent=salary.value;

});