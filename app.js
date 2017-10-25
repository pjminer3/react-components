var Grocerylist = (props) => (
<ul>
  <GroceryListItem items={props.groceryItems[0]} />
  <GroceryListItem items={props.groceryItems[1]} />
  <GroceryListItem items={props.groceryItems[2]} />
  <GroceryListItem items={props.groceryItems[3]} />
</ul>
);

// var BreadComponent = () => (
//   <li>Bread</li>
// )

// var WaterComponent = () => (
//   <li>Water</li>
// )

var GroceryListItem = (props) => (
  <li>{props.items}</li>
);

var groceryItems = ['Water', 'Bread', 'Milk', 'Cookies'];

ReactDOM.render(<Grocerylist groceryItems={groceryItems} />, document.getElementById('app'));




// ----------------- ES5 SHOWS UP ONLINE -----------------------
// 'use strict';

// var Grocerylist = function Grocerylist(props) {
//   return React.createElement(
//     'ul',
//     null,
//     React.createElement(GroceryListItem, { items: props.groceryItems[0] }),
//     React.createElement(GroceryListItem, { items: props.groceryItems[1] }),
//     React.createElement(GroceryListItem, { items: props.groceryItems[2] }),
//     React.createElement(GroceryListItem, { items: props.groceryItems[3] })
//   );
// };

// // var BreadComponent = () => (
// //   <li>Bread</li>
// // )

// // var WaterComponent = () => (
// //   <li>Water</li>
// // )

// var GroceryListItem = function GroceryListItem(props) {
//   return React.createElement(
//     'li',
//     null,
//     props.items
//   );
// };

// var groceryItems = ['Water', 'Bread', 'Milk', 'Cookies'];

// ReactDOM.render(React.createElement(Grocerylist, { groceryItems: groceryItems }), document.getElementById('app'));