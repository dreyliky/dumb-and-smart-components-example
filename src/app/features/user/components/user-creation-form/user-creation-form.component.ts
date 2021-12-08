import { Component, ChangeDetectionStrategy, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'user-creation-form',
    templateUrl: './user-creation-form.component.html',
    styleUrls: ['./user-creation-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCreationFormComponent implements OnInit {
    @Output()
    public formGroupInit = new EventEmitter<FormGroup>();
    
    public readonly formGroup = new FormGroup({
        name: new FormControl(''),
        age: new FormControl(18)
    });

    public ngOnInit(): void {
        this.formGroupInit.emit(this.formGroup);
    }
}
