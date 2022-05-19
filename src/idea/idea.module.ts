import { Module } from '@nestjs/common';

import { IdeaController } from './idea.controller';
import { IdeaEntity } from './idea.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaService } from './idea.service';

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity])],
  controllers: [IdeaController],
  providers: [IdeaService],
})
export class IdeaModule {}
