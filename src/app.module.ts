import { Module } from '@nestjs/common'
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
  
  CommonModule,
  
  SeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
