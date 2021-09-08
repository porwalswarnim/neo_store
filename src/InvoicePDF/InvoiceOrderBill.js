import React from "react";
import { render } from "react-dom";
import { Button, Col, Divider, Row, Table } from "antd";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { ContactSupportOutlined } from "@material-ui/icons";
const InvoiceShow = () => {
  const allOrders = useSelector((state) => state.allOrders);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const { id } = useParams();
  const allOrder = allOrders.filter((ele) => ele._id === id)[0];
  console.log("allOrder", allOrder);
  const totalPrice = allOrder?.items.reduce(
    (total, currentValue) => (total = total + currentValue?.productId?.price),
    0
  );
  const totalQuantity = allOrder?.items.reduce(
    (total, currentValue) => (total = total + currentValue.quantity),
    0
  );

  const a = allOrder.items.map((ele, i) => ({
    id: 1,
    name: ele.productId.name,
    description: ele.productId.description,
    price: ele.productId.price,
    quantity: ele.quantity,
  }));

  return (
    <div>
      <div
        style={{ padding: 10, margin: "10px 100px", border: "5px solid gray" }}
      >
        <Row>
          <Col>
            <Divider>Invoice Bill</Divider>
          </Col>
        </Row>

        <Row gutter={24} style={{ marginTop: 32 }}>
          <Col span={8}>
            <h1>Neosoft Technologies</h1>
            <div>Unit No 501, Sigma IT Park, Plot No R-203,204,</div>
            <div>Midc TTC Industrial Area.</div>
            <div>Navi Mumbai,</div>
            <div>Maharashtra - 400701</div>
          </Col>
          <Col span={8} offset={8}>
            <table>
              <tr>
                <th>Invoice # :</th>
                <td>{allOrder._id}</td>
              </tr>
              <tr>
                <th>Invoice Date :</th>
                <td>{allOrder.updatedAt}</td>
              </tr>
              <tr>
                <th>Due Date :</th>
                <td>{allOrder.createdAt}</td>
              </tr>
            </table>
          </Col>
        </Row>

        <Row style={{ marginTop: 48 }}>
          <div>
            Bill To: <strong>Strides Shasun Ltd</strong>
          </div>
          <div>Bannerghatt Road,</div>
          <div>Bangalore - 560076</div>
        </Row>
        <Row style={{ marginTop: 48 }}>
          <Table dataSource={a}>
            <Table.Column title="Items" dataIndex="name" />
            <Table.Column title="Description" dataIndex="description" />
            <Table.Column title="Quantity" dataIndex="quantity" />
            <Table.Column title="Price" dataIndex="price" />
          </Table>
        </Row>
        <Row style={{ marginTop: 48 }}>
          <Col span={8} offset={16}>
            <table>
              <tr>
                <th>Gross Total :</th>
                <td>Rs. {totalPrice}</td>
              </tr>
              <tr>
                <th>GST @5% :</th>
                <td>Rs. {(totalPrice * 5) / 100}</td>
              </tr>
              <tr>
                <th>Net Total :</th>
                <td>Rs. {totalPrice + (totalPrice * 5) / 100}</td>
              </tr>
            </table>
          </Col>
        </Row>

        <Row>
          {" "}
          <h1 style={{ marginTop: 48, marginLeft: "500px" }}>
            Thankyou for Your Business
          </h1>
        </Row>
      </div>
    </div>
  );
};

export default InvoiceShow;
