let oneVegan = true;
let twoVegan = true;

if (oneVegan && twoVegan) {
  console.log('Vegan Menu');
} else if (oneVegan || twoVegan) {
  console.log('Offer');
} else {
  console.log('All');
}
