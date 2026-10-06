const draggableItems = Object.values(
  document.getElementsByClassName('draggables')
);

const containers = Object.values(document.getElementsByClassName('containers'));

containers.forEach((container) => {
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    // console.log(e);

    const draggedItem = document.querySelector('.dragging');
    container.appendChild(draggedItem);
  });
});

draggableItems.forEach((item) => {
  item.addEventListener('dragstart', (e) => {
    item.classList.add('dragging');
    console.log('dragStarts');
  });

  item.addEventListener('dragend', (e) => {
    item.classList.remove('dragging');
    console.log('dragend');
  });
});
