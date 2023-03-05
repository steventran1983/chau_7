import ProductRow from "../components/ProductRow.js";

function OrderPage({ products }) {
  return (
    <>
      <h2>Order</h2>
      <article>
        <p>Place your order here</p>
      </article>
      <p>Please select the quantity (max 10).</p>
      <table id="table">
        <caption>Products</caption>
        <thead>
          <tr>
            <th>Item, company</th>
            <th>Price</th>
            <th>Choose Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map((currentItem, i) => (
            <ProductRow item={currentItem} key={i} />
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
export default OrderPage;
