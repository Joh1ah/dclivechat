import { debug } from "./common.js";
import { initGall } from "./gall.js";

(async() => {
    let gall = await initGall('20thdenki', 5000);
    gall.onpostdata = debug;
})();
