import * as React from "react";
import {useFibonacciSeries} from "../hooks/useFibonacciSeries.ts";
import {useFibonacciWithMemo} from "../hooks/useFibonacciWithMemo.ts";
import {useFibonacciSeriesWithMap} from "../hooks/useFibonacciSeriesWithMap.ts";

export default function FibonacciSeriesDisplay () {
    const [number, setNumber] = React.useState("");
    const { series, displayFibonacci } = useFibonacciSeries();
    const { seriesWithMemo, displayFibonacciWithMemo } = useFibonacciWithMemo();
    const { seriesWithMap, displayFibonacciWithMap } = useFibonacciSeriesWithMap();

    return (
        <>
            <input type="number" value={number} min="1"
                   onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => {
                displayFibonacci(Number(number))
                displayFibonacciWithMemo(Number(number))
                displayFibonacciWithMap(Number(number))
            }}>
                Generate
            </button>
            <div>
                {series.length > 0 ?
                    (
                <span>{series.join(",")}</span>
                ) :
                    <span>enter number greater than 0 </span>
                }
            </div>
            <div>
                {seriesWithMemo.length > 0 ?
                    (
                <span>{seriesWithMemo.join(",")}</span>
                ) :
                    <span>enter number greater than 0 </span>
                }
            </div>
            <div>
                {seriesWithMap.length > 0 ?
                    (
                <span>{seriesWithMap.join(",")}</span>
                ) :
                    <span>enter number greater than 0 </span>
                }
            </div>
        </>)
}