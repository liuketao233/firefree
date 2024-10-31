'use client';

import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';

const options = [
  { amount: 10000, price: 10.0, value: 'diamond_10000' },
  { amount: 20000, price: 20.0, value: 'diamond_20000' },
  { amount: 50000, price: 50.0, value: 'diamond_50000' },
  { amount: 100000, price: 100.0, value: 'diamond_100000' },
  { amount: 200000, price: 200.0, value: 'diamond_200000' },
  { amount: 500000, price: 500.0, value: 'diamond_500000' },
  { amount: 1000000, price: 1000.0, value: 'diamond_1000000' },
  { amount: 2000000, price: 2000.0, value: 'diamond_2000000' },
];

const diamondIconUrl =
  '../public/diamond.png';
const chestImageUrl =
  '../public/plasmic/free_fire_simulator/images/diamonds1.png';

function DiamondSelector({ onSelect }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelect = useCallback(
    (amount, price, value) => {
      setSelectedIndex(options.findIndex((option) => option.amount === amount));
      if (onSelect && typeof onSelect === 'function') {
        onSelect(amount, price, value);
      } else {
        console.log(`已选择: ${amount} 钻石，价格: USDT ${price}，值: ${value}`);
      }
    },
    [onSelect]
  );

  return (
    <div className="bg-[#2E2E2E] p-4 rounded-lg w-full max-w-7xl mx-auto">
      <h2 className="text-white text-2xl mb-4">选择数量</h2>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`bg-black bg-opacity-25 rounded-lg p-2 transition-all duration-200 transform hover:scale-105 focus:outline-none ${
              selectedIndex === index
                ? 'ring-2 ring-yellow-400 bg-opacity-50 scale-105'
                : ''
            }`}
            onClick={() => handleSelect(option.amount, option.price, option.value)}
            value={option.value}
          >
            <div className="grid grid-rows-[auto_1fr_auto] h-full">
              <div className="flex items-center justify-center mb-1">
                <Image
                  src={[diamondIconUrl]}
                  alt="钻石"
                  width={16}
                  height={16}
                  className="mr-1 w-4 h-4 sm:w-6 sm:h-6"
                />
                <span className="text-white font-bold text-xs sm:text-sm">
                  {option.amount.toLocaleString()}
                </span>
              </div>
              <div className="relative w-full aspect-square mb-1">
                <Image
                  src={[chestImageUrl]}
                  alt="宝箱"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="bg-yellow-500 text-black font-bold py-1 px-2 rounded text-xs sm:text-sm">
                USDT {option.price.toFixed(2)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(DiamondSelector);
