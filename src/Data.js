import guitar from "./assets/images/guitar.jpeg";
import harmonium from "./assets/images/harmonium.jpeg";
import speakers from "./assets/images/speakers.jpeg";
import mike from "./assets/images/mike.jpeg";
import keyboardbook from "./assets/images/keyboardbook.jpeg";
import ARbook from "./assets/images/ARbook.jpeg";

import { v4 as uuidv4 } from "uuid";

export const data = [
  {
    id: uuidv4(),
    name: "Silver Enterprise Amazing Guitar",
    description: `4-String 24'' Guitar For Kids, Brown`,
    ratings: 4,
    delivery: "Fast Delivery",
    image: guitar,
    priceDetails: {
      originalPrice: 999,
      discount: "22%  ",
    },
    quantity: 1,
    inStock: true,
    fastDelivery: true,
    isWishListed: false,
    isAddedToCart: false,
    highlights: [
      "Material : Plastic",
      "Non-battery Operated",
      "Age : 1+ Years",
    ],
  },
  {
    id: uuidv4(),
    name: "SG MUSICAL Harmonium",
    description: `7 Stopper Doulble Bellow 39 Key Long Sustain Sound Yoga Bhajan 7 Octave Hand Pumped Harmonium`,
    ratings: 4.5,
    delivery: "5 days minimum",
    image: harmonium,
    priceDetails: {
      originalPrice: 2300,
      discount: "13%  ",
    },
    quantity: 1,
    inStock: false,
    fastDelivery: false,
    isWishListed: false,
    isAddedToCart: false,
    highlights: [
      "Type: Hand Pumped",
      "Number of Keys: 39",
      "Body Material: Poplar",
      "Bellow Type: Two Fold Bellow",
      "Reed Type: Bass Reed",
      "Number of Stop Knobs: 7",
      "Scale Changer: No",
      "Coupler Present: No",
    ],
  },
  {
    id: uuidv4(),
    name: "Dilurban 3.5mm Clip Microphone For Youtube",
    description: `Collar Mike for Voice Recording | Lapel Mic Mobile, PC, Laptop`,
    ratings: 3.6,
    delivery: "Fast Delivery",
    image: mike,
    priceDetails: {
      originalPrice: 799,
      discount: "82%  ",
    },
    quantity: 1,
    inStock: true,
    fastDelivery: true,
    isWishListed: false,
    isAddedToCart: false,
    highlights: [
      "Color : Black",
    ],
  },
  {
    id: uuidv4(),
    name: "Playing Keyboard Made Easy",
    description: `Chords And Notations Of Top Bollywood Songs`,
    ratings: 4.1,
    delivery: "3 days minimum",
    image: keyboardbook,
    priceDetails: {
      originalPrice: 320,
      discount: "3%  ",
    },
    quantity: 1,
    inStock: true,
    fastDelivery: false,
    isWishListed: false,
    isAddedToCart: false,
    highlights: [
      "Language: English",
      "Binding: Paperback",
      "Publisher: Notion Press, Inc.",
      "Genre: Music",
      "Edition: 1, 2016",
      "Pages: 252"
    ],
  },
  {
    id: uuidv4(),
    name: "FERONS Mini Wireless Bluetooth  Speaker",
    description: `Built-in Charger for Phones and Water splash proof with Rubber Surround Sound loudspeaker`,
    ratings: 5,
    delivery: "Fast Delivery",
    image: speakers,
    priceDetails: {
      originalPrice: 800,
      discount: "36%  ",
    },
    quantity: 1,
    inStock: true,
    fastDelivery: true,
    isWishListed: false,
    isAddedToCart: false,
    highlights: [
      "PowerOutput: 10 W",
      "BatteryLife: 6 hr ",
      "BluetoothVersion: 4.1",
      "WirelessRange: 10 m",
      "Wireless music streaming via Bluetooth" ,
      "Memory Card Slot",
    ],
  },
  {
    id: uuidv4(),
    name: "Notes of a Dream",
    description: `English, Trilok Krishna`,
    ratings: 4.7,
    delivery: "Fast Delivery",
    image: ARbook,
    priceDetails: {
      originalPrice: 599,
      discount: "25%  ",
    },
    quantity: 1,
    inStock: false,
    fastDelivery: true,
    isWishListed: false,
    isAddedToCart: false,
    highlights: [
      "Language: English",
      "Binding: Hardcover",
      "Publisher: Penguin Random House India Pvt. Ltd",
      "Genre: Biography & Autobiography",
      "Pages: 360",
    ],
  },
];
