import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { ApiCoreFeatureResolver } from './api-core-feature.resolver'
import { ApiListingFeatureModule } from '../../../../listing/feature/src/lib/api-listing-feature.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'api-schema.graphql'),
    }),
    ApiListingFeatureModule,
  ],
  providers: [ApiCoreFeatureResolver],
  exports: [],
})
export class ApiCoreFeatureModule {}
