import { Injectable } from "@nestjs/common";
import { Bass } from "src/interface";
import { basses } from "src/mocks/basses";

@Injectable()
export class BassService {

  getBass(): Bass {


    return basses[0];
  }

  getBasses(): Bass[] {


    return basses;
  }
}


