function calculateArea(input) {
    let shape = input[0];
    let area = input[1];

    if (shape === "square") {
        let side = parseFloat(input[1]);
        area = side * side;
    } else if (shape === "rectangle") {
        let length = parseFloat(input[1]);
        let width = parseFloat(input[2]);
        area = length * width;
    } else if (shape === "circle") {
        let radius = parseFloat(input[1]);
        area = Math.PI * radius * radius;
    } else if (shape === "triangle") {
        let base = parseFloat(input[1]);
        let height = parseFloat(input[2]);
        area = 0.5 * base * height;
    } else {
        return "Unknown shape";
    }

    console.log(area.toFixed(3));
}
calculateArea(["triangle","4.5","20"]);

