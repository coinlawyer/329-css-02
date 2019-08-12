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

function createNode(element) {
   return document.createElement(element);
}

function append(parent, el) {
 return parent.appendChild(el);
}

const ul = document.querySelector('.team');
const url = 'https://randomuser.me/api/?results=5';
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
}   
