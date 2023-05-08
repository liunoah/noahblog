const nicknames = ['小蓝', '雪儿', '珂珂', '小麦', '乖乖', '芝芝', '柔柔', '芊芊', '小糖', '小蜜', '惜儿', '茉莉', '琪琪', '君君', '小雨', '小燕', '小丹', '爽儿', '妞妞', '婷婷'];

export default function RandomNickname() {
  const randomIndex = Math.floor(Math.random() * nicknames.length);
  return nicknames[randomIndex];
}
