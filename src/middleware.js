import { NextResponse } from "next/server";
const middleware = (request) => {
    if(request.nextUrl.pathname != '/login'){
        return  NextResponse.rewrite(new URL('/login', request.url))
        
    }
        
    
}
export default middleware;