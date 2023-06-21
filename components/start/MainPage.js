import React, { useState, useEffect } from 'react';

const SplashScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState('');
  const [encouragement, setEncouragement] = useState('');

  useEffect(() => {
    // 从网络获取背景图片
    fetch('https://source.unsplash.com/random')
      .then((response) => setBackgroundImage(response.url));

    // 本地的孤立语列表
    const encouragements = [
      '你是最棒的！',
      '今天也要加油哦！',
      '成功就在前方！',
      '永不放弃！',
      '你可以做到！',
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
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        {encouragement}
      </h1>
    </div>
  );
};

export default SplashScreen;