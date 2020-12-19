import { DynamicModule, Module } from "@nestjs/common"
import { Dependencies } from "types/dependencies"

import { ServicesModule } from "./services/services.module"
import { DependenciesServices } from "./services/dependencies/dependencies.service"

@Module({})
export class IndexModule {
    public static withDependencies(dependencies: Dependencies): DynamicModule {
        return {
            module: IndexModule,
            global: true,
            imports: [ServicesModule],
            providers: [
                {
                    provide: "DEPENDENCIES",
                    useValue: dependencies,
                },
                DependenciesServices,
            ],
            exports: [DependenciesServices],
        }
    }
}
