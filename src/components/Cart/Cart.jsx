/* eslint-disable react/prop-types */
const Cart = ({ selectorActor,totalCost,remaining}) => {
  return (
    <div className="">
      <h2 className="text-4xl font-medium">Total Actor: {selectorActor.length}</h2>
      <h5>Remaining: {remaining}</h5>
      <h5>Total Cost: {totalCost}</h5>

      <div className="mt-2">
        {selectorActor.map((selected) => (
          <div key={selected.id} className="flex-none">
            <li>
              {selected.name}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
