import React, { useRef, useEffect } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from "faker"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: '441번 버스 하차 승객 수 추이',
        },
    },
};



function Tab1Chart(inputData) {
    const labels = ['1시', '2시', '3시', '4시', '5시', '6시', '7시', '8시', '9시', '10시', '11시', '12시', '13시', '14시', '15시', '16시', '17시', '18시', '19시', '20시', '21시', '22시', '23시', '00시'];
    const ChartData = { inputData }.inputData.inputData
    console.log(ChartData);
    let data1 = null;
    let data2 = null;
    let data3 = null;
    let data4 = null;
    let data5 = null;
    let data6 = null;
    let data7 = null;
    let data8 = null;
    let data9 = null;
    let data10 = null;
    let data11 = null;
    let data12 = null;
    let data13 = null;
    let data14 = null;
    let data15 = null;
    let data16 = null;
    let data17 = null;
    let data18 = null;
    let data19 = null;
    let data20 = null;
    let data21 = null;
    let data22 = null;
    let data23 = null;
    let data24 = null;
    ChartData.map((v, i) => {
        data1 = data1 + v.ONE_ALIGHT_NUM
        data2 = data2+ v.TWO_ALIGHT_NUM
        data3 = data3+ v.THREE_ALIGHT_NUM
        data4 = data4+ v.FOUR_ALIGHT_NUM
        data5 = data5+ v.FIVE_ALIGHT_NUM
        data6 = data6+ v.SIX_ALIGHT_NUM
        data7 = data7+ v.SEVEN_ALIGHT_NUM
        data8 = data8+ v.EIGHT_ALIGHT_NUM
        data9 = data9+ v.NINE_ALIGHT_NUM
        data10 = data10+ v.TEN_ALIGHT_NUM
        data11 = data11+ v.ELEVEN_ALIGHT_NUM
        data12 = data12+ v.TWELVE_ALIGHT_NUM
        data13 = data13+ v.THIRTEEN_ALIGHT_NUM
        data14 = data14+ v.FOURTEEN_ALIGHT_NUM
        data15 = data15+ v.FIFTEEN_ALIGHT_NUM
        data16 = data16+ v.SIXTEEN_ALIGHT_NUM
        data17 = data17+ v.SEVENTEEN_ALIGHT_NUM
        data18 = data18+ v.EIGHTEEN_ALIGHT_NUM
        data19 = data19+ v.NINETEEN_ALIGHT_NUM
        data20 = data20+ v.TWENTY_ALIGHT_NUM
        data21 = data21+ v.TWENTY_ONE_ALIGHT_NUM
        data22 = data22+ v.TWENTY_TWO_ALIGHT_NUM
        data23 = data23+ v.TWENTY_THREE_ALIGHT_NUM
        data24 = data24+ v.MIDNIGHT_ALIGHT_NUM

    })
    console.log(data1)
    const data = {
        labels,
        datasets: [
            {
                label: '시간대별 하차 총 승객 수',
                data: [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18, data19, data20, data21, data22, data23, data24],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },

        ],
    };
    return (
        <Line options={options} data={data} />
    );
}

export default Tab1Chart;