import { Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-angular-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-demo.component.html',
  styleUrls: ['./angular-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularDemoComponent implements OnDestroy {
  // Shared counter
  counter = signal<number>(0);

  // Observable demo
  private obsSubject: Subject<number> = new Subject<number>();
  obsValue = signal<number | null>(null);
  obsSubscribed = signal<boolean>(false);
  obsSubscription?: Subscription;

  // BehaviorSubject demo
  private bsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  bsValue = signal<number>(0);
  bsSubscribed = signal<boolean>(false);
  bsSubscription?: Subscription;

  // Increment shared counter and emit to both
  incrementCounter(): void {
    const newValue = this.counter() + 1;
    this.counter.set(newValue);
    this.obsSubject.next(newValue);
    this.bsSubject.next(newValue);
  }

  // Observable subscribe/unsubscribe
  toggleObservableSub(): void {
    if (this.obsSubscribed()) {
      this.obsSubscription?.unsubscribe();
      this.obsSubscription = undefined;
      this.obsSubscribed.set(false);
      this.obsValue.set(null); // Reset to null to show "no value" state
    } else {
      this.obsSubscription = this.obsSubject.subscribe(val => {
        this.obsValue.set(val);
      });
      this.obsSubscribed.set(true);
    }
  }

  // BehaviorSubject subscribe/unsubscribe
  toggleBehaviorSubjectSub(): void {
    if (this.bsSubscribed()) {
      this.bsSubscription?.unsubscribe();
      this.bsSubscription = undefined;
      this.bsSubscribed.set(false);
      this.bsValue.set(0); // Reset to 0 to show initial state
    } else {
      this.bsSubscription = this.bsSubject.subscribe(val => {
        this.bsValue.set(val);
      });
      this.bsSubscribed.set(true);
    }
  }

  ngOnDestroy(): void {
    this.obsSubscription?.unsubscribe();
    this.obsSubscription = undefined;
    this.bsSubscription?.unsubscribe();
    this.bsSubscription = undefined;
  }
}
