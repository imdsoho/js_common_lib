export { sum, clamp } from "./math.js";
export { safeTrim } from "./string.js";
export { VERSION } from "./meta.js";

/*
* default export는 선택 사항입니다.
* [사용법 - JS]
import index from "../../dist/bundle.esm.js";
console.log(index.sum(1, 2));
*/

/*
import { sum, clamp } from "./math.js";
import { safeTrim } from "./string.js";
import { VERSION } from "./meta.js";

export default {
    sum,
    clamp,
    safeTrim,
    VERSION,
};*/

document.body.textContent = 'hello my first rollup project';