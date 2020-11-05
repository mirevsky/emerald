import {Config} from './config/config.js';
import {Control} from './controls/controls_collection.js';
import {BMVC} from './controls/bmvc.js';
import {XMLHttpRequestHandler, StringHandler, ParamsHandler} from './controls/handlers.js';
import {
    LIBRARIES
} from './builder/builder.constants.js'

export class Application
{
    constructor(){
        Application._events = [];
        Application._db = null;
        Application._permissions = null;
        Application.request = null;
        Application.config = null;
        Application.locale = null;
        ParamsHandler.CurrentStateCollection = {};
        ParamsHandler.PrevStateCollection = {};
        var style = new Control("style");
        style.id = "emerald"
        document.head.appendChild(style.Render());

        /*for(let i in LIBRARIES){
            document.head.appendChild(LIBRARIES[i].Render());
        }*/
    }

    static addLoadEvent(func) {
      var oldonload = window.onload;
      if (typeof window.onload != 'function') {
        window.onload = func;
      } else {
        window.onload = function() {
          if (oldonload) {
            oldonload();
          }
          func();
        }
      }
    }

    Run(){
        Application.config = Config;
        let bmvc = new BMVC();
        document.body.appendChild(bmvc.Run());

        for (let events in Application._events){
            Application.addLoadEvent(Application._events[events]);
        }
        ParamsHandler.startServer();
    }
}