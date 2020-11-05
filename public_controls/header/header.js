import {Control} from '../../application/controls/controls_collection.js';
import {Label, Image, Button} from '../../application/controls/ui.js';
import {HeaderStyle} from './header.style.js';
import {Menu} from '../menu/menu.js'


export class Header extends Control
{
    constructor(){
        super("header")
        this.AssignCSSClass(HeaderStyle);
    }

    Render(){
        let h1 = new Control("h1");
        h1.Attribute('class', 'logo');
        h1.Controls.Add(new Label("emerald+"));
        this.Controls.Add(h1);

        this.Controls.Add(new Menu());

        let sign_up = new Button("Log in");
        this.Controls.Add(sign_up);

        return super.Render();
    }
}
