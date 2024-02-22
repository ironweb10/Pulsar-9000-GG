const cards = document.querySelectorAll('.bank-img');

const onDragStart = (event) => {
  event.dataTransfer.setData('id', event.target.id);
  console.log(`${event.dataTransfer.getData('id')}`);
}

cards.forEach((card) => {
  card.ondragstart = onDragStart;
})