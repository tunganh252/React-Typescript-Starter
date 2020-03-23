import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components"

const Bound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export interface CounterProps {
    defaultValue: number;
    afterChange?: (value: number, prevValue: number, type: "up" | "down" | "none") => void;
}

interface CounterState {
    value: number;
    prevValue: number | undefined;
    lastChangeType: "up" | "down" | "none";
}


export default (props: CounterProps) => {
    const [count, setCount] = useState<CounterState>({
        value: props.defaultValue,
        lastChangeType: "none",
        prevValue: undefined
    });

    const upCount = () => {
        setCount({ value: count.value + 1, lastChangeType: "up", prevValue: count.value });
    };

    const downCount = () => {
        setCount({ value: count.value - 1, lastChangeType: "down", prevValue: count.value });
    };

    useEffect(() => {
        return () => {
            if (props.afterChange) {
                props.afterChange(count.value, count.prevValue, count.lastChangeType);
            }
        };
    }, [count]);

    return (
        <Bound>
            <button onClick={upCount}>Up</button>
            <label>{count.value}</label>
            <button onClick={downCount}>Down</button>
        </Bound>
    );
};