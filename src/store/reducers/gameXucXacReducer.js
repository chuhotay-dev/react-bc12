import * as gameXucXacConstants from '../constants/gameXucXacContants';

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
  switch (type) {
    case gameXucXacConstants.CHON_TAI_XIU:
      return { ...state, taiXiu: payload };

    case gameXucXacConstants.DAT_CUOC:
      // Tăng tổng số bàn chơi
      state.tongSoBanChoi += 1;

      // Random xúc xắc
      const mangXucXacRandom = [];

      for (let i = 0; i < 3; i++) {
        const randomNum = Math.floor(Math.random() * 6) + 1;

        const xucXacRandom = {
          diem: randomNum,
          hinhAnh: `./images/gameXucXac/${randomNum}.png`,
        };

        mangXucXacRandom.push(xucXacRandom);
      }

      // Tính tổng điểm xuất sắc
      const tongDiem = mangXucXacRandom.reduce((tongDiem, xucXac) => {
        return tongDiem += xucXac.diem;
      }, 0);

      // Kiểm tra số bàn thắng
      if ((state.taiXiu && tongDiem <= 11) || (!state.taiXiu && tongDiem >= 12)) {
        state.soBanThang += 1;
      }
      
      return { ...state, mangXucXac: mangXucXacRandom };
    default:
      return state;
  }
};

export default gameXucXacReducer;
