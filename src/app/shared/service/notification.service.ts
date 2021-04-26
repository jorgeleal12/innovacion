import { Injectable } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notification: NzNotificationService) { }

  NotificationSuccess() {
    this.notification.create(
      'success', 'Registro Exitoso', 'Se guardo correctamente'
    );
  }

  NotificationDelete() {
    this.notification.create(
      'success', 'Registro Exitoso', 'Se elimino correctamente'
    );
  }

  NotificationUpdate() {
    this.notification.create(
      'success', 'Registro Exitoso', 'Se actualizo correctamente'
    );
  }

  NotificationError() {
    this.notification.create(
      'error', 'Error', 'Reporte al administrador del sistema'
    );
  }

  NotificationPermits() {
    this.notification.create(
      'info', 'Alerta', 'Datos incorrectos'
    );
  }
}
