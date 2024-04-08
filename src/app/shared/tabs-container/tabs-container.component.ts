import {
  Component,
  ContentChildren,
  AfterContentInit,
  QueryList,
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.scss',
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> =
    new QueryList();

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter((tab) => tab.active);
    if (!activeTabs || !activeTabs.length) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent): boolean {
    this.tabs.forEach((tab) => (tab.active = false));
    tab.active = true;
    return false;
  }
}
