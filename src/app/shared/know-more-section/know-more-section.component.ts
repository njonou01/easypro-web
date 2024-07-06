import { Component } from '@angular/core';

@Component({
  selector: 'app-know-more-section',
  template: `
    <section class="bg-blue-800 text-white py-20 px-6">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-4">easyPro</h2>
        <p class="text-lg mb-8">Des artisans qualifiés et de confiance pour tous vos projets de rénovation et de construction.</p>
        <a href="#" class="inline-block bg-white text-blue-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100">En savoir plus</a>
      </div>
    </section>
  `,
  styles: ``,
})
export class KnowMoreSectionComponent {}
