function design() {
  document.querySelector('.div5i-js1').addEventListener('pointerenter', ()=>{
    document.querySelector('.img1').style.setProperty('background-color', '#fec016');
  })
  document.querySelector('.div5i-js1').addEventListener('pointerleave', ()=>{
    document.querySelector('.img1').style.setProperty('background-color', ' #353434');
  })
  
  document.querySelector('.div5i-js2').addEventListener('pointerenter', ()=>{
    document.querySelector('.img2').style.setProperty('background-color', '#fec016');
  })
  document.querySelector('.div5i-js2').addEventListener('pointerleave', ()=>{
    document.querySelector('.img2').style.setProperty('background-color', ' #353434');
  })
  
  document.querySelector('.div5i-js3').addEventListener('pointerenter', ()=>{
    document.querySelector('.img3').style.setProperty('background-color', '#fec016');
  })
  document.querySelector('.div5i-js3').addEventListener('pointerleave', ()=>{
    document.querySelector('.img3').style.setProperty('background-color', ' #353434');
  })
  
  document.querySelector('.div5i-js4').addEventListener('pointerenter', ()=>{
    document.querySelector('.img4').style.setProperty('background-color', '#fec016');
  })
  document.querySelector('.div5i-js4').addEventListener('pointerleave', ()=>{
    document.querySelector('.img4').style.setProperty('background-color', ' #353434');
  })
  document.querySelector('.div6iibutton').addEventListener('pointerenter',()=>{
    document.querySelector('.buttona').style.color=" #353434";
  })
  document.querySelector('.div6iibutton').addEventListener('pointerleave',()=>{
    document.querySelector('.buttona').style.color="white";
  })
  document.querySelector('.excellent').
  addEventListener('click', ()=>{
    document.querySelector('#excellent').click();
  })
  document.querySelector('.good').
  addEventListener('click', ()=>{
    document.querySelector('#good').click();
  })
  document.querySelector('.bad').
  addEventListener('click', ()=>{
    document.querySelector('#bad').click();
  })
  document.querySelector('.flex').addEventListener("click", ()=>{
    document.querySelector(".head2").style.display = "flex";
    document.querySelector(".head3-js1").style.display = "flex";
    document.querySelector(".head3-js2").style.display = "flex";
    document.querySelector(".head3-js3").style.display = "flex";
    document.querySelector(".head3-js4").style.display = "flex";
    document.querySelector(".flex").style.display = "none";
    document.querySelector(".flex1").style.display = "flex";
    document.querySelector(".div2").style.display = "none";
  })
  document.querySelector(".flex1").addEventListener("click", ()=>{
    document.querySelector(".head2").style.display = "none";
    document.querySelector(".head3-js1").style.display = "none";
    document.querySelector(".head3-js2").style.display = "none";
    document.querySelector(".head3-js3").style.display = "none";
    document.querySelector(".head3-js4").style.display = "none";
    document.querySelector(".flex1").style.display = "none";
    document.querySelector(".flex").style.display = "flex";
    document.querySelector(".div2").style.display = "block";
  })

}


let cart = JSON.parse(localStorage.getItem('cart'));

 if(!cart){
  
  cart = [{
  name: 'Onyeno Ikechukwu',
  remark: 'EXCELLENT',
  comment: 'The best site programmer i have ever seen'
},
{
  name: 'Philip',
  remark: 'GOOD',
  comment: 'very good guy'
},
{
  name: 'Abraham',
  remark: ' EXCELLENT',
  comment: 'All the project i gave given him was delivered before time'
}]

}


 let currentPage = 0;
 let itemsPage = 3;

function showItems(cart){
  let Html = '';
  let start = currentPage * itemsPage;
  let end = start + itemsPage;
  cart.slice(start, end).forEach((cart)=>{
    Html += `
    <div class="div8ii">
      <div class="div8name"><h2>${cart.name}</h2></div>
      <div class="div8remark2">${cart.remark}</div>
      <div class="div8start"><h1>"</h1></div>
      <div class="div8para" >${cart.comment}</div>
    </div>
  `
  
  })
 
  
  document.querySelector('.div8').innerHTML = Html;
 }

document.querySelector('.prev').addEventListener('click',()=>{
  if ((currentPage + 1) * itemsPage < cart.length){
    currentPage++;
    showItems(cart);
  }
})

document.querySelector('.next').addEventListener('click',()=>{
  if (currentPage > 0){
    currentPage--;
    showItems(cart);
  }
})


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

    cart.push(
      {
        name: `${name.value}`,
        remark: `${radio[0].value}`,
        comment: `${text.value}`
      }
    )
  }
 
  localStorage.setItem('cart', JSON.stringify(cart));
  showItems(cart);
  function clearInput() {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
      inputs[1].value="";
      
    }
  }
})




design();
showItems(cart);

