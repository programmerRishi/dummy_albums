import React from 'react';
import { Image, View, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ record }) => {
  const { title, artist, thumbnail_image, image, url } = record;
  const { thumbnailStyle,
     headerContainerStyle,
      thumbnailContainerStyle,
       headerTextStyle,
       coverImageStyle,
      } = styles;
  return (
  <Card>
  <CardSection>
  <View style={thumbnailContainerStyle}>
     <Image
      style={thumbnailStyle}
      source={{ uri: thumbnail_image }}
     />
  </View>
  <View style={headerContainerStyle}>
     <Text style={headerTextStyle}>{title}</Text>
     <Text>{artist}</Text>
  </View>
  </CardSection>
  <CardSection >
  <Image
   source={{ uri: image }}
   style={coverImageStyle}
  />
  </CardSection>

  <CardSection>
    <Button whenPressed={() => Linking.openURL(url)} >
    Buy Now
    </Button>
  </CardSection>

  </Card>
 );
};

const styles = {
  thumbnailStyle: {
  height: 50,
  width: 50
},
headerContainerStyle: {
  flexDirection: 'column',
  justifyContent: 'space-around'
},
headerTextStyle: {
  fontSize: 18
},
thumbnailContainerStyle: {
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
  marginLeft: 10
},
coverImageStyle: {
  height: 300,
  flex: 1,
  width: null
},

};


export default AlbumDetail;
