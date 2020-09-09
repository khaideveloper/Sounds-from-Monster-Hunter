import { SettingsService } from './settings.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(
    public settings_service: SettingsService
  ) {}

}
