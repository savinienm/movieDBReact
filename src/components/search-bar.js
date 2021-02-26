import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {searchText: '', placeholder: 'Rechercher un film...'}
    }
    render(){
        return (
        <div className="row">
            <div className="col-md-8 input-group">
                <input type="text" className="form-control input-lg" onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
                </span>
            </div>
        </div>
        )
    }
    handleChange(event){
        // setState rappelle render() à chaque fois qu'il est sollicité
        this.setState({searchText:event.target.value})
    }
    handleOnClick(event){
        // Props grâce au super(props)
        this.props.callback(this.state.searchText)
    }
}

export default SearchBar;