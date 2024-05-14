import addToolTips from "./addToolTips.js";
import { addCarousel } from "./carousel.js";
import { addCopyNumberFunction } from "./copyButton.js";
import { formPreventDefault } from "./formSubmit.js";
import { addScroll } from "./pageNavigation.js";
import { addResponsiveMenuFunctions} from "./responsiveMenu.js";
import { limitTextAreaLenght } from "./textAreaLenght.js";
try{
  addCarousel()
  addScroll()
  formPreventDefault()
  limitTextAreaLenght()
  addResponsiveMenuFunctions()
  addCopyNumberFunction()
  addToolTips()
} catch (e){
  alert(e.message)
}