import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="bg-gray-800 text-white py-12 mt-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-semibold mb-4">À propos d'Onsebat</h3>

            <p class="text-gray-400">
              Onsebat est la plateforme leader de mise en relation entre artisans qualifiés et clients au Cameroun.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Liens rapides</h3>
            <ul class="space-y-2">
              <li>
                <a href="#" class="text-gray-400 hover:text-white"> Accueil </a>
              </li>
              <li><a href="#" class="text-gray-400 hover:text-white"> Recherche d'artisans </a></li>
              <li><a href="#" class="text-gray-400 hover:text-white"> Devenir artisan </a></li>
              <li><a href="#" class="text-gray-400 hover:text-white"> Blog </a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Contact</h3>
            <ul class="space-y-2 text-gray-400">
              <li><i class="fas fa-map-marker-alt mr-2"></i> Yaoundé, Cameroun</li>
              <li><i class="fas fa-phone mr-2"></i> +237 6 57 81 59 59</li>
              <li><i class="fas fa-envelope mr-2"></i> contact&#64;easypro.com</li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-4">Suivez-nous</h3>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
              <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Onsebat. Conditions générales - Données personnelles - Mentions légales - Charte de qualité</p>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
