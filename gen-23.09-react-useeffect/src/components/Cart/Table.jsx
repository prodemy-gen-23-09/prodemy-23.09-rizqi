/* eslint-disable react/prop-types */
function Table(props) {
  return (
    <>
      <table className="table-fixed w-[1200px]">
        <thead className="bg-color_home h-16">
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>
              <div className="flex items-center justify-center gap-6">
                <img src={props.image} width={120} />
                <p>{props.title}</p>
              </div>
            </td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
            <td>{props.subtotal}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;
