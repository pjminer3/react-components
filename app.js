var Grocerylist = () => (
<ul>
  <GroceryListItem items={['Bread']} />
  <GroceryListItem items={['Water']} />
  <GroceryListItem items={['Am I doing this?!']} />
</ul>
);

// var BreadComponent = () => (
//   <li>Bread</li>
// )

// var WaterComponent = () => (
//   <li>Water</li>
// )

var GroceryListItem = (props) => (
  <li>{props.items[0]}</li>
);

ReactDOM.render(<Grocerylist />, document.getElementById('app'));