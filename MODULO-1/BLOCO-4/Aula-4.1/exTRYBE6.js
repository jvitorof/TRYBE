let piece = "rook"
let pieces = ['king', 'rook', 'bishop', 'queen', 'knight', 'pawn'];
let movements = ['adjacent', 'in line h or v', 'diagonal', 'any line direction', 'a three squares l', 'one square ahead'];
position=pieces.indexOf(piece);
console.log(`${piece} --> ${movements[position]}`);