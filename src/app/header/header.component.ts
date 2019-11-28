import { Component, Output, EventEmitter } from '@angular/core';
import { templateJitUrl } from '@angular/compiler';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    @Output() featureSelect = new EventEmitter<string>();

    onSelect(featureSelected : string){
        this.featureSelect.emit(featureSelected);
    }
}