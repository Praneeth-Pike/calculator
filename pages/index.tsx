import Image from 'next/image'
import { use, useCallback, useEffect, useState } from 'react'

export default function Home() {

    const [display, setDisplay] = useState("0")

    const updateDisplay = (value: string) => {
        if (display === "0") return setDisplay(value)
        setDisplay(`${display}${value}`)
    }

    // const [operation, setOperation] = useState<"add" | "subtract" | "multiply" | "divide" | undefined>(undefined)


    // useEffect(() => {
    //     // onSelection of Operation, put whatever we have in dispaly into firstNumber
    //     if (operation) {
    //         setDisplay(`${display} ${getOperationSymbol(operation)}`)
    //     }
    // }, [operation])

    useEffect(() => {
        // Take keyboard inputs
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                setDisplay(Math.round(eval(display.trim())).toString())
            } else if (e.key === "Backspace") {
                setDisplay(display.slice(0, -1))
            } else if (e.key === "Escape") {
                setDisplay("0")
            } else if (e.key === "0") {
                updateDisplay("0")
            } else if (e.key === "1") {
                updateDisplay("1")
            } else if (e.key === "2") {
                updateDisplay("2")
            } else if (e.key === "3") {
                updateDisplay("3")
            } else if (e.key === "4") {
                updateDisplay("4")
            } else if (e.key === "5") {
                updateDisplay("5")
            } else if (e.key === "6") {
                updateDisplay("6")
            } else if (e.key === "7") {
                updateDisplay("7")
            } else if (e.key === "8") {
                updateDisplay("8")
            } else if (e.key === "9") {
                updateDisplay("9")
            } else if (e.key === ".") {
                updateDisplay(".")
            } else if (e.key === "+") {
                setDisplay(`${display} + `)
            } else if (e.key === "-") {
                setDisplay(`${display} - `)
            } else if (e.key === "*") {
                setDisplay(`${display} * `)
            } else if (e.key === "/") {
                setDisplay(`${display} / `)
            }

        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [display])



    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="h-auto max-w-6xl">
                {/* Display */}
                <div className="w-full h-[16rem] border-b-2 border-solid border-gray-200 flex items-end justify-end text-right p-4">
                    <p className={`${display.length < 5 ? "text-8xl" : "text-xl"} text-white text-right`}>{display}</p>
                </div>

                <div className="w-full flex">
                    <button className="number-button" onClick={() => updateDisplay("1")} >1</button>
                    <button className="number-button" onClick={() => updateDisplay("2")}>2</button>
                    <button className="number-button" onClick={() => updateDisplay("3")}>3</button>
                    <button className="number-button" onClick={() => setDisplay(`${display} + `)}>+</button>
                </div>
                <div className="w-full flex">
                    <button className="number-button" onClick={() => updateDisplay("4")}>4</button>
                    <button className="number-button" onClick={() => updateDisplay("5")}>5</button>
                    <button className="number-button" onClick={() => updateDisplay("6")}>6</button>
                    <button className="number-button" onClick={() => setDisplay(`${display} - `)}>-</button>
                </div>
                <div className="w-full flex">
                    <button className="number-button" onClick={() => updateDisplay("7")}>7</button>
                    <button className="number-button" onClick={() => updateDisplay("8")}>8</button>
                    <button className="number-button" onClick={() => updateDisplay("9")}>9</button>
                    <button className="number-button" onClick={() => setDisplay(`${display} / `)}>&#247;</button>
                </div>
                <div className="w-full flex">
                    <button className="number-button bg-orange-700 text-black-800 hover:bg-orange-400" onClick={() => setDisplay("0")}>AC</button>
                    <button className="number-button" onClick={() => updateDisplay("0")}>0</button>
                    <button className="number-button" onClick={() => updateDisplay(".")}>.</button>
                    <button className="number-button" onClick={() => setDisplay(`${display} * `)}>*</button>
                </div>
                <button onClick={() => setDisplay(Math.round(eval(display.trim())).toString())} className="flex w-full bg-green-400 hover:bg-green-700 text-3xl px-4 py-2">
                    Calculate
                </button>
            </div>
        </main>
    )
}


const getOperationSymbol = (operation: any) => {
    switch (operation) {
        case "add":
            return "+"
        case "subtract":
            return "-"
        case "multiply":
            return "*"
        case "divide":
            return "/"
        default:
            return ""
    }
}