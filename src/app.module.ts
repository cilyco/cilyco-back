import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResidentsModule } from './resident/residents.module';
import { ContactsModule } from './contact/contact.module';
import { AgentController } from './agent/agent.controller';
import { AgentModule } from './agent/agent.module';
import { VehiculeModule } from './vehicule/vehicule.module';
import { AnimationModule } from './animation/animation.module';
import { ChambreModule } from './chambre/chambre.module';
import { StockModule } from './stock/stock.module';
import { AuthModule } from './auth/auth.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ComptabiliteModule } from './comptabilite/comptabilite.module';
import { StatistiqueModule } from './statistique/statistique.module';

@Module({
  imports: [
    ResidentsModule,
    ContactsModule,
    AgentModule,
    VehiculeModule,
    AnimationModule,
    ChambreModule,
    StockModule,
    AuthModule,
    UtilisateurModule,
    ComptabiliteModule,
    StatistiqueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
