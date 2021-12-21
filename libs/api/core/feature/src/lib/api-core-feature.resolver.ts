import { Query, Resolver } from '@nestjs/graphql'

@Resolver()
export class ApiCoreFeatureResolver {
  @Query(() => String, { nullable: true })
  hello() {
    return 'Hello World!'
  }
}
