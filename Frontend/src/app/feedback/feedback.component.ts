import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app/app.service';

@Component({
  selector: 'app-feedback',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  feedbacks: any[] = [];

  constructor(private appService: AppService) {}

  deleteFeedback(id: number) {
    this.appService.deleteFeedback(id).subscribe(() => {
      this.feedbacks = this.feedbacks.filter(feedback => feedback.id !== id);
    });
  }
}
