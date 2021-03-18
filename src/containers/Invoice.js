import data from '../data.json';
import React, { Component, Fragment } from 'react';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            selectedHeader: '',
            searchVal: '',
            serachInnerVal: '',
            isOpen: false,
            innerDetailsToggle: false

        };
    }

    componentDidMount() {
        this.setState({ data: data.Invoices })
    }

    handleExpandTable = (e) => {
        this.setState({
            innerDetailsToggle: !this.state.innerDetailsToggle ? true : this.state.innerDetailsToggle && this.state.selectedHeader !== e ? true : false,
            selectedHeader: e,
            serachInnerVal: ''
        })
    }

    handleSort = (e) => {
        const theData = this.state.data;
        const expr = e;
        switch (expr) {
            case 'sort-vendor-asc':
                const sortedVendorAsc = theData.sort((a, b) => (a.Vendor > b.Vendor ? 1 : -1))
                this.setState({ data: sortedVendorAsc })
                break;
            case 'sort-vendor-desc':
                const sortedVendorDesc = theData.sort((a, b) => (a.Vendor > b.Vendor ? -1 : 1));
                this.setState({ data: sortedVendorDesc })
                break;
            case 'sort-invoice-asc':
                const sortedInvoiceAsc = theData.sort((a, b) => a.InvoiceNumber - b.InvoiceNumber);
                this.setState({ data: sortedInvoiceAsc })
                break;
            case 'sort-invoice-desc':
                const sortedInvoiceDesc = theData.sort((a, b) => b.InvoiceNumber - a.InvoiceNumber);
                this.setState({ data: sortedInvoiceDesc })
                break;
            case 'sort-amount-asc':
                const sortedAmountAsc = theData.sort((a, b) => a.InvoiceAmount - b.InvoiceAmount);
                this.setState({ data: sortedAmountAsc })
                break;
            case 'sort-amount-desc':
                const sortedAmountDesc = theData.sort((a, b) => b.InvoiceAmount - a.InvoiceAmount);
                this.setState({ data: sortedAmountDesc })
                break;
            case 'sort-quantity-asc1':
                const sortedQuantityAsc = theData[0].Details.sort((a, b) => a.Quantity - b.Quantity);
                const elementsIndex = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndex] = { ...theData[elementsIndex], Details: sortedQuantityAsc }
                this.setState({ data: theData })
                break;
            case 'sort-quantity-desc1':
                const sortedQuantityDesc = theData[0].Details.sort((a, b) => b.Quantity - a.Quantity);
                const elementsIndexDesc = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexDesc] = { ...theData[elementsIndexDesc], Details: sortedQuantityDesc }
                this.setState({ data: theData })
                break;
            case 'sort-quantity-asc2':
                const sortedQuantityAsc2 = theData[1].Details.sort((a, b) => a.Quantity - b.Quantity);
                const elementsIndex2 = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndex2] = { ...theData[elementsIndex2], Details: sortedQuantityAsc2 }
                this.setState({ data: theData })
                break;
            case 'sort-quantity-desc2':
                const sortedQuantityDesc2 = theData[1].Details.sort((a, b) => b.Quantity - a.Quantity);
                const elementsIndexDesc2 = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexDesc2] = { ...theData[elementsIndexDesc2], Details: sortedQuantityDesc2 }
                this.setState({ data: theData })
                break;
            case 'sort-pricing-asc1':
                const sortedPricingAsc = theData[0].Details.sort((a, b) => a.Quantity - b.Quantity);
                const elementsIndexPricing = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexPricing] = { ...theData[elementsIndexPricing], Details: sortedPricingAsc }
                this.setState({ data: theData })
                break;
            case 'sort-pricing-desc1':
                const sortedPricingDesc = theData[0].Details.sort((a, b) => b.Quantity - a.Quantity);
                const elementsIndexPricingDesc = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexPricingDesc] = { ...theData[elementsIndexPricingDesc], Details: sortedPricingDesc }
                this.setState({ data: theData })
                break;
            case 'sort-pricing-asc2':
                const sortedPricingAsc2 = theData[1].Details.sort((a, b) => a.Quantity - b.Quantity);
                const elementsIndexPricing2 = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexPricing2] = { ...theData[elementsIndexPricing2], Details: sortedPricingAsc2 }
                this.setState({ data: theData })
                break;
            case 'sort-pricing-desc2':
                const sortedPricingDesc2 = theData[1].Details.sort((a, b) => b.Quantity - a.Quantity);
                const elementsIndexPricingDesc2 = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexPricingDesc2] = { ...theData[elementsIndexPricingDesc2], Details: sortedPricingDesc2 }
                this.setState({ data: theData })
                break;
            case 'sort-total-asc1':
                const sortedTotalAsc = theData[0].Details.sort((a, b) => a.Quantity - b.Quantity);
                const elementsIndexTotal = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexTotal] = { ...theData[elementsIndexTotal], Details: sortedTotalAsc }
                this.setState({ data: theData })
                break;
            case 'sort-total-desc1':
                const sortedTotalDesc = theData[0].Details.sort((a, b) => b.Quantity - a.Quantity);
                const elementsIndexTotalDesc = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexTotalDesc] = { ...theData[elementsIndexTotalDesc], Details: sortedTotalDesc }
                this.setState({ data: theData })
                break;
            case 'sort-total-asc2':
                const sortedTotalAsc2 = theData[1].Details.sort((a, b) => a.Quantity - b.Quantity);
                const elementsIndexTotal2 = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexTotal2] = { ...theData[elementsIndexTotal2], Details: sortedTotalAsc2 }
                this.setState({ data: theData })
                break;
            case 'sort-total-desc2':
                const sortedTotalDesc2 = theData[1].Details.sort((a, b) => b.Quantity - a.Quantity);
                const elementsIndexTotalDesc2 = theData.findIndex(element => element.HeaderID === theData[0].HeaderID);
                theData[elementsIndexTotalDesc2] = { ...theData[elementsIndexTotalDesc2], Details: sortedTotalDesc2 }
                this.setState({ data: theData })
                break;
            default:
                console.log('sorting failed');
        }
    }

    onKeyUpValue(e) {
        const thedata = data.Invoices;
        const searchedData = thedata.filter((item) => item.InvoiceNumber.toString().includes(e.target.value) || item.InvoiceAmount.toString().includes(e.target.value) || item.Vendor.toLowerCase().includes(e.target.value));
        this.setState({
            searchVal: e.target.value,
            data: searchedData ? searchedData : thedata
        });
    }

    onKeyUpValueInner(e, item) {
        console.log(e)

        if (e !== 2) {
            const thedatas = data.Invoices[0].Details;
            const theArr = this.state.data;
            const searchedInnerData = thedatas.filter((innerItem) => innerItem.Quantity.toString().includes(item.target.value) || innerItem.UnitPrice.toString().includes(item.target.value) || innerItem.LineItemTotal.toString().includes(item.target.value));

            const elementsIndexInnerTable = theArr.findIndex(element => element.HeaderID === theArr[0].HeaderID);
            const newInnerArrTable = theArr[elementsIndexInnerTable] = { ...theArr[elementsIndexInnerTable], Details: searchedInnerData }
            const matchArr = theArr.filter((theItems) => theItems.HeaderID !== newInnerArrTable.HeaderID);

            console.log([newInnerArrTable, ...matchArr])
            this.setState({
                serachInnerVal: item.target.value,
                data: [newInnerArrTable, ...matchArr]
            })
        } else {
            const thedatas = data.Invoices[1].Details;
            const theArr = this.state.data;
            const searchedInnerData = thedatas.filter((innerItem) => innerItem.Quantity.toString().includes(item.target.value) || innerItem.UnitPrice.toString().includes(item.target.value) || innerItem.LineItemTotal.toString().includes(item.target.value));

            const elementsIndexInnerTable = theArr.findIndex(element => element.HeaderID === theArr[1].HeaderID);
            const newInnerArrTable = theArr[elementsIndexInnerTable] = { ...theArr[elementsIndexInnerTable], Details: searchedInnerData }
            const matchArr = theArr.filter((theItems) => theItems.HeaderID !== newInnerArrTable.HeaderID);

            this.setState({
                serachInnerVal: item.target.value,
                data: [...matchArr, newInnerArrTable]
            })
            console.log([...matchArr, newInnerArrTable])
        }

    }

    render() {
        //console.log('final state', this.state.data)

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="customize-table">


                            <div className="d-flex justify-content-between">
                                <div className="title-container">
                                    <h1><span>Invoice</span> Demo</h1>
                                    <span className="sub-title">Created By Danny Suazo</span>
                                </div>
                                <div className="btn-container top-search">
                                    <a role="button" className="btn-sm btn btn-outline-primary" href="https://github.com/suazod/opportune-microsite" target="_blank" rel="noreferrer">The
                                Code <i className="fas fa-code"></i></a>
                                    <div className="input-group">
                                        <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." defaultValue={this.state.searchVal} onKeyUp={this.onKeyUpValue.bind(this)} />
                                        <span className="input-group-append">
                                            <div className="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-table">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" className="sort-vendor">Vendor <div className="sort-container"><i className="fas fa-sort-up" onClick={this.handleSort.bind(this, 'sort-vendor-asc')}></i><i className="fas fa-sort-down" onClick={this.handleSort.bind(this, 'sort-vendor-desc')}></i></div></th>
                                            <th scope="col" className="sort-invoice">Invoice Number<div className="sort-container"><i className="fas fa-sort-up" onClick={this.handleSort.bind(this, 'sort-invoice-asc')}></i><i className="fas fa-sort-down" onClick={this.handleSort.bind(this, 'sort-invoice-desc')}></i></div></th>
                                            <th scope="col" className="sort-amount">Invoice Amount<div className="sort-container"><i className="fas fa-sort-up" onClick={this.handleSort.bind(this, 'sort-amount-asc')}></i><i className="fas fa-sort-down" onClick={this.handleSort.bind(this, 'sort-amount-desc')}></i></div></th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {this.state.data !== '' ?
                                            this.state.data.map((item, index) => {
                                                return (
                                                    <Fragment>
                                                        <tr key={index + item.InvoiceNumber}>
                                                            <td>{item.HeaderID}</td>
                                                            <td>{item.Vendor}</td>
                                                            <td>{item.InvoiceNumber}</td>
                                                            <td>{item.InvoiceAmount}</td>
                                                            <td><div onClick={this.handleExpandTable.bind(this, item.HeaderID)}><i className={`fas fa-chevron-${this.state.innerDetailsToggle && item.HeaderID === this.state.selectedHeader ? 'up' : 'down'}`}></i></div></td>
                                                        </tr>
                                                        <tr key={index + item.InvoiceAmount}>{this.state.innerDetailsToggle && item.HeaderID === this.state.selectedHeader ?
                                                            <td colSpan="5" className="sub-table">
                                                                <div class="inner-form-container animate__animated animate__fadeIn">
                                                                <div className="input-group inner-form">
                                                                    <input className="form-control" list="datalistOptions" id="innerForm" placeholder="Type to search..." defaultValue={this.state.serachInnerVal} onKeyUp={this.onKeyUpValueInner.bind(this, item.HeaderID)} />
                                                                    <span className="input-group-append">
                                                                        <div className="input-group-text bg-transparent innerFormCustom"><i class="fa fa-search"></i></div>
                                                                    </span>
                                                                </div>
                                                                </div>
                                                                <div className="inner-sub-table animate__animated animate__slideInDown animate__faster">
                                                                    <table className="table table-borderless">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col" className="quantity">Quantity <div className="sort-container"><i className="fas fa-sort-up" onClick={this.handleSort.bind(this, `sort-quantity-asc${item.HeaderID}`)}></i><i className="fas fa-sort-down" onClick={this.handleSort.bind(this, `sort-quantity-desc${item.HeaderID}`)}></i></div></th>
                                                                                <th scope="col" className="unit">Unit Price <div className="sort-container"><i className="fas fa-sort-up" onClick={this.handleSort.bind(this, `sort-pricing-asc${item.HeaderID}`)}></i><i className="fas fa-sort-down" onClick={this.handleSort.bind(this, `sort-pricing-desc${item.HeaderID}`)}></i></div></th>
                                                                                <th scope="col" className="total">Total <div className="sort-container"><i className="fas fa-sort-up" onClick={this.handleSort.bind(this, `sort-total-asc${item.HeaderID}`)}></i><i className="fas fa-sort-down" onClick={this.handleSort.bind(this, `sort-total-desc${item.HeaderID}`)}></i></div></th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {item.Details.map((innerItem, index) =>
                                                                                <tr key={index}>
                                                                                    <td>{innerItem.DetailID}</td>
                                                                                    <td>{innerItem.Quantity}</td>
                                                                                    <td>{innerItem.UnitPrice}</td>
                                                                                    <td>{innerItem.LineItemTotal}</td>
                                                                                </tr>
                                                                            )}
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td> : null}
                                                        </tr>
                                                    </Fragment>
                                                )
                                            }) : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Invoice;
