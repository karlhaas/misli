import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Slide } from '@core/model/slide';
import { SlideRegistryService } from '@core/registry/slide-registry.service';
import { SlideHostDirective } from '@shared/directives/slide-host.directive';
import { SlideTypeBaseComponent } from '@core/registry/slide-type-base.component';

@Component({
  selector: 'kh-show-slide-registry',
  templateUrl: './show-slide-registry.component.html',
  styleUrls: ['./show-slide-registry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowSlideRegistryComponent implements OnChanges {

  @Input() slide: Slide;
  @Input() border = false;
  @Input() fontSize = '64px';
  @ViewChild(SlideHostDirective) khSlideHost: SlideHostDirective;

  constructor(private slideRegistryService: SlideRegistryService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    const registryEntry = this.slideRegistryService.getByType(this.slide.type);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<SlideTypeBaseComponent>(registryEntry.showComponent);
    const viewContainerRef = this.khSlideHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.slide = this.slide;

    if (componentRef.instance.ngOnChanges) {
      componentRef.instance.ngOnChanges({slide: new SimpleChange(undefined, this.slide, true)});
    }
  }
}
