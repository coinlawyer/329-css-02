const clock = document.querySelector('.timestamp');
setInterval(
() => clock.innerText = (new Date()).toLocaleTimeString(), 1000);

document.querySelector('.fetch-html').addEventListener('click', getDataByFetch);
function getDataByFetch (){

   fetch ('client-data.json')
      .then (response => response.json())
      .then (clientData => {
   document.querySelector('.client-name').innerText = clientData.name;
   document.querySelector('.year-amount').innerText = clientData.year[2019];
        });
}

const sortToSmaller = document.querySelector('.price-to-small');
const sortToLarger = document.querySelector('.price-to-large');
const sortByName = document.querySelector('.by-name');

sortToSmaller.addEventListener('change', sortProducts);
sortToLarger.addEventListener('change', sortProducts);
sortByName.addEventListener('change', sortProducts);

function sortProducts (){
   fetch('products.json')
   .then(response => {
      return response.json()
      .then (data => {
         for(i=0; i<sort.length; i++){
            if (select.onchange.value === sortToSmaller) {
               data.sort((a, b) => a.price - b.price)
            }
               else if (select.onchange.value === sortToLarger) {
                  data.sort((a, b) => b.price - a.price)
               }
               else {
                  data.name.sort();
               } 
         }
      })
   })  
}
/* or use this function
function getSelectedItem (selectObject) {
   const x = selectObject.value;
   return document.getElementsByClassName(".sortoptions").innerHTML;*/


function createNode(element) {
   return document.createElement(element);
}

function append(parent, el) {
 return parent.appendChild(el);
}

const ul = document.querySelector('.team');
const url = 'https://randomuser.me/api/?results=10';
document.querySelector('.fetch-team').addEventListener('click', fetchTeam);
function fetchTeam (){

fetch(url)
.then((response) => response.json())
.then(data => {
 let team = data.results;
 return team.map(function(teamMember) {
   let li = createNode('li'),
       img = createNode('img'),
       span = createNode('span');
   img.src = teamMember.picture.medium;
   span.innerHTML = `${teamMember.name.first} ${teamMember.name.last}`;
   append(li, img);
   append(li, span);
   append(ul, li);
 })
})
.catch =(error) =>
 console.log(JSON.stringify(error));
document.querySelector('.fetch-team').removeEventListener('click', fetchTeam);
}

const cart = new Cart($('#cartModal'));
const productList = new ProductList(
  'products.json',
  $('.products-container'),
  cart
);