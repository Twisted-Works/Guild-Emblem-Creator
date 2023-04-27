import { Writable } from "./observables"

class PrimaryStore extends Writable {
  side = "horde"
  backgroundColor = "#036d8b"
  icon = "06"
  iconColor = "#b1b7b0"
  border = "01"
  borderColor = "#999f95"
  background = "bg_00"
}

export default new PrimaryStore()