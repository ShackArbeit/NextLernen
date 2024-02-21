import { NextResponse, NextRequest } from "next/server";

// export function middleware(request:NextRequest){
//         return NextResponse.redirect(new URL('/',request.url))
// }

// export const config={
//     matcher:'/Profile'
// }

// export function middleware(request:NextRequest){
//     if(request.nextUrl.pathname==='dashboard'){
//         return NextResponse.redirect(new URL('/comments',request.url))
//     }

// }

export function middleware(request:NextRequest){
    const response=NextResponse.next()
    const themePreference=request.cookies.get('theme')
    if(!themePreference){
        response.cookies.set('theme','dark')
    }
    response.headers.set('custom-header','customValues')
    return response
}