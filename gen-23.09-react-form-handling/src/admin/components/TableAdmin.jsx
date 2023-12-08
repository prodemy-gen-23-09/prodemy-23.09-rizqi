/* eslint-disable react/prop-types */

function TableAdmin(props) {
  return (
    <>
      <table className="table-fixed w-full">
        <thead className="bg-color_home h-16">
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Thumbnail</th>
            <th>Category</th>
            <th>Desc</th>
            <th>Release_Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>
              <div className="flex items-center justify-center gap-6">
                <img src={props.image} width={120} />
              </div>
            </td>
            <td>{props.price}</td>
            <td>{props.quantity}</td>
            <td>{props.subtotal}</td>
            <td>{props.title}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default TableAdmin;
