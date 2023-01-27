// 
console.log("Run Bun-server on port 3000!");
export default {
    port: 3000,
    fetch(request: any){
        console.log(request);
        return new Response('Welcome to BUN')
        
    }
}