import {Control} from '../../application/controls/controls_collection.js';
import {Section} from '../../application/controls/section.js';
import {Label, Image, Hyperlink} from '../../application/controls/ui.js';

import {MenuStyle} from './menu.style.js';

export class Menu extends Control
{
    constructor(){
        super("ul")
        this.AssignCSSClass(MenuStyle);
    }

    RenderMenuThree(SectionCode=null){
        let sections = Section.getSectionByParent(SectionCode);
        let iUL = new Control('ul');
        for(let i in sections){
            var iLI = new Control("li");
            iLI.Controls.Add(new Hyperlink(new Label(sections[i].Code), "?SectionCode="+sections[i].Code));
            iLI.Controls.Add(this.RenderMenuThree(sections[i].Code));
            iUL.Controls.Add(iLI);
        }
        return iUL;
    }

    Render(){
        let downArrow = new Image("emerald+","application/theme/default/down-arrow.svg");
        this.setParams({menu:"test"});
        let sections = Section.getSectionByParent('index');
        for(let i in sections){
            var iLI = new Control("li");
            iLI.Controls.Add(new Hyperlink(new Label(sections[i].Code), "?SectionCode="+sections[i].Code));
            iLI.Controls.Add(downArrow);
            iLI.Controls.Add(this.RenderMenuThree(sections[i].Code));
            this.Controls.Add(iLI);
        }

        return super.Render();
    }
}
