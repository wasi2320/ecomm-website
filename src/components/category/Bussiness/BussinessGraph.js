import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseFloat(value.replace(/[^0-9.]/g, ""));
    const duration = 2000;
    const increment = (end - start) / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(start.toFixed(value.includes("T") ? 1 : 0));
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{value.replace(/[0-9.]+/, count)}</span>;
};

export default function BusinessGraph() {
  return (
    <div className="flex flex-col items-center bg-gray-50 p-10">
      <h1 className="text-xl font-semibold mb-6">Business Growth</h1>
      <div className="flex justify-between w-full max-w-4xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="mt-2 text-3xl font-bold"
          >
            <Counter key="$5.2T" value="$2 M" />
          </motion.div>
          <p className="text-gray-600">Total Revenue</p>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-2 text-3xl font-bold"
          >
            <Counter key="86%" value="86%" />
          </motion.div>
          <p className="text-gray-600">Growth Rate</p>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-2 text-3xl font-bold"
          >
            <Counter key="12000+" value="12000+" />
          </motion.div>
          <p className="text-gray-600">Products Sold</p>
        </div>
      </div>
    </div>
  );
}
