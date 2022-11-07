import { useState } from "react";

function Random() {
  const gifts = ["Iphone", "Mac", "Bike"];
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );
}

export default Random;
