import React from 'react';

const ImageList = (props) => {
    return props.images.map(({ id, urls, description }) => <img key={id} src={urls.thumb} alt={description} />)
}

export default ImageList;