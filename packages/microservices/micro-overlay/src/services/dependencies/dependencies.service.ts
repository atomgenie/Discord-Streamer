import { Global, Inject, Injectable } from "@nestjs/common"
import { Dependencies } from "types/dependencies"

@Injectable()
export class DependenciesServices {
    public constructor(@Inject("DEPENDENCIES") public dependencies: Dependencies) {}
}
