let field;
let output;

function setup() {
  noCanvas();
  field = createInput();
  output = select("#output");

  field.changed(receiveChange);
  field.input(receiveInput);
}

function receiveChange()  {
  createP(field.value());
}

function receiveInput()  {
  output.html(field.value());
}