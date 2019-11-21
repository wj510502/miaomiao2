import Vue from 'vue'
import MessageBox from './MessageBox'

export var messageBox = (function(){
  var defaults = {
    //默认值
    title: '',
    content: '',
    cancel: '',
    ok: '',
    handelCancel : null,
    handeleOk:null
  };
  var MyComponent = Vue.extend(MessageBox)
  return function(opts){
    //配置参数
    for (var attr in opts){
      defaults[attr] = opts[attr]
    }
    
    var vm = new MyComponent({
      el: document.createElement('div'),
      data:{
        title: defaults.title,
        content: defaults.content,
        cancel: defaults.cancel,
        ok: defaults.ok
      },
      methods: {
        handelCancel(){
          defaults.handelCancel && defaults.handelCancel.call(this);
          document.body.removeChild(vm.$el)
        },
        handeleOk(){
          defaults.handeleOk && defaults.handeleOk.call(this);
          document.body.removeChild(vm.$el)
        }
      }
    });
    document.body.appendChild(vm.$el)
  }
})();