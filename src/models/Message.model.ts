import { getModelForClass, prop } from '@typegoose/typegoose'
import { SchemaTypes } from 'mongoose'

export class MessageSchema {
  @prop({ type: SchemaTypes.String })
  public content: string

  @prop({ type: SchemaTypes.Number })
  public userId: number
}

export const Message = getModelForClass(MessageSchema)
