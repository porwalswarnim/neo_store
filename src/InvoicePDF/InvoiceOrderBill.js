import React from "react";
import ReactToPrint from "react-to-print";
import { Col, Divider, Row, Table } from "antd";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import "antd/dist/antd.css";

/**
 * @author Swarnim Porwal
 * @description this method extract the information from order array, put them in to the pdf document
 * @returns JSX for Order Invoice Screen
 */
const mapStateToProps = (state) => {
  return {
    allOrders: state.allOrders,
    addAddress: state.addAddress,
  };
};

class ComponentToPrint extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const allOrder = this.props.allOrders.filter(
      (ele) => ele._id === this.props.id
    )[0];
    const addressId = allOrder.addressId;
    const address = this.props.addAddress.filter(
      (ele) => ele._id === addressId
    )[0];
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
          style={{
            padding: 10,
            margin: "10px 100px",
            border: "5px solid gray",
          }}
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
            <Col span={4} offset={4}>
              <table>
                <tr>
                  <th>Invoice # :</th>
                  <td>{allOrder?.id}</td>
                </tr>
                <tr>
                  <th>Invoice Date :</th>
                  <td>{allOrder?.updatedAt}</td>
                </tr>
                <tr>
                  <th>Due Date :</th>
                  <td>{allOrder?.createdAt}</td>
                </tr>
              </table>
            </Col>
          </Row>

          <div style={{ marginTop: "48px" }}>
            Bill To: <strong>Swarnim Porwal</strong>
          </div>
          <div>Address :</div>
          <div>{address.addressLine}</div>
          <div>
            {address.city} - {address.pincode}
          </div>
          <div>
            {address.state} , {address.country}
          </div>
          <Row style={{ marginTop: 48 }}>
            <Table dataSource={a} pagination={false}>
              <Table.Column title="Items" dataIndex="name" />
              <Table.Column title="Description" dataIndex="description" />
              <Table.Column title="Quantity" dataIndex="quantity" />
              <Table.Column title="Price" dataIndex="price" />
            </Table>
          </Row>
          <div style={{ marginTop: "20px" }}>
            Total Quantity: <strong>{totalQuantity}</strong>
          </div>
          <Row style={{ marginTop: 48 }}>
            <Col span={8} offset={16}>
              <table>
                <tr>
                  <th>Gross Total :</th>
                  <td>Rs. {totalPrice}</td>
                </tr>
                <tr>
                  <th>GST @5% :</th>
                  <td>Rs.{(totalPrice * 5) / 100} </td>
                </tr>
                <tr>
                  <th>Net Total :</th>
                  <td>Rs. {totalPrice + (totalPrice * 5) / 100}</td>
                </tr>
              </table>
            </Col>
            <h1 style={{ marginTop: 48 }}>Thankyou for Your Business</h1>
          </Row>
        </div>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <ComponentToPrint
          ref={(el) => (this.componentRef = el)}
          id={id}
          allOrders={this.props.allOrders}
          addAddress={this.props.addAddress}
        />
        <ReactToPrint
          trigger={() => (
            <Button
              style={{ margin: "30px 0px 10px 15px", fontWeight: "bold" }}
              variant="contained"
              color="primary"
            >
              Download Invoice as PDF
            </Button>
          )}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Example);
