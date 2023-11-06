// immediately invoked function expressions (IIFE)

(function chai(){
    // name iife
    console.log(`db connected`);
})();
// chai();

((name)=>{
    console.log(`db connected two ${name}`);
})("pushpak")