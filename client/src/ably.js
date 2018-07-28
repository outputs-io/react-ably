import { Realtime } from "ably/browser/static/ably-commonjs.js";

const API_KEY = process.env.API_KEY || "GET_THIS_FROM_DANI";

window.Ably = new Realtime(API_KEY);
