const rows = document.querySelectorAll('.row');
const colors = ['#FF7F7F', '#FFBF7F', '#FFDF7F', '#FFFF7F', '#BFFF7F'];

const onDragOver = (event) => {
  event.preventDefault();
}

const onDrop = (event) => {
  event.preventDefault();
  const draggedCardID = event.dataTransfer.getData('id');
  console.log(event.dataTransfer.getData('id'));
  const draggedCard = document.getElementById(draggedCardID);
  event.target.appendChild(draggedCard);
}

rows.forEach((row, index) => {
  const label = row.querySelector('.label');
  label.style.backgroundColor = colors[index];
  row.ondragover = onDragOver;
  row.ondrop = onDrop;
})