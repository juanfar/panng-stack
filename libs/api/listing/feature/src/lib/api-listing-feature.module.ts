import { Module } from '@nestjs/common'
import { ApiListingDataAccessModule } from '@panng/api/listing/data-access'
import { ApiListingFeatureResolver } from './api-listing-feature.resolver'

@Module({
  imports: [ApiListingDataAccessModule],
  providers: [ApiListingFeatureResolver],
})
export class ApiListingFeatureModule {}
