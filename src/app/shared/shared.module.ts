import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RequestQuoteSectionComponent } from './request-quote-section/request-quote-section.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FooterComponent } from './footer/footer.component';
import { WhyChooseUsSectionComponent } from './why-choose-us-section/why-choose-us-section.component';
import { OurHeroesSectionComponent } from './our-heroes-section/our-heroes-section.component';
import { PopularServiveSectionComponent } from './popular-servive-section/popular-servive-section.component';
import { KnowMoreSectionComponent } from './know-more-section/know-more-section.component';
import { DropdownComponent } from "./dropdown/dropdown.component";
import { DropdownItemComponent } from "./dropdown/dropdown-item/dropdown-item.component";
import { DropdownPlaceholderComponent } from "./dropdown/dropdown-placeholder/dropdown-placeholder.component";
import { DropdownItemsComponent } from "./dropdown/dropdown-items/dropdown-items.component";
import { DropdownIconComponent } from './dropdown/dropdown-icon/dropdown-icon.component';

@NgModule({
    declarations: [
        NavbarComponent,
        RequestQuoteSectionComponent,
        HeroesComponent,
        FooterComponent,
        WhyChooseUsSectionComponent,
        OurHeroesSectionComponent,
        PopularServiveSectionComponent,
        KnowMoreSectionComponent,
    ],
    exports: [
        NavbarComponent,
        RequestQuoteSectionComponent,
        HeroesComponent,
        FooterComponent,
        WhyChooseUsSectionComponent,
        OurHeroesSectionComponent,
        PopularServiveSectionComponent,
        KnowMoreSectionComponent,
    ],
    imports: [CommonModule, DropdownComponent, DropdownItemComponent, DropdownPlaceholderComponent, DropdownItemsComponent , DropdownIconComponent]
})
export class SharedModule {}
