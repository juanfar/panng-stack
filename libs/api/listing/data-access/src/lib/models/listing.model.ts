import { Field, ID, ObjectType } from '@nestjs/graphql'
import { ListingType } from './listing-type.enum'

@ObjectType()
export class Listing {
  @Field(() => ID, { nullable: true })
  id?: String

  @Field({ nullable: true })
  createdAt?: Date

  @Field({ nullable: true })
  updatedAt?: Date

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field(() => ListingType, { nullable: true })
  type?: ListingType
}
