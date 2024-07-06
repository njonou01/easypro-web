import { Component } from '@angular/core';

@Component({
  selector: 'app-our-heroes-section',
  template: `
    <section class="bg-blue-800 text-white py-20 px-4">
      <div class="container mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Nos Héros</h2>
        <p class="text-lg mb-8">Découvrez les artisans qui se dépassent chaque jour pour vous offrir le meilleur service.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Héro 1" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Jean Dupont</h3>
              <p class="text-gray-600 mt-2">Menuisier extérieur</p>
            </div>
          </div>
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Héro 2" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Marie Dubois</h3>
              <p class="text-gray-600 mt-2">Spécialiste en isolation</p>
            </div>
          </div>
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Héro 3" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Paul Martin</h3>
              <p class="text-gray-600 mt-2">Électricien</p>
            </div>
          </div>
          <div class="bg-white shadow rounded overflow-hidden">
            <img src="https://via.placeholder.com/400x200.png" alt="Héro 4" class="w-full" />
            <div class="p-4">
              <h3 class="text-xl font-semibold text-gray-800">Sophie Lambert</h3>
              <p class="text-gray-600 mt-2">Plombier - Installateur sanitaire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class OurHeroesSectionComponent {}
