import { Injectable } from '@nestjs/common'
import { ApiCoreDataAccessService } from '../../../../core/data-access/src/lib/api-core-data-access.service'

@Injectable()
export class ApiListingDataAccessService {
  constructor(private readonly data: ApiCoreDataAccessService) {}

  listings() {
    return this.data.listing.findMany()
  }
}
