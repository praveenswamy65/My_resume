import React from "react";
import Starrating from "./Starrating";

export default function Skills() {
    var SkillsArray = [{
                         'Skillname':"C",'Rate':5},
        {
                         'Skillname':"C++",'Rate':4},
        {
                         'Skillname':"Python",'Rate':3},
        {
                         'Skillname':"ABAP",'Rate':4},
        {
                         'Skillname':"ReactJS",'Rate':3},
        {
                         'Skillname':"HTML5",'Rate':5},
        {
                         'Skillname':"CSS",'Rate':5},
        {
                         'Skillname':"Javascript",'Rate':4},
        {
                         'Skillname':"MySQL",'Rate':4},
        {
                         'Skillname':"XML",'Rate':4},
        {
                         'Skillname':"Matlab",'Rate':3},
        {
                         'Skillname':"CDS Views",'Rate':3},
        {
                         'Skillname':"OData",'Rate':3},
        {
                         'Skillname':"UI5 Development",'Rate':5},
        {
                         'Skillname':"Android Development",'Rate':4},
        {
                         'Skillname':"WEB Development",'Rate':4},
        {
                         'Skillname':"UI5 Development",'Rate':4},
        {
                         'Skillname':"RICEF Implementations",'Rate':4}
    ];
    var arrayLength = SkillsArray.length;
    var firstHalf = Math.ceil(arrayLength/2);
    var skillsHalf = [];
    for (var i = 0; i < firstHalf; i++) {
        skillsHalf.push(
             <ul  type={'None'}>
                <li style={{display: 'flex',marginBottom:'20px'}}>
                                    <span style={{
                                        flex: 1,
                                        color: '#727878',
                                        fontFamily: 'Open Sans',
                                        fontSize: '15px'
                                    }}>
                                        {SkillsArray[i].Skillname}
                                    </span>
                    <span style={{flex: 2,marginTop:'2px'}}>
                                        <Starrating rate={SkillsArray[i].Rate}/>
                                    </span>
                </li>
            </ul>
        );
    }
    var skillsFull = [];
    for (var i = firstHalf; i < arrayLength; i++) {
        skillsFull.push(
            <ul style={{flex:1}} type={'None'}>
                <li style={{display: 'flex',marginBottom:'20px'}}>
                                    <span style={{
                                        flex: 1,
                                        color: '#727878',
                                        fontFamily: 'Open Sans',
                                        fontSize: '15px'
                                    }}>
                                        {SkillsArray[i].Skillname}
                                    </span>
                    <span style={{flex: 1,marginTop:'2px'}}>
                                        <Starrating rate={SkillsArray[i].Rate}/>
                                    </span>
                </li>
            </ul>
        );
    }

    return (
        <div>
        <div style={{display:'flex'}}>
           <div style={{flex:1}}>
               {skillsHalf}
           </div>
            <div style={{flex:1}}>
                {skillsFull}
            </div>
        </div>
        </div>
    )
        ;
}