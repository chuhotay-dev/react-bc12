const initialState = {
  mangXucXac: [
    { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
    { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
    { diem: 1, hinhAnh: './images/gameXucXac/1.png' },
  ],
  taiXiu: true, // true => tài (3 -> 11), false: xỉu (>= 12)
  soBanThang: 0,
  tongSoBanChoi: 0,
};

const gameXucXacReducer = (state = initialState, { type, payload }) => {
  return state;
};

export default gameXucXacReducer;
