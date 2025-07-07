import {useMemo, useState} from "react";

function recursiveFibonacci(n: number): number {
    if(n < 0) return -1;
    if (n <= 1) return 0;
    if (n == 2) return 1;
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
export function useFibonacciWithMemo() {
    const [number, setNumber] = useState(1);

    //this saves calculation without rerendering
    const seriesWithMemo = useMemo(() => {
        const result :  number[] = [];
        for (let i = 1; i <= number; i++) {
            result.push(recursiveFibonacci(i));
        }
        return result;
    }, [number]);

    function displayFibonacciWithMemo(number: number) {
        setNumber(number);
    }

    return {
        seriesWithMemo,
        displayFibonacciWithMemo
    }
}