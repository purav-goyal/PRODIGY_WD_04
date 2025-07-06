import {createGlobalState} from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
    scrollRef:null,
})

export {setGlobalState, useGlobalState}