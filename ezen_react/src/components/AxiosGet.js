import React, { useState, useEffect } from 'react';
import axios from "axios"
import moment from "moment"

/**
* @START_INDEX --> 요청시작위치
* @END_INDEX --> 요청종료위치
* @BUS_ROUTE_NO --> 노선번호
*/

//axios를 활용하여 파라미터값을 받아 요청변수를 달리하는 함수
const AxiosGet = (START_INDEX, END_INDEX, BUS_ROUTE_NO) => {

    const [data, setData] = useState();
    const nowDate = parseInt(moment().format("YYYYMM")) - 1;

    //BUS_ROUTE_NO 노선번호 요청변수는 선택사항이므로 
    //노선번호값의 존재여부에 따라 데이터요청을 다르게함
    useEffect(() => {
        if (BUS_ROUTE_NO === !null) {
            axios.get('http://openapi.seoul.go.kr:8088/6c61594f5a7365753130325779546a57/json/CardBusTimeNew/'
                + START_INDEX + '/' + END_INDEX + '/' + nowDate + '/' + BUS_ROUTE_NO + "/")
                .then(res => setData(res.data));
        } else {
            axios.get('http://openapi.seoul.go.kr:8088/6c61594f5a7365753130325779546a57/json/CardBusTimeNew/'
                + START_INDEX + '/' + END_INDEX + '/' + nowDate + '/')
                .then(res => setData(res.data));
        }

    }, [])
    return data
};

export default AxiosGet;