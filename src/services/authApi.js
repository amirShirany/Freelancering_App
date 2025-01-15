import http from "./httpServices"

export function getOtp(phoneNumber) {
  return http.post("/user/get-otp", phoneNumber).then((data) => data.data)
}

export function checkOtp(phoneNumber) {
  return http.post("/user/check-otp", phoneNumber).then((data) => data.data)
}
