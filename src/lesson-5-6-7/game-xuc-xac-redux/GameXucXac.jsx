import React, { Component } from 'react';
import ThongTinGame from './ThongTinGame';
import XucXac from './XucXac';
import './GameXucXac.css';

export default class GameXucXac extends Component {
  render() {
    return (
      <div className="game-container text-center">
        <h1 className="py-5">GAME ĐỔ XÚC XẮC</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
                <button className="btnTaiXiu">TÀI</button>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center">
                <XucXac />
            </div>
            <div className="col-5">
                <button className="btnTaiXiu">XỈU</button>
            </div>
          </div>
          <ThongTinGame />
          <button className="mt-4 btn btn-success">ĐẶT CƯỢC</button>
        </div>
      </div>
    );
  }
}
