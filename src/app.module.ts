import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CommonModule } from './common/common.module'
import { SeedModule } from './seed/seed.module'
import { JoiValidationSchema } from './config/joi.validation'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { EnvConfiguration } from './config/app.config'
import { join } from 'path'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(process.env.MONGO_DB as string, {
      dbName: 'supermarket-diff',
    }),
    CommonModule,
    SeedModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
