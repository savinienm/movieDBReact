import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {searchText: '', placeholder: 'Rechercher un film...'}
    }
    render(){
        return (
        <div>
        <input onChange={this.handleChange.bind(this)} placeholder={this.state.placeholder}/>
        </div>
        )
    }
    handleChange(event){
        // setState rappelle render() à chaque fois qu'il est sollicité
        this.setState({searchText:event.target.value})
    }
}

export default SearchBar;