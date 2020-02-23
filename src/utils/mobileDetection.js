export const mobileDetection = () => {
  const mobileDevices = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPod/i,
    /Windows Phone/i
  ];

  const mobile = mobileDevices.some(device => {
    return navigator.userAgent.match(device);
  });
  const orientation = window.innerWidth <= 850 ? true : false;
  return mobile || orientation ? true : false;
};
