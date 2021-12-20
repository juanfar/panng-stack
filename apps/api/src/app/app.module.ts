import { Module } from '@nestjs/common'
import { ApiCoreFeatureModule } from '@panng/api/core/feature'

@Module({
  imports: [ApiCoreFeatureModule],
})
export class AppModule {}
