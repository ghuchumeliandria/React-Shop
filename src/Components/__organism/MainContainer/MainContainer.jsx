import React from "react";
import Header from "../../__molecules/Header/Header";
import { useState } from "react";
function MainContainer(){

    const [body,setBody] = useState("bg-transparent")
    return(
        <>
        <div className="py-6.5 px-5 max-sm:py-5 ">
            <div className={`absolute top-0 left-0 right-0 bottom-0 z-0 ${body}`}></div>
            <Header setBody={setBody} body={body}/>
        </div>
        </>
    )
}
export default MainContainer;