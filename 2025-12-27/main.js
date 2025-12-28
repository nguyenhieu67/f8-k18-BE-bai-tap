//Phần 1: Khai báo biến & console.log (cơ bản)
//1. Khởi tạo 3 biến:
const name = "Nguyen Duc Hieu";
const age = 25;
const isStudent = true;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Is student: ${isStudent}`);

// 2. Khởi tạo và thay đổi giá trị
let a = 5;
let b = 10;
a = 8;
b = 13;

console.log(a, b);

// 🟢 Phần 2: const / let / var
// const với let khác nhau ở điểm:
//     - let có thể gắn lại giá trị.
//     _ const là hằng số và k thể gán lại giá trị. Nếu cố tình gắn lại giá trị thì sẽ bị lỗi.

// Đoạn code sau đúng hay sai? Giải thích:
// const x = 10
// x = 20
// - Đoạn code trên sai vì: const là hằng số và k thể gán lại giá trị.

// 🟡 Phần 3: Data type
// "100"    String
// 100      Number
// true     Boolean
// [1, 2, 3]    Array -> typeof ->> Object
// { name: "An"; age: 20}   Object
// null     Object
// undefined    Undefined

const student = {
    name: "Nguyen Duc Hieu",
    age: 25,
    scores: [1, 2, 3],
};

console.log(student);

// 🟡 Phần 4: Ép kiểu (Type casting)
let str = "1000";
console.log(Number(str));
let number = 1000;
console.log(String(number));
let bool = true;
console.log(String(bool));

// 🔵 Phần 5: Truthy / Falsy (tư duy logic)
// Boolean(0)           false
// Boolean(1)           true
// Boolean("")          false
// Boolean("hello")     true
// Boolean(null)        false
// Boolean([])          true

// 🔵 Phần 6: Array & bộ nhớ (liên hệ sơ đồ RAM)
const numbers = [4, 3, 1, 5, 1];
console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);

// Vì sao khi gán : const a = numbers lại liên quan đến cùng vùng nhớ
// -> Trong JS Array là kiểu tham chiếu (reference tpye) nên a và numbers đùng chung vùng nhớ
// Biến k chứa dự liệu mảng mà biến chỉ chứa địa chỉ vùng nhớ trỏ tơi mảng trong RAM
//
