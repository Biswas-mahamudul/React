
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const Male = () => {
 
     return (
    <div className="wrapper">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      <Sidebar />

      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Content Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Manage Orders</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Manage Orders</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Orders List</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{ width: 150 }}>
                  <input
                    type="text"
                    name="table_search"
                    className="form-control float-right"
                    placeholder="Search Order"
                  />
                  <div className="input-group-append">
                    <button type="submit" className="btn btn-default">
                      <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="card-body table-responsive p-0">
              <table className="table table-hover text-nowrap">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Food Item</th>
                    <th>Qty</th>
                    <th>Total Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1001</td>
                    <td>John Doe</td>
                    <td>Burger</td>
                    <td>2</td>
                    <td>$11.98</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-success btn-sm">Accept</button>{" "}
                      <button className="btn btn-danger btn-sm">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1002</td>
                    <td>Mary Jane</td>
                    <td>Pizza</td>
                    <td>1</td>
                    <td>$8.99</td>
                    <td><span className="badge bg-success">Completed</span></td>
                    <td>
                      <button className="btn btn-secondary btn-sm">View</button>
                    </td>
                  </tr>
                  <tr>
                    <td>#1003</td>
                    <td>David Smith</td>
                    <td>Fried Rice</td>
                    <td>3</td>
                    <td>$13.50</td>
                    <td><span className="badge bg-danger">Cancelled</span></td>
                    <td>
                      <button className="btn btn-secondary btn-sm">View</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Male;
