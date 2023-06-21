import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const SplashScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [encouragement, setEncouragement] = useState('');

  useEffect(() => {
    // 从网络获取背景图片
    const randomInt = Math.floor(Math.random() * 9999);
    fetch('https://picsum.photos/seed/'+ randomInt +'/1920/1080')
      .then((response) => setBackgroundImage(response.url));

    // 本地的孤立语列表
    const encouragements = [
      "知行只是一个工夫，不能割裂。所谓“工夫”，就是认知与实践的过程。",
"知行关系是相互依存的，不能割裂。认知和实践是相互促进、相互依存的关系。",
"知行合一是一种境界，是一种内心的觉知，对事物的认识和对事物的实际行为是密不可分的。",
    ];

    // 获取随机鼓励语
    const randomEncouragement =
      encouragements[Math.floor(Math.random() * encouragements.length)];
    setEncouragement(randomEncouragement);
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 20px',
      }}
    >
      <h1
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '3rem',
          margin: '0',
        }}
      >
        {encouragement}
      </h1>
      <p
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: '1.5rem',
          margin: '20px 0 0',
        }}
      >
      </p>
        <Link to="/body" >
        <div style={{fontSize: 30}}  >GO START</div>
        </Link>
    </div>
  );
};

export default SplashScreen;