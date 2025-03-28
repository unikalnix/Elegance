import React from "react";
import "./Orders.css";
import { ChevronRight, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/ui/breadcrumb/Breadcrumb";
const Orders = () => {
  const navigate = useNavigate();
  return (
    <div className="orders">
      <h1 className="orders__title">My Orders</h1>
      <Breadcrumb links={['home', 'dashboard', 'orders']}/>
    <div className="orders__table-container">
    <table className="orders__table">
        <thead className="orders__table-head">
          <tr className="orders__table-row">
            <th className="orders__table-header">Order ID</th>
            <th className="orders__table-header">Date</th>
            <th className="orders__table-header">Items</th>
            <th className="orders__table-header">Total</th>
            <th className="orders__table-header">Status</th>
            <th className="orders__table-header">Action</th>
          </tr>
        </thead>
        <tbody className="orders__table-body">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="orders__table-row">
              <td className="orders__table-data orders__table-data-icon">
                <ShoppingCart
                  size={15}
                  stroke="rgba(75, 85, 99, 0.64)"
                  className="orders__icon"
                />{" "}
                #1000{index + 1}
              </td>
              <td className="orders__table-data">May 12, 2023</td>
              <td className="orders__table-data">2 item(s)</td>
              <td className="orders__table-data">$99.99</td>
              <td className="orders__table-data orders__status--pending">
                Pending
              </td>
              <td
                onClick={() => navigate("/order-details/10001")}
                className="orders__table-data orders__table-data-icon"
              >
                Details{" "}
                <ChevronRight
                  size={15}
                  stroke="rgb(30, 64, 175)"
                  className="orders__action-icon"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Orders;
