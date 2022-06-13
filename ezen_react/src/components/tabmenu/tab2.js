import React from 'react';

// 상태값을 로드하기 위한 hook과 action함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from "react-redux";
// Slice에 정의된 액션함수들 참조
import { getList } from "../../slices/tab2AxiosSlice";


const Tab2 = () => {
    
    React.useEffect(() => console.clear(), []);

    // hook을 통해 slice가 관리하는 상태값 가져오기
    const { rt, rtmsg, item, loading } = useSelector((state) => state.tab2Axios);

    // dispatch 함수 생성
    const dispatch = useDispatch();

    // 한번만 불러오기
    React.useEffect(() => {
        if (!loading){
            dispatch(getList());
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
                        <div>
                            {/* 여기 아래에 쓰고 싶은 데이터 사용 */}
                            <p>{JSON.stringify(item)}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};

export default Tab2;