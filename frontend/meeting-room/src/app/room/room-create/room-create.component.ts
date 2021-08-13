import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RoomService } from 'src/app/core/room.service';
import { FieldValidatorService } from 'src/app/shared/components/fields/fields-validator.service';


@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {

  schedule: FormGroup;

  constructor(public validator: FieldValidatorService,
              public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private roomService: RoomService) {

  }

  get controls() {
    return this.schedule.controls;
  }

  ngOnInit(): void {
    this.createForm();
  }

  // START Form Actions
  submit(): void {
    alert("Submit works!")
  }

  cancel(): void {
    alert("Cancel works!")
  }
  // END Form Actions


  public createForm(): void {

    this.schedule = this.formBuilder.group({
      name: ["", [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)
        ]
      ],

      date: [new Date(), [Validators.required]],
      startHour: ["00:00:00", [Validators.required]],
      endHour: ["00:00:00", [Validators.required]]
    })
  }

}
