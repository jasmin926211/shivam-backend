// TODO: static otp used until sms provider not implement
const generateOtp = (length = 6) =>
  Math.floor(10 ** (length - 1) + Math.random() * (10 ** length - 10 ** (length - 1) - 1));

export default generateOtp;
