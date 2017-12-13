import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SlideRegistryEntry } from '@core/registry/slide-registry-entry';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class SlideRegistryService {

  private entries = new BehaviorSubject<Array<SlideRegistryEntry>>([]);

  register(entry: SlideRegistryEntry) {
    this.entries.next([...this.entries.getValue(), entry]);
  }

  get all(): Array<SlideRegistryEntry> {
    return [...this.entries.getValue()];
  }

  get all$(): Observable<Array<SlideRegistryEntry>> {
    return this.entries
      .asObservable()
      .map(entries => [...entries]);
  }

  getByType(type: string): SlideRegistryEntry {
    return this.entries.getValue().find(entry => entry.type === type);
  }

  getByType$(type: string): Observable<SlideRegistryEntry> {
    return this.entries
      .asObservable()
      .map(entries => entries.find(entry => entry.type === type));
  }
}
