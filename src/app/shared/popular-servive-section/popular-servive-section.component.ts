import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-servive-section',

  template: `
    <div class="container mx-auto py-16 px-4">
      <section class="mb-16">
        <h2 class="text-3xl font-semibold text-gray-800 mb-8 text-center">Services Populaires</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Menuisier extérieur" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Menuisier extérieur</h3>
              <p class="text-gray-600 mt-2">Description du service ou métier.</p>
            </div>
          </div>
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Spécialiste en isolation" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Spécialiste en isolation</h3>
              <p class="text-gray-600 mt-2">Description du service ou métier.</p>
            </div>
          </div>
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Électricien" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Électricien</h3>
              <p class="text-gray-600 mt-2">Description du service ou métier.</p>
            </div>
          </div>
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Plombier - Installateur sanitaire" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Plombier - Installateur sanitaire</h3>
              <p class="text-gray-600 mt-2">Description du service ou métier.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: ``,
})
export class PopularServiveSectionComponent {}
