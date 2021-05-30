import guitar from "./images/guitar.jpeg";
import harmonium from "./images/harmonium.jpeg";
import speakers from "./images/speakers.jpeg";
import mike from "./images/mike.jpeg";
import keyboardbook from "./images/keyboardbook.jpeg";
import ARbook from "./images/ARbook.jpeg";

import { v4 as uuidv4 } from "uuid";

export const data =  [
    {
      id: uuidv4(),
      name: "Kamini Enterprise Amazing Guitar",
      description: `4-String 24'' Guitar For Kids, Brown`,
      ratings: 4,
      delivery: "Fast Delivery",
      image:  guitar ,
      priceDetails: {
        discountedPrice: 773,
        originalPrice: 999,
        discount: "22%  ",
      },
      inStock: true,
      fastDelivery: true,
      isWishListed: false,
      isAddedToCart: false,
    },
    {
      id: uuidv4(),
      name: "SG MUSICAL Harmonium",
      description: `7 Stopper Doulble Bellow 39 Key Long Sustain Sound Yoga Bhajan 7 Octave Hand Pumped Harmonium`,
      ratings: 4.5,
      delivery: "5 days minimum",
      image:  harmonium ,
      priceDetails: {
        discountedPrice: 2000,
        originalPrice: 2300,
        discount: "13%  ",
      },
      inStock: false,
      fastDelivery: false,
      isWishListed: false,
      isAddedToCart: false,
    },
    {
      id: uuidv4(),
      name: "Dilurban 3.5mm Clip Microphone For Youtube",
      description: `Collar Mike for Voice Recording | Lapel Mic Mobile, PC, Laptop`,
      ratings: 3.6,
      delivery: "Fast Delivery",
      image:  mike ,
      priceDetails: {
        discountedPrice: 140,
        originalPrice: 799,
        discount: "82%  ",
      },
      inStock: true,
      fastDelivery: true,
      isWishListed: false,
      isAddedToCart: false,
    },
    {
      id: uuidv4(),
      name: "Playing Keyboard Made Easy",
      description: `Chords And Notations Of Top Bollywood Songs`,
      ratings: 4.1,
      delivery: "3 days minimum",
      image:  keyboardbook ,
      priceDetails: {
        discountedPrice: 308,
        originalPrice: 320,
        discount: "3%  ",
      },
      inStock: true,
      fastDelivery: false,
      isWishListed: false,
      isAddedToCart: false,
    },
    {
      id: uuidv4(),
      name: "FERONS Mini Wireless Bluetooth  Speaker",
      description: `Built-in Charger for Phones and Water splash proof with Rubber Surround Sound loudspeaker`,
      ratings: 5,
      delivery: "Fast Delivery",
      image:  speakers ,
      priceDetails: {
        discountedPrice: 509,
        originalPrice: 800,
        discount: "36%  ",
      },
      inStock: true,
      fastDelivery: true,
      isWishListed: false,
      isAddedToCart: false,
    },
    {
      id: uuidv4(),
      name: "Notes of a Dream",
      description: `English, Trilok Krishna`,
      ratings: 4.7,
      delivery: "Fast Delivery",
      image:  ARbook ,
      priceDetails: {
        discountedPrice: 445,
        originalPrice: 599,
        discount: "25%  ",
      },
      inStock: false,
      fastDelivery: true,
      isWishListed: false,
      isAddedToCart: false,
    },
  ];

