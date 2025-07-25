import { file  } from "cart.js";

export let currentPage = 0;
export let itemsPage = 3;



export function showItems(file){
  let Html = '';
  let start = currentPage * itemsPage;
  let end = start + itemsPage;
  file.slice(start, end).forEach((file)=>{
    Html += `
    <div class="div8ii">
      <div class="div8name"><h2>${file.name}</h2></div>
      <div class="div8remark2">${file.remark}</div>
      <div class="div8start"><h1>"</h1></div>
      <div class="div8para" >${file.comment}</div>
    </div>
  `
  
  })
 
  
  document.querySelector('.div8').innerHTML = Html;
}



document.querySelector('#submit').addEventListener('click', ()=>{
  const name = document.querySelector('#div12i');
  const email = document.querySelector('#div12ii');
  const text = document.querySelector('#div12iii');
  const excellent = document.querySelector('#excellent');
  const good = document.querySelector('#good');
  const bad = document.querySelector('#bad');
  const radio = document.querySelectorAll(`input[type="radio"]:checked`);

  if (name.value.trim() === "") {
    document.querySelector('.one').innerHTML = 'please fill your name';
  } else if (name.value.trim().length < 4) {
    document.querySelector('.one').innerHTML = 'please fill a valied name';
  } else if (email.value.trim() === ""){
    document.querySelector('.two').innerHTML = 'please fill your email';
  } else if (!email.value.trim().endsWith('@gmail.com') & !email.value.trim().startsWith('+') & !email.value.trim().startsWith('0')){
    document.querySelector('.two').innerHTML = 'please fill valid email or phone number';
  } else if (text.value.trim() === ""){
    document.querySelector('.three').innerHTML = 'please drop your review here';
  } else if (!good.checked & !bad.checked & !excellent.checked) {
    document.querySelector('.four').innerHTML = 'please rate us';
  }else {

    file.push(
      {
        name: `${name.value}`,
        remark: `${radio[0].value}`,
        comment: `${text.value}`
      }
    )
  }
 
  localStorage.setItem('file', JSON.stringify(file));
  showItems(file);
  
})

document.querySelector('.prev').addEventListener('click',()=>{
  if ((currentPage + 1) * itemsPage < file.length){
    currentPage++;
    showItems(file);
  }
})

document.querySelector('.next').addEventListener('click',()=>{
  if (currentPage > 0){
    currentPage--;
    showItems(file);
  }
})