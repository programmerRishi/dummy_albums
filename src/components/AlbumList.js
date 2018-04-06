import React, {
  Component
} from 'react';
import {
  ScrollView
} from 'react-native';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }
  
    componentWillMount() {
 fetch('https://rallycoding.herokuapp.com/api/music_albums')
 .then(response => response.json()) // this line is important due to compatibililty issue... it parses the data from json into object
  .then((responseData) => this.setState({ albums: responseData }));// uses responseData instead of response.Data the latter is not working
  }
  renderAlbums() {
    return this.state.albums.map(album =>
       <AlbumDetail key={album.title} record={album} />
     );
  }
  render() {
    console.log(this.state);
    return (
      <ScrollView >
    {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
