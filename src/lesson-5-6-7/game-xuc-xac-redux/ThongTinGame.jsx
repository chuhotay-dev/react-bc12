import React, { Component } from 'react';

export default class ThongTinGame extends Component {
  render() {
    return (
      <div className="mt-5">
        <h1>
          BẠN CHỌN: <span className="text-danger">TÀI</span>
        </h1>
        <h1>
          SỐ BÀN THẮNG: <span className="text-primary">0</span>
        </h1>
        <h1>
          TỔNG SỐ BÀN CHƠI: <span className="text-success">0</span>
        </h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taiXiu: state.gameXucXacReducer.taiXiu,
  soBanThang: state.gameXucXacReducer.soBanThang,
  tongSoBanChoi: state.gameXucXacReducer.tongSoBanChoi,
});
