import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchText: '', 
            placeholder: 'Rechercher un film...',
            intervalBeforeRequest: 500,
            lockRequest: false
        }
    }

    render(){
        return (
                <input onKeyUp={this.handleChange.bind(this)} type="text" className="rounded mx-3" placeholder="Rechercher un film..." />
        )
    }

    handleChange(event){
        // setState rappelle render() à chaque fois qu'il est sollicité
        this.setState({searchText:event.target.value})
        if(!this.state.lockRequest){
            this.setState({lockRequest:true})
            setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforeRequest)
        }
    }

    handleOnClick(){
        this.search();
    }

    search(){
        // Props grâce au super(props)
        this.props.callback(this.state.searchText);
        this.setState({lockRequest:false});
    }
}

export default SearchBar;