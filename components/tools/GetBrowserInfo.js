function getBrowserInfo() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log('isMobile', isMobile);
    return isMobile;
  }
export default getBrowserInfo;