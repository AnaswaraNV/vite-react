import * as React from "react";

//if n = 2 , display 0, 1
export function useFibonacciSeries(){
    //state is determined based on the main functionality - this hook is to display the series
    const [series, setSeries] = React.useState<number[]>([]);

    const fibonacciSeriesEntry = (n: number): number => {
        if (n < 0) return -1;
        if (n <=  1) return n;
        return fibonacciSeriesEntry(n - 1) + fibonacciSeriesEntry(n - 2);
    }
        //n=2
        const displayFibonacci = (n: number) => {
            const resultArray: number[] = [];
            for (let i = 0; i < n; i++){
                const result = fibonacciSeriesEntry(i); // 0,
                resultArray.push(result);
            }
            setSeries(resultArray);
        }

        return {
            series,
            displayFibonacci
        }
}