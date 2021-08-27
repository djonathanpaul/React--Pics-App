import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';


class App extends React.Component{

    state={arrImages:[]}

    onSearchSubmit=async (term)=>{
        
        const response = await unsplash.get('search/photos',{
            params:{query: term},          
        });
        
        this.setState({arrImages: response.data.results});
    }

    render(){

        console.log(this.state.arrImages)
        return (
           
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar whenSubmit = {this.onSearchSubmit}/>
                <ImageList images={this.state.arrImages}/>
            </div>
        );
    }
}

export default App;