const pokemonRepository=function(){let t=[];function e(e){"object"==typeof e&&"name"in e&&"detailsUrl"in e?t.push(e):(console.log("pokemon is not correct"),document.alert("pokemon is not correct"))}function n(){return t}function i(t){return fetch(t.detailsUrl).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height,t.weight=e.weight,t.types=e.types,t.abilities=e.abilities}).catch(function(t){console.error(t)})}function o(t){i(t).then(function(){var e;let n,i,o,a,l,s,r,p,c;e=t,n=$(".modal-body"),i=$(".modal-title"),i.empty(),n.empty(),o=$("<h1>"+e.name+"</h1>"),a=$('<img alt="" src="${item.imageUrl}" class="modal-img" style="width:50%">'),a.attr("src",e.imageUrlFront),l=$('<img classs="modal-img" style="width:50%">'),s=$("<p>height: "+e.height+"</p>"),r=$("<p>weight: "+e.weight+"</p>"),p=$("<p>types: "+e.types+"</p>"),c=$("<p>abilities: "+e.abilities+"</p>"),i.append(o),n.append(a),n.append(l),n.append(s),n.append(r),n.append(p),n.append(c)})}return{add:e,getAll:n,addListItem:function(t){let e=document.querySelector(".list-group"),n=document.createElement("li");n.classList.add("group-list-item"),n.classList.add("col-sm-4","col-md-6","col-lg-12");let i=document.createElement("button");i.innerText=t.name,i.classList.add("pokemon-button"),i.setAttribute("data-toggle","modal"),i.setAttribute("data-target","#pokemon-modal"),n.appendChild(i),e.appendChild(n),i.addEventListener("click",function(e){o(t)})},loadList:function(){return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){let n={name:t.name,detailsUrl:t.url};e(n),console.log(n)})}).catch(function(t){console.error(t)})},loadDetails:i,showDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});
