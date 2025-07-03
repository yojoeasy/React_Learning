const fruits = ["Apple", "Banana", "Mango"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

const products = [
  { id: 1, name: "Cake", price: 300 },
  { id: 2, name: "Donut", price: 100 },
  { id: 3, name: "Brownie", price: 200 },
];

function ProductList() {
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          {item.name} - ₹{item.price}
        </li>
      ))}
    </ul>
  );
}


function Product({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>₹{price}</p>
    </div>
  );
}

function ProductList1() {
  const items = [
    { id: 1, name: "Cake", price: 300 },
    { id: 2, name: "Donut", price: 100 },
  ];

  return (
    <>
      {items.map((item) => (
        <Product key={item.id} name={item.name} price={item.price} />
      ))}
    </>
  );
}


export{FruitList, ProductList, ProductList1};