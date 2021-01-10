import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { ErrorComponent } from './components/error/error.component';
import { PaginaTeoriaComponent } from './components/pagina-teoria/pagina-teoria.component';
import { PaginaPracticaComponent } from './components/pagina-practica/pagina-practica.component';
import { IntroComponent } from './components/intro/intro.component';
import { DescubrimientoComponent } from './components/descubrimiento/descubrimiento.component';
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
import { ParticulasComponent } from './components/particulas/particulas.component';
import { Question5Component } from './components/question5/question5.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    ErrorComponent,
    PaginaTeoriaComponent,
    PaginaPracticaComponent,
    IntroComponent,
    DescubrimientoComponent,
    RayosComponent,
    DetectoresComponent,
    GlosarioComponent,
    ConceptoComponent,
    ExperimentoComponent,
    TestComponent,
    QuestionComponent,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    ParticulasComponent,
    Question5Component
    
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
