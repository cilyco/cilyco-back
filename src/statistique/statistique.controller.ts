import { Controller, Get } from '@nestjs/common';
import { ResidentsService } from '../resident/residents.service';
import StatistiqueModel from '../../model/statistiqueModel';

@Controller('statistique')
export class StatistiqueController {
  constructor(private readonly residentsService: ResidentsService) {}

  @Get()
  async general(): Promise<StatistiqueModel> {
    return {
      resident_nb: await this.residentsService.count(),
      agent_nb: 0,
    };
  }
}
