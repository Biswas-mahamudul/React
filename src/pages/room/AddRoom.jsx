
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const AddRoom = () => {
  
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
                <h1>Pending Payments</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Pending Payments</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Pending Payments List</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{ width: 200 }}>
                  <input
                    type="text"
                    name="table_search"
                    className="form-control float-right"
                    placeholder="Search Payment"
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
                    <th>Payment ID</th>
                    <th>Customer</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Pending Payments */}
                  <tr>
                    <td>P-5001</td>
                    <td>Rahim</td>
                    <td>$25.00</td>
                    <td>Cash</td>
                    <td>2025-09-25</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-success btn-sm">Mark as Paid</button>{" "}
                      <button className="btn btn-danger btn-sm">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td>P-5002</td>
                    <td>Karim</td>
                    <td>$40.50</td>
                    <td>Credit Card</td>
                    <td>2025-09-26</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-success btn-sm">Mark as Paid</button>{" "}
                      <button className="btn btn-danger btn-sm">Cancel</button>
                    </td>
                  </tr>
                  <tr>
                    <td>P-5003</td>
                    <td>Salma</td>
                    <td>$15.75</td>
                    <td>Bkash</td>
                    <td>2025-09-27</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-success btn-sm">Mark as Paid</button>{" "}
                      <button className="btn btn-danger btn-sm">Cancel</button>
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

export default AddRoom;
