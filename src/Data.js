import {guitar , harmonium, speakers , mike , keyboardbook , ARbook } from './images'
import { v4 as uuidv4 } from 'uuid';

const Data = () => {
    const data = [
        {
            id : uuidv4(),
            name : 'Kamini Enterprise Amazing Guitar',
            description : `4-String 24'' Guitar For Kids, Brown`,
            ratings : 4,
            delivery : 'Fast Delivery',
            img : {guitar},
            priceDetails : {
                discountedPrice : 773,
                originalPrice : 999,
                discount : '22% off'
            },
            inStock : true,
            fastDelivery : true,
            wished : false,
            addedToCart : false
        },
        {
            id : uuidv4(),
            name : 'SG MUSICAL Harmonium',
            description : `7 Stopper Doulble Bellow 39 Key Long Sustain Sound Yoga Bhajan 7 Octave Hand Pumped Harmonium`,
            ratings : 4.5,
            delivery : '5 days minimum',
            img : {harmonium},
            priceDetails : {
                discountedPrice : 2000,
                originalPrice : 2300,
                discount : '13% off'
            },
            inStock : false,
            fastDelivery : false,
            wished : false,
            addedToCart : false
        },
        {
            id : uuidv4(),
            name : 'Dilurban 3.5mm Clip Microphone For Youtube',
            description : `Collar Mike for Voice Recording | Lapel Mic Mobile, PC, Laptop`,
            ratings : 3.6,
            delivery : 'Fast Delivery',
            img : {mike},
            priceDetails : {
                discountedPrice : 140,
                originalPrice : 799,
                discount : '82% off'
            },
            inStock : true,
            fastDelivery : true,
            wished : false,
            addedToCart : false
        },
        {
            id : uuidv4(),
            name : 'Playing Keyboard Made Easy',
            description : `Chords And Notations Of Top Bollywood Songs`,
            ratings : 4.1,
            delivery : '3 days minimum',
            img : {keyboardbook},
            priceDetails : {
                discountedPrice : 308,
                originalPrice : 320,
                discount : '3% off'
            },
            inStock : true,
            fastDelivery : false,
            wished : false,
            addedToCart : false
        },
        {
            id : uuidv4(),
            name : 'F FERONS Mini Wireless Portable Bluetooth Bass Passive Speaker',
            description : `Built-in Charger for Phones and Water splash proof with Rubber Surround Sound loudspeaker`,
            ratings : 5,
            delivery : 'Fast Delivery',
            img : {speakers},
            priceDetails : {
                discountedPrice :  509,
                originalPrice : 800,
                discount : '36% off'
            },
            inStock : true,
            fastDelivery : true,
            wished : false,
            addedToCart : false
        },
        {
            id : uuidv4(),
            name : 'Notes of a Dream',
            description : `English, Trilok Krishna`,
            ratings : 4.7,
            delivery : 'Fast Delivery',
            img : {ARbook},
            priceDetails : {
                discountedPrice :  445,
                originalPrice : 599,
                discount : '25% off'
            },
            inStock : false,
            fastDelivery : true,
            wished : false,
            addedToCart : false
        }
        
    ]
    return (
        data
    )
}

export default Data;