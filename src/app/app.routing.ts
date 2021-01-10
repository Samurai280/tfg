// Importar modulo de rutas.

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



// Importamos las componentes.

import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ErrorComponent } from './components/error/error.component';
import { PaginaTeoriaComponent } from './components/pagina-teoria/pagina-teoria.component';
import { PaginaPracticaComponent } from './components/pagina-practica/pagina-practica.component';
import { DescubrimientoComponent } from './components/descubrimiento/descubrimiento.component';
import { IntroComponent } from './components/intro/intro.component';
import { RayosComponent } from './components/rayos/rayos.component';
import { DetectoresComponent } from './components/detectores/detectores.component';
import { GlosarioComponent } from './components/glosario/glosario.component';
import { ConceptoComponent } from './components/concepto/concepto.component';
import { ExperimentoComponent } from './components/experimento/experimento.component';
import { TestComponent } from './components/test/test.component';
import { QuestionComponent } from './components/question/question.component';
import { Question1Component } from './components/question1/question1.component';
import { Question2Component } from './components/question2/question2.component';
import { Question3Component } from './components/question3/question3.component';
import { Question4Component } from './components/question4/question4.component';
import { Question5Component } from './components/question5/question5.component';
import { ParticulasComponent } from './components/particulas/particulas.component';

// Definimos las rutas. 

const appRoutes: Routes =  [
    { path: '', component: PaginaPrincipalComponent},
    { path: 'pagina-principal', component: PaginaPrincipalComponent},
    { path: 'pagina-teoria', component: PaginaTeoriaComponent},
    { path: 'pagina-practica', component: PaginaPracticaComponent},
    { path: 'introduccion', component: IntroComponent},
    { path: 'descubrimiento', component: DescubrimientoComponent},
    { path: 'rayos', component: RayosComponent},
    { path: 'detectores', component: DetectoresComponent},
    { path: 'glosario', component: GlosarioComponent},
    { path: 'concepto', component: ConceptoComponent},
    { path: 'experimento', component: ExperimentoComponent},
    { path: 'test', component: TestComponent},
    { path: 'question', component: QuestionComponent},
    { path: 'question1', component: Question1Component},
    { path: 'question2', component: Question2Component},
    { path: 'question3', component: Question3Component},
    { path: 'question4', component: Question4Component},
    { path: 'question5', component: Question5Component},
    { path: 'particulas', component: ParticulasComponent},

    { path: '**', component: ErrorComponent}
];

// Exportamos la configuración de las rutas.

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);