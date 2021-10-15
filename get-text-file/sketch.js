let text;
let btn;

function loadText()  {
    loadStrings("../_blob/example.txt", textLoaded);
}

function textLoaded(data)  {
    text = data;
    createP(join(text, "<br/>"));
}

function fileSelected(file)  {
    createP(file.name + " " + file.size + " " + file.type);
    if(file.type == "text")  {
        createP(file.data);
    }  else  {
        createP("I need a text file");
    }
}

function setup()  {
    noCanvas();

    createFileInput(fileSelected);
    btn = select("#loadbtn");
    btn.mousePressed(loadText);
}