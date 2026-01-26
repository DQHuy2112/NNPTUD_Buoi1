console.log("=== BÀI TẬP XỬ LÝ MẢNG PRODUCT ===\n");

// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}

console.log(" Câu 1: Đã khai báo constructor function Product\n");

// Câu 2: Khởi tạo mảng products gồm ít nhất 5 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
    new Product("P001", "Laptop Dell XPS", 1500, 10, "Electronics", true),
    new Product("P002", "iPhone 15", 999, 5, "Electronics", true),
    new Product("P003", "Tai nghe AirPods", 199, 0, "Accessories", false),
    new Product("P004", "Bàn phím cơ", 150, 8, "Accessories", true),
    new Product("P005", "Chuột không dây", 50, 15, "Accessories", true),
    new Product("P006", "Màn hình 27 inch", 350, 3, "Electronics", true)
];

console.log("Câu 2: Đã khởi tạo mảng products với", products.length, "sản phẩm");
console.log("Danh mục:", [...new Set(products.map(p => p.category))].join(", "), "\n");

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm
const namePriceArray = products.map(product => ({
    name: product.name,
    price: product.price
}));

console.log("Câu 3: Mảng chỉ chứa name và price:");
console.log(JSON.stringify(namePriceArray, null, 2), "\n");

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(product => product.quantity > 0);

console.log(" Câu 4: Các sản phẩm còn hàng trong kho:");
inStockProducts.forEach(p => {
    console.log(`  - ${p.name}: ${p.quantity} sản phẩm`);
});
console.log();

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30 hay không
const hasExpensiveProduct = products.some(product => product.price > 30);

console.log("Câu 5: Có sản phẩm nào có giá trên 30 không?");
console.log("Kết quả:", hasExpensiveProduct ? "Có" : "Không");
if (hasExpensiveProduct) {
    const expensiveProducts = products.filter(p => p.price > 30);
    console.log("Các sản phẩm có giá > 30:", expensiveProducts.map(p => `${p.name} (${p.price})`).join(", "));
}
console.log();

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const accessoriesProducts = products.filter(product => product.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.length > 0 &&
    accessoriesProducts.every(product => product.isAvailable === true);

console.log("Câu 6: Tất cả sản phẩm 'Accessories' có đang được bán không?");
console.log("Kết quả:", allAccessoriesAvailable ? "Có" : "Không");
console.log("Chi tiết các sản phẩm Accessories:");
accessoriesProducts.forEach(p => {
    console.log(`  - ${p.name}: isAvailable = ${p.isAvailable}`);
});
console.log();

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price x quantity
const totalInventoryValue = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
}, 0);

console.log("Câu 7: Tổng giá trị kho hàng");
console.log("Tổng giá trị =", totalInventoryValue.toLocaleString('vi-VN'), "VND");
console.log("Chi tiết từng sản phẩm:");
products.forEach(p => {
    const value = p.price * p.quantity;
    console.log(`  - ${p.name}: ${value.toLocaleString('vi-VN')} VND (${p.price} x ${p.quantity})`);
});
console.log();

// Câu 8: Dùng for...of Duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8: Duyệt mảng bằng for...of:");
for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log();

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("Câu 9: Duyệt object bằng for...in (sản phẩm đầu tiên):");
const firstProduct = products[0];
for (const key in firstProduct) {
    console.log(`  ${key}: ${firstProduct[key]}`);
}
console.log();

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableAndInStock = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);

console.log("Câu 10: Danh sách tên các sản phẩm đang bán và còn hàng:");
availableAndInStock.forEach((name, index) => {
    console.log(`  ${index + 1}. ${name}`);
});
console.log();

