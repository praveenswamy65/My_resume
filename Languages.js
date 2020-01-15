import React from "react";
import Starrating from "./Starrating";

export default function Languages() {
    var Languages = [
        {
                         'Langname':"English",'Rate':5},
        {
                         'Langname':"Swedish",'Rate':1},
        {
                         'Langname':"Hindi",'Rate':5},
        {
                         'Langname':"Kannada",'Rate':5}
    ];
    var langLength = Math.ceil(Languages.length/2);
    var langHalf = [];
    for (var i = 0; i < langLength; i++) {
        langHalf.push(
             <ul  type={'None'}>
                <li style={{display: 'flex',marginBottom:'20px'}}>
                                    <span style={{
                                        flex: 1,
                                        color: '#727878',
                                        fontFamily: 'Open Sans',
                                        fontSize: '15px'
                                    }}>
                                        {Languages[i].Langname}
                                    </span>
                    <span style={{flex: 2,marginTop:'2px'}}>
                                        <Starrating rate={Languages[i].Rate}/>
                                    </span>
                </li>
            </ul>
        );
    }
    var langFull = [];
    for (var i = langLength; i < Languages.length; i++) {
        langFull.push(
            <ul style={{flex: 1}} type={'None'}>
                <li style={{display: 'flex', marginBottom: '20px'}}>
                                    <span style={{
                                        flex: 1,
                                        color: '#727878',
                                        fontFamily: 'Open Sans',
                                        fontSize: '15px'
                                    }}>
                                        {Languages[i].Langname}
                                    </span>
                    <span style={{flex: 1, marginTop: '2px'}}>
                                        <Starrating rate={Languages[i].Rate}/>
                                    </span>
                </li>
            </ul>
        );
    }
    return (
        <div>
        <div style={{display:'flex'}}>
           <div style={{flex:1}}>
               {langHalf}
           </div>
            <div style={{flex:1}}>
                {langFull}
            </div>
        </div>
        </div>
    )
        ;
}