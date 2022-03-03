import React, { useCallback, useState } from 'react';

const UseCallback = () => {
    const [view1, setView1] = useState(0);
    const [view2, setView2] = useState(0);

    const maple = () => {
        console.log("---------------- maple ---------------")
        console.log(view1)
        console.log(view2)
    };

    const callbackMaple = useCallback(() => {
        console.log("---------------- callbackMaple ---------------")
        console.log(view1)
        console.log(view2)
    }, [view1]);

    return (
        <div>
            <h1>useCallback 테스트 페이지</h1>
            <h4>view1에는 useCallback이 적용되어있지 않고, view2에는 적용되어있으나 dependency에는 view1만 들어가있다</h4>
            <button 
                onClick={() => {
                    setView1((view)=>{console.log(view+1); return view+1;})
                }}>
                view1
            </button>
            <br />
            <button 
                onClick={() => {
                    setView2((view)=>{console.log(view+1); return view+1;})
                }}>
                view2
            </button>
            <br />
            <button onClick={maple}>maple</button>
            <br />
            <button onClick={callbackMaple}>callbackMaple</button>
            
            <p>view1: {view1}</p>
            <p>view2: {view2}</p>
        </div>
    );
};

export default UseCallback;

// 문서 볼것