"use client"

import { useState } from "react"
import {
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  Settings,
  PlusCircle,
  Search,
  Filter,
  ChevronDown,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  TruckIcon,
} from "lucide-react"
import "./AdminPanel.css"

// Sample data
const products = [
  { id: 1, name: "Premium Cotton Shirt", category: "Men", price: 89.99, stock: 45, status: "Active" },
  { id: 2, name: "Designer Slim Fit Jeans", category: "Men", price: 129.99, stock: 32, status: "Active" },
  { id: 3, name: "Merino Wool Sweater", category: "Men", price: 159.99, stock: 18, status: "Active" },
  { id: 4, name: "Classic Trench Coat", category: "Women", price: 249.99, stock: 12, status: "Active" },
  { id: 5, name: "Summer Linen Shirt", category: "Men", price: 79.99, stock: 0, status: "Out of Stock" },
]

const orders = [
  { id: "#10001", customer: "John Smith", date: "May 12, 2023", items: 2, total: 219.98, status: "Delivered" },
  { id: "#10002", customer: "Emma Johnson", date: "May 14, 2023", items: 3, total: 349.97, status: "Processing" },
  { id: "#10003", customer: "Michael Brown", date: "May 15, 2023", items: 1, total: 89.99, status: "Shipped" },
  { id: "#10004", customer: "Sarah Wilson", date: "May 16, 2023", items: 4, total: 459.96, status: "Pending" },
  { id: "#10005", customer: "David Lee", date: "May 18, 2023", items: 2, total: 179.98, status: "Cancelled" },
]

const customers = [
  { id: 1, name: "John Smith", email: "john.smith@example.com", orders: 5, spent: 789.95 },
  { id: 2, name: "Emma Johnson", email: "emma.j@example.com", orders: 3, spent: 459.97 },
  { id: 3, name: "Michael Brown", email: "michael.b@example.com", orders: 2, spent: 219.98 },
  { id: 4, name: "Sarah Wilson", email: "sarah.w@example.com", orders: 7, spent: 1249.93 },
  { id: 5, name: "David Lee", email: "david.lee@example.com", orders: 1, spent: 89.99 },
]

