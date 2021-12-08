import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynamicWindowRef, DYNAMIC_WINDOW_REF } from 'ngx-os';

@Component({
    selector: 'app-user-creation-window',
    templateUrl: './creation-window.component.html',
    styleUrls: ['./creation-window.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreationWindowComponent {
    public formGroup: FormGroup;

    constructor(
        @Inject(DYNAMIC_WINDOW_REF) private readonly windowRef: DynamicWindowRef
    ) {}

    public onFormGroupInit(formGroup: FormGroup): void {
        this.formGroup = formGroup;
    }

    public onCreateButtonClick(): void {
        this.windowRef.close(this.formGroup.value);
    }
}
