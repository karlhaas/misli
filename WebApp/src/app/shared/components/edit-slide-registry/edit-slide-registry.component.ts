import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Slide } from '@core/model/slide';
import { SlideRegistryService } from '@core/registry/slide-registry.service';
import { SlideHostDirective } from '@shared/directives/slide-host.directive';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';

@Component({
  selector: 'kh-edit-slide-registry',
  templateUrl: './edit-slide-registry.component.html',
  styleUrls: ['./edit-slide-registry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSlideRegistryComponent implements OnChanges {

  @Input() slide: Slide;
  @Output() slideDataChanged = new EventEmitter<any>();
  @ViewChild(SlideHostDirective) khSlideHost: SlideHostDirective;
  private componentInstance: SlideTypeBaseComponent;

  constructor(private slideRegistryService: SlideRegistryService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    const slideChange = simpleChanges['slide'];
    if (!slideChange) {
      return;
    }
    if (slideChange.firstChange || slideChange.currentValue.type !== slideChange.previousValue.type) {
      const viewContainerRef = this.khSlideHost.viewContainerRef;
      const registryEntry = this.slideRegistryService.getByType(this.slide.type);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory<SlideTypeBaseComponent>(registryEntry.editComponent);
      viewContainerRef.clear();
      const componentRef = viewContainerRef.createComponent(componentFactory);

      if (componentRef.instance.slideDataChanged instanceof EventEmitter) {
        componentRef.instance.slideDataChanged
          .subscribe((property: any) => {
            this.slideDataChanged.emit(property);
          });
      }
      this.componentInstance = componentRef.instance;
    }

    this.componentInstance.slide = this.slide;
    if (this.componentInstance.ngOnChanges) {
      this.componentInstance.ngOnChanges({slide: new SimpleChange(undefined, this.slide, true)});
    }
  }
}
