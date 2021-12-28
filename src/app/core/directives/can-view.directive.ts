import {
  Directive,
  Input,
  NgModule,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[canView]',
})
export class HideForDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private auth: AuthService
  ) {}

  @Input() set canView(role: 'admin' | 'user') {
    switch (role) {
      case 'admin':
        if (this.isAdmin()) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          this.hasView = true;
        } else {
          this.hide();
        }
    }
    // if role is agent, than hide for agent
    // console.log(role);
    // if (role === 'Agent' && this.isAgent()) {
    //   this.viewContainer.clear();
    //   this.hasView = false;
    // console.log('hiding for agent');
  }

  hide(): void {
    this.viewContainer.clear();
    this.hasView = false;
  }

  isAdmin(): boolean {
    return this.auth.state.role === 'admin';
  }

  isUser(): boolean {
    return this.auth.state.role === 'user';
  }
}

@NgModule({
  declarations: [HideForDirective],
  exports: [HideForDirective],
})
export class HideForModule {}
