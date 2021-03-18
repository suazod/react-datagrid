import React from 'react';

const Tables = (props) => (
    <>
    
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="customize-table">
                    <div className="d-flex justify-content-between">
                        <div className="title-container">
                            <h1><span>Invoice</span> Demo</h1>
                            <span className="sub-title">Created By Danny Suazo</span>
                        </div>
                        <div className="btn-container"><a role="button" className="btn-sm btn btn-outline-primary" href="https://github.com/suazod/opportune-microsite" target="_blank" rel="noreferrer">The
                                Code <i className="fas fa-code"></i></a></div>
                    </div>
                    <div className="inner-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" className="sort-vendor">Vendor <div className="sort-container"><div className="vendor-asc"><i className="fas fa-sort-up"></i></div><div className="vendor-dsc"><i className="fas fa-sort-down"></i></div></div></th>
                                    <th scope="col">Invoice Number</th>
                                    <th scope="col">Invoice Amount</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody id="invoiceHeader">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
)

export default Tables;