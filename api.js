import express from 'express';
import axios from 'axios';

import getGoogleErrorMessage from './error.js';

const app = express();

const FORWARD_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const REVERSE_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;


// get street address of a place closest to given coordinates
app.get('/geocode/reverse', (req, res) => {
    if (!req.query.lat || !req.query.lng) {
        res.status(400).json({ message: 'Missing required params: lat, lng' });
    }

    axios.get(REVERSE_GEOCODE_URL, {
        params: {
            latlng: req.query.lat.concat(',', req.query.lng),
            result_type: 'street_address',
            key: GOOGLE_API_KEY
        }
    })
    .then(response => {
        if (response.data.status !== "OK") {
            const error = getGoogleErrorMessage(response.data.status);
            res.status(error.code).json({ message: error.message });
            return;
        }
        const results = response.data.results[0];
        res.json({
            address: results.formatted_address,
            location: {
                lat: results.geometry.location.lat,
                lng: results.geometry.location.lng
            },
            place_id: results.place_id
        });
    })
    .catch(err => {
        console.log(err);
        res.status(421).json({message: "Encountered a problem with the request at server end."})
    });
});


// get coordinates of a given street address
app.get('/geocode/forward', (req, res) => {
    if (!req.query.address) {
        res.status(400).json({ message: 'Missing required params: address' });
    }

    axios.get(FORWARD_GEOCODE_URL, {
        params: {
            address: req.query.address,
            key: GOOGLE_API_KEY
        }
    })
    .then(response => {
        if (response.data.status !== "OK") {
            const error = getGoogleErrorMessage(response.data.status);
            res.status(error.code).json({ message: error.message });
            return;
        }
        const results = response.data.results[0];
        res.json({
            address: results.formatted_address,
            location: {
                lat: results.geometry.location.lat,
                lng: results.geometry.location.lng
            },
            place_id: results.place_id
        });
    })
    .catch(err => {
        console.log(err);
        res.status(421).json({message: "Encountered a problem with the request at server end."});
    });
});


app.listen(process.env.PORT || 5000, () => {
    console.log("Server started at http://localhost:5000");
});