import {Control} from '../../application/controls/controls_collection.js';
import {Block} from '../../application/controls/block.js';
import {LoginPageStyle} from './login_page.style.js';
import {Button, Form, Label, Input, Password} from '../../application/controls/ui.js';

export class LoginPageBlock extends Block
{
    indexAction(){
        this.AssignCSSClass(LoginPageStyle);
        var form = new Form("login");
        form.Controls.Add(new Label("Username:"));
        form.Controls.Add(new Input("Username"));
        form.Controls.Add(new Control("br"));
        form.Controls.Add(new Label("Password:"));
        form.Controls.Add(new Password("Password"));
        form.Controls.Add(new Control("br"));
        let button = new Button("Submit");
        button.Attribute('onclick', "alert(123)");
        form.Controls.Add(button);
        this.Controls.Add(form);
    }

    listAction(){

    }

    viewAction(){
        this.Controls.Add(new Label("It works."));
    }
}
