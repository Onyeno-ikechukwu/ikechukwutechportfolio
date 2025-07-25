

export let file = JSON.parse(localStorage.getItem('file'));

 if(!file){
  
  file = [{
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
localStorage.setItem('file', JSON.stringify(file));



console.log(file);
