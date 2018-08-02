export const changeMsg = ({commit}) => {
    commit({
      type: 'mutationsMsg',     //for mutation.js中的mutationsMsg方法
      msg: '我是修改的~~~'
    });
  };
