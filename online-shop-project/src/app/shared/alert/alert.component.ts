import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertInterface } from '../models/alert.interface';
import { AlertService } from '../../services/alert.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class AlertComponent implements OnInit, OnDestroy {
  private alertSub: Subscription | null = null;
  private alertService = inject(AlertService);
  alert?: AlertInterface;

  ngOnInit(): void {
    this.alertSub = this.alertService.getAlert().subscribe((alert) => {
      this.alert = alert;
    });
  }

  ngOnDestroy(): void {
    if (this.alertSub) this.alertSub.unsubscribe();
  }
}
