import React from 'react';

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";
// Slice에 정의된 액션함수들 참조
import { getList } from "../../slices/tab1AxiosSlice";
// ChartJS
import Tab1Chart from "../tabChart/tab1Chart"

const Tab1 = () => {

    React.useEffect(() => console.clear(), []);

    // hook을 통해 slice가 관리하는 상태값 가져오기
    const { rt, rtmsg, item, loading } = useSelector((state) => state.tab1Axios);

    // dispatch 함수 생성
    const dispatch = useDispatch();

    // 한번만 불러오기
    React.useEffect(() => {
        if (!loading) {
            dispatch(getList());
            // console.log(item.CardBusTimeNew.row)
        }
    }, []);

    return (
        <div>
            {rt !== 200 ? (
                <div>
                    <h3>{rt} Error</h3>
                    <p>{rtmsg}</p>
                </div>
            ) : (
                <div>
                    {item && (
                        <div className=''>
                            {/* 여기 아래에 쓰고 싶은 데이터 사용 */}
                            <h2>441번 버스 하차 승객 수</h2>
                        
                            <Tab1Chart inputData={item.CardBusTimeNew.row}/>

                            <table border="1" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>버스 노선 이름</th>
                                        <th>1시 하차</th>
                                        <th>2시 하차</th>
                                        <th>3시 하차</th>
                                        <th>4시 하차</th>
                                        <th>5시 하차</th>
                                        <th>6시 하차</th>
                                        <th>7시 하차</th>
                                        <th>8시 하차</th>
                                        <th>9시 하차</th>
                                        <th>10시 하차</th>
                                        <th>11시 하차</th>
                                        <th>12시 하차</th>
                                        <th>13시 하차</th>
                                        <th>14시 하차</th>
                                        <th>15시 하차</th>
                                        <th>16시 하차</th>
                                        <th>17시 하차</th>
                                        <th>18시 하차</th>
                                        <th>19시 하차</th>
                                        <th>20시 하차</th>
                                        <th>21시 하차</th>
                                        <th>22시 하차</th>
                                        <th>23시 하차</th>
                                        <th>00시 하차</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {item.CardBusTimeNew.row.map((v, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{v.BUS_ROUTE_NM}</td>
                                                <td>{v.ONE_ALIGHT_NUM}</td>
                                                <td>{v.TWO_ALIGHT_NUM}</td>
                                                <td>{v.THREE_ALIGHT_NUM}</td>
                                                <td>{v.FOUR_ALIGHT_NUM}</td>
                                                <td>{v.FIVE_ALIGHT_NUM}</td>
                                                <td>{v.SIX_ALIGHT_NUM}</td>
                                                <td>{v.SEVEN_ALIGHT_NUM}</td>
                                                <td>{v.EIGHT_ALIGHT_NUM}</td>
                                                <td>{v.NINE_ALIGHT_NUM}</td>
                                                <td>{v.TEN_ALIGHT_NUM}</td>
                                                <td>{v.ELEVEN_ALIGHT_NUM}</td>
                                                <td>{v.TWELVE_ALIGHT_NUM}</td>
                                                <td>{v.THIRTEEN_ALIGHT_NUM}</td>
                                                <td>{v.FOURTEEN_ALIGHT_NUM}</td>
                                                <td>{v.FIFTEEN_ALIGHT_NUM}</td>
                                                <td>{v.SIXTEEN_ALIGHT_NUM}</td>
                                                <td>{v.SEVENTEEN_ALIGHT_NUM}</td>
                                                <td>{v.EIGHTEEN_ALIGHT_NUM}</td>
                                                <td>{v.NINETEEN_ALIGHT_NUM}</td>
                                                <td>{v.TWENTY_ALIGHT_NUM}</td>
                                                <td>{v.TWENTY_ONE_ALIGHT_NUM}</td>
                                                <td>{v.TWENTY_TWO_ALIGHT_NUM}</td>
                                                <td>{v.TWENTY_THREE_ALIGHT_NUM}</td>
                                                <td>{v.MIDNIGHT_ALIGHT_NUM}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

export default Tab1;