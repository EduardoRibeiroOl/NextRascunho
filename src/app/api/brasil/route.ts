import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {code: string}}){ // ta pegando url, depois eu tiro

    const {code} = params;

    try {
        const response = await fetch(`https://brasilapi.com.br/api/banks/v1/${code}`); // trocar isso daqui
        if(!response.ok){
            return NextResponse.json({error: "Bank not found"}, {status: 404});
        }
        
        const data = await response.json();
        return NextResponse.json(data); // retornando json para page

    }catch(error){
        return NextResponse.json({error: "Internal Server Error"}, {status: 500});
    }
}