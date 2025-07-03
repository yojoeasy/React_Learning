function Info(props){
    return(
        <>
            <pre>
                My name is {props.name}.
                I am {props.age} years old.
                I live in {props.place}.
            </pre>
        </>
    )
}

// Destructuring Props (Preferred way)
function Info1({name, age, place}){
    return(
        <>
            <pre>
                My name is {name}.
                I am {age} years old.
                I live in {place}.
            </pre>
        </>
    )
}

function ProductCard({ name, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
}

export {Info, Info1, ProductCard};

// What is Prop Drilling?
// When you pass props through many nested components just to reach a deeply nested child.

function GrandParent() {
  return <Parent name="Yogesh" />;
}

function Parent(props) {
  return <Child name={props.name} />;
}

function Child(props) {
  return <h2>Hello, {props.name}!</h2>;
}

// Solutions to Prop Drilling:
// Context API (you'll learn this soon)

// Redux or other state managers

// Custom Hooks with shared logic