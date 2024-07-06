import { Component } from '@angular/core';

@Component({
  selector: 'app-why-choose-us-section',
  template: `
    <section class="pb-20 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">Pourquoi nous choisir ?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-6 bg-white  shadow-lg">
            <img src="https://via.placeholder.com/100x100.png" alt="Qualité" class="mx-auto mb-4" />
            <h3 class="text-2xl font-bold mb-2">Qualité</h3>
            <p>Nous sélectionnons rigoureusement nos artisans pour garantir un service de qualité.</p>
          </div>
          <div class="p-6 bg-white  shadow-lg">
            <img src="https://via.placeholder.com/100x100.png" alt="Confiance" class="mx-auto mb-4" />
            <h3 class="text-2xl font-bold mb-2">Confiance</h3>
            <p>Nos artisans sont certifiés et de confiance pour tous vos travaux.</p>
          </div>
          <div class="p-6 bg-white  shadow-lg">
            <img src="https://via.placeholder.com/100x100.png" alt="Support" class="mx-auto mb-4" />
            <h3 class="text-2xl font-bold mb-2">Support</h3>
            <p>Nous vous accompagnons tout au long de votre projet pour un résultat parfait.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class WhyChooseUsSectionComponent {}
