import React, { Component } from 'react'

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            searchValue : ''
        }
    }
    
    onInputChange(event) {
        this.setState({ searchValue : event.target.value })
        console.log(this.state.searchValue);
    }

    render() {
        return (
            <div className="col-md-12 custom-form form-group ">
                <input type="search" 
                       value={this.state.searchValue} 
                       onChange={(event) => this.onInputChange(event)} 
                       className="form-control"
                       />
            </div>
            
        )       
    }
    
}

export default SearchBar;
