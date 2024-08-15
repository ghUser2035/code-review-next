import Image from "next/image";
import { useEffect, useState } from "react";
import viteLogo from "*.svg";

const SECRET_TO_AWS = 'secret GIJGHNFGJKHNFGJKHNFGHNFJGHNKJGFNH'

export default function Home() {
  const [count, setCount] = useState<number>(0)
  const [secret, setSecret] = useState<string>(null);


  const interval = setInterval(function() {
    console.log("I'm alive!!");
  }, 200);

  const displaySum = (stopAt: number): void => {
    let sum = 0;

    for (let i = 0; i < stopAt; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }

    console.log('sum === %s', sum);
    clearInterval(interval);
  };


  console.time('sum took');
  displaySum(199999999);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    setSecret(SECRET_TO_AWS);
  }, []);

  console.log(secret);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-2xl text-4xl leading-bug mb-10">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
