import {
  Directive,
  HostListener,
  EventEmitter,
  Output,
  Input
} from '@angular/core';
import { interval, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

/**
 * The LongPressDirective is a directive that emits an event when the user
 * holds down on an element for a certain amount of time.
 *
 * `@param longPressTime` (Optional). The time in milliseconds that the user must hold down on the element before triggering the event.
 * Default is 100ms.
 *
 * `@param appLongPressDo` (Required). The event that will be emitted when the
 * user holds down on the element.
 *
 * ```javascript
 * <div appLongPress [holdTime]="500" (appLongPressDo)="holdHandler(anything)"></div>
 * ```
 */
@Directive({
  selector: '[appLongPress]',
  standalone: true
})
export class LongPressDirective {
  @Input() longPressTimeout = 500;

  /**
   * The event that will be emitted when the user holds down on the element.
   * @type {EventEmitter<number>}
   */
  @Output() appLongPressDo: EventEmitter<number> = new EventEmitter();

  private readonly handle = new Subject();

  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  @HostListener('touchmove', ['$event'])
  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave', ['$event'])
  @HostListener('mousemove', ['$event'])
  onExit = () => this.handle.next(false);

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  startHold = ($event: any) =>
    interval(this.longPressTimeout)
      .pipe(take(1), takeUntil(this.handle))
      .subscribe(() => this.appLongPressDo.emit($event));
}
