import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
const ManageCategory = () => {
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
                <h1>Manage Food</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Manage Food</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="content">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Food List</h3>
              <div className="card-tools">
                <div className="input-group input-group-sm" style={{ width: 150 }}>
                  <input
                    type="text"
                    name="table_search"
                    className="form-control float-right"
                    placeholder="Search Food"
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
                    <th>ID</th>
                    <th>Food Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>101</td>
                    <td>Burger</td>
                    <td>$5.99</td>
                    <td>Fast Food</td>
                    <td>
                      <button className="btn btn-success btn-sm">Insert</button>{" "}
                      <button className="btn btn-primary btn-sm">Update</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>Pizza</td>
                    <td>$8.99</td>
                    <td>Fast Food</td>
                    <td>
                      <button className="btn btn-success btn-sm">Insert</button>{" "}
                      <button className="btn btn-primary btn-sm">Update</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>Chicken Curry</td>
                    <td>$6.50</td>
                    <td>Main Dish</td>
                    <td>
                      <button className="btn btn-success btn-sm">Insert</button>{" "}
                      <button className="btn btn-primary btn-sm">Update</button>{" "}
                      <button className="btn btn-danger btn-sm">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td>104</td>
                    <td>Fried Rice</td>
                    <td>$4.50</td>
                    <td>Main Dish</td>
                    <td>
                      <button className="btn btn-success btn-sm">Insert</button>{" "}
                      <button className="btn btn-primary btn-sm">Update</button>{" "}
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

export default ManageCategory;