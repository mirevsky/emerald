import {Control} from '../../application/controls/controls_collection.js';
import {Label, Image, Button} from '../../application/controls/ui.js';
import {HexagonStyle} from './hexagon.style.js';
import {Menu} from '../menu/menu.js'


export class Hexagon extends Control
{
    constructor(){
        super("div")
        this.AssignCSSClass(HexagonStyle);
    }

    Render(){
        return super.Render()
    }
}
