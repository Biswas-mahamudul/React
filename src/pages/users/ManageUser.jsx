
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

const ManageUser = () => {
  
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
                <h1>Manage Users</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Manage Users</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Users List</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{ width: 150 }}>
                  <input
                    type="text"
                    name="table_search"
                    className="form-control float-right"
                    placeholder="Search User"
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
                    <th>User ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Example Users */}
                  <tr>
                    <td>U-101</td>
                    <td>Rahim</td>
                    <td>rahim@example.com</td>
                    <td>Customer</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Edit</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>U-102</td>
                    <td>Karim</td>
                    <td>karim@example.com</td>
                    <td>Staff</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                    <td>
                      <button className="btn btn-success btn-sm">Approve</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>U-103</td>
                    <td>Admin User</td>
                    <td>admin@resto.com</td>
                    <td>Admin</td>
                    <td><span className="badge bg-success">Active</span></td>
                    <td>
                      <button className="btn btn-primary btn-sm">Edit</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>U-104</td>
                    <td>Salma</td>
                    <td>salma@example.com</td>
                    <td>Customer</td>
                    <td><span className="badge bg-danger">Blocked</span></td>
                    <td>
                      <button className="btn btn-secondary btn-sm">Unblock</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
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

export default ManageUser;
