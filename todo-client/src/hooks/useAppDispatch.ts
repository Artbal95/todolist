import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {AnyAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../store";

const useAppDispatch = (action: AnyAction): void => {
    const dispatch = useDispatch<AppDispatch>()
    useCallback(() => {
        dispatch(action)
    }, [dispatch])
}

export default useAppDispatch