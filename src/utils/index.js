import {readdirSync } from 'fs-extra'
import {join} from 'path'
export default function getComponents(path = "../components"){
    return readdirSync(join(__dirname, path)).filter((pkg) => {
      return pkg.charAt(0) !== ".";
    });
  }
 