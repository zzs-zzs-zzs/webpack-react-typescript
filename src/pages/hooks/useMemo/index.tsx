import React, { useEffect, useMemo, useState } from "react"

export const UseMemo: React.FC<{}> = () => {
  const [count, setCount] = useState(100)

  const [curTime, setCurTime] = useState("")

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurTime(new Date().toLocaleString())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  // 下面写法，由于每次setCurTime时候，会重新渲染，所以for循环会一直执行，使用useMemo可以解决这个问题
  const arr: number[] = useMemo(() => {
    console.log("%c [ useMemo执行了 ]-29", "font-size:13px; background:pink; color:#bf2c9f;")
    const list = []
    for (let i = 0; i <= count; i++) {
      if (i % 2 === 0) {
        list.push(i)
      }
    }
    return list
  }, [count])

  return (
    <>
      <form>
        <div>{curTime}</div>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={count}
          onChange={(event) => {
            // 设置最大值为 100000
            const num = Math.min(100_000, Number(event.target.value))
            setCount(num)
          }}
        />
      </form>
      <p>
        有{arr.length}偶数在 0 到 {count} 之间:<span>{arr.join(", ")}</span>
      </p>
    </>
  )
}
