// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/hello_world.js";

let helloWorld;

const runWasm = async () => {
    // Instantiate our wasm module
    helloWorld = await init("./pkg/hello_world_bg.wasm");

    // Call the Add function export from wasm, save the result
    const addResult = helloWorld.add(24, 24);

    // Set the result onto the body
    alert(`helloWorld.add(24, 24) = ${addResult}`);
};

runWasm();


window.handleClick = () => {
    if (!helloWorld) alert("helloWorld not initialized yet!");
    else helloWorld.greet();
}
