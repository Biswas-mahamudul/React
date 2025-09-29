
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ManageRoom = () => {
  

  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />

      <div className="content-wrapper">
        {/* Header */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Manage Payments</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Manage Payments</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">All Payments</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{ width: 200 }}>
                  <input type="text" className="form-control float-right" placeholder="Search Payment" />
                  <div className="input-group-append">
                    <button className="btn btn-default"><i className="fas fa-search" /></button>
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
                  {/* Example Rows */}
                  <tr>
                    <td>P-6001</td>
                    <td>Rahim</td>
                    <td>$50</td>
                    <td>Cash</td>
                    <td>2025-09-27</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-success btn-sm">Mark Paid</button>{" "}
                      <button className="btn btn-danger btn-sm">Cancel</button>
                    </td>
                  </tr>

                  <tr>
                    <td>P-6002</td>
                    <td>Karim</td>
                    <td>$35</td>
                    <td>Bkash</td>
                    <td>2025-09-25</td>
                    <td><span className="badge bg-success">Paid</span></td>
                    <td>
                      <button className="btn btn-warning btn-sm">Refund</button>
                    </td>
                  </tr>

                  <tr>
                    <td>P-6003</td>
                    <td>Salma</td>
                    <td>$20</td>
                    <td>Card</td>
                    <td>2025-09-26</td>
                    <td><span className="badge bg-danger">Cancelled</span></td>
                    <td>
                      <button className="btn btn-info btn-sm">Retry</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ManageRoom;
