import React, { Component } from 'react';
var data = JSON.parse(localStorage.getItem('CART'));
class CartForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: data,
            name: '',
            phone: '',
            email: '',
            note: ''
        }
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            product: data,
            name: '',
            phone: '',
            email: '',
            note: ''
        });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="required form-control" name="name"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="Name's customer"
                    />
                </div>
                <div className="form-group">
                    <label >Phone number</label>
                    <input type="text" className="required form-control"
                        name="phone"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="Your phone number" />
                </div>
                <div className="form-group" id="pnlAddress">
                    <label >Email</label>
                    <input type="text" className="required form-control"
                        name="email"
                        value={this.state.value}
                        onChange={this.onChange}
                        placeholder="Your email" />
                </div>
                <div className="form-group">
                    <label>Note</label>
                    <textarea rows="2" className="form-control"
                        name="note"
                        value={this.state.value}
                        onChange={this.onChange}
                    ></textarea>
                </div>
                <button className="js-btnPlaceOrder btn btn-info fw" type="submit">Order</button>
            </form>
        );
    }
}
export default CartForm;
