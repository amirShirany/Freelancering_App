import http from "./httpServices"

export function getOtp(phoneNumber) {
  return http.post("/user/get-otp", phoneNumber).then((res) => res.data)
}

export function checkOtp(phoneNumber) {
  return http.post("/user/check-otp", phoneNumber)
}
