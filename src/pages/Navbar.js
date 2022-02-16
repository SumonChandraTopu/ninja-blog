/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Dojo Blogs</Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
                      aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarID">
                      <div className="navbar-nav">
                          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                          <Link className="nav-link active" aria-current="page" to="/create">Create New Blog</Link>
                      </div>
                  </div>
              </div>
          </nav>
        </div>
    );
};

export default Navbar;