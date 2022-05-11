import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = (actions) => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), [actions, dispatch]);
};

// calling useMemo means we won't have to rebuild that object each time, is more efficient