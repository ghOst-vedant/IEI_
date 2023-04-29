import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const FooterMap = () => {

    const containerStyle = {
        width: '700px',
        height: '300px'
    };

    const center = {
        lat: 19.012169577471994,
        lng: 73.0372432006026
    };

    const position = {
        lat: 19.012169577471994,
        lng: 73.0372432006026
    }



    // const onLoad = marker => {
    //     console.log('marker: ', marker)
    // }

    return (
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.1717402778745!2d73.03466657507478!3d19.012152482179275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3aba7752827%3A0x68a73a9d7a38c391!2sThe%20Institute%20Of%20Engineers!5e0!3m2!1sen!2sin!4v1681929256269!5m2!1sen!2sin"
        width="40%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
    ></iframe>

        
       
    )
};

export default FooterMap;