const AdminPanel = () => {
  const [step, setStep] = useState(0)
  const [activeProduct, setActiveProduct] = useState(null)
  const [activeOrder, setActiveOrder] = useState(null)

  // Tabs configuration
  const tabs = [
    { name: "Dashboard", icon: <BarChart3 size={20} /> },
    { name: "Products", icon: <ShoppingBag size={20} /> },
    { name: "Orders", icon: <Package size={20} /> },
    { name: "Customers", icon: <Users size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ]

  // Status badge color mapping
  const getStatusColor = (status) => {
    const statusMap = {
      Active: "status-active",
      "Out of Stock": "status-inactive",
      Delivered: "status-delivered",
      Processing: "status-processing",
      Shipped: "status-shipped",
      Pending: "status-pending",
      Cancelled: "status-cancelled",
    }
    return statusMap[status] || "status-default"
  }

  // Status icon mapping
  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle size={16} />
      case "Processing":
        return <Clock size={16} />
      case "Shipped":
        return <TruckIcon size={16} />
      case "Pending":
        return <Clock size={16} />
      case "Cancelled":
        return <XCircle size={16} />
      default:
        return null
    }
  }

  // Render dashboard content
  const renderDashboard = () => (
    <div className="admin-dashboard">
      <div className="admin-dashboard__header">
        <h2 className="admin-dashboard__title">Dashboard Overview</h2>
        <div className="admin-dashboard__period">
          <span>Last 30 days</span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="admin-dashboard__stats">
        <div className="admin-dashboard__stat-card">
          <div className="admin-dashboard__stat-icon admin-dashboard__stat-icon--sales">
            <BarChart3 size={24} />
          </div>
          <div className="admin-dashboard__stat-content">
            <h3 className="admin-dashboard__stat-value">$12,458</h3>
            <p className="admin-dashboard__stat-label">Total Sales</p>
            <span className="admin-dashboard__stat-change admin-dashboard__stat-change--up">+12.5%</span>
          </div>
        </div>

        <div className="admin-dashboard__stat-card">
          <div className="admin-dashboard__stat-icon admin-dashboard__stat-icon--orders">
            <Package size={24} />
          </div>
          <div className="admin-dashboard__stat-content">
            <h3 className="admin-dashboard__stat-value">142</h3>
            <p className="admin-dashboard__stat-label">Total Orders</p>
            <span className="admin-dashboard__stat-change admin-dashboard__stat-change--up">+8.2%</span>
          </div>
        </div>

        <div className="admin-dashboard__stat-card">
          <div className="admin-dashboard__stat-icon admin-dashboard__stat-icon--customers">
            <Users size={24} />
          </div>
          <div className="admin-dashboard__stat-content">
            <h3 className="admin-dashboard__stat-value">64</h3>
            <p className="admin-dashboard__stat-label">New Customers</p>
            <span className="admin-dashboard__stat-change admin-dashboard__stat-change--up">+5.7%</span>
          </div>
        </div>

        <div className="admin-dashboard__stat-card">
          <div className="admin-dashboard__stat-icon admin-dashboard__stat-icon--products">
            <ShoppingBag size={24} />
          </div>
          <div className="admin-dashboard__stat-content">
            <h3 className="admin-dashboard__stat-value">28</h3>
            <p className="admin-dashboard__stat-label">Low Stock</p>
            <span className="admin-dashboard__stat-change admin-dashboard__stat-change--down">-2.3%</span>
          </div>
        </div>
      </div>

      <div className="admin-dashboard__recent">
        <div className="admin-dashboard__recent-orders">
          <div className="admin-dashboard__recent-header">
            <h3 className="admin-dashboard__recent-title">Recent Orders</h3>
            <button className="admin-dashboard__view-all" onClick={() => setStep(2)}>
              View All
            </button>
          </div>
          <div className="admin-dashboard__recent-list">
            {orders.slice(0, 3).map((order) => (
              <div key={order.id} className="admin-dashboard__recent-item">
                <div className="admin-dashboard__recent-item-main">
                  <div className="admin-dashboard__recent-item-id">{order.id}</div>
                  <div className="admin-dashboard__recent-item-customer">{order.customer}</div>
                </div>
                <div className="admin-dashboard__recent-item-details">
                  <div className="admin-dashboard__recent-item-date">{order.date}</div>
                  <div className="admin-dashboard__recent-item-total">${order.total.toFixed(2)}</div>
                  <div className={`admin-dashboard__recent-item-status ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span>{order.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-dashboard__recent-products">
          <div className="admin-dashboard__recent-header">
            <h3 className="admin-dashboard__recent-title">Top Products</h3>
            <button className="admin-dashboard__view-all" onClick={() => setStep(1)}>
              View All
            </button>
          </div>
          <div className="admin-dashboard__recent-list">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="admin-dashboard__recent-item">
                <div className="admin-dashboard__recent-item-main">
                  <div className="admin-dashboard__recent-item-image"></div>
                  <div className="admin-dashboard__recent-item-name">{product.name}</div>
                </div>
                <div className="admin-dashboard__recent-item-details">
                  <div className="admin-dashboard__recent-item-category">{product.category}</div>
                  <div className="admin-dashboard__recent-item-price">${product.price.toFixed(2)}</div>
                  <div className={`admin-dashboard__recent-item-status ${getStatusColor(product.status)}`}>
                    <span>{product.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  // Render products content
  const renderProducts = () => (
    <div className="admin-products">
      {activeProduct !== null ? (
        <div className="admin-product-form">
          <div className="admin-product-form__header">
            <h2 className="admin-product-form__title">
              {activeProduct === "new" ? "Add New Product" : "Edit Product"}
            </h2>
            <button className="admin-product-form__back" onClick={() => setActiveProduct(null)}>
              Back to Products
            </button>
          </div>

          <div className="admin-product-form__content">
            <div className="admin-product-form__main">
              <div className="admin-product-form__group">
                <label className="admin-product-form__label">Product Name</label>
                <input
                  type="text"
                  className="admin-product-form__input"
                  placeholder="Enter product name"
                  defaultValue={activeProduct !== "new" ? products.find((p) => p.id === activeProduct)?.name : ""}
                />
              </div>

              <div className="admin-product-form__row">
                <div className="admin-product-form__group">
                  <label className="admin-product-form__label">Category</label>
                  <select className="admin-product-form__select">
                    <option value="">Select category</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>

                <div className="admin-product-form__group">
                  <label className="admin-product-form__label">Status</label>
                  <select className="admin-product-form__select">
                    <option value="active">Active</option>
                    <option value="draft">Draft</option>
                    <option value="out-of-stock">Out of Stock</option>
                  </select>
                </div>
              </div>

              <div className="admin-product-form__row">
                <div className="admin-product-form__group">
                  <label className="admin-product-form__label">Price ($)</label>
                  <input
                    type="number"
                    className="admin-product-form__input"
                    placeholder="0.00"
                    defaultValue={activeProduct !== "new" ? products.find((p) => p.id === activeProduct)?.price : ""}
                  />
                </div>

                <div className="admin-product-form__group">
                  <label className="admin-product-form__label">Stock Quantity</label>
                  <input
                    type="number"
                    className="admin-product-form__input"
                    placeholder="0"
                    defaultValue={activeProduct !== "new" ? products.find((p) => p.id === activeProduct)?.stock : ""}
                  />
                </div>
              </div>

              <div className="admin-product-form__group">
                <label className="admin-product-form__label">Description</label>
                <textarea
                  className="admin-product-form__textarea"
                  placeholder="Enter product description"
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div className="admin-product-form__sidebar">
              <div className="admin-product-form__image-upload">
                <div className="admin-product-form__image-placeholder">
                  <PlusCircle size={24} />
                  <span>Add Product Image</span>
                </div>
                <button className="admin-product-form__upload-btn">Upload Image</button>
              </div>

              <div className="admin-product-form__variants">
                <h3 className="admin-product-form__variants-title">Variants</h3>
                <div className="admin-product-form__variant-groups">
                  <div className="admin-product-form__variant-group">
                    <h4 className="admin-product-form__variant-type">Colors</h4>
                    <div className="admin-product-form__variant-options">
                      <div className="admin-product-form__color-option admin-product-form__color-option--white"></div>
                      <div className="admin-product-form__color-option admin-product-form__color-option--black"></div>
                      <div className="admin-product-form__color-option admin-product-form__color-option--blue"></div>
                      <div className="admin-product-form__color-option admin-product-form__color-option--add">
                        <PlusCircle size={16} />
                      </div>
                    </div>
                  </div>

                  <div className="admin-product-form__variant-group">
                    <h4 className="admin-product-form__variant-type">Sizes</h4>
                    <div className="admin-product-form__variant-options">
                      <div className="admin-product-form__size-option">S</div>
                      <div className="admin-product-form__size-option">M</div>
                      <div className="admin-product-form__size-option">L</div>
                      <div className="admin-product-form__size-option">XL</div>
                      <div className="admin-product-form__size-option admin-product-form__size-option--add">
                        <PlusCircle size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-product-form__actions">
            <button className="admin-product-form__cancel" onClick={() => setActiveProduct(null)}>
              Cancel
            </button>
            <button className="admin-product-form__save">
              {activeProduct === "new" ? "Add Product" : "Save Changes"}
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="admin-products__header">
            <h2 className="admin-products__title">Products</h2>
            <button className="admin-products__add" onClick={() => setActiveProduct("new")}>
              <PlusCircle size={18} />
              <span>Add Product</span>
            </button>
          </div>

          <div className="admin-products__filters">
            <div className="admin-products__search">
              <Search size={18} />
              <input type="text" placeholder="Search products..." />
            </div>

            <div className="admin-products__filter">
              <Filter size={18} />
              <select>
                <option value="">All Categories</option>
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="kids">Kids</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>

            <div className="admin-products__filter">
              <Filter size={18} />
              <select>
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="out-of-stock">Out of Stock</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>

          <div className="admin-products__table">
            <div className="admin-products__table-header">
              <div className="admin-products__header-cell admin-products__header-cell--checkbox">
                <input type="checkbox" />
              </div>
              <div className="admin-products__header-cell admin-products__header-cell--id">ID</div>
              <div className="admin-products__header-cell admin-products__header-cell--product">Product</div>
              <div className="admin-products__header-cell admin-products__header-cell--category">Category</div>
              <div className="admin-products__header-cell admin-products__header-cell--price">Price</div>
              <div className="admin-products__header-cell admin-products__header-cell--stock">Stock</div>
              <div className="admin-products__header-cell admin-products__header-cell--status">Status</div>
              <div className="admin-products__header-cell admin-products__header-cell--actions">Actions</div>
            </div>

            <div className="admin-products__table-body">
              {products.map((product) => (
                <div key={product.id} className="admin-products__table-row">
                  <div className="admin-products__cell admin-products__cell--checkbox">
                    <input type="checkbox" />
                  </div>
                  <div className="admin-products__cell admin-products__cell--id">{product.id}</div>
                  <div className="admin-products__cell admin-products__cell--product">
                    <div className="admin-products__product">
                      <div className="admin-products__product-image"></div>
                      <div className="admin-products__product-name">{product.name}</div>
                    </div>
                  </div>
                  <div className="admin-products__cell admin-products__cell--category">{product.category}</div>
                  <div className="admin-products__cell admin-products__cell--price">${product.price.toFixed(2)}</div>
                  <div className="admin-products__cell admin-products__cell--stock">{product.stock}</div>
                  <div className="admin-products__cell admin-products__cell--status">
                    <span className={`admin-products__status ${getStatusColor(product.status)}`}>{product.status}</span>
                  </div>
                  <div className="admin-products__cell admin-products__cell--actions">
                    <div className="admin-products__actions">
                      <button className="admin-products__action admin-products__action--view" title="View Product">
                        <Eye size={16} />
                      </button>
                      <button
                        className="admin-products__action admin-products__action--edit"
                        title="Edit Product"
                        onClick={() => setActiveProduct(product.id)}
                      >
                        <Edit size={16} />
                      </button>
                      <button className="admin-products__action admin-products__action--delete" title="Delete Product">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-products__pagination">
            <div className="admin-products__pagination-info">Showing 1-5 of 5 products</div>
            <div className="admin-products__pagination-controls">
              <button className="admin-products__pagination-button admin-products__pagination-button--disabled">
                Previous
              </button>
              <button className="admin-products__pagination-button admin-products__pagination-button--active">1</button>
              <button className="admin-products__pagination-button admin-products__pagination-button--disabled">
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )

  // Render orders content
  const renderOrders = () => (
    <div className="admin-orders">
      {activeOrder !== null ? (
        <div className="admin-order-detail">
          <div className="admin-order-detail__header">
            <h2 className="admin-order-detail__title">Order {orders.find((o) => o.id === activeOrder)?.id}</h2>
            <button className="admin-order-detail__back" onClick={() => setActiveOrder(null)}>
              Back to Orders
            </button>
          </div>

          <div className="admin-order-detail__meta">
            <div className="admin-order-detail__meta-item">
              <span className="admin-order-detail__meta-label">Date:</span>
              <span className="admin-order-detail__meta-value">{orders.find((o) => o.id === activeOrder)?.date}</span>
            </div>
            <div className="admin-order-detail__meta-item">
              <span className="admin-order-detail__meta-label">Customer:</span>
              <span className="admin-order-detail__meta-value">
                {orders.find((o) => o.id === activeOrder)?.customer}
              </span>
            </div>
            <div className="admin-order-detail__meta-item">
              <span className="admin-order-detail__meta-label">Status:</span>
              <span
                className={`admin-order-detail__status ${getStatusColor(orders.find((o) => o.id === activeOrder)?.status)}`}
              >
                {getStatusIcon(orders.find((o) => o.id === activeOrder)?.status)}
                <span>{orders.find((o) => o.id === activeOrder)?.status}</span>
              </span>
            </div>
          </div>

          <div className="admin-order-detail__update">
            <h3 className="admin-order-detail__update-title">Update Status</h3>
            <div className="admin-order-detail__update-controls">
              <select className="admin-order-detail__update-select">
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <button className="admin-order-detail__update-button">Update</button>
            </div>
          </div>

          <div className="admin-order-detail__sections">
            <div className="admin-order-detail__section">
              <h3 className="admin-order-detail__section-title">Items</h3>
              <div className="admin-order-detail__items">
                <div className="admin-order-detail__item">
                  <div className="admin-order-detail__item-image"></div>
                  <div className="admin-order-detail__item-details">
                    <h4 className="admin-order-detail__item-name">Premium Cotton Shirt</h4>
                    <p className="admin-order-detail__item-meta">Color: White, Size: M</p>
                  </div>
                  <div className="admin-order-detail__item-price">
                    <p className="admin-order-detail__item-quantity">Qty: 1</p>
                    <p className="admin-order-detail__item-total">$89.99</p>
                  </div>
                </div>

                <div className="admin-order-detail__item">
                  <div className="admin-order-detail__item-image"></div>
                  <div className="admin-order-detail__item-details">
                    <h4 className="admin-order-detail__item-name">Designer Slim Fit Jeans</h4>
                    <p className="admin-order-detail__item-meta">Color: Blue, Size: 32</p>
                  </div>
                  <div className="admin-order-detail__item-price">
                    <p className="admin-order-detail__item-quantity">Qty: 1</p>
                    <p className="admin-order-detail__item-total">$129.99</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="admin-order-detail__section">
              <h3 className="admin-order-detail__section-title">Customer Information</h3>
              <div className="admin-order-detail__info-grid">
                <div className="admin-order-detail__info-section">
                  <h4 className="admin-order-detail__info-title">Contact Information</h4>
                  <p className="admin-order-detail__info-text">
                    {orders.find((o) => o.id === activeOrder)?.customer}
                    <br />
                    john.smith@example.com
                    <br />
                    +1 (555) 123-4567
                  </p>
                </div>

                <div className="admin-order-detail__info-section">
                  <h4 className="admin-order-detail__info-title">Shipping Address</h4>
                  <p className="admin-order-detail__info-text">
                    John Smith
                    <br />
                    123 Main St
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div className="admin-order-detail__info-section">
                  <h4 className="admin-order-detail__info-title">Billing Address</h4>
                  <p className="admin-order-detail__info-text">
                    John Smith
                    <br />
                    123 Main St
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div className="admin-order-detail__info-section">
                  <h4 className="admin-order-detail__info-title">Payment Information</h4>
                  <p className="admin-order-detail__info-text">
                    Credit Card
                    <br />
                    **** **** **** 4321
                    <br />
                    Exp: 05/25
                  </p>
                </div>
              </div>
            </div>

            <div className="admin-order-detail__section">
              <h3 className="admin-order-detail__section-title">Order Summary</h3>
              <div className="admin-order-detail__summary">
                <div className="admin-order-detail__summary-row">
                  <span className="admin-order-detail__summary-label">Subtotal</span>
                  <span className="admin-order-detail__summary-value">$219.98</span>
                </div>
                <div className="admin-order-detail__summary-row">
                  <span className="admin-order-detail__summary-label">Shipping</span>
                  <span className="admin-order-detail__summary-value">$9.99</span>
                </div>
                <div className="admin-order-detail__summary-row">
                  <span className="admin-order-detail__summary-label">Tax</span>
                  <span className="admin-order-detail__summary-value">$18.70</span>
                </div>
                <div className="admin-order-detail__summary-row admin-order-detail__summary-row--total">
                  <span className="admin-order-detail__summary-label">Total</span>
                  <span className="admin-order-detail__summary-value">$248.67</span>
                </div>
              </div>
            </div>
          </div>

          <div className="admin-order-detail__actions">
            <button className="admin-order-detail__action admin-order-detail__action--invoice">Download Invoice</button>
            <button className="admin-order-detail__action admin-order-detail__action--print">Print Order</button>
          </div>
        </div>
      ) : (
        <>
          <div className="admin-orders__header">
            <h2 className="admin-orders__title">Orders</h2>
          </div>

          <div className="admin-orders__filters">
            <div className="admin-orders__search">
              <Search size={18} />
              <input type="text" placeholder="Search orders..." />
            </div>

            <div className="admin-orders__filter">
              <Filter size={18} />
              <select>
                <option value="">All Status</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="admin-orders__filter">
              <Filter size={18} />
              <select>
                <option value="">Date Range</option>
                <option value="today">Today</option>
                <option value="yesterday">Yesterday</option>
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
              </select>
            </div>
          </div>

          <div className="admin-orders__table">
            <div className="admin-orders__table-header">
              <div className="admin-orders__header-cell admin-orders__header-cell--id">Order ID</div>
              <div className="admin-orders__header-cell admin-orders__header-cell--customer">Customer</div>
              <div className="admin-orders__header-cell admin-orders__header-cell--date">Date</div>
              <div className="admin-orders__header-cell admin-orders__header-cell--items">Items</div>
              <div className="admin-orders__header-cell admin-orders__header-cell--total">Total</div>
              <div className="admin-orders__header-cell admin-orders__header-cell--status">Status</div>
              <div className="admin-orders__header-cell admin-orders__header-cell--actions">Actions</div>
            </div>

            <div className="admin-orders__table-body">
              {orders.map((order) => (
                <div key={order.id} className="admin-orders__table-row">
                  <div className="admin-orders__cell admin-orders__cell--id">{order.id}</div>
                  <div className="admin-orders__cell admin-orders__cell--customer">{order.customer}</div>
                  <div className="admin-orders__cell admin-orders__cell--date">{order.date}</div>
                  <div className="admin-orders__cell admin-orders__cell--items">{order.items}</div>
                  <div className="admin-orders__cell admin-orders__cell--total">${order.total.toFixed(2)}</div>
                  <div className="admin-orders__cell admin-orders__cell--status">
                    <span className={`admin-orders__status ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span>{order.status}</span>
                    </span>
                  </div>
                  <div className="admin-orders__cell admin-orders__cell--actions">
                    <div className="admin-orders__actions">
                      <button
                        className="admin-orders__action admin-orders__action--view"
                        title="View Order"
                        onClick={() => setActiveOrder(order.id)}
                      >
                        <Eye size={16} />
                      </button>
                      <button className="admin-orders__action admin-orders__action--edit" title="Edit Order">
                        <Edit size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="admin-orders__pagination">
            <div className="admin-orders__pagination-info">Showing 1-5 of 5 orders</div>
            <div className="admin-orders__pagination-controls">
              <button className="admin-orders__pagination-button admin-orders__pagination-button--disabled">
                Previous
              </button>
              <button className="admin-orders__pagination-button admin-orders__pagination-button--active">1</button>
              <button className="admin-orders__pagination-button admin-orders__pagination-button--disabled">
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )

  // Render customers content
  const renderCustomers = () => (
    <div className="admin-customers">
      <div className="admin-customers__header">
        <h2 className="admin-customers__title">Customers</h2>
      </div>

      <div className="admin-customers__filters">
        <div className="admin-customers__search">
          <Search size={18} />
          <input type="text" placeholder="Search customers..." />
        </div>
      </div>

      <div className="admin-customers__table">
        <div className="admin-customers__table-header">
          <div className="admin-customers__header-cell admin-customers__header-cell--id">ID</div>
          <div className="admin-customers__header-cell admin-customers__header-cell--name">Name</div>
          <div className="admin-customers__header-cell admin-customers__header-cell--email">Email</div>
          <div className="admin-customers__header-cell admin-customers__header-cell--orders">Orders</div>
          <div className="admin-customers__header-cell admin-customers__header-cell--spent">Total Spent</div>
          <div className="admin-customers__header-cell admin-customers__header-cell--actions">Actions</div>
        </div>

        <div className="admin-customers__table-body">
          {customers.map((customer) => (
            <div key={customer.id} className="admin-customers__table-row">
              <div className="admin-customers__cell admin-customers__cell--id">{customer.id}</div>
              <div className="admin-customers__cell admin-customers__cell--name">{customer.name}</div>
              <div className="admin-customers__cell admin-customers__cell--email">{customer.email}</div>
              <div className="admin-customers__cell admin-customers__cell--orders">{customer.orders}</div>
              <div className="admin-customers__cell admin-customers__cell--spent">${customer.spent.toFixed(2)}</div>
              <div className="admin-customers__cell admin-customers__cell--actions">
                <div className="admin-customers__actions">
                  <button className="admin-customers__action admin-customers__action--view" title="View Customer">
                    <Eye size={16} />
                  </button>
                  <button className="admin-customers__action admin-customers__action--edit" title="Edit Customer">
                    <Edit size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="admin-customers__pagination">
        <div className="admin-customers__pagination-info">Showing 1-5 of 5 customers</div>
        <div className="admin-customers__pagination-controls">
          <button className="admin-customers__pagination-button admin-customers__pagination-button--disabled">
            Previous
          </button>
          <button className="admin-customers__pagination-button admin-customers__pagination-button--active">1</button>
          <button className="admin-customers__pagination-button admin-customers__pagination-button--disabled">
            Next
          </button>
        </div>
      </div>
    </div>
  )

  // Render settings content
  const renderSettings = () => (
    <div className="admin-settings">
      <div className="admin-settings__header">
        <h2 className="admin-settings__title">Settings</h2>
      </div>

      <div className="admin-settings__tabs">
        <button className="admin-settings__tab admin-settings__tab--active">General</button>
        <button className="admin-settings__tab">Store</button>
        <button className="admin-settings__tab">Shipping</button>
        <button className="admin-settings__tab">Payment</button>
        <button className="admin-settings__tab">Notifications</button>
        <button className="admin-settings__tab">Users</button>
      </div>

      <div className="admin-settings__content">
        <div className="admin-settings__section">
          <h3 className="admin-settings__section-title">Store Information</h3>

          <div className="admin-settings__form">
            <div className="admin-settings__form-group">
              <label className="admin-settings__label">Store Name</label>
              <input type="text" className="admin-settings__input" defaultValue="Elegance" />
            </div>

            <div className="admin-settings__form-group">
              <label className="admin-settings__label">Store Email</label>
              <input type="email" className="admin-settings__input" defaultValue="contact@elegance.com" />
            </div>

            <div className="admin-settings__form-group">
              <label className="admin-settings__label">Store Phone</label>
              <input type="text" className="admin-settings__input" defaultValue="+1 (555) 123-4567" />
            </div>

            <div className="admin-settings__form-group">
              <label className="admin-settings__label">Store Address</label>
              <textarea
                className="admin-settings__textarea"
                defaultValue="123 Fashion Street, New York, NY 10001, United States"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="admin-settings__section">
          <h3 className="admin-settings__section-title">Currency Settings</h3>

          <div className="admin-settings__form">
            <div className="admin-settings__form-group">
              <label className="admin-settings__label">Currency</label>
              <select className="admin-settings__select">
                <option value="usd">USD ($)</option>
                <option value="eur">EUR (€)</option>
                <option value="gbp">GBP (£)</option>
                <option value="jpy">JPY (¥)</option>
              </select>
            </div>

            <div className="admin-settings__form-group">
              <label className="admin-settings__label">Currency Symbol Position</label>
              <select className="admin-settings__select">
                <option value="before">Before amount ($99.99)</option>
                <option value="after">After amount (99.99$)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="admin-settings__actions">
          <button className="admin-settings__cancel">Cancel</button>
          <button className="admin-settings__save">Save Changes</button>
        </div>
      </div>
    </div>
  )

  // Render content based on active tab
  const renderContent = () => {
    switch (step) {
      case 0:
        return renderDashboard()
      case 1:
        return renderProducts()
      case 2:
        return renderOrders()
      case 3:
        return renderCustomers()
      case 4:
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="admin-panel">
      <div className="admin-panel__sidebar">
        <div className="admin-panel__logo">
          <h1 className="admin-panel__logo-text">Elegance</h1>
          <span className="admin-panel__logo-badge">Admin</span>
        </div>

        <nav className="admin-panel__nav">
          {tabs.map((tab, index) => (
            <button
              key={tab.name}
              className={`admin-panel__nav-item ${step === index ? "admin-panel__nav-item--active" : ""}`}
              onClick={() => setStep(index)}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>

        <div className="admin-panel__user">
          <div className="admin-panel__user-avatar"></div>
          <div className="admin-panel__user-info">
            <h3 className="admin-panel__user-name">Admin User</h3>
            <p className="admin-panel__user-role">Administrator</p>
          </div>
        </div>
      </div>

      <div className="admin-panel__main">
        <header className="admin-panel__header">
          <div className="admin-panel__header-title">{tabs[step].name}</div>

          <div className="admin-panel__header-actions">
            <button className="admin-panel__notification">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z"
                  fill="currentColor"
                />
              </svg>
              <span className="admin-panel__notification-badge">3</span>
            </button>

            <button className="admin-panel__logout">Logout</button>
          </div>
        </header>

        <main className="admin-panel__content">{renderContent()}</main>
      </div>
    </div>
  )
}

export default AdminPanel

