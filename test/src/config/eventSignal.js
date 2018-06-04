import Signal from 'signals';
const eventObject = {
      changeBuilding: new Signal(),
      saveInfo:new Signal(),
      callback:new Signal(),
      //批量操作按钮监听
      updateMuilte: new Signal()
}
export default eventObject