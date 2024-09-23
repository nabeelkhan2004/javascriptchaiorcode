const buttons = document.querySelectorAll('.button');

// console.log(buttons); //NodeList {0: {...}, 1: {...}, 2: {...}, 3: {...},}

/*NodeList can contain any type of DOM node (e.g., element, text, comment), while HTMLCollection only contains element nodes. Additionally, NodeList can be either static or live, but HTMLCollection is always live. NodeList supports iteration with forEach(), while HTMLCollection requires conversion to an array for iteration.*/

buttons.forEach((val) => {
  val.addEventListener('click', () => {
    document.body.setAttribute(
      'style',
      `background-color : ${val.getAttribute('id')}`
    );
  });
});
