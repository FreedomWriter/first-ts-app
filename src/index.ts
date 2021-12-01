import { User } from "./User";
import { Company } from "./company";
import { CustomMap } from "./map";

const user = new User()
const company = new Company()
const map = new CustomMap("map")
console.log(map)
map.addMarker(user)
map.addMarker(company)
