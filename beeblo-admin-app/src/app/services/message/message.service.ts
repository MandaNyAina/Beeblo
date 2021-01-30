import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public messageService: MessageService) { }

  success(summary: string, detail: string) {
    this.messageService.add({severity:'success', summary, detail});
  }

  info(summary: string, detail: string) {
    this.messageService.add({severity:'info', summary, detail});
  }

  error(summary: string, detail: string) {
    this.messageService.add({severity:'error', summary, detail});
  }

}
