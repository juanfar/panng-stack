import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@panng/api/core/data-access'
import { ApiListingDataAccessService } from './api-listing-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiListingDataAccessService],
  exports: [ApiListingDataAccessService],
})
export class ApiListingDataAccessModule {}
