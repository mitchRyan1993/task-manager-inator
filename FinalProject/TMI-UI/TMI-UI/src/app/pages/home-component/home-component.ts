import { Component } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { TaskItem } from '../../shared/models/task-model';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {

  quotes = [
    "\"The signature of mediocrity is not an unwillingness to change.The signature of mediocrity is chronic inconsistency.\" —Jim Collins",
    "​​\"The space in which we live should be for the person we are becoming now—not for the person we were in the past.\" —Marie Kondo",
    "\"People often say that motivation doesn’t last.Well, neither does bathing; that’s why we recommend it daily.\" —Zig Ziglar",
    "\"The road to success is always under construction.\" —Lily Tomlin",
    "\"Leave nothing for tomorrow which can be done today.\" —Abraham Lincoln",
    "\"Hard work beats talent when talent doesn’t work hard.\" —Tim Notke",
    "\"You’ll never change your life until you change something you do daily.The secret of your success is found in your daily routine.\" —John C.Maxwell",
    "\"If you don’t see a clear path for what you want, sometimes you have to make it yourself.\" —Mindy Kaling",
    "\"Everything is within your power and your power is within you.\" —Janice Trachtman",
    "\"Change is inevitable.Growth is optional.\" —John C.Maxwell",
    "\"If you always do what you’ve always done, you always get what you’ve always gotten.\" —Jessie Potter",
    "\"If you’re too comfortable, it’s time to move on.Terrified of what’s next ? You’re on the right track.\" —Susan Fales - Hill",
    "\"Success isn’t overnight.It’s when every day you get a little better than before.It adds up.\" —Dwayne Johnson",
    "\"Perfection is not attainable, but if we chase perfection we can catch excellence.\" —Vince Lombardi"
  ]

  quote = "";

  timeOfDay = "Morning";
  username = "User";
  tasksCompleted = 0;
  totalTasks = 0;
  upcomingTasks: TaskItem[] = [];

  constructor(private taskService: TaskService) {
    this.getTimeOfDay();
    this.pickRandomQuote();
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(tasks => {
      console.log("Fetched tasks for home component:", tasks);
      this.totalTasks = tasks.length;
      this.tasksCompleted = tasks.filter(t => t.isComplete).length;

      const now = new Date();
      const nextWeek = new Date();
      nextWeek.setDate(now.getDate() + 7);

      this.upcomingTasks = tasks.filter(t => {
        const due = new Date(t.dueDate);
        return due >= now && due <= nextWeek;
      });
    });
  }

  private pickRandomQuote(): void {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.quote = this.quotes[randomIndex];
  }

  private getTimeOfDay(): void {
    // `new Date().getHours()` returns the local hour in 24-hour format (0-23)
    const hour = new Date().getHours();

    if (hour >= 18) {
      this.timeOfDay = "Evening";
    } else if (hour >= 12) {
      this.timeOfDay = "Afteroon";
    } else {
      this.timeOfDay = "Morning";
    }
  }
}

