function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  const animal = document.getElementById(data)
  ev.target.appendChild(animal);
  if(animal.dataset.animal === ev.target.dataset.animal) {
    ev.target.style.background =  'green';
    ev.currentTarget.style.background =  'white';
    return
  }
  ev.target.style.background =  'orange';
}