//Basic Function
function decl() {
    console.log(arguments[1])
}
decl("herry", "23");

//Date
function hitrange(start, end) {
    const a = Date.parse(`2020-01-01T${start}`);
    const b = Date.parse(`2020-01-01T${end}`);
    console.log(`${(b - a) / 1000 / 60} second`);
}
hitrange("12:00:00", "14:00:00");