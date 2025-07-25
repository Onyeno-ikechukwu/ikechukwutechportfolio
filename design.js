
export function design() {
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
  })
  document.querySelector(".flex1").addEventListener("click", ()=>{
    document.querySelector(".head2").style.display = "none";
    document.querySelector(".head3-js1").style.display = "none";
    document.querySelector(".head3-js2").style.display = "none";
    document.querySelector(".head3-js3").style.display = "none";
    document.querySelector(".head3-js4").style.display = "none";
    document.querySelector(".flex1").style.display = "none";
    document.querySelector(".flex").style.display = "flex";
  })

}


