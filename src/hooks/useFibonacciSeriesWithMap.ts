import * as React from "react";

//if n = 2 , display 0, 1
export function useFibonacciSeriesWithMap(){
    //state is determined based on the main functionality - this hook is to display the series
    const mapInitialState: Map<number, number> = new Map();
    mapInitialState.set(1, 0);
    mapInitialState.set(2, 1);

    const [seriesWithMap, setSeriesWithMap] = React.useState<number[]>([]);
    const [fibonacciMemoryMap, setFibonacciMemoryMap] = React.useState<Map<number, number>>(mapInitialState);

    const recursiveFibonacci = (n: number): number => {
        let calculatedResult: number;
        if (fibonacciMemoryMap.has(n)) {
            calculatedResult = fibonacciMemoryMap.get(n) || 0;
        } else {
            calculatedResult = recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
            fibonacciMemoryMap.set(n, calculatedResult);
            setFibonacciMemoryMap(fibonacciMemoryMap);
        }
        return calculatedResult;
    }
        //n=5 -> 0 , 1 ,
        const displayFibonacciWithMap = (n: number) => {
            const resultArray: number[] = [];
            let calculatedResult: number;
            for (let i = 1; i <= n; i++){
                calculatedResult = recursiveFibonacci(i);
                resultArray.push(calculatedResult);
            }
            setSeriesWithMap(resultArray);
        }

        return {
            seriesWithMap,
            displayFibonacciWithMap
        }
}